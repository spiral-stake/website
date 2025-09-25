const PoweredBy = () => {
  return (
    <div className="flex flex-col gap-[48px] my-16 mb-24">
      <p className="text-[30px] lg:text-[36px] font-[400] text-white text-center">
        Powered By
      </p>
      <div className="flex flex-col items-center lg:flex-row justify-center gap-24">
        <div>
          <img src="/morpho.svg" alt="" className="w-[240px]" />
        </div>
        <div className="w-[280px]">
          <img
            src="https://www.pendle.finance/.netlify/images?url=%2Flogo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;
