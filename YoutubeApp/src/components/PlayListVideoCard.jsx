import React from 'react'

function PlayListVideoCard({ thumbnails, title, description, published, resource }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-200"  >
            <img
                src={thumbnails}
                alt="thumbnail"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2"     >{title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3"  >{description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400"   > Published: {new Date(published).toLocaleDateString()} </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" >Video Id: {resource}</p>
            </div>
        </div>
    )
}

export default PlayListVideoCard