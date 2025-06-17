import spiralImage from "../assets/01.svg";
import cross from "../assets/close-circle-line.svg";
import check from "../assets/checkbox-circle-line.svg";
import DetailCard from "../components/DetailCard";
import frame1 from "../assets/frame.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";

const AboutPage = () => {
  return (
    <div>
      <div id="AboutPage" className="flex flex-col md:gap-12 md:px-[64px]">
        <div className="text-center font-semibold">
          <p className="text-3xl md:text-5xl">What is Spiral Stake?</p>
        </div>
        <div className="flex gap-6">
          <img src={spiralImage} alt="" className="hidden md:flex md:w-[564px]" />
          <div className="flex flex-col gap-10 p-8 text-md md:text-lg text-stone-300">
            <p>
              Spiral Stake is a specialized money market protocol designed exclusively for staked
              stablecoin holders. It solves a fundamental DeFi challenge: allowing users to maintain
              their staking rewards while accessing liquidity through innovative borrowing
              mechanisms.
            </p>
            <p>
              The protocol also enables users to maximize yields on staked stablecoins by creating
              efficient leveraged loops in just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:mt-24 items-center gap-12 md:p-[64px]">
        <div className="text-center space-y-3">
          <p className="text-3xl md:text-5xl font-semibold">Why choose Spiral Stake?</p>
          <p className="text-md md:text-sm text-gray-500">
            Spiral Stake offers transparent, yield-generating liquidity access with low risk under
            one roof.
          </p>
        </div>
        <div className=" pr-5 max-w-5xl mx-auto overflow-y-scroll">
          <div className="flex flex-col md:flex-row gap-6  w-full">
            <div className="flex flex-col gap-6 px-[24px] md:p-[24px] md:pt-10">
              <div className="flex flex-col gap-3">
                <p className="text-xl md:text-3xl">Borrower-Controlled Rates</p>
              </div>
              <div className="text-white/60 flex flex-col gap-1">
                <div className="flex gap-4 justify-center items-center">
                  <p>
                    Set your own borrowing costs through competitive auctions, giving you
                    unprecedented control over your capital expenses.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-[24px] md:p-[24px] md:pt-10">
              <div className="flex flex-col gap-3">
                <p className="text-xl md:text-3xl">Leveraged Yields</p>
              </div>
              <div className="text-white/60 flex flex-col gap-1">
                <div className="flex gap-4 justify-center items-center">
                  <p>
                    Maintain your staking rewards while accessing capital to deploy in other
                    yield-generating strategies across DeFi.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-[24px] md:p-[24px] md:pt-10">
              <div className="flex flex-col gap-3">
                <p className="text-xl md:text-3xl">Instant or Auction Access</p>
              </div>
              <div className="text-white/60 flex flex-col gap-1">
                <div className="flex gap-4 justify-center items-center">
                  <p>
                    Choose between competitive auction rates or immediate market-rate loans based on
                    your timing needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-[24px] md:p-[24px] md:pt-10">
              <div className="flex flex-col gap-3">
                <p className="text-xl md:text-3xl">Robust Price Stability</p>
              </div>
              <div className="text-white/60 flex flex-col gap-1">
                <div className="flex gap-4 justify-center items-center">
                  <p>
                    SPIUSD maintains its peg through a well-capitalized Peg Stability Module with
                    automatic arbitrage mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
