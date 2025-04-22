import logo from "../assets/logo.svg";
import { useNavigate } from "react-router";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between px-10 py-3 border-b-[1px] border-gray-800">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-8" />
          <p className="text-xl font-semibold">Spiral stake</p>
        </div>
        <div className="flex gap-8">
          <a href="#Home">
            <p className="cursor-pointer">Home</p>
          </a>
          <a href="#AboutPage">
            <p className="cursor-pointer">About us</p>
          </a>
          <a href="#Working">
            <p className="cursor-pointer">How it work's</p>
          </a>
          <p className="cursor-pointer">Blogs</p>
        </div>
      </div>
      <div
        className="w-full text-end"
        onClick={() => {
          window.location.href = "https://app.spiralstake.xyz";
        }}
      >
        <Button text={"Launch App"} />
      </div>
    </div>
  );
};

export default Navbar;
