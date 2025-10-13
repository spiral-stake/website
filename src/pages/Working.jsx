import WorkingSteps from "../components/WorkingSteps";
import WorkingTabs from "../components/WorkingTabs";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import wallet from "../assets/wallet.svg";
import bag from "../assets/bag.svg";
import target from "../assets/target.svg";
import infinity from "../assets/infinity.svg";

import Email from "../components/Email";
import Steps from "../components/Steps";
import RoadMap from "../components/RoadMap";
import Benifits from "../components/Benifits";
import Credits from "../components/Credits";

const Working = () => {
  return (
    <div id="Working">
      <div>
        <Benifits />
      </div>
      
      <div className="w-full h-[650px] mt-[24px] lg:h-[800px] loop relative">
        <div className="absolute w-full flex justify-center items-center top-0 lg:top-10">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Working;
