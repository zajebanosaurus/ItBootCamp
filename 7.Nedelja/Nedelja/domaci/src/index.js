import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Card from './components/Card';


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
      <Card url="https://i.pinimg.com/originals/cc/6a/92/cc6a920bdc9893ef5ade08f018d73d66.png" text="Scary emoji"/>

    </div>
  )

  
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
