import React, { useState } from 'react';
import CounterChild from './ChildNumber';

const CounterParent = () => {
  // Use the useState hook to manage a number state (counter)
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      {/* Render the child component, passing the counter state and the increment/decrement functions as props */}
      <CounterChild count={count} incrementCount={incrementCount} decrementCount={decrementCount} />

      {/* Render buttons that call the increment and decrement functions when clicked */}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default CounterParent;
