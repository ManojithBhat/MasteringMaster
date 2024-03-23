import HeaderQuiz from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import { useState } from 'react';
import './indexQuiz.css'

function App() {
  const [startQuiz,setStartQuiz] = useState(false);
  return (
    <>
      <HeaderQuiz />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;