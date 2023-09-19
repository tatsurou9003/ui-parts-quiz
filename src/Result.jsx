import { Link } from "react-router-dom";

export const Result = ({ questions, userAnswers }) => {
  return (
    <div>
      <h2>Result</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.questionText} :
            {userAnswers[index] ===
            question.answerOptions.find((opt) => opt.isCorrect).answerText
              ? "Correct"
              : "Incorrect"}
          </li>
        ))}
      </ul>
      <p>
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
      </p>
      <Link to="/">Top</Link>
    </div>
  );
};
