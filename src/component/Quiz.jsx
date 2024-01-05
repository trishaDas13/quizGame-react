import React, { memo, useEffect, useState } from "react";
import Option from "./Option";
import Result from './Result';

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
  function handleIndex(){
    setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <>
    
      {quizData.length > 0 ? (
        <div className="eachSet" key={currentQuestion.id}>
          <h3>Question {index + 1}</h3>
          <p>{currentQuestion.question.text}</p>
          <Option
            incorrectAns={currentQuestion.incorrectAnswers}
            correctAns={currentQuestion.correctAnswer}
            idx={index}
            incrementIdx={handleIndex}
            score={score}
            setScore={setScore}
          />
          {index < quizData.length - 1 && (
            <button onClick={nextButtonClicked}>Next Question</button>
          )}
          {/* { index === quizData.length + 1 &&
            // <Result score={score}/>
          } */}
        </div>
      ) : (
        <div className="loader"> Loading ....</div>
      )}
    </>
  );
}

export default memo(Quiz);
