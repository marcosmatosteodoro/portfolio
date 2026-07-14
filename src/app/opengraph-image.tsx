import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// Metadados da imagem (tamanho padrão de card OG).
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = `${profile.shortName} — ${profile.role.en}`;

// Cores fixas (Satori não lê variáveis CSS do tema).
const BACKGROUND = "#0a0a0f";
const FOREGROUND = "#e6e7eb";
const ACCENT = "#a78bfa";
const MUTED = "#9aa0ac";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BACKGROUND,
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Topo: cargo em destaque */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: ACCENT, fontSize: 30, fontWeight: 700 }}>
          {"<"}Full-Stack{" />"}
        </span>
      </div>

      {/* Centro: nome + foto */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: MUTED, fontSize: 32 }}>Hi, I&apos;m</span>
          <span
            style={{
              color: FOREGROUND,
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 8,
            }}
          >
            {profile.shortName}
          </span>
          <span style={{ color: ACCENT, fontSize: 40, fontWeight: 600, marginTop: 16 }}>
            {profile.role.en}
          </span>
        </div>

        {/* Badge de iniciais */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            borderRadius: 200,
            border: `6px solid ${ACCENT}`,
            color: ACCENT,
            fontSize: 80,
            fontWeight: 800,
          }}
        >
          {profile.initials}
        </div>
      </div>

      {/* Rodapé: contatos */}
      <div style={{ display: "flex", alignItems: "center", color: MUTED, fontSize: 28 }}>
        <span>github.com/marcosmatosteodoro</span>
        <span style={{ margin: "0 16px", color: ACCENT }}>•</span>
        <span>in/marcosmatosteodoro</span>
      </div>
    </div>,
    size,
  );
}
