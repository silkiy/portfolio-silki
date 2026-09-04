import { ImageResponse } from "next/og";


export const alt = "Wildan Silki - Software Engineer & Web3 Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px 80px",
          fontFamily: "monospace",
          border: "12px solid #27272a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "#22c55e",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: 20,
                color: "#a1a1aa",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              AVAILABLE FOR PROJECTS
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              color: "#71717a",
              letterSpacing: "2px",
            }}
          >
            SYS.STATUS // ONLINE
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            WILDAN SILKI
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#d4d4d8",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Software Engineer & Web3 Specialist
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#a1a1aa",
              maxWidth: "900px",
              lineHeight: 1.5,
            }}
          >
            Full-Stack Development (Next.js, Node.js) • Smart Contracts (Solidity, Rust) • Algorithmic Systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            {["NEXT.JS", "TYPESCRIPT", "SOLIDITY", "RUST", "PYTHON"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 14,
                    color: "#f4f4f5",
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46",
                    padding: "6px 14px",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#e4e4e7",
              letterSpacing: "1px",
            }}
          >
            wildansilki.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
