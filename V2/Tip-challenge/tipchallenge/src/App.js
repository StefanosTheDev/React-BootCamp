import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState(''); // Start as an empty string for input
  const [percentage, setPercentage] = useState(10); // Default to 10%

  return (
    <div className="calculator">
      <BillInput bill={bill} onChangeBill={setBill} />
      <SelectPercentage
        percentage={percentage}
        onPercentageChange={setPercentage}
      />
      <Output bill={bill} percentage={percentage} />
    </div>
  );
}

function SelectPercentage({ percentage, onPercentageChange }) {
  const percentageOptions = [10, 15, 20];

  return (
    <div className="percentage-change">
      <label>
        How did you like the service?
        <select
          value={percentage} // Keeps the dropdown in sync
          onChange={(e) => onPercentageChange(Number(e.target.value))}
        >
          {percentageOptions.map((val) => (
            <option value={val} key={val}>
              {val === 10
                ? `I had an okay service: ${val}%`
                : val === 15
                ? `Service was actually good!: ${val}%`
                : val === 20
                ? `This was the best time ever!:  ${val}%`
                : val}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function BillInput({ bill, onChangeBill }) {
  return (
    <div className="bill">
      <h3>
        What is the total bill?{' '}
        <input
          type="number"
          value={bill}
          onChange={(e) => onChangeBill(Number(e.target.value) || '')} // Convert to number
        />
      </h3>
    </div>
  );
}

// Dynamically calculate tip instead of storing it in state
function Output({ bill, percentage }) {
  const tip = Math.floor(Number(bill) * (percentage / 100));
  const total = Number(bill) + tip || 0;

  return <div>{`You Pay ${total} (${bill} + ${tip} tip)`}</div>;
}

export default App;
