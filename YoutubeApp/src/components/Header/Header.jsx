import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from "../Container/Container.jsx"
function Header() {
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: '/'
        },
        {
            name: 'Videos',
            slug: '/videos',
        },
        {
            name: 'PLayList',
            slug: '/playlist',
        },
    ]
    return (
        <div className="bg-white shadow-md fixed top-0 z-50 left-0 w-full">
            <Container>
                <header className="flex items-center justify-between py-4">
                <div className="text-2xl font-bold text-red-600 curser-pointer">MyYouTube</div>
                    <nav>
                        <ul className="flex gap-6 text-gray-800 font-medium "  >
                            {navItems.map((item) => (
                                <li key={item.name} onClick={() =>  navigate(item.slug) }  className="cursor-pointer hover:text-red-600 transition " >{item.name}</li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </Container>
        </div>
    )
}

export default Header