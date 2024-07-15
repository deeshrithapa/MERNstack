import React from 'react'
import EventHandling from './EventHandling'

const EventFunctionProps = () => {
    const handleClick=() => {
        console.log("Button Clicked");
        alert("Button Clicked!");

    }
  return (
    <EventHandling onButtonClick={handleClick} />
  )
}

export default EventFunctionProps
