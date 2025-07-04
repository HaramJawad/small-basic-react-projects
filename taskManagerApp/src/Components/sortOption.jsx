import React from "react"
const sortOption = ({ sortOption, setSortOption }) => {
    return (
        <div className="mb-4">
            <label htmlFor="sortTasks" className="mr-2 text-sm text-gray-700 font-medium">Sort by:</label>
            <select
                id="sortTasks"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 bg-white border border-gray-300 text-sm text-gray-700 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="date">Date</option>
                <option value="completed">Completed</option>
                <option value="alphabetical">Alphabetical</option>
            </select>
        </div>
    )
}
export default sortOption