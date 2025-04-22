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
      <div id="AboutPage" className="flex flex-col gap-12 py-[120px] px-[64px]">
        <div className="text-center font-semibold">
          <p className="text-5xl">What is Spiral Stake?</p>
        </div>
        <div className="flex gap-6">
          <img src={spiralImage} alt="" className="w-[564px]" />
          <div className="flex flex-col gap-10 p-8 text-lg text-stone-300">
            <p>
              Spiral Stake helps holders of staked stablecoins to free up liquidity without
              foregoing protocol points & rewards. Spiral Stake facilitates this by creating a
              rotating credit system with a fixed rate for borrowers while still offering variable
              returns for lenders.
            </p>
            <p>
              Spiral Stake is built on a novel capital management instrument called ROSCA (Rotating
              Savings and Credit Association). Where users deposit their staked stablecoins to
              access pooled liquidity without sacrificing the yield and protocol rewards.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 p-[64px]">
        <div className="text-center space-y-3">
          <p className="text-5xl font-semibold">Why choose Spiral Stake?</p>
          <p className="text-sm text-gray-500">
            Spiral Stake offers transparent, yield-generating liquidity access with low risk under
            one roof.
          </p>
        </div>
        <div className="grid grid-cols-[412px,180px,180px,180px] grid-rows-6 text-sm">
          {/* first */}
          <p className="px-[24px] py-[20px] text-gray-500 border-r-[1px] border-gray-600">
            Feature
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center  border-r-[1px] border-gray-600">
            Spiral Stake
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center  border-r-[1px] border-gray-600">
            Aave
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center   border-gray-600">
            Morpho
          </p>
          {/* */}
          <p className="px-[24px] py-[20px] text-neutral-300 border-t-[1px] border-r-[1px] border-gray-600">
            Liquidation Risk
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={cross} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={check} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px]  border-gray-600">
            <img src={check} alt="" />
          </p>
          {/* */}
          <p className="px-[24px] py-[20px] text-neutral-300 border-t-[1px] border-r-[1px] border-gray-600">
            Borrow Rate
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            Fixed
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            Unpredictable
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px]  border-gray-600">
            Unpredictable
          </p>
          {/* */}
          <p className="px-[24px] py-[20px] text-neutral-300 border-t-[1px] border-r-[1px] border-gray-600">
            Supports Major YBTs
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={check} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={cross} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px]  border-gray-600">
            <img src={cross} alt="" />
          </p>
          {/* */}
          <p className="px-[24px] py-[20px] text-neutral-300 border-t-[1px] border-r-[1px] border-gray-600">
            Covers Protocol Points
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={check} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={cross} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px]  border-gray-600">
            <img src={cross} alt="" />
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col gap-12 py-[80px] px-[64px]">
        <p className="text-5xl font-semibold text-center">Who is it For?</p>
        <div className="flex justify-center gap-5">
          <DetailCard
            img={frame1}
            msg={
              "Crypto Traders and Airdrop Hunters who need access to more capital during key moments"
            }
            title={"Crypto Traders & Airdrop Hunters"}
          />
          <DetailCard
            img={frame2}
            msg={
              "DeFi Yield Farmers who want to earn passive income while still participating in other protocols"
            }
            title={"DeFi Yield Farmers"}
          />
          <DetailCard
            img={frame3}
            msg={"Web3 Savers who want group savings with yield and low-risk liquidity access"}
            title={"Web3 Savers"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
