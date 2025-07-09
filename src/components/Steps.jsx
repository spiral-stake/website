import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import wallet from "../assets/wallet.svg";
import bag from "../assets/bag.svg";
import target from "../assets/target.svg";
import infinity from "../assets/infinity.svg";

const Steps = () => {
  return (
    <div className="hidden relative w-full lg:flex flex-col items-center justify-center gap-[60px]">
      <div className="h-[700px] flex items-start text-center space-y-2 sticky top-[50px]">
        <p className="text-[32px] lg:text-[40px] lg:text-5xl font-[600] ">
          How does Spiral Stake work?
        </p>
      </div>
      <div className="mt-[-700px] flex flex-row gap-[56px] p-[80px]">
        <div className="pb-[140px] flex flex-col gap-[200px]">
          <img src={step1} alt="" className="w-[540px] sticky top-[150px]" />
          <img
            src={step2}
            alt=""
            className="w-[540px] sticky top-[150px] translate-x-2 translate-y-2"
          />
          <img
            src={step3}
            alt=""
            className="w-[540px] sticky top-[150px] translate-x-4 translate-y-4"
          />
          <img
            src={step4}
            alt=""
            className="w-[540px] sticky top-[150px] translate-x-6 translate-y-6"
          />
        </div>
        <div className="">
          <div className="flex flex-col gap-2 h-[540px] sticky top-[150px]">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 1
            </p>
            <div className="flex flex-row gap-2">
              <img src={wallet} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">
                Deposit Staked Stablecoins
              </p>
            </div>
            <p className="text-[16px] text-gray-400 h-[400px] font-[400]">
              Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
              stablecoins as collateral while they continue earning staking
              rewards.
            </p>
          </div>
          <div className="flex flex-col pt-4 border-t-[1px] border-gray-700 bg-black gap-2 h-[460px] sticky top-[230px]">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 2
            </p>
            <div className="flex flex-row gap-2">
              <img src={bag} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">
                Choose Your Borrowing Method
              </p>
            </div>
            <p className="text-[16px] text-gray-400 h-[400px] font-[400]">
              Lock your sFrxUSD, sUSDe, sUSDf, or other supported staked
              stablecoins as collateral while they continue earning staking
              rewards.
            </p>
          </div>
          <div className="flex flex-col pt-4 border-t-[1px] border-gray-700 bg-black gap-2 h-[360px] sticky top-[330px]">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 3
            </p>
            <div className="flex flex-row gap-2">
              <img src={target} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">Receive SPIUSD</p>
            </div>
            <p className="text-[16px] text-gray-400 h-[400px] font-[400]">
              Get our fully collateralized stablecoin that maintains its $1 peg
              through robust arbitrage mechanisms.
            </p>
          </div>
          <div className="flex flex-col pt-4 border-t-[1px] border-gray-700 gap-2 bg-black h-[270px] sticky top-[420px]">
            <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
              step 4
            </p>
            <div className="flex flex-row gap-2">
              <img src={infinity} alt="" className="w-10" />
              <p className="text-[24px] font-[500]">Loop & Amplify</p>
            </div>
            <p className="text-[16px] text-gray-400 h-[400px] font-[400]">
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

export default Steps;
