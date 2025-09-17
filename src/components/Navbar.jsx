import logo from "../assets/logo.svg";
import listIcon from "../assets/List.svg";
import Button from "./Button";
import { useState } from "react";
import MenuList from "./MenuList";

const Navbar = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div
      className={`w-full flex justify-between items-center py-5 px-5 lg:px-24  ${
        showList ? "fixed top-0 lg:absolute z-20 bg-black" : "absolute"
      }`}
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-8 lg:w-10" />
      </div>

      <div className=" hidden lg:flex gap-8">
        <a href="#Home">
          <p className="cursor-pointer">Home</p>
        </a>
        <a href="#AboutPage">
          <p className="cursor-pointer text-gray-400">About us</p>
        </a>
        <a href="#Working">
          <p className="cursor-pointer text-gray-400">How it works</p>
        </a>
      </div>

      <div
        className="text-end hidden lg:flex"
        onClick={() => {
          window.location.href = "https://app.spiralstake.xyz";
        }}
      >
        <Button fill={false} text={"Launch App"} />
      </div>
      <div className="w-full flex justify-end lg:hidden" onClick={() => setShowList(!showList)}>
        <img src={listIcon} alt="" />
        {showList && <MenuList />}
      </div>
    </div>
  );
};

export default Navbar;
