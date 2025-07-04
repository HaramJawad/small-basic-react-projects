
import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    const handleEdit = () => {
        if (isEditing) {
            onEdit(task.id, editedText)
        }
        setIsEditing(!isEditing);
    }
    return (
        <div
            className={`flex justify-between items-center p-4 border rounded-lg ${task.completed ? "bg-green-100" : "bg-white"
                }`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 text-black rounded-lg"
                />
            ) : (
                <span className={`text-sm  text-black ${task.completed ? "line-through" : ""}`} >{task.text}</span>
            )}
            <div className="space-x-3 ml-4">
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className="px-3 py-2 bg-yellow-500 text-sm text-white rounded-lg  shadow hover:shadow-md transition-all duration-150    hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 "
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="px-3 py-2 bg-red-600 text-sm text-white rounded-lg  shadow hover:shadow-md transition-all duration-150    hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Delete
                </button>
                <button
                    onClick={handleEdit}
                    className="px-3 py-2 bg-blue-500 text-sm text-white rounded-lg  shadow hover:shadow-md transition-all duration-150   hover:bg-blue-600">
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    );
};

export default TaskItem;