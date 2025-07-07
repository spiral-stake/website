const Button = ({ fill, text, long }) => {
  return (
    <button
      className={`${
        fill ? "bg-white text-black" : "bg-transparent text-white"
      } ${
        long ? "w-full lg:w-fit" : "w-fit"
      }  border-2 px-3 rounded-3xl py-2 text-sm bg-transparent `}
    >
      {text}
    </button>
  );
};

export default Button;
