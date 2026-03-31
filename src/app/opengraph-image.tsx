import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #10354a 0%, #154132 52%, #0f2622 100%)",
          color: "#f8f3ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(125,233,219,0.30), transparent 30%), radial-gradient(circle at 85% 12%, rgba(255,187,120,0.26), transparent 24%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8de9dc",
            }}
          >
            Sowmya Vunnam
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: 860 }}>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700 }}>Turning complex research into decisions.</div>
            <div style={{ fontSize: 42, lineHeight: 1.15, color: "#f2e9dc" }}>
              Strategy, analytics, market intelligence, and healthcare storytelling.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "rgba(248,243,234,0.80)" }}>
              Structured insight for teams building products, strategies, and growth plans that need clearer direction.
            </div>
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            {["Healthcare technology", "Power BI + SQL", "Decision-ready strategy"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "14px 24px",
                  fontSize: 22,
                  color: "#f8f3ea",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
