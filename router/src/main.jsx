import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { Home, About, Login, Contact,User, Github } from './Components';

const router= createBrowserRouter([
  // createRoutesFromElements( <Route> </Route>)
  {   
    path:'/',
    element: <Layout/>,
    children:[
      {path:"", element:<Home/>},
      {path:"About", element:<About/>},
      {path:"Login", element:<Login/>},
      {path:"contact", element:<Contact/>},
      {path:"User/:userId", element:<User/>},
      {path:"Github", element:<Github/>}
      ]
  }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
