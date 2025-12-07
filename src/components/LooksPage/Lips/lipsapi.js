import { fetchYouTubeVideos } from "../youtube";

export function getLipsVideos() {
  return fetchYouTubeVideos("lips makeup tutorial");
}

