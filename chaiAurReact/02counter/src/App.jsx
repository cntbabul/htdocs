import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Chai aur React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add Value
        </button>
       </div>

       <div className="card">
        <button >
          Count = {count}
        </button>
       </div>


       <div className="card">
        <button onClick={() => setCount((count) => count -1)}>
          Remove value
        </button>
       </div>
    </>
  )
}

export default App
