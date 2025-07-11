import { useState } from 'react'

function App() {
  const [bgcolor, setcolor] = useState('#d9dc74ff')

  return (
      <div className="w-screen h-screen duration-700"
            style={{ backgroundColor: bgcolor }}>    
           <div className="fixed flex flex-wrap
            justify-center bottom-12 inset-x-0 px-2">            
              <div className="flex flex-wrap 
               justify-centre gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
                  <button className="outline-none px-4 py-1 text-black shdow-lg"
                    onClick={() => setcolor('red')}>
                   Red</button>
                   <button className="outline-none px-4 py-1 rounded-full text-black shdow-lg"
                    onClick={() => setcolor('green')}>
                   Green</button>
                   <button className="outline-none px-4 py-1 text-black shdow-lg"
                    onClick={() => setcolor('blue')}>
                   Blue</button>
               </div>
           </div>
     </div>
  )
}

export default App
//ok
