import Button from "./button";

const Email = () => {
    return ( <div className="flex flex-col justify-center items-center gap-6 py-[72px] px-[80px]">
 <div className="text-center space-y-3">
          <p className="text-5xl font-semibold">Stay in Loop</p>
          <p className="text-sm text-gray-500">
          Join Our Exclusive Newsletter for Inspiration, Insider Updates, and Special Offers!
          </p>
        </div>
        <div className="flex justify-between gap-5 rounded-3xl border-[2px] w-[400px] border-gray-800 py-1 pl-5 pr-1">
            <input type="text" className="w-full bg-transparent outline-none text-xs"/>
            <Button text={"subscribe"}/>
        </div>
    </div> );
}
 
export default Email;