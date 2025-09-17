import BenifitCard from "./benifitCard";
import search from "../assets/search.svg";
import clock from "../assets/clock.svg";
import growthblue from "../assets/growthblue.svg";
import gas from "../assets/gas.svg";
import access from "../assets/access.svg";

const Benifits = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[56px] px-[16px] pt-[120px] pb-[64px] lg:px-[80px] lg:py-[120px]">
      <div className="w-full lg:max-w-[580px] flex flex-col justify-center items-center">
        <p className="text-[32px] lg:text-[40px] font-[600] text-center">
          Access Spiral Stake Today: Deposit, and Earn
        </p>
      </div>
      <div className="flex lg:hidden">
        <img src={access} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16">
        <div className="flex flex-col justify-between gap-10 lg:gap-0 lg:py-6">
          <BenifitCard
            logo={search}
            title={"Discover Yeilds"}
            body={"Find yield options across stablecoins, ETH, and BTC."}
          />
          <BenifitCard
            logo={growthblue}
            title={"Stay Informed"}
            body={"Track returns, rewards, and risks in real time."}
          />
        </div>
        <div className="hidden col-span-2 lg:flex justify-center">
          <img src={access} alt="" className="w-[600px]" />
        </div>
        <div className="flex flex-col justify-between gap-10 lg:gap-0 lg:py-6">
          <BenifitCard
            logo={clock}
            title={"Time Saving"}
            body={"Fast, hassle-free transactions."}
          />
          <BenifitCard
            logo={gas}
            title={"Gas Efficiency"}
            body={"Lower costs with optimized gas use."}
          />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
