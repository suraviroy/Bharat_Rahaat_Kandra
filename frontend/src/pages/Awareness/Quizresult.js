import React from 'react';
import "./Quizresult.css";

function QuizResult(props) {
  const showExtraButton = props.score / props.totalScore * 100 > 60;

  return (
    <>
      <div className='show-score'>
        <h2><b>QUIZ RESULT</b></h2><br />
        {props.language === 'en' ? 'Your Score:' : props.language === 'hi' ? 'आपका स्कोर:' : props.language === 'be' ? 'আপনার স্কোর:' : 'Your Score:'}
        {props.score / props.totalScore * 100}%<br />
        {props.language === 'en' ? 'Total Score: 100%' : props.language === 'hi' ? 'कुल स्कोर: 100%' : props.language === 'be' ? 'মোট স্কোর: 100%' : 'Total Score: 100%'}
      </div>
      <button id="try-button" onClick={props.tryAgain}>
        {props.language === 'en' ? 'Try Again' : props.language === 'hi' ? 'फिर से प्रयास करें' : props.language === 'be' ? 'আবার চেষ্টা করুন' : 'Try Again'}
      </button>

      {showExtraButton && (
        <a href="/UserCertificate">
          <button id="extra-button">
            {props.language === 'en' ? 'Download Certificate' : props.language === 'hi' ? 'प्रमाणपत्र डाउनलोड करें' : props.language === 'be' ? 'সার্টিফিকেট ডাউনলোড করুন' : 'Download Certificate'}
          </button>
        </a>
      )}
    </>
  )
}

export default QuizResult;


