import { useState, useCallback, useEffect} from 'react';


import './App.css'

function App() {
   const [length, setLength] = useState(8)
  Const [numberAllowed, setNumberAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);
   const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}()~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass = str.charAt(char)
      
    }
    setPassword(pass)
 }, [lenght, numberAllowed, charAllowed, setPassword])

useEffect(() => {
  passwordGenerator()
},[lenght, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 py-3 text-orange-500 bg-#212121-700'>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1> </div>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 py-3 text-orange-500 bg-yellow-700'>
    <div className='flex shadow rounded-lg  bg-gray-700 overflow-hidden md-4'>
      <input type="text"
      //value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly 
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div
        className='flex text-sm gap-x-2'>
          <div
                className='flex items-center ga-x-1'>
                  <input type="range" 
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setLength(e.target.value)}}/>
                  <label> Lenght:{length}</label>
                </div>
                <div className='flex text-sm gap-x-2'>
                  <input type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev); 
                }} />
                <label htmlFor="characterInput">
                  Characters
                </label>
                </div>
        </div>
    </div>
    </>
  )
}

export default App
