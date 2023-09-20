import { Box, Text, VStack, Badge, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Result = ({ questions, userAnswers }) => {
  return (
    <VStack spacing={4} width="100%" alignItems="start">
      <Text fontSize="2xl" fontWeight="bold">
        Result
      </Text>
      <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
        {questions.map((question, index) => {
          const isCorrect =
            userAnswers[index] ===
            question.answerOptions.find((opt) => opt.isCorrect).answerText;

          return (
            <Box
              key={index}
              p={4}
              width="100%"
              mb={2}
              border="2px"
              position="relative"
              borderColor={isCorrect ? "green.400" : "red.400"}
              borderRadius="md"
            >
              {isCorrect ? (
                <Badge
                  position="absolute"
                  top="-8px"
                  left="50%"
                  transform="translateX(-50%)"
                  colorScheme="green"
                  borderRadius="full"
                  zIndex="1"
                  fontSize={20}
                >
                  ◯
                </Badge>
              ) : (
                <Badge
                  position="absolute"
                  top="-8px"
                  left="50%"
                  transform="translateX(-50%)"
                  colorScheme="red"
                  zIndex="1"
                >
                  ☓
                </Badge>
              )}
              {question.questionText}
            </Box>
          );
        })}
      </ul>
      <Text>
        You scored{" "}
        {
          userAnswers.filter(
            (answer, index) =>
              answer ===
              questions[index].answerOptions.find((opt) => opt.isCorrect)
                .answerText
          ).length
        }{" "}
        out of {questions.length}
      </Text>
      <Button as={RouterLink} to="/" borderRadius="full">
        Topに戻る
      </Button>
    </VStack>
  );
};
