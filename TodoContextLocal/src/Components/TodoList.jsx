import { useContext } from "react";
import { TodoContext } from '../Context/TodoContext.jsx';
import TodoItem from '../Components/TodoItem';
const TodoList = () => {
    const { todos } = useContext(TodoContext)
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">No todos yet!</p>
    }
    return (
        <ul className="space-y-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
export default TodoList;