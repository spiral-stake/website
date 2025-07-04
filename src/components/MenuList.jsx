import Button from "./Button";

const MenuList = () => {
  return (
    <div className=" w-full fixed top-[70px] left-0 backdrop-blur-md h-[100vh] pt-10 flex flex-col gap-10 bg-white bg-opacity-10">
      <div className="pl-10 border-b-2 mx-10 border-red-200 pb-4 border-opacity-30">
        <a href="#Home">Home</a>
      </div>
      <div className="pl-10 border-b-2 mx-10 border-red-200 pb-4 border-opacity-30"><a href="#AboutPage">About us</a></div>
      <div className="pl-10 border-b-2 mx-10 border-red-200 pb-4 border-opacity-30"><a href="#Working">How it Works</a></div>
      <div
        className="pl-10 border-b-2 mx-10 border-red-200 pb-4 border-opacity-30"
        onClick={() => {
          window.location.href = "https://app.spiralstake.xyz";
        }}
      >
        <Button fill={false} text={"Launch App"} />
      </div>
    </div>
  );
};

export default MenuList;
