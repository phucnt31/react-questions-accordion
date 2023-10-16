import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, activeId, showCurrentQuestion, title, info }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => showCurrentQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isActive && info}</p>
    </article>
  );
};

export default SingleQuestion;
