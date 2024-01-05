import Quiz from './component/Quiz';
import React, { useState } from "react";

function App() {

  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="App">

      <button 
        onClick={()=> setShowQuiz(true)}
        style = {{display: showQuiz ?  'none' : 'block'}}
        className='landingButton'
      >Click to check you knowledge</button>
      {showQuiz && <Quiz/>}

    </div>
  );
}

export default App;
