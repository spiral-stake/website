import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import wallet from "../assets/wallet.svg";
import bag from "../assets/bag.svg";
import target from "../assets/target.svg";
import infinity from "../assets/infinity.svg";
import { useEffect, useRef, useState } from "react";

const WorkingSteps = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log('Scrolling...'); // Remove this
  //     console.log(window.scrollY); // Remove this
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="p-[80px] flex flex-row justify-center gap-[56px]">
      <div>
        <img src={step1} alt="" className="w-[540px]" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="max-w-[500px]">
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 1
            </p>
            <div className="flex flex-row gap-2">
              <img src={wallet} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">
                Deposit Staked Stablecoins
              </p>
            </div>
            <p className="hidden text-[16px] text-gray-400 font-[400]">
              Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
              stablecoins as collateral while they continue earning staking
              rewards.
            </p>
          </div>
        </div>
        <div className="max-w-[500px]">
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 2
            </p>
            <div className="flex flex-row gap-2">
              <img src={bag} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">
                Choose Your Borrowing Method
              </p>
            </div>
            <p className="hidden text-[16px] text-gray-400 font-[400]">
              Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
              stablecoins as collateral while they continue earning staking
              rewards.
            </p>
          </div>
        </div>
        <div className="max-w-[500px]">
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 3
            </p>
            <div className="flex flex-row gap-2">
              <img src={target} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">Receive SPIUSD</p>
            </div>
            <p className="hidden text-[16px] text-gray-400 font-[400]">
              Get our fully collateralized stablecoin that maintains its $1 peg
              through robust arbitrage mechanisms.
            </p>
          </div>
        </div>
        <div className="max-w-[500px]">
          <div className="flex flex-col gap-2">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 4
            </p>
            <div className="flex flex-row gap-2">
              <img src={infinity} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">Loop & Amplify</p>
            </div>
            <p className=" text-[16px] text-gray-400 font-[400]">
              Reinvest to increase your staked position, participate in other
              protocols, or simply hold liquid capital while earning staking
              rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
