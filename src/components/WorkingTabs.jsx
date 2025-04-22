import join from "../assets/join.svg";
import check from "../assets/checkbox-circle-line.svg";
import working0 from "../assets/working0.png"
import working1 from "../assets/working1.png"
import working2 from "../assets/working2.png"
import working3 from "../assets/working3.png"

const WorkingTabs = () => {
  return (
    <div className="max-h-[400px] pr-5 max-w-5xl mx-auto space-y-24 overflow-y-scroll">
      <div className="flex gap-6  w-full">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Joining Pool</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                To participate, you must deposit the Staked Stablecoin as
                collateral (such as sfrxUSD, sUSDe, StScUSD ).
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                This staked stable coin collateral serves as security against
                potential malicious behavior.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You can either join an existing pool that matches your
                collateral preferences or create a new pool based on your
                specific requirements for cycles and collateral amount.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={working0} alt="" className="w-[700px]" />
        </div>
      </div>
      <div className="flex gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Cycle Deposit</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                Each cycle requires you to deposit a fixed amount of the base
                token (for example, frxUSD if you're using sfrxUSD as
                collateral).
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You must make this deposit during the designated deposit window,
                which opens at the beginning of each cycle.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                It's important to make your cycle deposit on time for each
                cycle. When you do, a portion of your collateral is released
                back to you. If you miss a deposit, you'll forfeit that portion
                of your collateral.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={working1} alt="" className="w-[800px]" />
        </div>
      </div>
      <div className="flex gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Bidding for Liquidity</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                During the bid window, participants compete for pooled liquidity
                by stating how much of that liquidity they're willing to give up
                (forgo).
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                To increase your chances of winning, bid a higher borrow APR
                than other participants in the pool—the algorithm favors higher
                bids.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                You can only bid until you win once. If you win liquidity in any
                cycle, you cannot bid in future cycles.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                The portion of liquidity you agree to forgo is distributed to
                other participants as "Spiral Yield."
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                If you remain in the pool until the final round without winning,
                you'll automatically receive the remaining liquidity by default.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={working2} alt="" className="w-[550px]" />
        </div>
      </div>
      <div className="flex gap-6  max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-[24px] pt-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Yeild Distribution</p>
          </div>
          <div className="text-white/60 flex flex-col gap-1">
            <div className="flex gap-4 items-center">
              <img src={check} alt="" />
              <div>
                <p>Spiral stake generates yield in two distinct ways: Yield</p>
                <p>1. Collateral</p>
                <p>2. Spiral Yield.</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                Collateral Yield comes from your deposited Yield-Bearing Tokens
                (YBTs) in the Spiral pool, plus any additional incentives from
                Points programs. This yield is claimable in real-time.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                Spiral Yield is generated on your cycle deposits and represents
                your share of the liquidity that winning bidders agreed to
                forgo.
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <img src={check} alt="" />
              <p>
                It's recommended to claim your Spiral Yield at the end of each
                cycle, though you have the option to claim it later. For optimal
                returns, you should regularly claim your YBT yield as well.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={working3} alt="" className="w-[750px]" />
        </div>
      </div>
    </div>
  );
};

export default WorkingTabs;
