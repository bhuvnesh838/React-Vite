import react, { useState, useEffect} from 'react'
import './App.css'

function App() {
 const[count, Counter] =useState (1)
 ///let count=5;
   const addValue =()=>{ 
     Counter(count+1);
  }  

  const removeValue =()=>{
    if(count<1) return;
    Counter(count-1);
  }
  return (
    <>
      <h1>Vite Project</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add Value   </button> 
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
//updated
