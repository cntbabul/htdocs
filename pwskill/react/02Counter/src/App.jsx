import { useState } from "react";
import './App.css'

function App() { 
  
 const [counter, setcounter] = useState(5) 

  //let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1
    setcounter(counter +1)
  }
  const substractValue = () => {
    setcounter(counter - 1)
    
  }
  
  
  return (
    <>
    <h1>chai aur code</h1>
    <h2>hello babul</h2>

   <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={substractValue}>Substract Value</button>
    </>
  )
}

export default App
