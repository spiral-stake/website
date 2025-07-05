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

const Working = () => {
  return (
    <div id="Working">
      <div className="px-6 md:px-0 flex flex-col gap-10 md:gap-20 py-16 md:py-[40px]">
        <div className="text-center space-y-2">
          <p className="text-[32px] md:text-[40px] md:text-5xl font-[600]">
            How does Spiral Stake work?
          </p>
        </div>
        <WorkingSteps />
        {/* for mobile */}
        <div className="flex flex-col gap-6 md:hidden">
          <WorkingSteps
            img={step1}
            info={
              "Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked stablecoins as collateral while they continue earning staking rewards."
            }
            step={"1"}
            symbol={wallet}
            title={"Deposit Staked Stablecoins"}
          />
          <WorkingSteps
            img={step2}
            info={
              "Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked stablecoins as collateral while they continue earning staking rewards."
            }
            step={"2"}
            symbol={bag}
            title={"Choose Your Borrowing Method"}
          />
          <WorkingSteps
            img={step3}
            info={
              "Get our fully collateralized stablecoin that maintains its $1 peg through robust arbitrage mechanisms."
            }
            step={"3"}
            symbol={target}
            title={"Receive SPIUSD"}
          />
          <WorkingSteps
            img={step4}
            info={
              "Reinvest to increase your staked position, participate in other protocols, or simply hold liquid capital while earning staking rewards."
            }
            step={"4"}
            symbol={infinity}
            title={"Loop and Amplify"}
          />
        </div>
      </div>
      <div className=" w-full h-[800px] loop relative">
        <div className="absolute w-full flex justify-center items-center top-5">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Working;
