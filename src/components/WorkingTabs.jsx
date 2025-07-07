import join from "../assets/join.svg";
import check from "../assets/checkbox-circle-line.svg";
import working0 from "../assets/working0.png";
import working1 from "../assets/working1.png";
import working2 from "../assets/working2.png";
import working3 from "../assets/working3.png";

const WorkingTabs = () => {
  return (
    <div className=" pr-5 max-w-5xl mx-auto overflow-y-scroll">
      <div className="flex flex-col lg:flex-row gap-6  w-full">
        <div className="flex flex-col gap-6 px-[24px] lg:p-[24px] lg:pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-3xl">1. Deposit Staked Stablecoins</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <p>
                Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
                stablecoins as collateral while they continue earning staking
                rewards.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-3xl">
              2. Choose Your Borrowing Method
            </p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <p>
                Set your own rate through daily auctions for competitive
                pricing, or access instant liquidity at market rates.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-3xl">3. Receive SPIUSD</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <p>
                Get our fully collateralized stablecoin that maintains its $1
                peg through robust arbitrage mechanisms.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-3xl">4. Loop & Amplify</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <p>
                Reinvest to increase your staked position, participate in other
                protocols, or simply hold liquid capital while earning staking
                rewards.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default WorkingTabs;
