import React, { useEffect } from 'react';

const CounterChild = ({ count, incrementCount, decrementCount }) => {
  // Provide feedback when the count is updated
  useEffect(() => {
    console.log(`The count is now ${count}`);
  }, [count]);

  return (
    <div>
      {/* Display the current count */}
      <p>Current Count: {count}</p>
    </div>
  );
};

export default CounterChild;
