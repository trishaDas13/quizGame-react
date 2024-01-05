import React, { memo, useEffect, useRef, useState } from "react";
import {nanoid} from 'nanoid';

const Option = (props) => {  

  const [seconds, setSeconds] = useState(10);
  
  //todo ----- shuffle the array -----
  function shuffleArray(optionsArray) {
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
  }
  //todo ----- push the correct answer and shuffle with incorrect answer -----
  let options = props.incorrectAns.slice();
  options.push(props.correctAns);
  
  
  //todo ----- changing questions by answer -----
  function changeByAnswer(item){
    if(item === props.correctAns){
      props.setScore(props.score+1);
    }
    shuffleArray(options);
    props.incrementIdx();
  }

  

  //todo ----- changing questions by timer -----
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      changeByAnswer();
    }

    return () => clearInterval(intervalId);
  },[seconds]);


  return (
    <>
      <p className="timer">{seconds} second remaining</p>
      <form className="quiz-answers">
        {/* map through the options array to create a button for each option */}
        {
          options.map((item, i) =>{
            return(
              <div className="ans1" key={nanoid()} onClick = {()=>changeByAnswer(item)}>
                <input 
                  type="radio" 
                  id={`answer${i}`} 
                  name={`question${props.index}`}
                  
                />
                <label htmlFor="answer1a">{item}</label>
              </div>
            );
          })
        }
      </form> 
    </>
  )
}

export default memo(Option);