import React from 'react'

const GreetComponent = (props) => {
    // console.log(props);
    const styles={
        div:{
            backgroundColor: 'gray',
            padding: '10px',
            margin: '30px',
            borderRadius: '5px',
            boxShadow: '0 0 5px 1px lightblue'
        }
    }
  return (
    <div style={styles.div}>
      <h1 className="text-pink-800"> Greet Component</h1>
      <p>Hello, hieeeeeweewwewwwwweeee {props.name} {props.caste}</p>
    </div>
  )
}

export default GreetComponent
