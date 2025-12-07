import { fetchYouTubeVideos } from "../youtube";

export function getEyesVideos() {
  return fetchYouTubeVideos("eye makeup tutorial");
}