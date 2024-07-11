import React from 'react';

const ChildMessageComponent = ({ message, updateMessage }) => {
  return (
    <div >
      <p >Current Message: {message}</p>
      {/* Call the updateMessage function when the button is clicked */}
      <button className= {'px-4 py-4 mb-4 bg-red-300  hover:bg-red-800 hover:text-white'} onClick={updateMessage}>Update Message in Child</button>
    </div>
  );
};

export default ChildMessageComponent;