import { useState } from 'react'
import './App.css'
import axios from 'axios';
export function App() {
  axios.get('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_dMZTRAn7rQaxokarVKXCTIf1q9mypUBVAIPdOokdkYYlf6AtXD464OTv8Yc02FJQ'
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  const questions = [
    {
      question: "What is the average lifespan of a domestic cat?",
      option: [
        { answerText: "5-10 years", isCorrect: false },
        { answerText: "10-15 years", isCorrect: false },
        { answerText: "15-20 years", isCorrect: true }
      ],
      // "answer": "15-20 years"
    },
    {
      question: "Which cat is known for being hairless?",
      option: [
        { answerText: "Maine Coon", isCorrect: false },
        { answerText: "Sphynx", isCorrect: true },
        { answerText: "Persian", isCorrect: false }
      ],
      // "answer": "Sphynx"
    },
    {
      question: "What is a group of cats called?",
      option: [
        { answerText: "A pack", isCorrect: false },
        { answerText: "A clowder", isCorrect: true },
        { answerText: "A pride", isCorrect: false }
      ],
      // "answer": "A clowder"
    },
    {
      question: "Which cat breed is the largest?",
      option: [
        { answerText: "Siamese", isCorrect: false },
        { answerText: "Siberian", isCorrect: false },
        { answerText: "Maine Coon", isCorrect: true }
      ],
      // "answer": "Maine Coon"
    },
    {
      question: "How many whiskers does a cat typically have?",
      option: [
        { answerText: "12", isCorrect: false },
        { answerText: "24", isCorrect: true },
        { answerText: "36", isCorrect: false }
      ],
      // "answer": "24"
    },
  ]

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
          <div className="card w-96 bg-base-100 shadow-xl">
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
          <div className="card w-96 bg-base-100 shadow-xl">
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


