const Button = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        className="px-4 bg-gray-200 py-1 text-black font-semibold rounded-lg mx-2"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
