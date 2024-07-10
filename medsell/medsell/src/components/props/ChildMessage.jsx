import React, { useEffect } from 'react';

const MessageChild = ({ message }) => {
  
  useEffect(() => {
    console.log(`The message is now: ${message}`);
  }, [message]);

  return (
    <div>
      {}
      <p>{message}</p>
    </div>
  );
};

export default MessageChild;
