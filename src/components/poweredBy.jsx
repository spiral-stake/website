const PoweredBy = () => {
  return (
    <div className="flex flex-col gap-[48px] my-16 mb-24">
      <p className="text-[30px] lg:text-[36px] font-[400] text-white text-center">
        Powered By
      </p>
      <div className="flex flex-col items-center lg:flex-row justify-center gap-[64px] lg:gap-24">
        <div>
          <img src="/morpho.svg" alt="" className="w-[158px] h-[32px] lg:w-[240px] lg:h-[48px]" />
        </div>
        <div>
          <img
            src="https://www.pendle.finance/.netlify/images?url=%2Flogo.png"
            alt=""
            className="w-[158px] h-[32px] lg:w-[240px] lg:h-[48px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;
