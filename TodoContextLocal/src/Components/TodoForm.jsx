import { useState, useContext } from 'react';
import { TodoContext } from '../Context/TodoContext.jsx'
const TodoForm = () => {
    const [text, useText] = useState('')
    const { addTodo } = useContext(TodoContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTodo(text)
        useText('');
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => useText(e.target.value)}
                className="w-full p-2 border rounded">
            </input>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    )
}
export default TodoForm