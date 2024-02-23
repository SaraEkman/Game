import { useState } from 'react'
import './App.css'

function App() {
  const quetions =
    [
    {
      "question": "What is the average lifespan of a domestic cat?",
      "options": ["5-10 years", "10-15 years", "15-20 years"],
      "answer": "15-20 years"
    },
    {
      "question": "Which cat is known for being hairless?",
      "options": ["Maine Coon", "Sphynx", "Persian"],
      "answer": "Sphynx"
    },
    {
      "question": "What is a group of cats called?",
      "options": ["A pack", "A clowder", "A pride"],
      "answer": "A clowder"
    },
    {
      "question": "Which cat breed is the largest?",
      "options": ["Siamese", "Siberian", "Maine Coon"],
      "answer": "Maine Coon"
    },
    {
      "question": "How many whiskers does a cat typically have?",
      "options": ["12", "24", "36"],
      "answer": "24"
    },
  ]



  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const handleClick = () => { 

  }

  return (
    <>
      <h1></h1>
    <button onClick={handleClick}></button>
    </>
  )
}

export default App
