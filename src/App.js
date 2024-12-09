import './App.css';

import React, { useState, useEffect } from 'react';

function Counter({ initialCount }) {
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

function App() {
  return (
    <div>
      <h1>useEffect</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;


