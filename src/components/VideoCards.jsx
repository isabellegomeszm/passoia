export default function VideoCard({ videoId, title, thumbnail }) {
  return (
    <div className="video-card">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={thumbnail} alt={title} className="video-thumb" />
      </a>
      <p className="video-title">{title}</p>
    </div>
  );
}
