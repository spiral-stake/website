const BenifitCard = ({ logo, title, body }) => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:w-full">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="text-[20px] text-white font-semibold">{title}</p>
      </div>
      <div className="mt-1">
        <p className="text-[16px] text-gray-500 ">{body}</p>
      </div>
    </div>
  );
};

export default BenifitCard;
