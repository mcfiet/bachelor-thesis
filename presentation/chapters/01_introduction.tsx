import { Slide, Heading, Appear, Text, FlexBox } from "spectacle";

export function Introduction() {
  return (
    <>
      <Slide>
        <Heading>1. Einleitung &amp; Motivation</Heading>
        <Appear>
          <Text>
            In Deutschland leben <strong>9,4&nbsp;%</strong> der Bevölkerung mit
            Schwerbehinderung (GdB&nbsp;&ge;&nbsp;50).
          </Text>
        </Appear>
        <Appear>
          <Text>
            Durch Barrieren im Internet wird also ein Teil der Gesellschaft
            ausgeschlossen.
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Wer ist von den Barrieren betroffen?</Heading>
        <Appear>
          <Text>Ältere Menschen</Text>
        </Appear>
        <Appear>
          <Text>temporär eingeschränkte Menschen</Text>
        </Appear>
        <Appear>
          <Text>Power‑User</Text>
        </Appear>
        <Appear>
          <Text>Jeder</Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Ziel</Heading>
        <Appear>
          <Text>
            Brücke zwischen Entwickler:innen und dem <strong>BFSG</strong>{" "}
            schlagen.
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Problemstellung &amp; neue Anforderungen</Heading>
        <Appear>
          <Text>
            Barrierefreiheit gilt als aufwändig → wurde oft ignoriert.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Fehlende klare Vorgaben → geringe Verantwortung für Entwickler.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Neu: EU‑Richtlinie → <strong>BFSG</strong> schafft verbindliche
            Anforderungen.
          </Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Frage</Heading>
        <FlexBox
          height="60%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Appear>
            <Text textAlign="center" fontSize={40}>
              Wie lassen sich die Anforderungen des
              Barrierefreiheitsstärkungsgesetzes (BFSG) in einer modernen
              Webanwendung technisch umsetzen?
            </Text>
          </Appear>
        </FlexBox>
      </Slide>
    </>
  );
}
