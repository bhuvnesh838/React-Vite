import './App.css'
import Card from './Components/Card.jsx'
function App() {


  return (
    <>  
      <h1 className='bg-gray-400 text-black rounded-xl'> Council Of Man</h1>
      <br />
      
      <Card hero="Daredavil"  ability="Superhuman Like Listning Ability" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSHUCJ98hYy7_MHRma8tYkzQGtWvpz1nI4w&s"/>
      <br />
      <Card  hero="Punisher" ability="Hand To Hand Combat Expert" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifF1kORItnnmJsl3UeoyDbHgNd5n-63JC7g&s"/>
    </>
  )
}

export default App
