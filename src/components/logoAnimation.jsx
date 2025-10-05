import logo from "../assets/logo.svg";
import { useEffect , useState } from "react";

const LogoAnimation = () => {

     const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust divisor to control speed of growth
      const newScale = 1 + scrollY / 1000;
      setScale(newScale > 4 ? 4 : newScale); // cap growth at 2x
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
    style={{ transform: `scale(${scale})` }}
    className="w-full relative flex justify-center items-center h-[100vh]">
      <img src={logo} alt="" className="fixed top-[50%] left-[50%] w-[200px] animate-spin [animation-duration:3s]"/>
    </div>
  );
};

export default LogoAnimation;
