const InfoTemplate = ({ title, msg }) => {
  return (
    <div className="flex flex-col gap-4 items-start w-[368px] py-[12px] px-[16px] bg-white bg-opacity-20 rounded-[20px] backdrop-blur-[60px]">
      <p className="font-normal text-[16px]">{title}</p>
      <p className="text-[14px] text-gray-400 font-light text-left">{msg}</p>
    </div>
  );
};

export default InfoTemplate;
