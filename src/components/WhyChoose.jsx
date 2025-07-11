import InfoCard from "../components/InfoCard";
import growth from "../assets/Growth.svg";
import balance from "../assets/balance.svg";
import coins from "../assets/coins.svg";
import option from "../assets/option.svg";

const WhyChoose = () => {
  return (
    <div className="pt-[0] lg:pt-[64px] lg:pb-[120px] px-[16px] lg:px-20 flex flex-col gap-[48px] items-center justify-center">
      <div className="w-full lg:max-w-[480px] flex flex-col gap-1 justify-center items-center">
        <p className="px-10 text-[32px] lg:text-[40px] font-[600] text-center">
          Why choose Spiral Stake?
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          SpiralStake provides secure, transparent access to yield-bearing liquidity—all in one
          unified platform.
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-[16px] lg:gap-6">
        <InfoCard
          colorfull={true}
          symbol={growth}
          info={"Leveraged yields, automated — no more complex steps."}
          title={"Effortless Stable Leveraged Yields"}
        />
        <InfoCard
          colorfull={false}
          symbol={coins}
          info={"stblUSD adoption lowers borrowing costs and boosts leveraged yields over time"}
          title={"Reducing Borrow Rates, and Higher Yields"}
        />
        <InfoCard
          colorfull={false}
          info={
            "Borrow rates adjust dynamically based on peg health, liquidity, and demand for stblUSD"
          }
          title={"Market-driven Borrow Costs"}
          symbol={option}
        />
        <InfoCard
          colorfull={false}
          info={"Simple, high-yield deposits — not just for DeFi pros."}
          symbol={balance}
          title={"Made for the Masses"}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
