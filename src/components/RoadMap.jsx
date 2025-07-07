import roadMap from "../assets/roadMap.svg";
import roadMapMobile from "../assets/roadMapMobile.svg";


const RoadMap = () => {
  return (
    <div className="flex flex-col px-[12px] gap-[48px] items-center bg-[radial-gradient(closest-side,_#1E1831,_#090026,_#000000)]">
      <div className="w-full lg:max-w-[560px] flex flex-col justify-center items-center">
        <p className="text-[32px] lg:text-[40px] font-[600] text-center">
          Spiral Stake Roadmap
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          Track our progress as we roll out new features, integrations, and
          protocol upgrades.
        </p>
      </div>
      <img src={roadMap} alt="" className="hidden lg:inline-block w-[85%]"/>
      <img src={roadMapMobile} alt="" className="lg:hidden"/>
    </div>
  );
};

export default RoadMap;
