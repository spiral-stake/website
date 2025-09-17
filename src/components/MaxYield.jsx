import MaxYieldSteps from "./MaxYieldSteps";
import arrow from "../assets/arrow.svg";

const MaxYield = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[56px] px-[16px] pt-[120px] pb-[64px] lg:px-[80px] lg:py-[120px]">
      <div className="w-full lg:max-w-[580px] flex flex-col justify-center items-center">
        <p className="text-[32px] lg:text-[40px] font-[600] text-center">
          Maximize Yield in 3 Simple Steps
        </p>
        <p className=" text-center text-[14px] lg:text-[16px] font-[400] text-gray-500">
          Spiral Stake makes it easy to unlock liquidity, amplify your position, and earn
          more—without giving up staking rewards.
        </p>
      </div>
      <div className="grid grid-row-[auto_auto_auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto] gap-[14px] lg:gap-[44px]">
        <MaxYieldSteps
          img={"/animations/1st.lottie"}
          title={"Deposit"}
          step={"1"}
          info={"Deposit any stablecoin of your choice"}
        />
        <div className="pl-[24px] lg:pl-[0]">
          <img
            src={arrow}
            alt=""
            className="w-[22px] lg:w-[40px] lg:pt-[36px] rotate-90 lg:rotate-0"
          />
        </div>
        <MaxYieldSteps
          img={"/animations/2nd.lottie"}
          title={"Automated Looping"}
          step={"2"}
          info={"Get auto-looped into stable leveraged yield positions"}
        />
        <div className="pl-[24px] lg:pl-[0]">
          <img
            src={arrow}
            alt=""
            className="w-[22px] lg:w-[40px] lg:pt-[36px] rotate-90 lg:rotate-0"
          />
        </div>
        <MaxYieldSteps
          img={"/animations/3rd.lottie"}
          title={"Predictable returns"}
          step={"3"}
          info={"Earn high, stable returns — no active management needed"}
        />
      </div>
    </div>
  );
};

export default MaxYield;
