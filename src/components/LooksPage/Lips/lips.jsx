import { useEffect, useState } from "react";
import { getLipsVideos } from "./lipsapi";
import "../looks.scss";
import VideoCard from "../../VideoCards.jsx";

function Lips() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getLipsVideos().then(setVideos);
  }, []);

  return (
    <div className="looks-page">
      <h3>LIPS</h3>

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

export default Lips;
