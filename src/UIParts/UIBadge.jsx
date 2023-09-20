import { Flex, Box, Badge, Icon, Stack } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";

export const UIBadge = ({ count }) => {
  return (
    <Flex align="center" spacing={4}>
      {" "}
      {/* ここでalignを設定し、要素を中央に配置 */}
      <Box position="relative" display="inline-block" mr={4}>
        {" "}
        {/* 左右の間隔を追加 */}
        <Icon as={AiOutlineMail} w={12} h={12} />
        {count > 0 && (
          <Badge
            position="absolute"
            top="0"
            right="0"
            mt={-2} // Badgeを上に少し移動して位置を調整
            borderRadius="full"
            colorScheme="red"
            fontSize="1.2em"
            p="2px 8px" // paddingを追加して縦幅を調整
          >
            {count}
          </Badge>
        )}
      </Box>
      <Stack direction="row" spacing={4}>
        <Badge variant="outline" colorScheme="green">
          Default
        </Badge>
        <Badge variant="solid" colorScheme="green">
          Success
        </Badge>
        <Badge variant="subtle" colorScheme="green">
          Removed
        </Badge>
      </Stack>
    </Flex>
  );
};
