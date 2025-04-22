const DetailCard = ({ img, title, msg }) => {
  return (
    <div className="w-full md:p-[24px] md:w-[371px] gap-6  flex flex-col items-center border-[2px] border-gray-800 rounded-xl">
      <div>
        <img src={img} alt="" className="w-[150px]" />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-lg text-stone-50/95">🚀{title}</p>
        <p className="text-zinc-500">{msg}</p>
      </div>
    </div>
  );
};

export default DetailCard;
