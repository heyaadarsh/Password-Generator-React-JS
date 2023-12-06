import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed){
      str += "0123456789";
    }
    if(charactersAllowed){
      str += "~!@#$%^&*(){}<>[]/";
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numbersAllowed, charactersAllowed, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, charactersAllowed, numbersAllowed, passwordGenerator])

  return (
    <>
      <div className='bg-white h-96 mt-24'>
      <h1 className='text-center pt-5 text-xl font-bold'>PASSWORD GENERATOR</h1>
      <h3 className=' text-blue-600 text-xs text-center ml-14 border-b-2 mr-14 pb-3'>By Aadarsh Giri</h3>
      
      <div className='text-center mt-3'>
        <h2 className='mb-4 font-semibold'>PASSWORD OUTPUT</h2>
        <input type='text' value={password} readOnly placeholder='hello' className=' bg-slate-100 text-center border-none outline-none px-4 py-3 rounded' ref={passwordRef}/>
        <button className='mt-5 bg-yellow-300 px-12 py-3 rounded font-semi-bold' onClick={copyPassword}>COPY PASSWORD</button>
      </div>
      <div className='text-center mt-6'>
      <label className='px-2'>Length: {length}</label>
        <input type='range' min="8" max="20" value={length} onChange={(e) => {
          setLength(e.target.value)
        }} />
        
      </div>
      
      <div className='text-center mt-3'>
        
        <input type='checkbox' defaultChecked={numbersAllowed} id='numberInput' onChange={() => {
          setNumbersAllowed((prev) => !prev);
        }} /> Numbers
        <span className='mx-3' ></span>
        <input type='checkbox' defaultChecked={charactersAllowed} id='characterInput' onChange={() => {
          setcharactersAllowed((prev) => !prev);
        }}/> Characters
      </div>
      
      </div>
    </>
  )
}

export default App
