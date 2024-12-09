import React, { useState, useEffect } from 'react';

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = `Count: ${count} | Step: ${step}`;
  }, [count, step]);

  function handleIncrement() {
    setCount(count + step);
  }

  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }

  return (
    <div>
      <h1>{count}</h1>
      <input type="number" value={step} onChange={handleStepChange} />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}