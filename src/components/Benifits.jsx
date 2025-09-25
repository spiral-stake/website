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
            title={"Control Exposure Safely"}
            body={"Customizable leverage, full control, amplified yield, and peace of mind."}
          />
          <BenifitCard
            logo={growthblue}
            title={"Outperform Markets Passively"}
            body={
              "Grow wealth passively, earn lump sums, outperform traditional assets."
            }
          />
        </div>
        <div className="hidden col-span-2 lg:flex justify-center">
          <img src={access} alt="" className="w-[600px]" />
        </div>
        <div className="flex flex-col justify-between gap-10 lg:gap-0 lg:py-6">
          <BenifitCard
            logo={clock}
            title={"Lucrative Low Risk Capital Allocation"}
            body={"Spiral Stake makes low-risk DeFi more lucrative, easy, and safer than bonds or idle stables."}
          />
          <BenifitCard
            logo={gas}
            title={"Gas Efficiency"}
            body={
              "1 flash-leverage tx via Morpho ensuring low execution cost & hassle"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
