import React from 'react'
import VideoCard from "./VideoCard.jsx"
function AllVideos({ videos }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {videos.map((video, index) => (
                <VideoCard 
                key={index} 
                id={video.items.id}
                img={video.items.snippet.thumbnails.medium.url} 
                title={video.items.snippet.title}
                 channelTitle={video.items.snippet.channelTitle}
                  publishedAt={new Date(video.items.snippet.publishedAt).toLocaleDateString()} 
                  />
            ))}
        </div>

    )
}

export default AllVideos