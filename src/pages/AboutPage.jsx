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
      <div className="flex flex-col gap-12 py-[120px] px-[64px]">
        <div className="text-center font-semibold">
          <p className="text-5xl">What is Spiral Stake?</p>
        </div>
        <div className="flex gap-6">
          <img src={spiralImage} alt="" className="w-[564px]" />
          <div className="flex flex-col gap-10 p-8 text-lg text-stone-300">
            <p>
              In today’s Web3 market, users must lock up tokens to earn yield or
              keep them liquid to seize new opportunities, but not both. Spiral
              Stake is a Web3 ROSCA-Type Lend & Borrow Protocol designed to
              address this issue inspired by traditional saving circles like
              chit funds but designed for decentralized finance.
            </p>
            <p>
              It brings the power of Rotating Savings and Credit Associations
              (ROSCAs) to the blockchain. Here, users can leverage Rotating
              Credit Pools backed by yield-bearing tokens, enabling them to
              borrow capital without sacrificing yield. It’s a simple,
              capital-efficient solution for accessing liquidity while your
              assets continue earning.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 p-[64px]">
        <div className="text-center space-y-3">
          <p className="text-5xl font-semibold">Why choose Spiral Stake?</p>
          <p className="text-sm text-gray-500">
            Spiral Stake offers transparent, yield-generating liquidity access
            with low risk under one roof.
          </p>
        </div>
        <div className="grid grid-cols-[412px,180px,180px,180px] grid-rows-6 text-sm">
          {/* first */}
          <p className="px-[24px] py-[20px] text-gray-500 border-r-[1px] border-gray-600">
            Feature
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center  border-r-[1px] border-gray-600">
            Tranditional Lending
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center  border-r-[1px] border-gray-600">
            Liquidity Staking
          </p>
          <p className="px-[24px] py-[20px] text-gray-500 flex justify-center   border-gray-600">
            Spiral stake
          </p>
          {/* */}
          <p className="px-[24px] py-[20px] text-neutral-300 border-t-[1px] border-r-[1px] border-gray-600">
            Capital Efficiency
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
            Maintains yeild explosure
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
            Fixed borrowing rates
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            <img src={cross} alt="" />
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px] border-r-[1px] border-gray-600">
            N/A
          </p>
          <p className="px-[24px] py-[20px] flex justify-center border-t-[1px]  border-gray-600">
            <img src={check} alt="" />
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
            Community Powered Rates
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
        </div>
      </div>
      <div className="flex flex-col gap-12 py-[80px] px-[64px]">
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
            msg={
              "Web3 Savers who want group savings with yield and low-risk liquidity access"
            }
            title={"Web3 Savers"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
