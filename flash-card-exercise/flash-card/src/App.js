import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const questions = [
  {
    id: 1,
    question: 'Sample question 1?',
    answer: 'Sample answer for question 1.',
  },
  {
    id: 2,
    question: 'Sample question 2?',
    answer: 'Sample answer for question 2.',
  },
  {
    id: 3,
    question: 'Sample question 3?',
    answer: 'Sample answer for question 3.',
  },
  {
    id: 4,
    question: 'Sample question 4?',
    answer: 'Sample answer for question 4.',
  },
  {
    id: 5,
    question: 'Sample question 5?',
    answer: 'Sample answer for question 5.',
  },
  {
    id: 6,
    question: 'Sample question 6?',
    answer: 'Sample answer for question 6',
  },
];
function App() {
  return <FlashCards />;
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null); // Null because we want nothing to be selected  yet

  function handleClick(id) {
    /// If Question ID is DIFFERENT THEN the already selected ID, then return the ID. if not set it to null
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          // we have ot have it as a callback so it doesnt call it immediatly. So react cna "REACT to this situation"
          onClick={() => {
            handleClick(question.id);
          }}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}{' '}
    </div>
  );
}

export default App;
