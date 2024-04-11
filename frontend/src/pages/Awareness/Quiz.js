import React, { useState, useEffect } from 'react';
import { QuizData } from './Quizdata';
import QuizResult from './Quizresult'
import "./Quiz.css";
import LanguageOption from './language-dropdown';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(10);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    let interval;
    if (timer > 0 && !showResult) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      changeQuestion();
    }
    return () => clearInterval(interval);
  }, [timer, showResult]);

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
      setTimer(10); // Reset timer to 10 seconds for the next question
    } else {
      setShowResult(true);
    }
  }

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  }

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setTimer(10);
  }

  return (
    <div className='quizbody'>
      <div className='navBarquiz'>
        <div className='navListsquiz flex'>
          <div className='navItemquiz1234'>
            <h2><b>{language === 'en' ? 'QUIZ PORTAL' : language === 'hi' ? 'क्विज़ पोर्टल' : 'কুইজ পোর্টাল'}</b></h2>
          </div>
          <LanguageOption onChange={handleChangeLanguage} />
          <a href='/'><input type="button" value={language === 'en' ? 'Log out' : language === 'hi' ? 'लोग आउट' : 'লগ আউট'} id="logout-button" /></a>
        </div>
      </div>

      <div className="quizcontainer">
        <div className="timer">
          {language === 'en' ? 'Time left' : language === 'hi' ? 'बचा हुआ समय' : 'বাকি সময়'}: {timer} {language === 'en' ? 'seconds' : language === 'hi' ? 'सेकंड' : 'সেকেন্ড'}
        </div>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} language={language} />
        ) : (
          <>
            <div className="quizquestion">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{QuizData[currentQuestion][`question_${language}`]}</span>
            </div>
            <div className="option-container1234">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn1234 ${clickedOption === i + 1 ? "checked" : null}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option[`text_${language}`]}
                  </button>
                )
              })}
            </div><br></br><br></br>
            <input type="button" value={language === 'en' ? 'Next' : language === 'hi' ? 'अगला' : 'পরবর্তী'} id="next-button" onClick={changeQuestion} />
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz;



