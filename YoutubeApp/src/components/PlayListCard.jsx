import React from 'react'
import {Link} from 'react-router-dom'
function PlayListCard({ id, image, title, channelTitle, publishedDate, description }) {
    return (
        <Link to={`/PlayList/${id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-full"   >
            <img
                src={image}
                alt="image"
                className="w-full h-48   sm:h-56 md:h-64   object-cover"
            />
            <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {channelTitle}
                </p>
                <p className=" text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2  ">
                    {description}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    {publishedDate}  </p>
            </div>
        </div>
        </Link>
    )
}
export default PlayListCard