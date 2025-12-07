import { fetchYouTubeVideos } from "../youtube";

export function getHairVideos() {
  return fetchYouTubeVideos("hair tutorial");
}

