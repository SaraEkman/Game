import { useState } from 'react'
import './App.css'
import React from 'react';
import { questions } from './data';
export function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {

    if (isCorrect === true) {
      alert('Correct!');
      setScore(score + 1);
    } else {
      alert('Wrong.');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);

    }
  }


  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{questions[currentQuestion].question}</h2>
          <p>{currentQuestion + 1}</p>
          <div className="card-actions">
            {questions[currentQuestion].option.map((answerOption, key) => (
              <button className="btn btn-primary"
                key={key}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
            {score}
          </div>
        </div>
      </div>

    </>
  );
}


