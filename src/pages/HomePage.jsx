import backgroundImage from "../assets/hero.svg";
import bg from "../assets/newbg.svg";
import Lpool from "../assets/LiquidityPool.svg";
import LpoolMobile from "../assets/LPoolMobile.svg";
import Button from "../components/Button.jsx";
import LogoAnimation from "../components/logoAnimation";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
  return (
    <div>
      <div
        id="Home"
        className="w-full h-[844px] lg:h-[100vh] mx-auto flex flex-col items-center justify-between bgimg"
      >
        {/* navbar */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* text container */}
        <div className="max-w-[600px] flex flex-col pt-10 justify-center items-center gap-4">
          <div className="flex flex-col px-6 lg:px-0 text-center text-[32px] lg:text-5xl">
            <p>
              Stable Yields
              <br /> Supercharged. Secure
            </p>
          </div>
          <p className="text-center text-[16px] lg:text-[#D0CCED] font-light text-[#D0CCED] px-3 lg:px-[20px]">
            Lock in up to 90% APY on PTs of battle-tested stablecoins — no rate shocks, no manual
            loops, just industry outperforming yields at Maturity.
          </p>

          <div className="flex flex-row gap-4">
            <div
              className=""
              onClick={() => {
                window.open("https://app.spiralstake.xyz", "_blank");
              }}
            >
              <Button fill={true} text={"Launch app"} />
            </div>

            {/* <div
            className=""
            onClick={() => {
              window.open("https://docs.spiralstake.xyz", "_blank");
            }}
          >
            <Button fill={false} text={"Explore Docs"} />
          </div> */}
          </div>
        </div>

        {/* lpool image */}
        <div className="w-[849px] hidden lg:flex px-4 lg:px-0">
          <img src={Lpool} alt="" />
        </div>
        <div className="mx-10 mt-16 flex lg:hidden">
          <img src={LpoolMobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
