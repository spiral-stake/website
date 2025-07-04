import WorkingSteps from "../components/WorkingSteps";
import WorkingTabs from "../components/WorkingTabs";

import Email from "../components/Email";

const Working = () => {
  return (
    <div id="Working">
      <div className="flex flex-col gap-10 md:gap-20 py-16 md:py-[40px]">
        <div className="text-center space-y-2">
          <p className="text-[40px] md:text-5xl font-[600]">
            How does Spiral Stake work?
          </p>
        </div>
        <WorkingSteps
        />
        {/* <WorkingSteps
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
        /> */}
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
