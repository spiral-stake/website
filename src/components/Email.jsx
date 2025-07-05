import Button from "./Button";

const Email = () => {
  return (
    <div className="w-full md:max-w-[550px] md:min-h-[350px] bg-black flex flex-col justify-center items-center gap-6 py-[72px] px-[80px]">
      <div className="text-center space-y-3">
        <p className="text-[40px] font-[600]">Stay in Loop</p>
        <p className="text-[16px] text-gray-400 font-[400]">
          Join Our Exclusive Newsletter for Inspiration, Insider Updates, and
          Special Offers!
        </p>
      </div>
      <div className="flex justify-between gap-5 rounded-3xl border-[2px] w-full md:w-[400px] border-gray-800 py-1 pl-5 pr-1">
        <input
          type="text"
          className="w-full bg-transparent outline-none text-xs placeholder:text-[14px] placeholder:font-[400]"
          placeholder="Enter your Email"
        />
        <Button fill={true} text={"Subscribe"} />
      </div>
    </div>
  );
};

export default Email;
