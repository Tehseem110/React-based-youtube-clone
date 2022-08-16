import axios from "axios";

const KEY = "AIzaSyD8tArHMN2ggWPN0ZGRO5y9iL7oXU6NtqM";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
