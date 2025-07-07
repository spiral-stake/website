import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import wallet from "../assets/wallet.svg";
import bag from "../assets/bag.svg";
import target from "../assets/target.svg";
import infinity from "../assets/infinity.svg";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const WorkingSteps = ({ img, info, step, symbol, title }) => {
  const divRef = useRef();

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    delay: 0,
    threshold: 0.5,
    rootMargin: "200% 0% -25% 0%",
  });

  const { ref: myRef2, inView: myElement2IsVisible } = useInView({
    delay: 0,
    threshold: 0.5,
    rootMargin: "200% 0% -25% 0%",
  });

  const { ref: myRef3, inView: myElement3IsVisible } = useInView({
    delay: 0,
    threshold: 0.5,
    rootMargin: "200% 0% -25% 0%",
  });

  return (
    <>
      <div className="hidden h-[540px] p-[80px] lg:flex flex-row justify-center gap-[56px] w-full">
        <div className="">
          <img
            src={step1}
            alt=""
            className={`w-[540px] ${
              myElementIsVisible ? "hidden" : "img_animation"
            }`}
          />
          <img
            src={step2}
            alt=""
            className={`w-[540px] ${
              myElementIsVisible && !myElement2IsVisible
                ? "inline-block img_animation"
                : "hidden"
            }`}
          />
          <img
            src={step3}
            alt=""
            className={`w-[540px] ${
              myElement2IsVisible && !myElement3IsVisible
                ? "inline-block img_animation"
                : "hidden"
            }`}
          />
          <img
            src={step4}
            alt=""
            className={`w-[540px] ${
              myElement3IsVisible ? "inline-block img_animation" : "hidden"
            }`}
          />
        </div>
        <div ref={divRef} className="flex flex-col gap-8  ">
          <div className={`max-w-[500px]`}>
            <div ref={myRef1} className="flex flex-col gap-2">
              <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
                step 1
              </p>
              <div className="flex flex-row gap-2">
                <img src={wallet} alt="" className="w-10" />
                <p className="text-[24px] font-[500]">
                  Deposit Staked Stablecoins
                </p>
              </div>
              <p
                className={`${
                  myElementIsVisible && "hidden"
                } text-[16px] text-gray-400 h-[400px] font-[400]`}
              >
                Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
                stablecoins as collateral while they continue earning staking
                rewards.
              </p>
            </div>
          </div>
          <div
            ref={myRef2}
            className={`max-w-[500px] ${
              !myElementIsVisible ? "hidden" : "inline-block transitions"
            }`}
          >
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
              <p
                className={`${
                  myElement2IsVisible && "hidden"
                } text-[16px] text-gray-400 h-[400px] font-[400]`}
              >
                Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
                stablecoins as collateral while they continue earning staking
                rewards.
              </p>
            </div>
          </div>
          <div
            ref={myRef3}
            className={`max-w-[500px] ${
              !myElement2IsVisible ? "hidden" : "inline-block transitions"
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
                step 3
              </p>
              <div className="flex flex-row gap-2">
                <img src={target} alt="" className="w-10" />
                <p className="text-[24px] font-[500]">Receive SPIUSD</p>
              </div>
              <p
                className={`${
                  myElement3IsVisible && "hidden"
                } text-[16px] text-gray-400 h-[400px] font-[400]`}
              >
                Get our fully collateralized stablecoin that maintains its $1
                peg through robust arbitrage mechanisms.
              </p>
            </div>
          </div>
          <div
            className={`max-w-[500px] ${
              !myElement3IsVisible ? "hidden" : "inline-block transitions"
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
                step 4
              </p>
              <div className="flex flex-row gap-2">
                <img src={infinity} alt="" className="w-10" />
                <p className="text-[24px] font-[500]">Loop & Amplify</p>
              </div>
              <p className="text-[16px] text-gray-400 font-[400]">
                Reinvest to increase your staked position, participate in other
                protocols, or simply hold liquid capital while earning staking
                rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile */}
      {img && info && step && title && symbol && (
        <div className="flex flex-col gap-6 justify-center items-center lg:hidden">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-start items-start">
              <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
                {step && `step ${step}`}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={symbol} alt="" className="w-10" />
              <p className="text-[20px] font-[500]">{title}</p>
            </div>
            <p className="text-[14px] text-gray-500 font-[400]">{info}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkingSteps;
