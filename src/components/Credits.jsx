import hashlock from "../assets/hashlock.svg";
import FraxFinance from "../assets/FraxFinance.svg";

const Credits = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-24 px-[16px] pt-[120px] pb-[64px] lg:px-[80px] lg:py-[200px]">
      <div className="flex flex-col h-[120px] justify-between items-center pb-2">
        <p className="text-[18px] text-gray-500">Audited By</p>
        <img src={hashlock} alt="" />
      </div>
      <div className="flex flex-col h-[120px] justify-between items-center">
        <p className="text-[18px] text-gray-500">Invested By</p>
        <img src={FraxFinance} alt=""/>
      </div>
    </div>
  );
};

export default Credits;
