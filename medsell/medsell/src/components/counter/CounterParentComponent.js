import React, {useState} from 'react'
import CounterChildComponent from './CounterChildComponent';

const CounterParentComponent = () => {
    const [counter, setCounter] = useState(0);
  
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    const decrement = () => {
      setCounter(prevCounter => prevCounter - 1);
    };
  
    return (
      <div  className='mb-5 ml-5'>
        <CounterChildComponent counter={counter} increment={increment} decrement={decrement} />
        <button className= {'px-4 py-4 mb-4 ml-4 bg-red-300  hover:bg-red-800 hover:text-white'} onClick={increment}>Increment in Parent</button>
        <button className= {'px-4 py-4 mb-4 ml-4 bg-red-300  hover:bg-red-800 hover:text-white'} onClick={decrement}>Decrement in Parent</button>
      </div>
    );
  };

export default CounterParentComponent