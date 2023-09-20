import { Link as RouterLink } from "react-router-dom";
import { Button, Center } from "@chakra-ui/react";

export const Top = () => {
  return (
    <Center h="100vh" flexDirection="column" fontSize={24}>
      <h1>UIパーツ名前当てクイズ</h1>
      <Button
        as={RouterLink}
        to="/quiz"
        my={8}
        rounded={"full"}
        fontSize={14}
        w="180px"
      >
        スタート{" "}
      </Button>
    </Center>
  );
};
