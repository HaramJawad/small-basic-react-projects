import React,{useState,useEffect} from 'react'
import Container from "../components/Container/Container"
import AllPlayLists from "../components/AllPlayLists"
function PlayLists() {
  const [playlist,setPlaylists]=useState([])
  const [playlistloading,setplaylistsloading]=useState([])
  const [playlisterror,setplaylistserror]=useState([])
  useEffect(() => {
    const fetchplaylists = async () => {
      setplaylistsloading(true);
      try {
          const playlists= await fetch('https://api.freeapi.app/api/v1/public/youtube/playlists?page=1&limit=5 ');
          if (!playlists.ok) {
              throw new Error(`HTTP error! status: ${playlists.status}`);
          }
          const playlistsJson = await playlists.json();
          setPlaylists(playlistsJson.data.data);
      } catch (error) {
          setplaylistserror(error);
      } finally {
          setplaylistsloading(false);
      }
  };
  fetchplaylists();

  }, []);  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-9 py-10"   >
      <Container>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"  >
          <AllPlayLists  playlists={playlist} />
        </div>
      </Container>
    </div>
  )
}

export default PlayLists