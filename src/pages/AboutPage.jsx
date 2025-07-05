import spiralImage from "../assets/01.svg";
import cross from "../assets/close-circle-line.svg";
import check from "../assets/checkbox-circle-line.svg";
import DetailCard from "../components/DetailCard";
import frame1 from "../assets/frame.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import DotName from "../components/DotName";
import InfoTemplate from "../components/InfoTemplate";
import InfoCard from "../components/InfoCard";
import growth from "../assets/Growth.svg";
import balance from "../assets/balance.svg";
import coins from "../assets/coins.svg";
import option from "../assets/option.svg";
import Button from "../components/Button";
import globe from "../assets/Globe.svg";
import logoSmall from "../assets/logoSmall.svg";
import dao from "../assets/dao.svg";
import ethena from "../assets/ethena.svg";
import CheckCircle from "../assets/CheckCircle.svg";
import XCircle from "../assets/XCircle.svg";

const AboutPage = () => {
  return (
    <div>
      <div id="AboutPage">
        <div className="hidden w-full overflow-hidden md:flex flex-col md:flex-row h-fit md:h-[1300px] pl-2 pt-4 md:pl-[80px] md:pt-[80px]">
          <div className="w-[60%] md:w-[660px] flex flex-col md:justify-center gap-4">
            <p className="text-[32px] md:text-[50px] font-[500]">
              What is Spiral Stake?
            </p>
            <p className="hidden md:flex text-[20px] font-[400] text-gray-400">
              Spiral Stake is a specialized money market protocol designed
              exclusively for staked stablecoin holders. It solves a fundamental
              DeFi challenge: allowing users to maintain their staking rewards
              while accessing liquidity through innovative borrowing mechanisms.
              <br />
              <br />
              The protocol enables users to maximize yields on staked
              stablecoins without sacrificing capital accessibility.
            </p>
            <div className="hidden md:flex pt-4">
              <Button fill={false} text={"Read Documentation"} />
            </div>
          </div>
          <div className="hidden w-full relative md:flex items-end justify-end">
            <div className="absolute w-[500px] h-[500px] top-0 left-[36%] md:w-[1182px] md:h-[1182px] rounded-full border-[2px] border-gray-400 globe">
              <div className="hidden md:flex absolute flex-row top-[300px] left-[10px] gap-4">
                <DotName text={"Problem"} />
                <InfoTemplate
                  title={"The Problem"}
                  msg={
                    "Traditional DeFi forces users to choose between earning staking rewards or having liquid capital available for other opportunities."
                  }
                />
              </div>
              <div className="absolute flex flex-row top-[734px] left-[0px] gap-4">
                <DotName text={"Solution"} />
                <InfoTemplate
                  title={"Spiral Stake's Solution"}
                  msg={
                    "A dual-mechanism lending protocol that allows users to borrow against their staked stablecoins while continuing to earn staking rewards, creating opportunities for yield amplification and capital efficiency."
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex relative w-[574px] h-[650px] md:hidden globe_mobile">
            <div className="absolute ">
              <DotName text={"Problem"} />
            </div>
            <div></div>
          </div>
        </div>
        {/* for mobile */}
        <div className="md:hidden relative py-4 px-4 w-full flex flex-col gap-24 h-fit globe_mobile">
          <p className="text-[40px] font-[500]">
            What is <br />
            Spiral Stake?
          </p>
          <div>
            <InfoTemplate
              msg={
                "Traditional DeFi forces users to choose between earning staking rewards or having liquid capital available for other opportunities."
              }
              title={"The problem"}
            />
          </div>
          <div>
            <InfoTemplate
              msg={
                "A dual-mechanism lending protocol that allows users to borrow against their staked stablecoins while continuing to earn staking rewards, creating opportunities for yield amplification and capital efficiency."
              }
              title={"Spiral Stake's Solution"}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="mt-10 text-[14px] font-[400] text-gray-500">
              Spiral Stake is a money market for staked stablecoins, letting
              users access liquidity while still earning staking
              rewards—maximizing yield without giving up capital access.
            </p>
            <Button fill={false} text={"Read Documentation"} />
          </div>
        </div>

        <div className="pt-[64px] md:pb-[120px] px-[16px] md:px-20 flex flex-col gap-[48px] items-center justify-center">
          <div className="w-full md:max-w-[480px] flex flex-col gap-1 justify-center items-center">
            <p className="px-10 text-[32px] md:text-[40px] font-[600] text-center">
              Why choose Spiral Stake?
            </p>
            <p className=" text-center text-[12px] md:text-[16px] font-[400] text-gray-500">
              SpiralStake provides secure, transparent access to yield-bearing
              liquidity—all in one unified platform.
            </p>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-[16px] md:gap-6">
            <InfoCard
              colorfull={true}
              symbol={growth}
              info={
                "Set your own borrowing costs through competitive auctions, giving you unprecedented control over your capital expenses."
              }
            />
            <InfoCard
              colorfull={false}
              symbol={coins}
              info={
                "Maintain your staking rewards while accessing capital to deploy in other yield-generating strategies across DeFi."
              }
              title={"Leveraged Yields"}
            />
            <InfoCard
              colorfull={false}
              info={
                "Choose between instant borrowing or auction-based rates. Access liquidity on your terms, whenever you need it."
              }
              title={"Flexible Access Options"}
              symbol={option}
            />
            <InfoCard
              colorfull={false}
              info={
                "SPIUSD stays pegged via a robust Peg Stability Module and automated arbitrage."
              }
              symbol={balance}
              title={"Robust Price Stability"}
            />
          </div>
        </div>
        <div className="w-full bg-[radial-gradient(closest-side,_#1E1831,_#090026,_#000000)] py-[120px] px-2 md:px-[80px] flex flex-col gap-[48px] items-center justify-center ]">
          <div className="w-full md:max-w-[560px] flex flex-col justify-center items-center">
            <p className="text-[32px] md:text-[40px] font-[600] text-center">
              How Spiral Stake Stands Apart
            </p>
            <p className=" text-center text-[12px] md:text-[16px] font-[400] text-gray-500">
              See how Spiral Stake compares to top DeFi protocols in yield,
              liquidity, and borrowing flexibility.
            </p>
          </div>
          <div className="w-full grid grid-cols-[34%,22%,22%,22%] md:grid-cols-[301px,194px,194px,194px]  grid-rows-6 p-[24px] border-[1px] border-gray-700 rounded-[20px]">
            <div className="text-[16px] md:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b border-b-gray-600">
              Feature
            </div>
            <div className="flex justify-center items-center gap-2 py-4 px-2 bg-gray-400 bg-opacity-5 rounded-t-[5px] border-b border-b-gray-600">
              <img src={logoSmall} alt="" />{" "}
              <p className="hidden md:flex text-[20px] font-[400] ">Spiral Stake</p>
            </div>
            <div className="flex justify-center items-center gap-2 py-4 px-2 border-b border-b-gray-600">
              <img src={dao} alt="" />{" "}
              <p className="hidden md:flex text-[20px] font-[400]">MarkerDao</p>
            </div>
            <div className="flex justify-center items-center gap-2 py-4 px-2 border-b border-b-gray-600">
              <img src={ethena} alt="" />{" "}
              <p className="hidden md:flex text-[20px] font-[400]">Ethena</p>
            </div>
            <div className="text-[12px] md:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b border-b-gray-800">
              Staked Stablecoin Collateral
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={XCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="text-[12px] md:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800">
              Yield While Collateralized
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={XCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="text-[12px] md:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800">
              Borrowing Flexibility
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={XCircle} alt="" />
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <img src={XCircle} alt="" />
            </div>
            <div className="text-[12px] md:text-[20px] font-[400] text-gray-400 py-4 px-2 border-b-[1px] border-b-gray-800 ">
              Leverage & Looping
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center bg-gray-400 bg-opacity-5">
              <p className="text-[12px] md:text-[18px] font-[400] text-gray-400">
                Native Lopping
              </p>
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <p className="text-[12px] md:text-[18px] font-[400] text-gray-400">Manual</p>
            </div>
            <div className="py-4 px-2 border-b-[1px] border-b-gray-800 flex justify-center items-center">
              <p className="text-[12px] md:text-[18px] font-[400] text-gray-400">
                Not Supported
              </p>
            </div>
            <div className="text-[12px] md:text-[20px] font-[400] text-gray-400 py-4 px-2">
              Peg Stability Module (PSM)
            </div>
            <div className="py-4 px-2 flex justify-center items-center bg-gray-400 bg-opacity-5 rounded-b-[5px]">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="py-4 px-2 flex justify-center items-center">
              <img src={CheckCircle} alt="" />
            </div>
            <div className="py-4 px-2 flex justify-center items-center">
              <img src={XCircle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
