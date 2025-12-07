const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchYouTubeVideos(query) {
  console.log("API KEY:", API_KEY); 

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`
    );

    const data = await response.json();

    if (data.error) {
      console.error("YouTube API Error:", data.error);
      return [];
    }

    return data.items || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
