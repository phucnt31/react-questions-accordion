import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, showCurrentQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            showCurrentQuestion={showCurrentQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
