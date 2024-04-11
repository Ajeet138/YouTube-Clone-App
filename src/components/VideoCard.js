const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 px-2 m-2 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>Views {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

// High Order Component

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
