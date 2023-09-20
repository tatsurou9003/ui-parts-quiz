import {
  Button,
  Box,
  Stack,
  ButtonGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const UIButton = () => {
  return (
    <Stack direction="column">
      <Wrap spacing={4}>
        <WrapItem>
          <Button colorScheme="red">Red</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="orange">Orange</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="yellow">Yellow</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="green">Green</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="teal">Teal</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="blue">Blue</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="cyan">Cyan</Button>
        </WrapItem>
      </Wrap>
    </Stack>
  );
};
