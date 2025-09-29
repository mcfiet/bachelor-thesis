// lightCleanTheme.ts
// Ein helles, cleanes, barrierearmes Spectacle Theme.
// Nutzung:
// import { Deck } from "spectacle";
// import { lightCleanTheme } from "./theme/lightCleanTheme";
//
// export default function App() {
//   return (
//     <Deck theme={lightCleanTheme} template={<Footer />}>
//       {/* deine Slides */}
//     </Deck>
//   );
// }
//
// Optionales Footer‑Template siehe unten.

import { SpectacleThemeOverrides } from "spectacle";

export const theme: SpectacleThemeOverrides = {
  colors: {
    primary: "#0f172a", // Haupttext
    secondary: "#334155", // Subtext
    tertiary: "#f8fafc", // DEFAULT Slide‑Hintergrund (edles Off‑White)
    quaternary: "#ffffff", // Reines Weiß (Fallback)
    quinary: "#e5e7eb", // Rahmen/Divider
  },
  fontSizes: {
    h1: "64px",
    h2: "48px",
    h3: "36px",
    text: "26px",
    monospace: "20px",
  },
};
import React from "react";
import { FlexBox, Text, Progress } from "spectacle";

// Zusätzliche, optionale Tokens außerhalb des offiziellen Theme‑Shapes
export const palette = {
  background: "#ffffff",
  text: "#0f172a",
  subtext: "#334155",
  muted: "#64748b",
  accent: "#2563eb",
  accentMuted: "#93c5fd",
  highlight: "#f8fafc",
  border: "#e5e7eb",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "#dc2626",
};

// Optionale, leichte Global‑Styles via Hilfskomponenten
// Beispielfußzeile: zeigt Seitenzahl/Progress und eine kleine Markenzeile
export function Footer() {
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      padding="0px 24px"
      style={{
        borderTop: `1px solid ${palette.border}`,
        background: palette.background,
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        gap: 24, // optional: etwas Luft zwischen den Spalten
      }}
    >
      <Text fontSize="caption" color={palette.muted}>
        Bachelor Thesis - Präsentation
      </Text>

      <Progress color={palette.muted} size={4} />

      <Text fontSize="caption" color={palette.muted}>
        Fiete Scheel
      </Text>
    </FlexBox>
  );
}

export const baseImageStyle = {
  width: "100%",
  height: "80%",
  style: { objectFit: "contain", position: "absolute", inset: 0 },
};

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: palette.highlight,
        border: `1px solid ${palette.border}`,
        boxShadow: "0 2px 10px rgba(2, 6, 23, 0.06)",
        borderRadius: 12,
        padding: 24,
        fontSize: 25,
      }}
    >
      {children}
    </div>
  );
}

export const Muted = ({ children }: { children: React.ReactNode }) => (
  <Text color={palette.muted}>{children}</Text>
);

export const Accent = ({ children }: { children: React.ReactNode }) => (
  <Text color={palette.accent}>{children}</Text>
);
