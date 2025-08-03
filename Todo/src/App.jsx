import { useState,  useEffect} from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/Todoitem';

function App() {
     const [todos, setTodos] = useState([]);

     const addTodo=(todo)=>{
        // In the original code, `Todo` was used instead of `todo`.
        setTodos( (prev)=>[ {id: Date.now(), ...todo},...prev ] )
      };
      const updateTodo=(id, todo)=>{
        setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
      }
      const deleteTodo=(id)=>{
        setTodos( (prev) => prev.filter( (prevTodo) => prevTodo.id !== id))
      }
      const toggleComplete=(id)=>{ 
        setTodos( (prev) =>
             prev.map( (prevTodo) =>
                 (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
      }
     

//local storage integration        
 useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []); // Runs once when the app loads

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
     

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> 
     <div className="bg-slate-900 min-h-screen py-8 font-sans">
                <div className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm shadow-2xl rounded-2xl p-6 text-white">
                    <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-6">
                        {/* Todo form goes here */} 
                          <TodoForm/>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div className="w-full" key={todo.id}>
                                <TodoItem  todo={todo} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
