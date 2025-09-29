// ui/CleanList.tsx
import React from "react";
import { UnorderedList, ListItem } from "spectacle";

export function CleanList({ children }: React.PropsWithChildren) {
  return (
    <UnorderedList
      style={{
        listStyle: "none",
        paddingLeft: 0,
        margin: 0,
        display: "grid",
        gap: 16, // Abstand zwischen Punkten
      }}
    >
      {children}
    </UnorderedList>
  );
}

export function CleanItem({ children }: React.PropsWithChildren) {
  return (
    <ListItem
      style={{
        margin: 0,
        padding: 0,
        lineHeight: 1.5,
      }}
    >
      {children}
    </ListItem>
  );
}
