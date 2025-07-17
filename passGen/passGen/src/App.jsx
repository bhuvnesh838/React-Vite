import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
 const[len, setLen]=useState(4)
 const [num, setNum] = useState(false)  
 const [charr, setChar] = useState(false)
 const[password, setPassword] = useState("")


 const passGenerate = useCallback( ()=>{ 
  let pass="";
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if(num) str += "0123456789";
  if(charr) str += "!@#$%^&*()_+[]{}|;:;'<>,.?/";
  
  for(let i = 0; i < len; i++){
    let charIndex = Math.floor(Math.random() * str.length);
    pass += str.charAt(charIndex);
  }
   setPassword(pass); 
 }, [len, num, charr, setPassword ])
 
  // useCallback is used to memoize the function so that it does not get recreated on every render
useEffect(()=>{passGenerate()},
  [len, num, charr, setPassword, passGenerate])


  //useRef to highlight the password while copying
const passRef = useRef(null)
const copyToClip = useCallback(() => {
   passRef.current.select();
  window.navigator.clipboard.writeText(password)
}, [password]) 

  return (
    <>
      <h1 className="text text-white text-top">Passward Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8 text-white-500 bg-gray-700'>
        <div className='flex flex-col items-center justify-center p-4'>
           <input type="text"
                  value={password}
                  className='w-full p-3 mb-3 text-center bg-gray-800 text-white rounded-lg outline-none'
                  placeholder='password'
                  readOnly
                  ref={passRef}
           />
<button
  onClick={copyToClip}
  className='mt-2 w-full py-2 bg-blue-700 hover:bg-blue-800 transition-colors duration-200 text-white rounded-lg'>
  Copy
</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="text" 
                   min={8}
                   maxx={100}
                   value={len}
                   className='cursor-pointer w-16 p-2 bg-gray-800 text-white rounded-lg outline-none'
                   onChange={(e)=>setLen(e.target.value)}
                />
            <label >Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                   checked={num}
                   id='num'
                   onChange={()=>{setNum((prev)=>!prev);}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                   checked={charr}
                   id='char'
                   onChange={()=>{
                    setChar((prev)=>!prev);
                   }}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App


// import { useState, useCallback, useEffect } from 'react'
// import './App.css'

// function App() {
//   const [len, setLen] = useState(12)
//   const [num, setNum] = useState(false)
//   const [charr, setChar] = useState(false)
//   const [password, setPassword] = useState("")

//   const passGenerate = useCallback(() => {
//     let pass = ""
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     if (num) str += "0123456789"
//     if (charr) str += "!@#$%^&*()_+[]{}|;:;'<>,.?/"

//     for (let i = 0; i < len; i++) {
//       let charIndex = Math.floor(Math.random() * str.length)
//       pass += str.charAt(charIndex)
//     }
//     setPassword(pass)
//   }, [len, num, charr, setPassword])

//   useEffect(() => {
//     passGenerate()
//   }, [len, num, charr, passGenerate])

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center text-white mt-6">Password Generator</h1>

//       <div className='w-full max-w-md mx-auto mt-6 p-6 rounded-xl bg-gray-800 text-white shadow-lg'>
//         {/* Display password */}
//         <div className='mb-4'>
//           <input
//             type="text"
//             value={password}
//             readOnly
//             className='w-full p-3 text-center bg-gray-900 text-white rounded-lg outline-none'
//             placeholder='Your password'
//           />
//           <button className='mt-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg'>
//             Copy
//           </button>
//         </div>

//         {/* Controls */}
//         <div className='space-y-4'>
//           <div>
//             <label className="block mb-1 font-medium">Length: {len}</label>
//             <input
//               type="range"
//               min={1}
//               max={50}
//               value={len}
//               onChange={(e) => setLen(parseInt(e.target.value))}
//               className='w-full accent-blue-500'
//             />
//           </div>

//           <div className='flex items-center space-x-3'>
//             <input
//               type="checkbox"
//               checked={num}
//               onChange={() => setNum(prev => !prev)}
//               id='num'
//             />
//             <label htmlFor="num">Include Numbers</label>
//           </div>

//           <div className='flex items-center space-x-3'>
//             <input
//               type="checkbox"
//               checked={charr}
//               onChange={() => setChar(prev => !prev)}
//               id='char'
//             />
//             <label htmlFor="char">Include Special Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
