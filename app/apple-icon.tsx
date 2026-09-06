import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: "36px",
          border: "6px solid #3f3f46",
        }}
      >
        WS
      </div>
    ),
    {
      ...size,
    }
  );
}
