import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  Text,
  Box,
} from "spectacle";
import { Introduction } from "./chapters/01_introduction";
import { Base } from "./chapters/02_base";
import { Analysis } from "./chapters/03_analysis";
import { Requirements } from "./chapters/04_requirements";
import { Implementation } from "./chapters/05_implementation";
import { Fazit } from "./chapters/06_fazit";
import { End } from "./chapters/end";
import { theme, Footer } from "./theme";
import { SpectacleGlobalStyles } from "./SpectacleGlobalStyles";

const Presentation = () => (
  <>
    <SpectacleGlobalStyles />
    <Deck className="bfsg-deck" theme={theme} template={<Footer />}>
      <Slide>
        <FlexBox height="100%">
          <Heading>Bachelor Thesis Präsentation</Heading>
        </FlexBox>
        <Box>
          <Text fontSize={30}>
            Analyse des Barrierefreiheitsstärkungsgesetzes (BFSG) sowie
            Konzeption und Implementierung in einer modernen Webanwendung
          </Text>
        </Box>
        <FlexBox height={200}></FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={16}
        >
          <Text
            fontSize="3rem"
            lineHeight={1.5}
            textAlign="center"
            alignItems="center"
            color="secondary"
            fontStyle="italic"
          >
            “Für die meisten ein nerviges Problem beim Browsen, <br />
            für andere das Ende der Teilhabe.”
          </Text>
        </FlexBox>
      </Slide>
      <Introduction />
      <Base />
      <Analysis />
      <Requirements />
      <Implementation />
      <Fazit />
      <End />
    </Deck>
  </>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
