import React from 'react'
import PlayListCard from "./PlayListCard"
function AllPlayLists({ playlists }) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">🎵 All Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {playlists.map((playlist, index) =>
      (
        <PlayListCard
          id={playlist.id}
          image={playlist?.snippet?.thumbnails?.high?.url}
          title={playlist?.snippet?.title}
          channelTitle={playlist?.snippet?.channelTitle}
          publishedDate={playlist?.snippet?.localized?.publishedAt}
          descripion={playlists?.snippet?.description}
        />
      ))}
      </div>
    </div>
  )
}
export default AllPlayLists