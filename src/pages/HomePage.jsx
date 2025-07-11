import backgroundImage from "../assets/hero.svg";
import bg from "../assets/newbg.svg";
import Lpool from "../assets/LiquidityPool.svg";
import LpoolMobile from "../assets/LPoolMobile.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div
      id="Home"
      className="w-full h-fit lg:h-[100vh] mx-auto flex flex-col items-center pt-24 lg:pt-20 justify-between  bgimg"
    >
      <div className="max-w-[530px] flex flex-col pt-10 justify-center items-center gap-4">
        <div className="flex flex-col px-6 lg:px-0 text-center text-3xl lg:text-5xl">
          <p>
            Stablecoin Yields
            <br /> Supercharged
          </p>
        </div>
        <p className="text-center text-sm lg:text-md  text-gray-400 px-3 lg:px-[20px]">
          The first leveraged yields product designed exclusively for stablecoin holders. Delivering
          maximum yield with zero uncertainty.
        </p>

        <div className="flex flex-row gap-4">
          <div
            className=""
            onClick={() => {
              window.location.href = "https://app.spiralstake.xyz";
            }}
          >
            <Button fill={true} text={"Launch app"} />
          </div>
          <div onClick={() => (window.location.href = "#Working")}>
            <Button fill={false} text={"Learn how it works"} />
          </div>
        </div>
      </div>
      <div className="w-[849px] hidden lg:flex px-4 lg:px-0">
        <img src={Lpool} alt="" />
      </div>
      <div className="mx-10 mt-16 flex lg:hidden">
        <img src={LpoolMobile} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
