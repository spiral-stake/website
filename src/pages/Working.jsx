import WorkingSteps from "../components/WorkingSteps";
import WorkingTabs from "../components/WorkingTabs";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import wallet from "../assets/wallet.svg";
import bag from "../assets/bag.svg";
import target from "../assets/target.svg";
import infinity from "../assets/infinity.svg";

import Email from "../components/Email";
import Steps from "../components/Steps";
import RoadMap from "../components/RoadMap";

const Working = () => {
  return (
    <div id="Working">
      <div className="px-6 lg:px-0 flex flex-col gap-10 lg:gap-20 pt-[20px] pb-16 lg:py-[40px]">
        <div className="text-center space-y-2 lg:hidden">
          <p className="text-[32px] lg:text-[40px] lg:text-5xl font-[600]">
            How does Spiral Stake work?
          </p>
        </div>
        <Steps />
        {/* for mobile */}
        <div className="flex flex-col gap-6 lg:hidden">
          <WorkingSteps
            img={step1}
            info={
              "Start by depositing any major stablecoin like USDC USDT or frxUSD — no need for complex DeFi interactions."
            }
            step={"1"}
            symbol={wallet}
            title={"Deposit Stablecoins"}
          />
          <WorkingSteps
            img={step2}
            info={
              "Your stablecoins are converted into Pendle PTs of your chosen staked stablecoin and automatically looped using stblUSD, locking in a fixed borrow rate and leveraged yield."
            }
            step={"2"}
            symbol={bag}
            title={"Auto-Leverage into Fixed Yield"}
          />
          <WorkingSteps
            img={step3}
            info={
              "Monitor your earnings through a simple dashboard and close your position anytime — no lockups, just predictable, high-yield performance."
            }
            step={"3"}
            symbol={target}
            title={"Earn Predictable Returns"}
          />
        </div>
      </div>
      <div>
        <RoadMap />
      </div>
      <div className=" w-full h-[650px] mt-[24px] lg:h-[800px] loop relative">
        <div className="absolute w-full flex justify-center items-center top-0 lg:top-10">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Working;
