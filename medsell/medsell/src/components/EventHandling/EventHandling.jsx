import React from 'react'

const EventHandling = ({onButtonClick}) => {
   
  return (
    <div>
    <h1 className='ml-4 mt-9'> Event handling</h1>
    <button onClick={()=> onButtonClick()} className='bg-white w-20 ml-6 '> Click Me</button>      
    </div>
  )
}

export default EventHandling
