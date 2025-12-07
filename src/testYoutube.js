const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export function testYouTubeAPI() {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=maquiagem&maxResults=1&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log("RESULTADO DO TESTE YOUTUBE:", data))
    .catch(err => console.error("ERRO TESTANDO YOUTUBE:", err));
}
