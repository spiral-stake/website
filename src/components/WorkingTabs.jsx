import join from "../assets/join.svg";
import check from "../assets/checkbox-circle-line.svg";
import "./WorkingTabs.css";

const WorkingTabs = () => {
  return (
    <div className="max-h-[400px] max-w-5xl mx-auto  overflow-y-scroll">
      <div className="flex gap-6  w-full">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Joining Pool</p>
            <p className="text-sm text-stone-300">
              Set your hours and earn with Zenna. Drive or deliver on your
              terms, balancing your schedule while making the income you need.
            </p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                To participate, you must deposit a specific Yield-Bearing Token
                (YBT) as collateral such as ezETH or
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                This YBT collateral serves as security against potential
                malicious behavior.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You can either join an existing pool that matches your
                collateral preferences or create a new pool based on your
                specific requirements for cycles and collateral amount.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={join} alt="" className="w-[1000px]" />
        </div>
      </div>
      <div className="flex gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Joining Pool</p>
            <p className="text-sm text-stone-300">
              Set your hours and earn with Zenna. Drive or deliver on your
              terms, balancing your schedule while making the income you need.
            </p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                To participate, you must deposit a specific Yield-Bearing Token
                (YBT) as collateral such as ezETH or
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                This YBT collateral serves as security against potential
                malicious behavior.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You can either join an existing pool that matches your
                collateral preferences or create a new pool based on your
                specific requirements for cycles and collateral amount.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={join} alt="" className="w-[1000px]" />
        </div>
      </div>
      <div className="flex gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Joining Pool</p>
            <p className="text-sm text-stone-300">
              Set your hours and earn with Zenna. Drive or deliver on your
              terms, balancing your schedule while making the income you need.
            </p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                To participate, you must deposit a specific Yield-Bearing Token
                (YBT) as collateral such as ezETH or
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                This YBT collateral serves as security against potential
                malicious behavior.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You can either join an existing pool that matches your
                collateral preferences or create a new pool based on your
                specific requirements for cycles and collateral amount.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={join} alt="" className="w-[1000px]" />
        </div>
      </div>
    </div>
  );
};

export default WorkingTabs;
