import React, { useEffect, useState } from 'react'
// import {nanoid} from nanoid();

function Quiz() {
    
    const[quizData, setQuizData] = useState([]);
    const [index, setIndex] = useState(0);
    let currentIndex = index;
    let currentQuestion = quizData[currentIndex];
    useEffect(() => {
        fetchAPI();
    }, [])
    //todo ----- Fetch data from API -----
    async function fetchAPI() {
        try{
            let data = await fetch('https://the-trivia-api.com/v2/questions');
            let res = await data.json();
            setQuizData(res);
        }
        catch(err){
            console.log(err);
            alert("Error: Could not load questions");
        }
    }
    


    return (
    <>
    {/* {console.log(quizData)} */}
    {console.log(quizData[currentIndex])}
        {
            // quizData.map((item, i)=>{
            //     return(
                    <div className="eachSet" key={0}>
                        <h3>Question {index+1}</h3>
                        {/* <p>{currentQuestion.question.text}</p> */}
                        <form className="quiz-answers">
                            <div className="ans1">
                                <input type="radio" id="answer1a" name="question1" />
                                <label htmlFor="answer1a"> Four</label><br/>
                            </div>
                            <div className="ans1">
                                <input type="radio" id="answer1a" name="question1" />
                                <label htmlFor="answer1a"> six</label><br/>
                            </div>
                            <div className="ans1">
                                <input type="radio" id="answer1a" name="question1" />
                                <label htmlFor="answer1a"> two</label><br/>
                            </div>
                            <div className="ans1">
                                <input type="radio" id="answer1a" name="question1" />
                                <label htmlFor="answer1a"> one</label><br/>
                            </div>   
                        </form>
                    </div>
        //         );
        //     })
        }
    </>
  )
}

export default Quiz