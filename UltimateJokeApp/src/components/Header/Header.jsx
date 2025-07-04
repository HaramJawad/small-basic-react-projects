import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../index'
function Header() {
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: '/',
        },
        {
            name: 'allJokes',
            slug: '/all',
        },
    ]

    return (
        <header className=" py-4 shadow-lg text-white  bg-gradient-to-r from-indigo-600 to-purple-600 ">
            <Container>
                <nav className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-wide">Ultimate Joke App 😂</h1>
                    <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-3 md:mt-0" >
                        {navItems.map((item) =>
                            <li key={item.name}>
                                <button className="px-4 py-2 text-white rounded-full hover:bg-white hover:text-indigo-600 transition font-medium" onClick={() => navigate(item.slug)}>{item.name}</button>
                            </li>

                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
export default Header