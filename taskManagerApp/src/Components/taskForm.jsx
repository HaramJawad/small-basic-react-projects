

import React, { useState, useEffect, useRef } from "react"

const TaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState("");
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskText.trim() === "") return;
        onAddTask(taskText)
        setTaskText("")
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6 bg-white p-4 rounded-lg shadow-lg">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="flex-1 p-2 border border-gray-300 text-black text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button
                type="submit"
                className="bg-blue-600 text-sm text-white px-4 py-2 rounded -lg shadow hover:shadow-md transition-all duration-150   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Add
            </button>
        </form>
    )
}
export default TaskForm