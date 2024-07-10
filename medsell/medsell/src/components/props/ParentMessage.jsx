import React, { useState } from 'react';
import MessageChild from './ChildMessage';

const MessageParent = () => {
  // Use the useState hook to manage a string state (message)
  const [message, setMessage] = useState('Hello, World!');

  // Function to update the message
  const updateMessage = () => {
    setMessage('Have a great day!');
  };

  return (
    <div>
      {/* Render the child component, passing the message state and update function as props */}
      <MessageChild message={message} updateMessage={updateMessage} />
      
      {/* Render a button that updates the message when clicked */}
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default MessageParent;
