import { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext.jsx';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 font-bold text-lg"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
