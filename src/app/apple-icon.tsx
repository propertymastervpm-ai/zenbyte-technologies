import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070B14",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
          <path fill="#7DD3FC" d="M15 15H49V22L29 38H49V49H15V42L35 26H15V15Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
