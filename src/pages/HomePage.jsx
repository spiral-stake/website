import backgroundImage from "../assets/Image.svg"
import Button from "../components/button";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center py-20 gap-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col text-center text-5xl font-semibold">
          <p>Stake,Bid, and Earn</p>
          <p>The Fututre of Liquidity Pools</p>
        </div>
        <p className="text-center my-3 text-gray-400 text-xs px-16">
          A Web3 ROSCA lending protocol that allows users to access liquidity
          from yield-bearing tokens while retaining their yield, merging group
          savings with efficient borrowing.
        </p>
        <Button text={"Join pool"}/>
      </div>
      <div><img src={backgroundImage} alt="" /></div>
    </div>
  );
};

export default HomePage;
