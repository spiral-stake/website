import backgroundImage from "../assets/hero.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div
      id="Home"
      className="max-w-4xl mx-auto flex flex-col justify-center items-center pb-5 md:py-20 gap-10"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col px-6 md:px-0 text-center text-3xl md:text-5xl font-semibold">
          <p>Liquid Stablecoins, Intact Rewards</p>
        </div>
        <p className="text-center text-sm md:text-md  mb-2 md:mb-6 text-gray-400 px-3 md:px-16">
          Stablecoin liquidity market with fixed borrowing APR.
        </p>

        <div
          className=""
          onClick={() => {
            window.location.href = "https://app.spiralstake.xyz";
          }}
        >
          <Button text={"Join Pool"} />
        </div>
      </div>
      <div className="px-4 mb-16 md:px-0">
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
