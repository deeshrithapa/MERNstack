import React from 'react'

const CounterChildComponent = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p>Current Count: {counter}</p>
      <button  className= {'px-4 py-4 mb-4 ml-4 bg-red-300 hover:bg-red-800 hover:text-white'} onClick={increment}>Increment in Child</button>
      <button className= {'px-4 py-4 mb-4 ml-4 bg-red-300  hover:bg-red-800 hover:text-white'} onClick={decrement}>Decrement in Child</button>
    </div>
  )
}

export default CounterChildComponent