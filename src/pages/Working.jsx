
import WorkingTabs from "../components/WorkingTabs";

const Working = () => {
  return (
    <div id="Working" className="flex flex-col gap-10 py-[120px]">
      <div className="text-center space-y-2">
        <p className="text-5xl font-semibold">How does Spiral Stake work?</p>
        <p className="text-sm text-gray-500">
          Stake, bid, and earn in a fair, transparent liquidity pool system.
        </p>
      </div>
      <WorkingTabs />
      {/* <Email/> */}
    </div>
  );
};

export default Working;
