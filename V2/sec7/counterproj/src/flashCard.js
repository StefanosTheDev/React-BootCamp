import { useState } from 'react';
import './App.css';

export function FlashCard() {
  // null is for nothing to be selected in the beginining.
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {question.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

const question = [
  { id: 2000, question: 'Hello', answer: 'Controlled E' },
  { id: 2001, question: 'Hi there', answer: 'Managed E' },
  { id: 2002, question: 'Greetings', answer: 'Regulated E' },
  { id: 2003, question: 'Howdy', answer: 'Guided E' },
  { id: 2004, question: 'Salutations', answer: 'Supervised E' },
];
