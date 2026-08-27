"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiGitCommit, BiGitBranch, BiGitRepoForked, BiStar, BiFolder, BiRefresh } from "react-icons/bi";
import { GitHubEventItem } from "@/app/api/github-events/route";

const GithubTelemetry = () => {
  const [events, setEvents] = useState<GitHubEventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("ALL");
  const [lastFetched, setLastFetched] = useState<string>("");

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/github-events?t=${Date.now()}`, { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.events)) {
        setEvents(data.events);
      }
    } catch (err) {
      console.error("Failed to fetch live GitHub events:", err);
    } finally {
      setLoading(false);
      const now = new Date();
      setLastFetched(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const getRelativeTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

      if (diffInSeconds < 60) return "just now";
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) return `${diffInHours}h ago`;
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 30) return `${diffInDays}d ago`;
      const diffInMonths = Math.floor(diffInDays / 30);
      return `${diffInMonths}mo ago`;
    } catch {
      return dateString;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "PushEvent":
        return <BiGitCommit className="w-4 h-4 text-cyan-400 shrink-0" />;
      case "WatchEvent":
        return <BiStar className="w-4 h-4 text-yellow-400 shrink-0" />;
      case "CreateEvent":
      case "RepoEvent":
        return <BiFolder className="w-4 h-4 text-emerald-400 shrink-0" />;
      case "ForkEvent":
        return <BiGitRepoForked className="w-4 h-4 text-purple-400 shrink-0" />;
      default:
        return <BiGitBranch className="w-4 h-4 text-foreground/70 shrink-0" />;
    }
  };

  const getEventBadge = (type: string) => {
    switch (type) {
      case "PushEvent":
        return "PUSH";
      case "WatchEvent":
        return "STAR";
      case "RepoEvent":
        return "REPO";
      case "CreateEvent":
        return "CREATE";
      case "ForkEvent":
        return "FORK";
      case "PullRequestEvent":
        return "PR";
      case "IssuesEvent":
        return "ISSUE";
      default:
        return "EVENT";
    }
  };

  const filteredEvents = events.filter((ev) => {
    if (filter === "ALL") return true;
    if (filter === "COMMITS") return ev.type === "PushEvent";
    if (filter === "STARS") return ev.type === "WatchEvent";
    if (filter === "REPOS") return ev.type === "CreateEvent" || ev.type === "RepoEvent" || ev.type === "ForkEvent";
    return true;
  });

  return (
    <section
      id="telemetry"
      className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/50 relative overflow-hidden bg-background"
      aria-label="GitHub Telemetry & Live Activity Stream"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border/50 pb-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-foreground tracking-tighter uppercase">
              GitHub Telemetry
            </h2>
            <p className="font-mono text-sm text-foreground/50 mt-2 tracking-widest uppercase">
              SYS.LOG // METRICS & REALTIME ACTIVITY STREAM
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-border/50 bg-background/50 font-mono text-[11px] uppercase tracking-widest text-foreground/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>LIVE FEED</span>
            </div>

            <a
              href="https://github.com/silkiy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-foreground/70 hover:text-foreground border border-border/50 hover:border-foreground/50 px-4 py-2 transition-colors uppercase tracking-widest"
            >
              <FaGithub className="w-4 h-4" />
              <span>@silkiy</span>
            </a>
          </div>
        </motion.div>

        {/* Top Row: GitHub Readme Stats & Top Langs Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch justify-center mb-10"
        >
          <div className="border border-border/50 bg-background/50 p-4 sm:p-6 flex items-center justify-center transition-colors hover:border-foreground/50">
            <a
              href="https://github.com/silkiy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center hover:opacity-90 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats-fast.vercel.app/api?username=silkiy&show_icons=true&bg_color=0a0a0f&title_color=89dceb&icon_color=cdd6f4&text_color=a6adc8&border_color=313244"
                alt="Wildan's GitHub Stats"
                className="w-full h-auto max-w-[495px]"
                loading="lazy"
              />
            </a>
          </div>

          <div className="border border-border/50 bg-background/50 p-4 sm:p-6 flex items-center justify-center transition-colors hover:border-foreground/50">
            <a
              href="https://github.com/silkiy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center hover:opacity-90 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=silkiy&layout=compact&card_width=467&langs_count=8&bg_color=0a0a0f&title_color=89dceb&text_color=a6adc8&border_color=313244"
                alt="Top Languages"
                className="w-full h-auto max-w-[495px]"
                loading="lazy"
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom Row: Realtime Activity Stream Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border border-border/50 bg-background/50 overflow-hidden"
        >
          {/* Terminal Top Bar */}
          <div className="border-b border-border/50 px-4 py-3 bg-foreground/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="font-mono text-xs text-foreground font-bold tracking-widest uppercase">
                TERMINAL // REALTIME_ACTIVITY_FEED.LOG
              </span>
            </div>

            <div className="flex items-center gap-3">
              {lastFetched && (
                <span className="font-mono text-[10px] text-foreground/50 tracking-wider hidden sm:inline-block">
                  SYNC: {lastFetched}
                </span>
              )}
              <button
                onClick={fetchEvents}
                disabled={loading}
                aria-label="Refresh GitHub Feed"
                className="p-1.5 border border-border/50 hover:border-foreground/50 text-foreground transition-colors disabled:opacity-50 focus:outline-none"
                title="Refresh feed"
              >
                <BiRefresh className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="border-b border-border/30 px-4 py-2 bg-background/80 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              {(["ALL", "COMMITS", "STARS", "REPOS"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-2.5 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-colors ${
                    filter === tab
                      ? "bg-foreground text-background font-bold"
                      : "text-foreground/60 hover:text-foreground border border-border/30"
                  }`}
                >
                  [{tab}]
                </button>
              ))}
            </div>
            <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
              {filteredEvents.length} {filteredEvents.length === 1 ? "EVENT" : "EVENTS"} DETECTED
            </span>
          </div>

          {/* Event Stream List */}
          <div className="p-4 sm:p-6 space-y-3 max-h-[460px] overflow-y-auto divide-y divide-border/20 font-mono text-xs">
            {loading && events.length === 0 ? (
              <div className="py-12 text-center text-foreground/50 space-y-2">
                <div className="animate-pulse tracking-widest uppercase">
                  &gt; ESTABLISHING UPLINK WITH GITHUB API...
                </div>
                <div className="text-[10px] text-foreground/40">Fetching public telemetry packets...</div>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="py-10 text-center text-foreground/50 uppercase tracking-widest">
                &gt; NO ACTIVITY LOGS FOUND FOR FILTER [{filter}]
              </div>
            ) : (
              filteredEvents.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-start space-x-3 overflow-hidden">
                    <div className="mt-0.5 p-1 border border-border/50 bg-foreground/5">
                      {getEventIcon(item.type)}
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="border border-border/60 px-1.5 py-0.5 text-[9px] font-bold text-foreground tracking-wider uppercase bg-foreground/5">
                          {getEventBadge(item.type)}
                        </span>
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-foreground hover:underline flex items-center gap-1 group-hover:text-cyan-400 transition-colors break-all"
                        >
                          <span>{item.repo}</span>
                          <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-60 inline" />
                        </a>
                      </div>

                      <p className="text-foreground/80 text-[11px] sm:text-xs leading-relaxed font-sans sm:font-mono">
                        {item.action}
                      </p>

                      {item.detail && (
                        <p className="text-foreground/50 text-[10px] sm:text-[11px] mt-0.5 truncate max-w-xl">
                          &gt; {item.detail}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-[10px] text-foreground/50 tracking-wider border border-border/30 px-2 py-0.5 bg-background">
                      {getRelativeTime(item.createdAt)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Terminal Footer Status */}
          <div className="border-t border-border/30 px-4 py-2 bg-foreground/5 flex items-center justify-between font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
            <span>PORT // 443 [HTTPS]</span>
            <span>STATUS // 200 OK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubTelemetry;
