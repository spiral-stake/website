import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import call from "../assets/call.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import xlogo from "../assets/xlogo.svg";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col gap-12 p-[20px] lg:p-[80px] pb-0  lg:pb-0">
      <div className="flex lg:pl-10 gap-[24px] text-sm text-gray-600">
        <div className=" w-[411px] flex flex-col gap-[20px] pr-[32px]">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-10" />
            <p className="text-2xl text-stone-300 font-semibold">Spiral Stake</p>
          </div>
          <div className="text-sm text-gray-600">
            Stablecoin holders can now access stable leveraged yields, Predictable returns, zero
            hassle — built for everyone.
          </div>
          <div className="flex gap-2 items-center">
            <img src={mail} alt="" />
            <p>info@spiralstake.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:px-10 py-[16px] lg:py-[32px]">
        <div className="text-xs lg:text-md lg:w-[411px]">
          <p>Copyright © 2025, Spiral Stake</p>
        </div>
        <div className="flex gap-2">
          <a href="https://x.com/0xspiralstake">
            <div className="p-2 bg-gray-800 rounded-xl">
              <img src={xlogo} alt="" className="w-4" />
            </div>
          </a>
          <a href="https://t.me/+OYYtaiH9ex9kZDQ9">
            <div className="p-2 bg-gray-800 rounded-xl">
              <img src={telegram} alt="" className="w-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
