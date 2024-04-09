export const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_VIDEO_LIST =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

// Youtube search suggestion API
export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iphone")

//

export const CHAT_COUNT = 8;
