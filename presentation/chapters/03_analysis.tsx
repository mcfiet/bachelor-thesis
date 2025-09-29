import {
  OrderedList,
  ListItem,
  FlexBox,
  Slide,
  Heading,
  Appear,
  Text,
  Image,
} from "spectacle";
import { baseImageStyle, Card } from "../theme";

export function Analysis() {
  return (
    <>
      <Slide>
        <Heading>5. Analyse von Bestandsseiten</Heading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 24,
          }}
        >
          <Appear>
            <Card>Banken und Finanzdienstleistungen</Card>
          </Appear>
          <Appear>
            <Card>Personenbeförderung</Card>
          </Appear>
          <Appear>
            <Card>Telekommunikationsdienste</Card>
          </Appear>
          <Appear>
            <Card>E‑Commerce und Online‑Shops</Card>
          </Appear>
        </div>

        <Appear>
          <Heading>Weitere Domänen</Heading>
          <Card>Veranstaltungs‑ &amp; Ticketing‑Plattformen</Card>
        </Appear>
      </Slide>

      {/* Optional: zweite Folie mit weiterer Kategorie, da der Originaltext abgeschnitten war ("Veranstaltungs...") */}
      <Slide>
        <Heading>Fehlerverteilung</Heading>
        <FlexBox gap={20}>
          <Image
            src="/plot1.svg"
            alt="Auswertung WCAG Kategorien – Plot 1"
            width="100%"
            height="70%"
            style={{
              objectFit: "contain",
            }}
          />
          <Image
            src="/plot2.svg"
            alt="Auswertung WCAG Kategorien – Plot 2"
            width="100%"
            height="70%"
            style={{
              objectFit: "contain",
            }}
          />
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Häufige Probleme (Kurz)</Heading>
        <OrderedList>
          <Appear>
            <ListItem>
              <strong>Kontraste</strong> (1.4.3) – meist verletzt.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Fokus sichtbar</strong> (2.4.7) – Fokus verschwindet/kaum
              erkennbar, Traps.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Name/Rolle/Wert</strong> (4.1.2) – fehlende Labels; plus
              Alternativtexte (1.1.1).
            </ListItem>
          </Appear>
        </OrderedList>
        <Appear>
          <Text>
            <em>Fazit:</em> Wiederkehrende Fehler blockieren komplette Prozesse.
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={16}
        >
          <Heading>Positivbeispiele</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <figure>
          <Image
            src="/good/amazon_good_shortcut-examples.png"
            alt="Amazon: gute Skip‑Links + Shortcut‑Schaltfläche"
            width="100%"
            height="80%"
            style={{
              objectFit: "contain",
            }}
          />
          <Text as="figcaption" style={{ textAlign: "center" }}>
            Amazon: gute Skip‑Links + Shortcut‑Schaltfläche.
          </Text>
        </figure>
      </Slide>

      <Slide>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Basisbild immer sichtbar */}
          <figure>
            <Image src="/good/hvv_normal.png" alt="" {...baseImageStyle} />
            {/* Layer 1 bei Klick */}
            <Appear>
              <Image src="/good/hvv_contrast.png" alt="" {...baseImageStyle} />
            </Appear>

            <Text
              as="figcaption"
              style={{
                textAlign: "center",
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              HVV: Kontrastversion, klar mit ARIA beschriftet.
            </Text>
          </figure>
        </div>
      </Slide>

      <Slide>
        <figure>
          <Image
            src="/good/vbb_good-nav-tab.png"
            alt="VBB: sichtbares Untermenü bei Tastaturbedienung (2.4.1)"
            width="100%"
            height="80%"
            style={{
              objectFit: "contain",
            }}
          />
          <Text as="figcaption" style={{ textAlign: "center" }}>
            VBB: sichtbares Untermenü bei Tastaturbedienung (2.4.1).
          </Text>
        </figure>
      </Slide>
    </>
  );
}
