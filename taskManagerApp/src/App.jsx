import { useState, useEffect, useCallback } from 'react'
import Header from './Components/header'
import TaskForm from './Components/taskForm'
import TaskList from './Components/taskList'
import UseTasks from './CustomHooks/useTasks'
import SearchBar from './Components/searchBar';
import SortOption from './Components/sortOption';
import './App.css'

const App = () => {
  const { tasks, addTask, deleteTask, toggleComplete, editTask } = UseTasks();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('date');
  const sortTasks = (tasks, sortOption) => {
    switch (sortOption) {
      case 'date':
        return [...tasks].sort((a, b) => a.id - b.id);
      case 'completed':
        return [...tasks].sort((a, b) => a.completed - b.completed);
      case 'alphabetical':
        return [...tasks].sort((a, b) => a.text.localeCompare(b.text));
      default:
        return tasks;
    }
  };
  return (
    <div className="min-h-screen bg-gray-200  flex flex-col">
      <Header />
      <div className="container mx-auto p-4 flex-grow">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={sortTasks(tasks, sortOption)}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          onEdit={editTask}
          searchTerm={searchTerm}
        />
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
        <SortOption
          sortOption={sortOption}
          setSortOption={setSortOption} />
      </div>
    </div>
  )
}

export default App
