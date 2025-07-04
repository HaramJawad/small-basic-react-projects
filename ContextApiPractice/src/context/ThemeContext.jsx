import {createContext,useState,useEffect} from 'react'
export const ThemeContext=createContext()

export const ThemeProvider=({children})=>
{
    const getInitialTheme=()=>
        {
            const savedTheme=localStorage.getItem('theme');
            return savedTheme ? savedTheme : 'light';
        }
    const [theme,setTheme]=useState(getInitialTheme)
    useEffect( ()=>
    {
    localStorage.setItem('theme',theme)
    },[theme])
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}