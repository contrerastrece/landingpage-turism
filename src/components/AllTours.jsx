const AllTours = () => {
  return (
    <>
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <div className="w-[676px] h-[262px] flex-col justify-start items-center gap-8 inline-flex">
          <div className="w-[676px] text-center">
            <span className="text-slate-800 text-5xl font-bold">
              We can do anything we want to if{" "}
            </span>
            <span className="text-rose-600 text-5xl font-bold">we stick</span>
            <span className="text-slate-800 text-5xl font-bold">
              to it long enough.
            </span>
          </div>
          <div className="text-center text-zinc-500 text-lg font-normal">
            Do what you can, with what you have, where you are.
          </div>
          <div className="px-6 py-[18px] bg-rose-600 rounded-[45px] border border-rose-600 justify-center items-center inline-flex">
            <div className="text-white text-xl font-medium">See all tours</div>
          </div>
        </div>

        <div className="w-full h-[330px] flex justify-around relative">
          <div className="h-full flex items-star">
            <div className="w-[254px] h-[290px] bg-white rounded-[1rem] shadow">
              <img
                className="w-[235px] h-[191px] rounded-[1rem] m-auto my-[0.48rem]"
                src="https://via.placeholder.com/235x191"
              />
              <div className="w-[235px] m-auto">
              <div className="text-slate-800 text-lg font-bold leading-normal">
                Porto, Portugal
              </div>
              <p className="text-rose-600 text-xl font-bold leading-relaxed">
                $150
                <span className="text-zinc-500 text-sm font-medium leading-[18.48px]"> 7 days tour</span>
              </p>

              </div>
            </div>
          </div>

          <div className="h-full flex items-end">
            <div className="w-[190px] h-[217px] bg-white rounded-[1rem] shadow">
              <img
                className="w-[175.74px] h-[142.76px] rounded-[1rem] m-auto my-[0.36rem]"
                src="https://via.placeholder.com/176x143"
              />
              <div className="w-[176px] m-auto">
                <div className=" text-slate-800 text-sm font-bold">
                  Paris, France
                </div>
                <p className="text-rose-600 text-base font-bold leading-[21.12px]">
                  $100
                  <span className="text-zinc-500 text-[10px] font-medium leading-[13.20px]"> 5 days tour</span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-full flex items-end">
            <div className="w-[190px] h-[217px] bg-white rounded-[1rem] shadow">
              <img
                className="w-[175.74px] h-[142.76px] rounded-[1rem] m-auto my-[0.36rem]"
                src="https://via.placeholder.com/176x143"
              />
              <div className="w-[176px] m-auto ">
                <div className=" text-slate-800 text-sm font-bold">
                  Paris, France
                </div>
                <p className="text-rose-600 text-base font-bold leading-[21.12px]">
                  $250
                  <span className="text-zinc-500 text-[10px] font-medium leading-[13.20px]"> 6 days tour</span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-full flex items-star">
            <div className="w-[254px] h-[290px] bg-white rounded-[1rem] shadow">
              <img
                className="w-[234.93px] h-[190.79px] rounded-[1rem] m-auto my-[0.48rem]"
                src="https://via.placeholder.com/235x191"
              />
              <div className="w-[235px] m-auto">
                <div className="text-slate-800 text-lg font-bold leading-normal">
                  Amsterdam, Netherland
                </div>
                <p className=" text-rose-600 text-xl font-bold leading-relaxed">
                  $150
                  <span className=" text-zinc-500 text-sm font-medium leading-[18.48px]"> 10 days tour</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTours;
