import Button from "./Button";

const Email = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-6 py-[72px] px-4 lg:px-[80px]">
      <div className="text-center space-y-3">
        <p className="text-[32px] lg:text-[40px] font-[600]">Stay in Loop</p>
        <p className="text-[14px] lg:text-[16px] text-gray-400 font-[400]">
          Join Our Exclusive Newsletter for Inspiration, Insider Updates, and
          Special Offers!
        </p>
      </div>
      <div className="flex flex-col px-[34px] lg:flex-row justify-between gap-5 rounded-3xl lg:border-[2px] w-full lg:w-[400px] border-gray-800 py-1 pl-5 lg:pr-1">
        <input
          type="text"
          className="w-full p-4 border-[1px] border-gray-700 rounded-3xl lg:border-0 lg:p-0 bg-transparent outline-none text-xs placeholder:text-[14px] placeholder:font-[400]"
          placeholder="Enter your Email"
        />
        <Button long={true} fill={true} text={"Subscribe"} />
      </div>
    </div>
  );
};

export default Email;
