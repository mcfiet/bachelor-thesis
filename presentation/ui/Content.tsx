// ui/Content.tsx
import React from "react";

export function Content({
  children,
  width = 1100,
  padX = 64,
  padY = 48,
}: React.PropsWithChildren<{ width?: number; padX?: number; padY?: number }>) {
  return (
    <div
      style={{
        maxWidth: width,
        margin: "0 auto",
        padding: `${padY}px ${padX}px`,
      }}
    >
      {children}
    </div>
  );
}
