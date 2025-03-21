import { useState } from 'react';
import './App.css';

function App() {
  return <Counter />;
}

export function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+ </button>
      </div>

      <p>
        <span> {count === 0 ? 'today is' : ''} </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default App;
