import React, { useState, useEffect } from 'react';
import ChannelInfo from "../components/ChannelInfo.jsx"
import AllVideos from "../components/AllVideos.jsx";
import AllPlayLists from "../components/AllPlayLists.jsx";
import Container from '../components/Container/Container.jsx';
function Home() {
    const [channelInfo, setChannelInfo] = useState([]);
    const [allVideos, setAllVideos] = useState([]);
    const [allPlayLists, setAllPlayLists] = useState([]);
    const [channelloading, setChannelLoading] = useState(true);
    const [channelerror, setChannelError] = useState(null);
    const [playListsloading, setPlayListsLoading] = useState(true);
    const [playListserror, setPLayListsError] = useState(null);
    const [allVideosloading, setAllVideosLoading] = useState(true);
    const [allVideoserror, setAllVideosError] = useState(null);
    useEffect(() => {
        const fetchChannelInfo = async () => {
            setChannelLoading(true);
            try {
                const channelInfo = await fetch('https://api.freeapi.app/api/v1/public/youtube/channel');
                if (!channelInfo.ok) {
                    throw new Error(`HTTP error! status: ${channelInfo.status}`);
                }
                const channelInfoJson = await channelInfo.json();
                setChannelInfo(channelInfoJson.data.info)
            } catch (error) {
                setChannelError(error);
            } finally {
                setChannelLoading(false);
            }
        };
        fetchChannelInfo();
        const fetchAllVideos = async () => {
            setAllVideosLoading(true);
            try {
                const AllVideos = await fetch(' https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest ');
                if (!AllVideos.ok) {
                    throw new Error(`HTTP error! status: ${AllVideos.status}`);
                }
                const AllVideosJson = await AllVideos.json();
                setAllVideos(AllVideosJson.data.data);
            } catch (error) {
                setAllVideosError(error);
            } finally {
                setAllVideosLoading(false);
            }
        };
        fetchAllVideos();
        const fetchAllPlayLists = async () => {
            setPlayListsLoading(true);
            try {
                const AllPlayLists = await fetch('https://api.freeapi.app/api/v1/public/youtube/playlists?page=1&limit=5 ');
                if (!AllPlayLists.ok) {
                    throw new Error(`HTTP error! status: ${AllPlayLists.status}`);
                }
                const AllPlayListsJson = await AllPlayLists.json();
                console.log("allPlaylists",AllPlayListsJson)
                setAllPlayLists(AllPlayListsJson.data.data);
            } catch (error) {
                setPLayListsError(error);
            } finally {
                setPlayListsLoading(false);
            }
        };
        fetchAllPlayLists();

    }, []); // The emp
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-9 pt-20">
        <Container>
            <ChannelInfo info={channelInfo} />
            <AllVideos videos={allVideos}/>
            <AllPlayLists playlists={allPlayLists}/>
        </Container>
      </div>
    )
}

export default Home