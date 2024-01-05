import React, { memo, useEffect, useState } from "react";
import Option from "./Option";
import Result from "./Result";
import './style.css'

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  let currentQuestion = quizData[index];
  useEffect(() => {
    fetchAPI();
  }, []);

  //todo ----- Fetch data from API -----
  async function fetchAPI() {
    try {
      let data = await fetch("https://the-trivia-api.com/v2/questions");
      let res = await data.json();
      setQuizData(res);
    } catch (err) {
      console.log(err);
      alert("Error: Could not load questions");
    }
  }

  //todo ----- to go to the next question -----
  function nextButtonClicked() {
    setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <>
  
      {quizData.length > 0 ? (
        index === quizData.length ? (
          <Result score={score} length={quizData.length} />
        ) : (
          <div className="eachSet" key={currentQuestion.id}>
              <h2>Quiz App</h2>
            <h3>Question {index + 1}</h3>
            <p className="question">{currentQuestion.question.text}</p>
            
            <Option
              incorrectAns={currentQuestion.incorrectAnswers}
              correctAns={currentQuestion.correctAnswer}
              idx={index}
              incrementIdx={nextButtonClicked}
              score={score}
              setScore={setScore}
            />
            {index < quizData.length && (
              <button onClick={nextButtonClicked}>{"Skip >>"}</button>
            )}
          </div>
        )
      ) : (
        <div class="spinner"></div>
      )}
    </>
  );
}

export default memo(Quiz);
