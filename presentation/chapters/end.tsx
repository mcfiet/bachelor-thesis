import { FlexBox, Heading, Slide, Text } from "spectacle";

export function End() {
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
          <Heading>Vielen Dank!</Heading>
          <Text>Fragen?</Text>
        </FlexBox>
      </Slide>
    </>
  );
}
