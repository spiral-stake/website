import WorkingTabs from "../components/WorkingTabs";

const Working = () => {
  return (
    <div id="Working" className="flex flex-col gap-10 md:gap-20 py-16 md:py-[40px]">
      <div className="text-center space-y-2">
        <p className="text-3xl md:text-5xl font-semibold">
          How does Spiral Stake work?
        </p>
      </div>
      <WorkingTabs />
      {/* <Email/> */}
    </div>
  );
};

export default Working;
