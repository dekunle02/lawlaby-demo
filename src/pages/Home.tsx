import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFlag } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Question, Questions, BaseQuestions, Option } from "../Bank";

function Home() {
  const navigate = useNavigate();
  const [questionId, setQuestionId] = useState(1);
  const [score, setScore] = useState(0);

  const question = getQuestionById(questionId);

  function handleOptionClick(o: Option, button: HTMLButtonElement) {
    if (o.isCorrect) {
      setScore((prevScore) => prevScore + 1);
      button.style.backgroundColor = "#00FF00";
    } else {
      button.style.backgroundColor = "#FF0000";
    }
    setTimeout(function () {
      button.style.backgroundColor = "";
      handleNextClick();
    }, 1000);
  }

  function handleNextClick() {
    if (questionId !== Questions.length) {
      setQuestionId((prev) => prev + 1);
    } else {
      navigate(`/end?score=${score}`);
    }
  }

  function handlePreviousClick() {
    if (questionId > 1) {
      setQuestionId((prev) => prev - 1);
    }
  }

  function handleQuestionFlag() {
    alert("This Question has been flagged for you!");
  }

  if (!question) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className="flex flex-col m-2">
      <h1 className="text-xl font-bold text-teal-800">Lawlaby</h1>

      {/* top */}
      <div className="flex flex-row justify-between pr-2 items-center mb-2">
        <span>{`${question.id} of ${Questions.length}`}</span>
        <button
          onClick={handleQuestionFlag}
          className="text-lg  text-orange-600"
        >
          <MdFlag />
        </button>
      </div>

      {/* parent question */}
      {question.parent && (
        <p className="mb-5 font-light">{question.parent.body}</p>
      )}

      {/* question */}
      <p className="font-semibold">{question.body}</p>

      {/* options */}
      <div className="flex flex-col content-start my-3 border divide-y">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="py-5 px-3 text-start"
            onClick={(event) =>
              handleOptionClick(option, event.target as HTMLButtonElement)
            }
          >
            {option.body}
          </button>
        ))}
      </div>

      {/* navigation */}
      <div className="flex flex-row justify-between px-3">
        <button onClick={handlePreviousClick} className="text-lg">
          <IoChevronBack />
        </button>
        <button onClick={handleNextClick} className="text-lg">
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}

function getQuestionById(id: Number): Question | undefined {
  const q = Questions.find((q) => q.id === id);
  if (q && q.parentId) {
    q.parent = BaseQuestions.find((b) => b.id === q.id);
  }
  return q;
}

export default Home;
