import React, { useState } from 'react';
import ChildMessageComponent from './ChildMessageComponent';

const ParentMessageComponent = () => {
  // Initialize state with a default message
  const [message, setMessage] = useState('Hello, World!');

  // Function to update the message state
  const updateMessage = () => {
    setMessage('have a good day!');
  };

  return (
    <div  className='mb-5 ml-5'>
      <ChildMessageComponent message={message} updateMessage={updateMessage} />
      <button className= {'px-4 py-4 mb-4 bg-red-300  hover:bg-red-800 hover:text-white'} onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ParentMessageComponent;