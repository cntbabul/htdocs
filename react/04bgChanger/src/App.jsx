import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
  
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
    <div className='fixed flex flex-wrap justify-center inset-x-0'> <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl'>
      <button onClick={() =>setColor("red")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}
      >Red</button>

<button onClick={() =>setColor("green")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}
      >Green</button>

<button onClick={() =>setColor("blue ")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"blue"}}
      >blue</button>

<button onClick={() =>setColor("Olive")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Olive"}}
      >Olive</button>

<button onClick={() =>setColor("Gray")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Gray"}}
      >Gray</button>

<button onClick={() =>setColor("Yellow")}
className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
      style={{backgroundColor:"Yellow"}}
      >Yellow</button>

<button onClick={() =>setColor("Pink")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Pink"}}
      >Pink</button>

<button onClick={() =>setColor("Purple")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Purple"}}
      >Purple</button>

<button onClick={() =>setColor("Orange")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Orange"}}
      >Orange</button>

      <button onClick={() =>setColor("White")}
className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
      style={{backgroundColor:"White"}}
      >White</button>

<button onClick={() =>setColor("Black")}
className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Black"}}
      >Black</button>



    </div>
     </div>
    </div>
  
  )
}

export default App
