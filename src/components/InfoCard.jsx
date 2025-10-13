const InfoCard = ({ symbol, title, info, colorfull }) => {
  return (
    <div
      className={`flex min-h-[240px] justify-between lg:h-full flex-col gap-[12px] lg:gap-[62px] transition-all duration-200 p-[24px] max-w-[548px] rounded-[24px] border-[1px] border-gray-800 infoCard`}
    >
      <div>
        <img src={symbol} alt="" className="w-[32px]" />
      </div>
      <div className="text-left flex flex-col gap-[12px] lg:gap-[4px] font-normal">
        <p className="text-[20px] lg:text-[24px]">{title}</p>
        <p className="text-[16px] lg:text-[16px] whitespace-pre-line">{info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
