import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn">
          <AiOutlinePlus />
        </button>
      </header>

      <p>{info}</p>
    </article>
  );
};

export default SingleQuestion;
