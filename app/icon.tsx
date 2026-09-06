import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <svg
          viewBox="0 0 512 512"
          width="22"
          height="22"
        >
          <g transform="translate(256, 256)">
            <path d="M -90 -120 L 90 -120 L 90 -76 L -42 -76 L -90 -120 Z" fill="#FFFFFF" />
            <polygon points="-70,-60 90,80 40,80 -90,-40" fill="#FFFFFF" />
            <path d="M -90 76 L 42 76 L 90 120 L -90 120 Z" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
