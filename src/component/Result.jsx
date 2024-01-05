import React, { memo, useEffect, useState } from "react";

const Result = (props) => {

    const[rate, setRate] = useState();

    //todo ----- setting performance rate based on score -----
    function performanceRate(){
        if(props.score < 3){
            setRate('Very Poor, you need more knowledge. 😒');
        }
        else if(props.score >= 4 && props.score <= 6){
            setRate('Gotcha! you need little more practice 😉');
        }
        else if(props.score >= 7 && props.score <=8 ){
            setRate('Good Job! Impressing score 🌟');
        }
        else{
            setRate('Bravo!! Excellent!! You are a pro now🎉');
        }
    }
    useEffect(() => {
        performanceRate();
    }, [])

  return (
    <div className='result'>
        <h3>Quiz Ended</h3>
        <div className="performance">
        <h4>Performance Rate: </h4>
        <p><span>{props.score}</span>/<span>{props.length}</span></p>
        </div>
        <p>{rate}</p>
        <button onClick={() => window.location.reload()}>Challange yourself again</button>
    </div>
  )
}

export default memo(Result);