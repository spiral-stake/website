import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MaxYieldSteps = ({ img, step, title, info }) => {
  return (
    <div className="flex flex-row lg:flex-col gap-[12px] items-center lg:px-[36px]">
      <div className="max-w-[180px] lg:max-w-fit">
        <DotLottieReact src={img} autoplay loop/>
      </div>
      <div className="flex flex-col gap-[4px] lg:gap-[12px] lg:justify-center lg:items-center">
        <p className="bg-gray-800 text-[14px] font-[400] w-fit px-2 rounded-[19px]">
          {step && `step ${step}`}
        </p>
        <p className="text-[20px] font-[400]">{title}</p>
        <p className="text-[14px] lg:text-[16px] font-[400] text-gray-500 lg:text-center">{info}</p>
      </div>
    </div>
  );
};

export default MaxYieldSteps;
