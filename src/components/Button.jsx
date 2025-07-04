const Button = ({ fill, text }) => {
  return (
    <button
      className={`${fill ?"bg-white text-black":"bg-transparent text-white"} w-fit border-2 px-3 rounded-3xl py-2 text-sm bg-transparent `}
    >
      {text}
    </button>
  );
};

export default Button;
