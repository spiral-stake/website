import logoSmall from "../assets/logoSmall.svg";
import dao from "../assets/dao.svg";
import ethena from "../assets/ethena.svg";
import CheckCircle from "../assets/CheckCircle.svg";
import XCircle from "../assets/XCircle.svg";

const StandsApart = () => {
  return (
    <div className="w-full bg-[radial-gradient(closest-side,_#1E1831,_#090026,_#000000)] pt-[60px] pb-[120px] px-2 lg:px-[80px] flex flex-col gap-[48px] items-center justify-center ]">
      <div className="w-full lg:max-w-[560px] flex flex-col justify-center items-center">
        <p className="text-[32px] lg:text-[40px] font-[600] text-center">
          How Spiral Stake Stands Apart
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          See how Spiral Stake compares to top DeFi protocols in yield,
          liquidity, and borrowing flexibility.
        </p>
      </div>
      <div className="w-full lg:w-fit grid grid-cols-[34%,22%,22%,22%] lg:grid-cols-[301px,194px,194px,194px]  grid-rows-6 p-[24px] border-[1px] border-gray-700 rounded-[20px]">
        <div className="text-[16px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b border-b-gray-600">
          Feature
        </div>
        <div className="flex justify-center items-center gap-2 py-4 px-2 bg-gray-400 bg-opacity-5 rounded-t-[5px] border-b border-b-gray-600">
          <img src={logoSmall} alt="" />{" "}
          <p className="hidden lg:flex text-[20px] font-[400] ">Spiral Stake</p>
        </div>
        <div className="flex justify-center items-center gap-2 py-4 px-2 border-b border-b-gray-600">
          <img src={dao} alt="" />{" "}
          <p className="hidden lg:flex text-[20px] font-[400]">MarkerDAO</p>
        </div>
        <div className="flex justify-center items-center gap-2 py-4 px-2 border-b border-b-gray-600">
          <img src={ethena} alt="" />{" "}
          <p className="hidden lg:flex text-[20px] font-[400]">Ethena</p>
        </div>
        <div className="text-[12px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b border-b-gray-800">
          Staked Stablecoin Collateral
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={XCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="text-[12px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800">
          Yield While Collateralized
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={XCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="text-[12px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800">
          Borrowing Flexibility
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={XCircle} alt="" />
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <img src={XCircle} alt="" />
        </div>
        <div className="text-[12px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800 ">
          Leverage & Looping
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
          <p className="text-[12px] lg:text-[18px] font-[400] text-gray-400">
            Native Looping
          </p>
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <p className="text-[12px] lg:text-[18px] font-[400] text-gray-400">
            Manual
          </p>
        </div>
        <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
          <p className="text-[12px] lg:text-[18px] font-[400] text-gray-400">
            Not Supported
          </p>
        </div>
        <div className="text-[12px] lg:text-[20px] font-[400] text-gray-400 py-4 px-2">
          Peg Stability Module (PSM)
        </div>
        <div className="py-4 px-2 flex justify-center items-center bg-gray-400 bg-opacity-5 rounded-b-[5px]">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="py-4 px-2 flex justify-center items-center">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="py-4 px-2 flex justify-center items-center">
          <img src={XCircle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StandsApart;
