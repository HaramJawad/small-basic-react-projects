import React from 'react'
import {Link} from 'react-router-dom'
function VideoCard({ id,img, title, channelTitle, publishedAt }) {
    return (
        <Link to={`/Video/${id}`} >
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full  p-2"  >
            <img 
            src={img} 
            alt="video" 
            className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-3">
            <h1 className="text-base font-semibold text-gray-800 line-clamp-2">{title}</h1>
            <p  className="text-sm text-gray-600 mt-1" >{channelTitle}</p>
            <p className="text-xs text-gray-500"  >{publishedAt}</p>
            </div>
        </div>
        </Link>
    )
}

export default VideoCard