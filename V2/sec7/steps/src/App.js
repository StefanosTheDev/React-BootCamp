import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export function App() {
  const [step, setStep] = useState(1); // useState is what we call a hook. All React functions are hooks with then they have "use"
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // This is more correct. Doing with the callback. Especially if we ant the current value
    if (step > 1) setStep((currStep) => currStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      // This will only come in once.
      setStep((currStep) => currStep + 2);
      setStep((currStep) => currStep + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}> {messages[step - 1]} </StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span> Left </span> Previous{' '}
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span> right </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step {step}</h3>
      {children}
    </p>
  );
}
// Children is a pre defiend key word Take all the content and all the JSX and pass them in and render it
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {' '}
      {children}
    </button>
  );
}
export default App;
