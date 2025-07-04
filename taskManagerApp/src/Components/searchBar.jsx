import React from 'react';
const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="mb-4 mt-4 ">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search Tasks...."
                className="w-64 p-2 border border-gray-400 text-sm text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
export default SearchBar