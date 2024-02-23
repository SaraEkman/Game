import { useState } from 'react'
import './App.css'
 export function App() {
  const questions = [
    {
      question: "What is the average lifespan of a domestic cat?",
      option: [
        {answerText: "5-10 years", isCorrect: false}, 
        {answerText: "10-15 years", isCorrect: false}, 
        {answerText: "15-20 years", isCorrect: true}
      ],
      // "answer": "15-20 years"
    },
    {
      question: "Which cat is known for being hairless?",
      option: [
        {answerText: "Maine Coon", isCorrect: false}, 
        {answerText: "Sphynx", isCorrect: true}, 
        {answerText: "Persian", isCorrect: false}
      ],
      // "answer": "Sphynx"
    },
    {
      question: "What is a group of cats called?",
      option: [
        {answerText: "A pack", isCorrect: false}, 
        {answerText: "A clowder", isCorrect: true}, 
        {answerText: "A pride", isCorrect: false}
      ],
      // "answer": "A clowder"
    },
    {
      question: "Which cat breed is the largest?",
      option: [
        {answerText: "Siamese", isCorrect: false}, 
        {answerText: "Siberian", isCorrect: false}, 
        {answerText: "Maine Coon", isCorrect: true}
      ],
      // "answer": "Maine Coon"
    },
    {
      question: "How many whiskers does a cat typically have?",
      option: [
        {answerText: "12", isCorrect: false}, 
        {answerText: "24", isCorrect: true}, 
        {answerText: "36", isCorrect: false}
      ],
      // "answer": "24"
    },
  ]

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [showScore,setShowScore] = useState(false);
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
    <h2 className="card-title">CATS!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

      <h1>Cat Quiz</h1>
      <div className="question-section">
        <h2 className='text-2xl'>
          <span>{currentQuestion + 1}</span>
          <br></br>Question:{questions[currentQuestion].question}
        </h2>
        <ul>
          {questions[currentQuestion].option.map((answerOption, key) => (
            <li
              key={key}
              onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
            >
              {answerOption.answerText}
            </li>
          ))}
        </ul>
       {score} 
      </div>
    </>
  );
}


