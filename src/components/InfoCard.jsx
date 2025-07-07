const InfoCard = ({ symbol, title, info, colorfull }) => {
  return (
    <div
      className={`flex flex-col gap-[12px] lg:gap-[62px] p-[24px] max-w-[548px] rounded-[24px] border-[1px] border-gray-800 ${
        colorfull ? "bgimg" : "bg-white bg-opacity-5"
      }`}
    >
      <div>
        <img src={symbol} alt="" className="w-10" />
      </div>
      <div className="text-left flex flex-col gap-[12px] lg:gap-[4px] font-normal">
        <p className="text-[20px] lg:text-[24px]">{title}</p>
        <p className="text-[14px] lg:text-[16px]">{info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
