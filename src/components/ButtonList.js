import Button from "./Button";

const ButtonList = () => {
  const buttonArray = [
    "All",
    "JavaScript",
    "Music",
    "News",
    "Gaming",
    "Thoughts",
    "Trailers",
    "Movies",
    "Comedy",
    "Sports",
    "Trending",
    "Algorithm",
  ];
  return (
    <div className="py-6 px-8 flex">
      {buttonArray.map((items, index) => (
        <Button key={index} title={items} />
      ))}
    </div>
  );
};

export default ButtonList;
