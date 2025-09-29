import { Text, Appear, Heading, Slide, Image } from "spectacle";
import { baseImageStyle } from "../theme";

export function Base() {
  return (
    <>
      <Slide>
        <Heading>Grundlage</Heading>
        <Appear>
          <Text>
            Als Grundlage für Projekt <strong>Mrija Manager</strong>{" "}
            (barrierfreie Event‑Verwaltung).
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Grundlagen – Barrierefreiheit</Heading>
        <Appear>
          <Text>
            Ziel: Nutzung <em>ohne besondere Erschwernis</em> und{" "}
            <em>ohne fremde Hilfe</em>.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Betroffen sind u. a. Seh‑, Hör‑, motorische und kognitive
            Einschränkungen.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Web: klare Struktur, semantisches HTML, Untertitel,
            Tastaturbedienbarkeit, leichte Sprache.
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading>2. Forschungsmethodik &amp; Aufbau</Heading>
        <Appear>
          <Text>
            <span style={{ fontWeight: "bold" }}>Literaturrecherche</span>{" "}
            (BITV&nbsp;2.0, BFSG, EU 2016/2102 &amp; 2019/882, WCAG&nbsp;2.1)
          </Text>
        </Appear>
        <Appear>
          <Text>
            <span style={{ fontWeight: "bold" }}>Fallstudie</span> bestehender
            Web‑Apps (Kriterienkatalog, axe, WAVE, manuelle Checks)
          </Text>
        </Appear>
        <Appear>
          <Text>
            <span style={{ fontWeight: "bold" }}>Prototyping</span> (React‑App)
            auf Basis der Erkenntnisse
          </Text>
        </Appear>
        <Appear>
          <Text>
            <span style={{ fontWeight: "bold" }}>Evaluation</span> mit denselben
            Kriterien &amp; Tools
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading>Gesetze &amp; Standards</Heading>
        <Image
          src="/bfsg_eu_norm_schema.png"
          alt="BFSG / EU Norm – Übersicht"
          width="100%"
          height="70%"
          style={{
            objectFit: "contain",
          }}
        />
        <Text fontSize="text">
          <em>Hinweis:</em> Stelle sicher, dass der Bildpfad{" "}
          <code>/bfsg_eu_norm_schema.png</code> in deiner App verfügbar ist.
        </Text>
      </Slide>

      <Slide>
        <Heading>Tech‑Grundlagen</Heading>
        <Appear>
          <Text>
            <strong>Semantic HTML</strong> vor ARIA; ARIA nur ergänzend
            einsetzen.
          </Text>
        </Appear>
        <Appear>
          <Text>
            DOM, JavaScript, TypeScript (statische Typisierung &amp;
            Fehlerreduktion).
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Technologieauswahl</Heading>
        <Appear>
          <Text>
            <strong>React:</strong> verbreitet, komponentenbasiert, große
            Community.
          </Text>
        </Appear>
        <Appear>
          <Text>
            <strong>MUI:</strong> umfangreiche, anpassbare UI‑Komponenten
            (Material Design, eigenes DS möglich).
          </Text>
        </Appear>
        <Appear>
          <Text>
            <strong>Testing‑Tools:</strong> axe DevTools (~57&nbsp;% der
            WCAG‑Fehler), WAVE als Ergänzung.
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
