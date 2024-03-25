import React from 'react'
import questions from '../questions'

function Starter({setStartQuiz}) {

    const handleStartQuiz = () => {
        setStartQuiz(true);
    }

  return (
    <>
      <div id="summary">
      <h2>Quick Quiz</h2>
      <p className='description'>Check your understanding on Master method</p>
      <div id="summary-stats">
        <p>
          <span className="number">{questions.length}</span>
          <span className="text">Number of questions</span>
        </p>
        <p>
          <span className="number">60s</span>
          <span className="text">Time</span>
        </p>
      </div>
      <button onClick={handleStartQuiz} className="btn inline-flex items-center px-6 py-3 font-medium bg-[#dadae2] rounded-lg text-stone-800">
        Start
        </button>
      </div>
    </>
  )
}

export default Starter