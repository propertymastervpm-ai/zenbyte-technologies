import { ImageResponse } from "next/og";

export const alt = "Zenbyte Technologies — software development and technology solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b14",
          color: "#edf2f8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#7dd3fc" }}>
          ZENBYTE TECHNOLOGIES
        </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.05, fontWeight: 600 }}>
          Engineering Software for the Future.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b7c3d4" }}>
          Custom software, SaaS products, and Virtual Property Master
        </div>
      </div>
    ),
    size,
  );
}
