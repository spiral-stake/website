import backgroundImage from "../assets/hero.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div
      id="Home"
      className="max-w-4xl mx-auto flex flex-col justify-center items-center py-20 gap-10"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col text-center text-5xl font-semibold">
          <p>Liquid Stablecoins, Intact Rewards</p>
        </div>
        <p className="text-center my-1 text-gray-400 px-16">
          Stable coin liquidity market with fixed borrowing APR.
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
      <div>
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
