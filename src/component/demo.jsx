import React, { useEffect, useState } from 'react';

function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        try {
            let data = await fetch('https://the-trivia-api.com/v2/questions');
            let res = await data.json();
            setQuizData(res);
        } catch (err) {
            console.log(err);
            alert('Error: Could not load questions');
        }
    }

    const shuffleAnswers = (answers) => {
        console.log(answers);
        // Create a new array with the correct answer included
        const allAnswers = [...answers, quizData[index].correctAnswer];
        
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }

        return allAnswers;
    };

    const handleNextQuestion = () => {
        // Move to the next question
        setIndex((prevIndex) => prevIndex + 1);
    };

    if (quizData.length === 0) {
        // Data is still loading, you can render a loading indicator or message here
        return <p>Loading...</p>;
    }

    const currentQuestion = quizData[index];
    const shuffledAnswers = shuffleAnswers(currentQuestion.incorrectAnswers);

    return (
        <>
            <div className="eachSet" key={currentQuestion.id}>
                <h3>Question {index + 1}</h3>
                <p>{currentQuestion.question.text}</p>
                <form className="quiz-answers">
                    {shuffledAnswers.map((answer, i) => (
                        <div className="ans1" key={i}>
                            <input type="radio" id={`answer${i}`} name={`question${index}`} />
                            <label htmlFor={`answer${i}`}>{answer}</label><br/>
                        </div>
                    ))}
                </form>
                {index < quizData.length - 1 && (
                    <button onClick={handleNextQuestion}>Next Question</button>
                )}
            </div>
        </>
    );
}

export default Quiz;
