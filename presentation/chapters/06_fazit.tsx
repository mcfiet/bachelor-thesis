import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

export function Fazit() {
  return (
    <>
      <Slide>
        <Heading>9. Fazit</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              Solide Wissensbasis zu BFSG, EAA 2019/882, WCAG&nbsp;2.1.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Häufige Fehler: Kontraste, Fokus, Name/Rolle/Wert.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Prototyp mit React (Next.js) &amp; MUI; externe Libs auf A11y
              prüfen.
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Kritik &amp; Ausblick</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              Besseres Progressive Enhancement (Content‑First, ohne JS
              zugänglich).
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              AA erfüllt; AAA teilweise – Potential für Vollumsetzung.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Nächster Schritt: Tests mit echten Nutzer:innen mit Behinderungen.
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Kernbotschaft</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              Barrierefreiheit ist ein <strong>Prozess</strong>, kein Zustand.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Technik hilft – entscheidend ist die <strong>Denkweise</strong>.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              A11y verbessert UX für alle; von Anfang an mitdenken.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Betroffene Menschen aktiv einbeziehen.</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
    </>
  );
}
