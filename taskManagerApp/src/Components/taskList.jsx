import React from "react";
import TaskItem from "./taskItem";
const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit, searchTerm }) => {
    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="task-list space-y-2">
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}

                />
            ))
            }
        </div>
    )
}
export default TaskList