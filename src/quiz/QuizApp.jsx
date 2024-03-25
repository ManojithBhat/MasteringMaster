import HeaderQuiz from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Starter from './components/Starter.jsx';
import { useState } from 'react';
import './indexQuiz.css'

function App() {
  const [startQuiz,setStartQuiz] = useState(false);
  return (
    <>
      <HeaderQuiz />
      <main>
        {!startQuiz && <Starter setStartQuiz = {setStartQuiz}/>}
        {startQuiz && <Quiz />}
      </main>
    </>
  );
}

export default App;