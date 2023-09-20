import { useState } from "react";
import { questions } from "./Questions/questionsData";
import { Result } from "./Result";
import {
  Box,
  Button as ChakraButton,
  Flex,
  Text,
  Center,
  Circle,
  Badge,
} from "@chakra-ui/react";

export const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerOptionClick = (answerText, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // isCorrectがtrue(正解)ならscore+1
    }

    setUserAnswers((prevAnswers) => [...prevAnswers, answerText]); //　全ての問題の解答を持った配列

    const nextQuestion = currentQuestion + 1; // 次の問題に進む
    if (nextQuestion < questions.length) {
      // nextQuestionが問題数より小さいと次の問題へ、大きければスコアを表示
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Center h="100vh">
      {showScore ? (
        <Box>
          <Result questions={questions} userAnswers={userAnswers} />
        </Box>
      ) : (
        <Flex direction="column" align="center" justify="center" w="full">
          <Box mb="8">
            <Text fontSize="xl" textAlign="center" mb={12}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </Text>
            <Box mt="4">{questions[currentQuestion].questionText}</Box>
          </Box>
          <Flex direction="column" align="center" spacing="4" mt={12}>
            <Flex>
              {questions[currentQuestion].answerOptions
                .slice(0, 2)
                .map((answerOption, index) => (
                  <ChakraButton
                    key={index}
                    ml={index !== 0 ? "4" : "0"}
                    my="2"
                    w="200px"
                    borderRadius="lg"
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.answerText,
                        answerOption.isCorrect
                      )
                    }
                  >
                    {answerOption.answerText}
                  </ChakraButton>
                ))}
            </Flex>
            <Flex>
              {questions[currentQuestion].answerOptions
                .slice(2, 4)
                .map((answerOption, index) => (
                  <ChakraButton
                    key={index}
                    ml={index !== 0 ? "4" : "0"}
                    my="2"
                    w="200px"
                    borderRadius="lg"
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.answerText,
                        answerOption.isCorrect
                      )
                    }
                  >
                    {answerOption.answerText}
                  </ChakraButton>
                ))}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Center>
  );
};
