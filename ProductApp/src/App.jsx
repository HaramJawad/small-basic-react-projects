import { useState } from 'react'
import './App.css'
//import Header from "./components/Header/Header.jsx"//
import { Header } from "./components"
import { Outlet } from 'react-router-dom'
import { CartProvider } from "./Context/CartContext";
import { WishListProvider } from "./Context/WishListContext";
function App() {

  return (
    <WishListProvider>
      <CartProvider>
        <div>
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      </CartProvider>
    </WishListProvider>

  )
}

export default App
