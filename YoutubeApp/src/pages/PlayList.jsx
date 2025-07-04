import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from "../components/Container/Container"
import PlayListVideoCard from "../components/PlayListVideoCard"
function PlayList() {
    const [playlist, setPlayList] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchPlayList = async () => {
            try {
                const PlayList = await fetch(` https://api.freeapi.app/api/v1/public/youtube/playlists/${id}`);
                const PlayListJson = await PlayList.json();
                console.log("the is is:", PlayListJson)
                if (PlayListJson.success) {
                    setPlayList(PlayListJson.data);
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching joke:", error);
                navigate('/');
            }
        };
        if (id) fetchPlayList();
        else navigate('/');
    }, [id, navigate]);
    return (
        <Container>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-15 mt-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white" >PlayList Page</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={playlist?.playlist?.snippet?.thumbnails?.high?.url}
                        alt="playlist"
                        className="w-full md:w-64 h-auto object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"  >{playlist?.playlist?.snippet?.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"   >{playlist?.playlist?.snippet?.publishedAt}</p>
                        <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line"   >{playlist?.playlist?.snippet?.description}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {playlist?.playlistItems?.map((item, index) => (
                    <PlayListVideoCard
                        key={index}
                        thumbnails={item?.snippet?.thumbnails?.medium?.url}
                        title={item?.snippet?.title}
                        description={item?.snippet?.description}
                        published={item?.snippet?.publishedAt}
                        resource={item?.snippet?.resourceId?.videoId}
                    />
                ))}
            </div>
        </Container>
    )
}
export default PlayList