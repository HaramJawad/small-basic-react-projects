import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import AllJokes from "./pages/AllJokes";
import Joke from "./pages/Joke";
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/all',
          element:<AllJokes/>,
        },
        {
          path:'/Joke/:id',
          element:<Joke/>,
        },
      ],
    },
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
