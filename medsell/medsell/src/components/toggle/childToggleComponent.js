import React from 'react'

const ChildToggleComponent = ({ isOn, toggleSwitch }) => {
    return (
        <div>
          <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
          <button className= {'px-4 py-4 mb-4 bg-red-300  hover:bg-red-800 hover:text-white'}onClick={toggleSwitch}>Toggle switch in Child component</button>
        </div>
      );
}

export default ChildToggleComponent