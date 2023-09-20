import React from "react";
import { UIButton } from "../UIParts/UIButton";
import { UIAlert } from "../UIParts/UIAlert";
import { UIBadge } from "../UIParts/UIBadge";

export const questions = [
  {
    questionText: <UIButton />,
    answerOptions: [
      { answerText: "accordion", isCorrect: false },
      { answerText: "avatar", isCorrect: false },
      { answerText: "Button", isCorrect: true },
      { answerText: "badge", isCorrect: false },
    ],
  },
  {
    questionText: <UIAlert />,
    answerOptions: [
      { answerText: "nanikasira", isCorrect: false },
      { answerText: "accordion", isCorrect: false },
      { answerText: "alert", isCorrect: true },
      { answerText: "New York", isCorrect: false },
    ],
  },
  {
    questionText: <UIBadge count={6} />,
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "New York", isCorrect: false },
      { answerText: "badge", isCorrect: true },
      { answerText: "New York", isCorrect: false },
    ],
  },
];
