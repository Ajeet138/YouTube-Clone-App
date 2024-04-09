const Comments = ({ info }) => {
  const { name, text, replies } = info;
  return (
    <div className="flex shadow-sm rounded-lg bg-gray-100 p-2 my-2">
      <img
        className="w-8 h-8"
        alt="userIcon"
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
      />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
