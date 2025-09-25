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
import RotatingCarousel from "../components/rotatingCaraousel";
import PoweredBy from "../components/poweredBy";

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <div id="AboutPage">
        <div className="hidden w-full lg:flex flex-col lg:flex-row h-fit lg:h-[1300px] pl-2 pt-4 lg:pl-[80px] lg:pt-[80px]">
          <div className="w-[60%] lg:w-[660px] flex flex-col lg:justify-center gap-4">
            <p className="text-[32px] lg:text-[50px] font-[500]">
              What is <br /> Spiral Stake?
            </p>
            <p className="hidden lg:flex text-[16px] font-[400] text-gray-400">
              Spiral Stake is a non-custodial DeFi platform offering stable
              yields up to 90% APY. It combines Pendle PTs and Morpho Markets to
              deliver predictable returns with full user control.
              <br />
              <br />
              Through gas-efficient flash leverage and curated stablecoins,
              Spiral Stake makes high-yield strategies simple, safe, and
              scalable.
            </p>
            <div
              className="hidden lg:flex pt-4"
              onClick={() => {
                window.open("https://docs.spiralstake.xyz", "_blank");
              }}
            >
              <Button fill={false} text={"Read Documentation"} />
            </div>
          </div>
          <div className="hidden w-full relative lg:flex items-end justify-end">
            <div className="absolute w-[500px] h-[500px] top-0 left-[36%] lg:w-[1182px] lg:h-[1182px] rounded-full border-[2px] border-gray-400 globe">
              <div className="hidden lg:flex absolute flex-row top-[270px] left-[-12px] gap-4">
                <DotName text={"Problem"} />
                <div className="flex flex-col gap-4 items-start w-full lg:w-[368px] py-[12px] px-[16px] bg-black bg-opacity-[40%] rounded-[20px] backdrop-blur-lg">
                  <p className="font-normal text-[12px] lg:text-[16px]">
                    DeFi is in a Yield Trap of Unpredictable R/R & Tedious Loops
                  </p>
                  <p className="text-[12px] lg:text-[14px] text-gray-400 font-light text-left">
                    Unstable rates & clunky, time consuming manual looping trash
                    the ROI of investors looking for safe & sustainable yield
                    <br />
                    Insufficient liquidity, high gas costs, rate spikes, poor UX
                    and liquidation risk are difficult to mitigate
                    <br />
                    Insufficient liquidity in liquidity pools causes high
                    slippage & uncertain ROI.
                    <br />
                    Decreased ability to exploit profitable opportunities for
                    fixed yield with size
                    <br />
                    This deters serious capital used to highly optimized, low
                    dependency platforms from making the plunge.
                  </p>
                </div>
              </div>
              <div className="absolute flex flex-row top-[630px] left-[-10px] gap-4">
                <DotName text={"Solution"} />
                <div className="flex flex-col gap-4 items-start w-full lg:w-[368px] py-[12px] px-[16px] bg-black bg-opacity-[40%] rounded-[20px] backdrop-blur-lg">
                  <p className="font-normal text-[12px] lg:text-[16px]">
                    Spiral Stake unlocks predictable, scalable yield with
                    one-click efficiency
                  </p>
                  <p className="text-[12px] lg:text-[14px] text-gray-400 font-light text-left">
                    Fixed returns, safe leverage, and seamless execution replace
                    unstable rates and tedious manual loops. Flash-leverage
                    through Morpho collapses 9× loops into a single,
                    gas-efficient transaction.
                    <br />
                    Pendle PTs lock in stable, outsized APY up to 90%, while
                    curated, audited stablecoins ensure capital security.
                    <br />
                    Battle-tested integrations eliminate clunky UX and
                    liquidation risk, putting investors back in control.
                    <br />
                    Now, serious capital can earn predictable, amplified returns
                    without the chaos of legacy DeFi yield traps
                  </p>
                </div>
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
                "Traditional DeFi forces users to choose between earning staking rewards or having liquid capital available for other opportunities."
              }
              title={"The Problem"}
            />
          </div>
          <div>
            <InfoTemplate
              msg={
                "A dual-mechanism lending protocol that allows users to borrow against their staked stablecoins while continuing to earn staking rewards, creating opportunities for yield amplification and capital efficiency."
              }
              title={"Spiral Stake's solution"}
            />
          </div>
        </div>
        <PoweredBy />
        <RotatingCarousel />

        <WhyChoose />
        <MaxYield />
        {/* <StandsApart /> NEEDS TO BE USED LATER */}
      </div>
    </div>
  );
};

export default AboutPage;
