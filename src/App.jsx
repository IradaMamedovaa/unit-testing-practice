import { useState } from 'react'
import './App.css'
import { add } from './utils/math';

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);


  return (
    <>
      <h1>Unit testing start</h1>
      <div className='calculatorApp'>
        <form>
          <input type='number' id='num1' onChange={(e)=> setNum1(e.target.value)} value={num1}/>
          <input type='number' id='num2' onChange={(e)=> setNum2(e.target.value)} value={num2}/>
          <button
            onClick={(e) => {
              e.preventDefault()
              const sum = add([parseInt(num1), parseInt(num2)])
              setCount(sum)
            }}
          >
            Add
          </button>
          <h2>Result: {count}</h2>
        </form>
      </div>
    </>
  )
}

export default App
