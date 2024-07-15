import React from 'react'

const ChildComponent = ({onButtonClick}) => {
  return (
    <div>
   <button onClick={onButtonClick}>Click Me</button>
      
    </div>
  )
}

export default ChildComponent
