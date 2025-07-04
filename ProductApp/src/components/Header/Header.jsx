import React from 'react'
import Container from '../Container/Container'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Context/CartContext';
function Header() {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const navItems = [
        {
            name: 'Home',
            slug: '/'
        },
        {
            name: 'AllProducts',
            slug: '/all'
        },
        {
             name: `Cart (${cartItems.length})`,
             slug: '/cart' 
        },
        {
            name: 'WishList',
            slug: '/wishlist'
        }
    ]
    return (
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
            <Container>
                <nav className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between py-4" >
                    <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-blue-700 tracking-tight hover:tracking-wide transition-all duration-300 ">My Product App</h1>
                    <ul className="flex flex-col md:flex-row  gap-6">
                        {navItems.map((item) =>
                            <li key={item.name}>
                                <button onClick={() => navigate(item.slug)} className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 ease-in-out"   >{item.name}</button>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header