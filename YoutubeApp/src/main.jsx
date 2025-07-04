import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import App from './App.jsx'
import Video from './pages/Video'
import PlayList from './pages/PlayList'
import PlayLists from './pages/PlayLists'
import Videos from './pages/Videos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
            path: '/Videos',
            element: <Videos/>
        },
        {
          path: '/playlist',
          element: <PlayLists/>,
        },
        {
          path: '/Video/:id',
          element: <Video/>,
        },
        {
          path: '/PlayList/:id',
          element: <PlayList/>,
        }
      ]

    }
  ]
)
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
)
