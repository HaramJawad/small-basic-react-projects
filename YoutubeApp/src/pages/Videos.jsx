import React,{useState,useEffect} from 'react'
import AllVideos from "../components/AllVideos"
import Container from "../components/Container/Container"
function Videos()
 {
    const [loadingvideo,setloadingvideo]=useState([])
    const [errorvideo,seterrorvideo]=useState([])
    const [video,setVideos]=useState([])
    useEffect(() => {
    const fetchvideos = async () => {
        setloadingvideo(true);
        try {
            const videos = await fetch(' https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest ');
            if (!videos.ok) {
                throw new Error(`HTTP error! status: ${videos.status}`);
            }
            const videosJson = await videos.json();
            setVideos(videosJson.data.data);
        } catch (error) {
            seterrorvideo(error);
        } finally {
            setloadingvideo(false);
        }
    };
    fetchvideos();
}, []); 
  return (
    <div  className="py-30" >
        <Container>
           <div  className="space-y-6"  >
            <AllVideos videos={video} />
            </div> 
        </Container>
    </div>
  )
}

export default Videos