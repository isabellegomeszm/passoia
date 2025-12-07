import { useEffect, useState } from "react";
import { getHairVideos } from "./hairapi";
import "../looks.scss";
import VideoCard from "../../VideoCards.jsx";

function Hair() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getHairVideos().then(setVideos);
  }, []);

  return (
    <div className="looks-page">
      <h3>HAIR</h3>

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

export default Hair;
