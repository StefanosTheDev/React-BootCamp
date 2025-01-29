// Okay What are the requirements

import { useState } from 'react';

// 2 counters.
// I ahve a step counter

// and an actual counter

/// When I click the Step it will intiate how many step sthte counter willl initiate

export default function Counter() {
  // 2 states that will be changing. Steps / Counts / Dates
  const [step, setStep] = useState(1); // default to 1
  const [count, setCount] = useState(0); // default to 0
  const [date, setDate] = useState(() => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + handleNext()); // Add 1 day
    return tomorrow.toLocaleDateString(); // Format it as a readable date
  });

  function handleNext() {
    setStep((s) => s + 1);
  }
  return <div>{date}</div>;
}
