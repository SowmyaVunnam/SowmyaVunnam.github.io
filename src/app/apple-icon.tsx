import { ImageResponse } from "next/og";

export const dynamic = "force-static";

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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10354a, #154132 55%, #0f2622)",
          color: "#f8f3ea",
          fontSize: 74,
          fontWeight: 700,
        }}
      >
        SV
      </div>
    ),
    size
  );
}
