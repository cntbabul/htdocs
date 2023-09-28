import { useState } from 'react'

import './App.css'

function App() {
  let counter = 15
  const addValue = () =>{
    console.log("Clicked", counter);
    counter = counter + 1
  }
  return (
    <>
    <h1>chai aur 02</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}>Add Value: {counter}</button><br />
    <button>Remove Value: {counter}</button>

    </>
  )
}

export default App
