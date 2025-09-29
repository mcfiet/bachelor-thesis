import { Slide, Heading, Image, Text, FlexBox } from "spectacle";

export function Requirements() {
  return (
    <>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={16}
        >
          <Heading>6. Anforderungen &amp; Konzept</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Mrija‑Manager als Basis</Heading>
        <Image
          src="/mrija-manager_figma.png"
          alt="Mrija‑Manager – Figma"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>

      <Slide>
        <Heading>Farbkonzept geprüft (Contrast Grid)</Heading>
        <Image
          src="/contrast-grid.png"
          alt="Contrast Grid"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>

      <Slide>
        <Heading>Seitenstruktur</Heading>
        <Image
          src="/mrija-manager_sitemap.png"
          alt="Sitemap"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>

      <Slide>
        <Heading>Eigenes Designsystem</Heading>
        <Image
          src="/bachelor-thesis_figma.png"
          alt="Designsystem – Figma"
          width="100%"
          height="80%"
          style={{
            objectFit: "contain",
          }}
        />
      </Slide>
    </>
  );
}
