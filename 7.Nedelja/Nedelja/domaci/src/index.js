import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';


const App = () =>{
  const [par, setPar] = useState('Time:')
  const [inputPar, setInputPar] = useState('')

  const change = () => {
    setPar(new Date().toLocaleTimeString('sr-RS'))
    setInterval(change, 1000)
  }

  const input = (event) =>{
    setInputPar(event.target.value)
  }

  return (
    <div>
      <Form text={change} input={input} />
      <p>Write: {inputPar}</p>
      <p>{par}</p>

    </div>
  )

  
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
