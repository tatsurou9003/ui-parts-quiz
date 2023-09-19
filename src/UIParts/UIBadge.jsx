import { Box, Badge, Icon } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai"; // react-icons のアイコンを使用

export const UIBadge = ({ count }) => {
  return (
    <Box position="relative" display="inline-block">
      <Icon as={AiOutlineMail} w={12} h={12} />
      {count > 0 && (
        <Badge
          position="absolute"
          top="-1"
          right="-1"
          borderRadius="full"
          colorScheme="red"
          fontSize="1.2em"
        >
          {count}
        </Badge>
      )}
    </Box>
  );
};
