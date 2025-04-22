import backgroundImage from "../assets/image.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div id="Home" className="max-w-4xl mx-auto flex flex-col justify-center items-center py-6 md:py-20 gap-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col text-center text-3xl md:text-5xl font-semibold">
          <p>Stake,Bid, and Earn</p>
          <p>The Fututre of Liquidity Pools</p>
        </div>
        <p className="text-center md:my-3 text-gray-400  text-md md:text-xs px-5 md:px-16">
          A Web3 ROSCA lending protocol that allows users to access liquidity
          from yield-bearing tokens while retaining their yield, merging group
          savings with efficient borrowing.
        </p>
        <Button text={"Join pool"} />
      </div>
      <div className="px-4 mb-6 md:px-0">
        <img src={backgroundImage} alt=""/>
      </div>
    </div>
  );
};

export default HomePage;
