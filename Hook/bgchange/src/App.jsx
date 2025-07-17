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

                  <button className="outline-none px-4 py-2 rounded-full text-black shadow-lg"                         
                    onClick={() => setcolor('red')}
                    style={{ backgroundColor: 'red' }}>
                   Red</button>
                                     
                   <button className="outline-none px-4 py-2 rounded-full text-lavender shadow-lg"
                    onClick={() => setcolor('lavender')}
                    style={{ backgroundColor: 'lavender' }}>
                   Lavender</button>

                   <button className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
                    onClick={() => setcolor('green')}
                    style={{ backgroundColor: 'green' }}>
                   Green</button>
                   
                  <button className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
                    onClick={() => setcolor('white')}
                    style={{ backgroundColor: 'white' }}>
                   White</button>

                   <button onClick={() => setcolor('blue')}
                    className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
                    style={{ backgroundColor:'blue'}}>
                   Blue</button>

                   <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
                    onClick={() => setcolor('black')}
                    style={{ backgroundColor: 'black' }}>
                   Black</button>
                   
               </div>
           </div>
     </div>
  )
}

export default App
//ok
