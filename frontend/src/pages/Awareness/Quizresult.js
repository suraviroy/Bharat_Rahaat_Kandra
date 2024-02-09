
import React from 'react'
import "./Quizresult.css"

function QuizResult(props) {
  const showExtraButton = props.score/props.totalScore*100 > 60;

  return (
    <>
    <div className='show-score'>
        <h2><b>QUIZ RESULT</b></h2><br></br>
        Your Score:{props.score/props.totalScore*100}%<br/>
        Total Score:100%
    </div>
    <button id="try-button" onClick={props.tryAgain}>Try Again</button>

    {showExtraButton && (
          <a href="/UserCertificate"> 
            <button id="extra-button" >
        Download Certificate
      </button>
      </a>
    
    )}
    </>
  )
}

export default QuizResult
