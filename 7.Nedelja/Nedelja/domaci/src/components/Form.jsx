import React from 'react'

const Form = ({text, input}) => {
    return (
    <>
      <input type="text" onChange={input}></input>
      <button onClick={text}>Show Time</button>
      
    </>
    )
}
export default Form
