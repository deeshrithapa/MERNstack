import React, { useEffect } from 'react';

const ChildComponent = ({ isOn }) => {
  // Provide feedback when the state is updated
  useEffect(() => {
    console.log(`The switch is now ${isOn ? 'ON' : 'OFF'}`);
  }, [isOn]);

  return (
    <div>
      {/* Display a message based on the boolean state */}
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ChildComponent;
