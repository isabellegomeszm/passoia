import { useEffect, useState } from "react";
import { getEyesVideos } from "./eyesapi";
import "../looks.scss";
import VideoCard from "../../VideoCards.jsx";


function Eyes() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getEyesVideos().then(setVideos);
  }, []);

  return (
    <div className="looks-page">
      <h3>EYES</h3>

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

export default Eyes;
