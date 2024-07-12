import React from 'react'

const EventHandling = () => {
    const handleClick=() => {
        console.log("Button Clicked");
        alert("Button Clicked!");

    }
  return (
    <div>
    <h1 className='ml-4 mt-9'> Event handling</h1>
    <button onClick={()=> handleClick()} className='bg-white w-20 ml-6 '> Click Me</button>      
    </div>
  )
}

export default EventHandling
