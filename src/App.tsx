import "./App.css";
import { useState } from "react";
import { Question, Questions, BaseQuestions, Option } from "./Bank";
/**
 * forward backward
 * save question
 * score
 */

function getQuestionById(id: Number): Question | undefined {
  const q = Questions.find((q) => q.id === id);
  if (q && q.parentId) {
    q.parent = BaseQuestions.find((b) => b.id === q.id);
  }
  return q;
}

function App() {
  const [questionId, setQuestionId] = useState(1);
  const [score, setScore] = useState(0);

  const question = getQuestionById(questionId);

  function handleOptionClick(o: Option) {
    if (o.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
