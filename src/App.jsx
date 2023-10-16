import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const showCurrentQuestion = (id) => {
    const newId = activeId === id ? null : id;
    setActiveId(newId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        showCurrentQuestion={showCurrentQuestion}
        activeId={activeId}
      />
    </main>
  );
};
export default App;
