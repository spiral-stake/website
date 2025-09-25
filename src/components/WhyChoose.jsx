import InfoCard from "../components/InfoCard";
import growth from "../assets/Growth.svg";
import balance from "../assets/balance.svg";
import coins from "../assets/coins.svg";
import option from "../assets/option.svg";

const WhyChoose = () => {
  return (
    <div className="pt-[0] lg:pt-[120px] lg:pb-[120px] px-[16px] lg:px-20 flex flex-col gap-[48px] items-center justify-center">
      <div className="w-full lg:max-w-[600px] flex flex-col gap-1 justify-center items-center">
        <p className="px-10 text-[32px] lg:text-[40px] font-[600] text-center">
          Why choose Spiral Stake?
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          SpiralStake provides secure, transparent access to yield-bearing
          liquidity—all in one unified platform.
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-[16px] lg:gap-6">
        <InfoCard
          colorfull={true}
          symbol={growth}
          info={
            "Spiral Stake leverages battle tested, highly audited Pendle & Morpho for locking stable yield. \nCurated, institutional grade, well backed stablecoins as underlying assets"
          }
          title={"Battle Tested Integrations & Stablecoin Assets"}
        />
        <InfoCard
          colorfull={false}
          symbol={coins}
          info={
            "Leverage is customizable but conservative. Our non custodial approach ensures full user control of funds."
          }
          title={"Capital security"}
        />
        <InfoCard
          colorfull={false}
          info={"Up to 9× loops in a single transaction"}
          title={"Customizable Leverage"}
          symbol={option}
        />
        <InfoCard
          colorfull={false}
          info={
            "Locked supply rates with Pendle PTs & controlled borrow rates with Spiral Stake Morpho Markets giving you stable yields upto 90% APY"
          }
          symbol={balance}
          title={"Stable, outsized yield"}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
