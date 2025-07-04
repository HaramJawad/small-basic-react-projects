
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Context/TodoContext.jsx";
import './App.css'

function App() {


  return (

    <TodoProvider>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center" >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" >
          <h1 className="text-2xl font-bold mb-4 text-center">
            TO-DO LIST
          </h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
