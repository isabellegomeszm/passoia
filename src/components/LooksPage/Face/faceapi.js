import { fetchYouTubeVideos } from "../youtube";

export function getFaceVideos() {
  return fetchYouTubeVideos("face makeup tutorial");
}

