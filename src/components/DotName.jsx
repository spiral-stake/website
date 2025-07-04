import elipse from "../assets/Ellipse.svg"

const DotName = ({ text }) => {
  return (
    <div className="w-20 flex flex-col justify-center gap-2 items-center">
      <img className="w-[8px] md:w-[16px]" src={elipse} alt="" />
      <p className="text-[12px] md:text-[16px] font-semibold">{text}</p>
    </div>
  );
};

export default DotName;
