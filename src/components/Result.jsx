import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers?.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        {correctAnswers} answers correct out of {questions?.length}
        <span onClick={resetQuiz}>Click here to retry</span>
      </p>
      <ul>
        {questions?.map((ques, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}: {ques?.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
