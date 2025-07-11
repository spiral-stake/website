import spiralImage from "../assets/01.svg";
import cross from "../assets/close-circle-line.svg";
import check from "../assets/checkbox-circle-line.svg";
import DetailCard from "../components/DetailCard";
import frame1 from "../assets/frame.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import DotName from "../components/DotName";
import InfoTemplate from "../components/InfoTemplate";

import Button from "../components/Button";
import globe from "../assets/Globe.svg";

import MaxYield from "../components/MaxYield";
import WhyChoose from "../components/WhyChoose";
import StandsApart from "../components/StandsApart";

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <div id="AboutPage">
        <div className="hidden w-full lg:flex flex-col lg:flex-row h-fit lg:h-[1300px] pl-2 pt-4 lg:pl-[80px] lg:pt-[80px]">
          <div className="w-[60%] lg:w-[660px] flex flex-col lg:justify-center gap-4">
            <p className="text-[32px] lg:text-[50px] font-[500]">What is Spiral Stake?</p>
            <p className="hidden lg:flex text-[16px] font-[400] text-gray-400">
              Spiral Stake is a stable leveraged yields platform built solely for stablecoins. It
              lets users amplify returns from their chosen staked stable PTs by locking in a fixed
              borrow rate using our protocol native stablecoin, stblUSD.
              <br />
              <br />
              Choose a predictable, high-yield product — without the risk of variable leveraged
              yield or the hassle of manual looping.
            </p>
            <div
              className="hidden lg:flex pt-4"
              onClick={() => {
                window.location.href = "https://spiral-stake.gitbook.io/spiral-stake-docs";
              }}
            >
              <Button fill={false} text={"Read Documentation"} />
            </div>
          </div>
          <div className="hidden w-full relative lg:flex items-end justify-end">
            <div className="absolute w-[500px] h-[500px] top-0 left-[36%] lg:w-[1182px] lg:h-[1182px] rounded-full border-[2px] border-gray-400 globe">
              <div className="hidden lg:flex absolute flex-row top-[300px] left-[10px] gap-4">
                <DotName text={"Problem"} />
                <InfoTemplate
                  title={"The Problem"}
                  msg={
                    "Users seeking stable leveraged yield face two major roadblocks: unpredictable borrowing costs and the hassle of manual looping. There's no seamless way to earn high, stable returns without taking on variable-rate risk — until now"
                  }
                />
              </div>
              <div className="absolute flex flex-row top-[734px] left-[0px] gap-4">
                <DotName text={"Solution"} />
                <InfoTemplate
                  title={"Spiral Stake's Solution"}
                  msg={
                    "The first fixed-leverage yield platform tailored for stablecoin holders. By combining Fixed Yield with our protocol-minted stblUSD, users can lock in their borrow rate upfront, access high-yield strategies with ease, and preserve capital — all without relying on lenders or suffering from rate volatility."
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex relative w-[574px] h-[650px] lg:hidden globe_mobile">
            <div className="absolute ">
              <DotName text={"Problem"} />
            </div>
            <div></div>
          </div>
        </div>
        {/* for mobile */}
        <div className="lg:hidden relative pt-[64px] pb-4 px-4 w-full flex flex-col gap-24 h-fit globe_mobile">
          <p className="text-[40px] font-[500]">
            What is <br />
            Spiral Stake?
          </p>
          <div>
            <InfoTemplate
              msg={
                "Users seeking stable leveraged yield face two major roadblocks: unpredictable borrowing costs and the hassle of manual looping. There's no seamless way to earn high, stable returns without taking on variable-rate risk — until now"
              }
              title={"The problem"}
            />
          </div>
          <div>
            <InfoTemplate
              msg={
                "Spiral Stake introduces the first fixed-leverage yield platform tailored for stablecoin holders. By combining Fixed Yield with our protocol-minted stblUSD, users can lock in their borrow rate upfront, access high-yield strategies with ease, and preserve capital — all without relying on lenders or suffering from rate volatility."
              }
              title={"Spiral Stake's Solution"}
            />
          </div>

          <div className="h-[50px] flex flex-col gap-4">
            {/* <p className="mt-10 text-[14px] font-[400] text-gray-500">
              Spiral Stake is a money market for staked stablecoins, letting
              users access liquidity while still earning staking
              rewards—maximizing yield without giving up capital access.
            </p>
            <div
              onClick={() => {
                window.location.href =
                  "https://spiral-stake.gitbook.io/spiral-stake-docs";
              }}
            >
              <Button fill={false} text={"Read Documentation"} />
            </div> */}
          </div>
        </div>
        <WhyChoose />
        <MaxYield />
        {/* <StandsApart /> NEEDS TO BE USED LATER */}
      </div>
    </div>
  );
};

export default AboutPage;
