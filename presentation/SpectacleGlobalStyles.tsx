// SpectacleGlobalStyles.tsx
export function SpectacleGlobalStyles() {
  return (
    <style>{`
      /* gleiche Schrift für ALLES in der Präsentation, auch eigene <div>s */
      .bfsg-deck {
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji" !important;
        color: #0f172a;
      }

      /* ruhigeres Layout global */
      .bfsg-deck section { padding: 64px 72px !important; }
      .bfsg-deck section > div { max-width: 1100px; margin: 0 auto; }

      /* cleane Listen ohne Bullets */
      .bfsg-deck ul { list-style: none; padding-left: 0; margin: 0; display: grid; row-gap: 14px; }
      .bfsg-deck ul > li { margin: 0; line-height: 1.55; }

      @media (max-width:1024px){
        .bfsg-deck section { padding: 48px 40px !important; }
        .bfsg-deck section > div { max-width: 920px; }
      }
      @media (max-width:768px){
        .bfsg-deck section { padding: 32px 24px !important; }
      }
    `}</style>
  );
}
