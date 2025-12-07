import { useEffect, useState } from "react";
import { getFaceVideos } from "./faceapi";
import "../looks.scss";
import VideoCard from "../../VideoCards.jsx";

function Face() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getFaceVideos().then(setVideos);
  }, []);

  return (
    <div className="looks-page">
      <h3>FACE</h3>

      <div className="videos-grid">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Face;
