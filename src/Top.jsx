import { Link } from "react-router-dom";
import { Center, Button } from "@chakra-ui/react";

export const Top = () => {
  return (
    <Center h="100vh" flexDirection="column" fontSize={24}>
      <h1>UIパーツ名前当てクイズ</h1>
      <Button my={8} rounded={"full"} fontSize={14} w="180px">
        <Link to="/quiz">スタート</Link>
      </Button>
    </Center>
  );
};
