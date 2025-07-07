import InfoCard from "../components/InfoCard";
import growth from "../assets/Growth.svg";
import balance from "../assets/balance.svg";
import coins from "../assets/coins.svg";
import option from "../assets/option.svg";

const WhyChoose = () => {
  return (
    <div className="pt-[64px] lg:pb-[120px] px-[16px] lg:px-20 flex flex-col gap-[48px] items-center justify-center">
      <div className="w-full lg:max-w-[480px] flex flex-col gap-1 justify-center items-center">
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
            "Set your own borrowing costs through competitive auctions, giving you unprecedented control over your capital expenses."
          }
          title={"Borrower-Controlled Rates"}
        />
        <InfoCard
          colorfull={false}
          symbol={coins}
          info={
            "Maintain your staking rewards while accessing capital to deploy in other yield-generating strategies across DeFi."
          }
          title={"Leveraged Yields"}
        />
        <InfoCard
          colorfull={false}
          info={
            "Choose between instant borrowing or auction-based rates. Access liquidity on your terms, whenever you need it."
          }
          title={"Flexible Access Options"}
          symbol={option}
        />
        <InfoCard
          colorfull={false}
          info={
            "SPIUSD stays pegged via a robust Peg Stability Module and automated arbitrage."
          }
          symbol={balance}
          title={"Robust Price Stability"}
        />
      </div>
    </div>
  );
};

export default WhyChoose;
