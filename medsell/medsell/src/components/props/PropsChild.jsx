import React from 'react';

function PropsChild({ onMessageChange }) {
  const handleClick = () => {
    const newMessage = 'Hello from Child!';
    onMessageChange(newMessage);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}

export default PropsChild;
