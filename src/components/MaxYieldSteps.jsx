const MaxYieldSteps = ({ img, step, title, info }) => {
  return (
    <div className="flex flex-row lg:flex-col gap-[12px] justify-center items-center lg:px-[36px]">
      <img src={img} alt="" className="w-[80px] lg:w-[120px]"/>
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
