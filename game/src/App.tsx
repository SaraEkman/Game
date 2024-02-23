import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import { Answer } from './models/answer';
=======
import React from 'react';
import { questions } from './data';
>>>>>>> addingdata
export function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answerCard, setAnswerCard] = useState(new Answer(true, false, false))


  const handleAnswerButtonClick = (isCorrect: boolean) => {

    if (isCorrect === true) {
      setAnswerCard({ ...answerCard, correct: true, question: false, iswrong: false })
      setScore(score + 1);
    } else {
      setAnswerCard({ ...answerCard, iswrong: true, question: false, correct: false })
    }
  }

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerCard({...answerCard, question:true, correct: false, iswrong: false})
    } else {
      setShowScore(true);
    }

  }


  return (
    <>
      {answerCard.question &&
        < div className='bg-neutral-content'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{questions[currentQuestion].question}</h2>

              <div className="card-actions">
                {questions[currentQuestion].option.map((answerOption, key) => (
                  <button className="btn btn-primary"
                    key={key}
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
                <div className='flex justify-between'>
                  <div className="badge badge-info">Current score: {score}</div>
                  <div className="badge badge-secondary">Question number: {currentQuestion + 1}</div>
                </div>
              </div>
            </div>
          </div>
        </div >
      }
      {answerCard.correct &&
        < div className='bg-neutral-content'>
          <div className="card w-96 bg-green-500 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">RIGHT</h2>

              <div className="card-actions">
                <button className="btn btn-primary"
                  onClick={() => nextQuestion()}
                >
                  next question
                </button>
            
              </div>
            </div>
          </div>
        </div >
      }
      {answerCard.iswrong &&
        < div className='bg-neutral-content'>
          <div className="card w-96 bg-red-600 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">WRONG</h2>

              <div className="card-actions">

                <button className="btn btn-primary"
                  onClick={() => nextQuestion()}
                >
                  next question
                </button>

            
              </div>
            </div>
          </div>
        </div >
      }

    </>
  );
}


