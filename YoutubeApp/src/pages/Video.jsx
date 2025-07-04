import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from "../components/Container/Container.jsx"
function Video() {
  const [video, setVideo] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const video = await fetch(` https://api.freeapi.app/api/v1/public/youtube/videos/${id}`);
        const videoJson = await video.json();
        console.log("the is is:", videoJson)
        if (videoJson.success) {
          setVideo(videoJson);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
        navigate('/');
      }
    };

    if (id) fetchVideo();
    else navigate('/');
  }, [id, navigate]);
  const videoData = video?.data?.video?.items;

  return videoData ? (
    <div className=" py-40 px-49 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <img
            src={videoData?.snippet?.thumbnails?.high?.url}
            alt="thumbnail"
            className="w-full object-cover max-h-[400px]"
          />

          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {videoData?.snippet?.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {new Date(videoData?.snippet?.publishedAt).toLocaleDateString()}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-200">
              <span><strong>Channel:</strong> {videoData?.snippet?.channelTitle}</span>
              <span><strong>Duration:</strong> {videoData?.contentDetails?.duration}</span>
              <span><strong>Definition:</strong> {videoData?.contentDetails?.definition}</span>
              <span><strong>Views:</strong> {videoData?.statistics?.viewCount}</span>
              <span><strong>Likes:</strong> {videoData?.statistics?.likeCount}</span>
              <span><strong>Comments:</strong> {videoData?.statistics?.commentCount}</span>
            </div>

            <div className="text-gray-700 dark:text-gray-300 text-base whitespace-pre-line">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p>{videoData?.snippet?.description}</p>
            </div>

            {videoData?.snippet?.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {videoData.snippet.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {videoData?.thumbnails?.maxres?.url && (
              <div className="mt-6">
                <a
                  href={videoData.thumbnails.maxres.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Max Resolution Thumbnail →
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Video;