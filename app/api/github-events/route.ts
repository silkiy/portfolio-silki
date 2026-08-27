import { NextResponse } from "next/server";

export interface GitHubEventItem {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  action: string;
  detail: string;
  createdAt: string;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const username = "silkiy";
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "silkiy-portfolio",
  };

  try {
    const combinedEvents: GitHubEventItem[] = [];
    const seenIds = new Set<string>();

    // 1. Fetch recently active repositories sorted by pushed_at for instant, real-time commits
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=5`,
      { headers, cache: "no-store" }
    );

    if (reposRes.ok) {
      const repos = await reposRes.json();
      if (Array.isArray(repos)) {
        // Add active repositories to stream so REPOS filter is populated with active projects
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        repos.forEach((repo: any) => {
          const repoId = `repo-${repo.id}`;
          if (!seenIds.has(repoId)) {
            seenIds.add(repoId);
            combinedEvents.push({
              id: repoId,
              type: "RepoEvent",
              repo: `${username}/${repo.name}`,
              repoUrl: repo.html_url || `https://github.com/${username}/${repo.name}`,
              action: `Active Repository [${repo.language || "Source"}]`,
              detail: repo.description || `Branch [${repo.default_branch || "main"}] • ${repo.stargazers_count || 0} Stars • Updated`,
              createdAt: repo.pushed_at || repo.updated_at || repo.created_at || new Date().toISOString(),
            });
          }
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const commitPromises = repos.slice(0, 3).map(async (repo: any) => {
          try {
            const commitsRes = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=6`,
              { headers, cache: "no-store" }
            );
            if (!commitsRes.ok) return [];
            const commits = await commitsRes.json();
            if (!Array.isArray(commits)) return [];

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return commits.map((c: any) => {
              const sha = c.sha?.substring(0, 7) || "latest";
              const message = c.commit?.message?.split("\n")[0] || "Code commit";
              const date = c.commit?.author?.date || c.commit?.committer?.date || new Date().toISOString();
              return {
                id: `commit-${c.sha}`,
                type: "PushEvent",
                repo: `${username}/${repo.name}`,
                repoUrl: `https://github.com/${username}/${repo.name}/commit/${c.sha}`,
                action: `Committed to [${repo.default_branch || "master"}]`,
                detail: `[${sha}] ${message}`,
                createdAt: date,
              };
            });
          } catch {
            return [];
          }
        });

        const commitResults = await Promise.all(commitPromises);
        for (const list of commitResults) {
          for (const item of list) {
            if (!seenIds.has(item.id)) {
              seenIds.add(item.id);
              combinedEvents.push(item);
            }
          }
        }
      }
    }

    // 2. Also fetch public events timeline for other activities (Stars, Watch, Forks, Create)
    try {
      const eventsRes = await fetch(
        `https://api.github.com/users/${username}/events/public?per_page=15`,
        { headers, cache: "no-store" }
      );

      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        if (Array.isArray(eventsData)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          for (const event of eventsData) {
            const type = event.type || "Activity";
            const repoName = event.repo?.name || `${username}/repo`;
            const repoUrl = `https://github.com/${repoName}`;
            const createdAt = event.created_at || new Date().toISOString();

            if (type === "WatchEvent") {
              const eventId = `watch-${event.id}`;
              if (!seenIds.has(eventId)) {
                seenIds.add(eventId);
                combinedEvents.push({
                  id: eventId,
                  type: "WatchEvent",
                  repo: repoName,
                  repoUrl,
                  action: "Starred repository",
                  detail: "Marked repository as favorite",
                  createdAt,
                });
              }
            } else if (type === "CreateEvent") {
              const refType = event.payload?.ref_type || "repository";
              const ref = event.payload?.ref;
              const eventId = `create-${event.id}`;
              if (!seenIds.has(eventId)) {
                seenIds.add(eventId);
                combinedEvents.push({
                  id: eventId,
                  type: "CreateEvent",
                  repo: repoName,
                  repoUrl,
                  action: `Created ${refType} ${ref ? `[${ref}]` : ""}`,
                  detail: `New ${refType} initialized in repository`,
                  createdAt,
                });
              }
            } else if (type === "ForkEvent") {
              const eventId = `fork-${event.id}`;
              if (!seenIds.has(eventId)) {
                seenIds.add(eventId);
                combinedEvents.push({
                  id: eventId,
                  type: "ForkEvent",
                  repo: repoName,
                  repoUrl,
                  action: "Forked repository",
                  detail: `Forked to ${event.payload?.forkee?.full_name || "new repo"}`,
                  createdAt,
                });
              }
            }
          }
        }
      }
    } catch (e) {
      console.error("Error fetching public events timeline:", e);
    }

    // 3. Sort all merged events by createdAt descending (newest first)
    combinedEvents.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
      success: true,
      username,
      total: combinedEvents.length,
      events: combinedEvents.slice(0, 20),
    });
  } catch (error) {
    console.error("Error fetching live GitHub telemetry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch GitHub telemetry", events: [] },
      { status: 500 }
    );
  }
}
