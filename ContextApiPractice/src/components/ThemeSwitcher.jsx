import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const bgClass = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${bgClass} transition-all duration-500`}>
            <h1 className="text-3xl font-bold mb-4">Current Theme: {theme}</h1>
            <button
                onClick={toggleTheme}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
                Toggle Theme
            </button>
        </div>
    )
}
export default ThemeSwitcher