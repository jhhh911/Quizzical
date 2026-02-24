import { useState, useEffect } from "react";
import TitlePage from "./title-page";

function App() {
  const [quizStarted, setQuiz] = useState(false);
  const [allQuestions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results));
  }, []);

  const listQuestions = allQuestions.map((question, i) => (
    <div className="question">
      <p key={i} className="question-text">
        {question.question}
      </p>
      <button>{question.correct_answer}</button>
      <button>{question.incorrect_answers[0]}</button>
      <button>{question.incorrect_answers[1]}</button>
      <button>{question.incorrect_answers[2]}</button>
    </div>
  ));

  return (
    <main>
      <div className="blob blob-top">
        <img src="../src/img/top.png" />
      </div>
      {!quizStarted && <TitlePage func={setQuiz} />}

      {quizStarted && (
        <section className="questions-list">{listQuestions}</section>
      )}
      <div className="blob blob-bottom">
        <img src="../src/img/bottom.png" />
      </div>
    </main>
  );
}

export default App;
