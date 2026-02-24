import { useState } from "react";
import TitlePage from "./title-page";

function App() {
  const [quizStarted, setQuiz] = useState(false);

  return (
    <main>
      <div className="blob blob-top">
        <img src="../src/img/top.png" />
      </div>
      {!quizStarted && <TitlePage func={setQuiz}/> }
      <div className="blob blob-bottom">
        <img src="../src/img/bottom.png" />
      </div>
    </main>
  );
}

export default App;
