import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
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
          path: '/all',
          element: <AllProducts />,
        },
        {
          path: '/Product/:id',
          element: <Product />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/wishlist',
          element: <WishList />,
        }
      ],
    },
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
