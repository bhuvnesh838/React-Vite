import React from 'react';
import './App.css'
import UserContextProvider from './Context/UserContextProvider';
import Login from './Component/Login';
import Profile from './Component/Profile'; 

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold text-center">React Context API Project</h1> <br />

     <Login/>
     <Profile/>
      
    </UserContextProvider>
  )
}

export default App;
