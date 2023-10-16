import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <SingleQuestion questions={questions} />
    </main>
  );
};
export default App;
