import React, { useState } from 'react';
import PropsChild from './PropsChild';

function PropsParent() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <PropsChild onMessageChange={handleMessageChange} />
    </div>
  );
}

export default PropsParent;
