import MaxYieldSteps from "./MaxYieldSteps";
import arrow from "../assets/arrow.svg";
import Looping from "../assets/Looping.svg";
import yieldCoins from "../assets/yieldCoins.svg";
import deposit from "../assets/deposit.svg";

const MaxYield = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[56px] px-[16px] pt-[120px] pb-[64px] lg:px-[80px] lg:py-[120px]">
      <div className="w-full lg:max-w-[580px] flex flex-col justify-center items-center">
        <p className="text-[32px] lg:text-[40px] font-[600] text-center">
          Maximize Yield in 3 Simple Steps
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          Spiral Stake makes it easy to unlock liquidity, amplify your position,
          and earn more—without giving up staking rewards.
        </p>
      </div>
      <div className="grid grid-row-[auto_auto_auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto] gap-[14px] lg:gap-[44px]">
        <MaxYieldSteps
          img={deposit}
          title={"Lending"}
          step={"1"}
          info={
            "Deposit sFrxUSD, sUSDe, or sUSDf—your assets stay staked and earning."
          }
        />
        <div className="pl-[24px] lg:pl-[0]">
          <img
            src={arrow}
            alt=""
            className="w-[22px] lg:w-[40px] lg:pt-[36px] rotate-90 lg:rotate-0"
          />
        </div>
        <MaxYieldSteps
          img={Looping}
          title={"Looping"}
          step={"2"}
          info={"Borrow SPIUSD, restake, and loop to amplify your exposure."}
        />
        <div className="pl-[24px] lg:pl-[0]">
          <img
            src={arrow}
            alt=""
            className="w-[22px] lg:w-[40px] lg:pt-[36px] rotate-90 lg:rotate-0"
          />
        </div>
        <MaxYieldSteps
          img={yieldCoins}
          title={"Earning"}
          step={"3"}
          info={"Earn layered staking yields without giving up liquidity."}
        />
      </div>
    </div>
  );
};

export default MaxYield;
