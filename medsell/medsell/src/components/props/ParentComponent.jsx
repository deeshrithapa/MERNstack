import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // Use the useState hook to manage a boolean state
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state between true and false
  const toggleState = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      {/* Render the child component, passing the boolean state and the toggle function as props */}
      <ChildComponent isOn={isOn} toggleState={toggleState} />
      
      {/* Render a button that calls the toggle function when clicked */}
      <button onClick={toggleState}>Toggle State</button>
    </div>
  );
};

export default ParentComponent;
