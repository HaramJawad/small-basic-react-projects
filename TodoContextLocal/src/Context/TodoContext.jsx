import { createContext, useState, useEffect } from 'react';
export const TodoContext = createContext();
const getInitialTodos = () => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
}
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(getInitialTodos)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(), // unique id
            text,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );

}