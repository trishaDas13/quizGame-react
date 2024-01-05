import React from 'react'

const Result = (props) => {
  return (
    <div>
        <h3>Quiz Ended</h3>
        <p>You scored <span>{props.score}</span> out of <span>{props.length}</span></p>
    </div>
  )
}

export default Result;