import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import call from "../assets/call.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col gap-12 border-t-[1px] border-gray-600 p-[80px] pb-0">
      <div className="flex justify-around gap-[24px] text-sm text-gray-600">
        <div className=" w-[411px] flex flex-col gap-[20px] pr-[32px]">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-10" />
            <p className="text-2xl text-stone-300 font-semibold">
              Spiral Stake
            </p>
          </div>
          <div className="text-sm text-gray-600">
            Join competitive staking cycles, win liquidity, and maximize rewards
            with fair participation
          </div>
          <div className="flex gap-2 items-center">
            <img src={mail} alt="" />
            <p>info@spiralstake.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={call} alt="" />
            <p>+91 01010101010</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-300 text-lg pb-4 font-semibold">Pages</p>
          <p className="text-sm text-gray-600">Home</p>
          <p className="text-sm text-gray-600">Features</p>
          <p className="text-sm text-gray-600">How it works</p>
          <p className="text-sm text-gray-600">About</p>
          <p className="text-sm text-gray-600">Blog</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-300 text-lg pb-4 font-semibold">Product</p>
          <p className="text-sm text-gray-600">Crypto</p>
          <p className="text-sm text-gray-600">Spiral Features</p>
          <p className="text-sm text-gray-600">Privacy and Security</p>
          <p className="text-sm text-gray-600">Status </p>
          <p className="text-sm text-gray-600">API</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-300 text-lg pb-4 font-semibold">Discover</p>
          <p className="text-sm text-gray-600">Get our newsletter</p>
          <p className="text-sm text-gray-600">Resoureces</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-stone-300 text-lg pb-4 font-semibold">
            Help Center
          </p>
          <p className="text-sm text-gray-600">Community</p>
          <p className="text-sm text-gray-600">knowledge Base</p>
          <p className="text-sm text-gray-600">Support</p>
        </div>
      </div>
      <div className="flex justify-between px-10 py-[32px] border-t-[1px] border-gray-600">
        <div className="w-[411px]">
          <p>Copyright © 2025, Spiral Stake</p>
        </div>
        <div className="flex gap-[100px] ">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2 bg-gray-800 rounded-xl"><img src={facebook} alt="" /></div>
          <div className="p-2 bg-gray-800 rounded-xl"><img src={instagram} alt="" /></div>
          <div className="p-2 bg-gray-800 rounded-xl"><img src={twitter} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
