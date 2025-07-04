import { useState, useEffect, useCallback } from 'react'
const UseTasks = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, []);
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),  // Creating a unique id for the task using the current timestamp.
      text: taskText,  // The actual task text passed as argument to the function.
      completed: false // Initially, the task is not completed.
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);

  }
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, [])

  const toggleComplete = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [])
  const editTask = useCallback((id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: newText } : task
      )
    )
  }, [])
  return {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    editTask
  }
}
export default UseTasks