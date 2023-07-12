import gps from "../assets/gps.svg";
import calendar from "../assets/calendar.svg";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
import trazo from "../assets/trazo.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-10">
        <div className=" h-[433px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full ">
            <div className="flex flex flex-nowrap gap-5">
              <span className="text-slate-800 text-[64px] font-extrabold leading-[76.80px]">
                Dare to live
              </span>
              <span className="text-rose-600 text-[64px] font-black leading-[76.80px] relative">
                <img src={trazo} alt="" className="w-full absolute z-[-1]" />
                <span className="text-rose-600 text-[64px] font-black leading-[76.80px]">
                  the life
                </span>
              </span>
            </div>
            <div className="flex flex-nowrap">
              <span className="text-slate-800 text-[64px] font-extrabold leading-[76.80px]">
                you&apos;ve always
              </span>
            </div>
            
            <div className="flex flex-nowrap">
              <span className="text-amber-400 text-[64px] font-extrabold leading-[76.80px]">
                wanted
              </span>
              <span className="text-slate-800 text-[64px] font-extrabold leading-[76.80px]">
                .
              </span>
            </div>

            
          </div>
          <div className="w-[469px] text-zinc-500 text-2xl font-normal">
            Life is short and the world is wide. So, better get started.
          </div>
          <div className="w-[469px] h-20 relative">
            <div className="w-[469px] h-20 left-0 top-0 absolute bg-white rounded-[58px] shadow" />
            <div className="w-[415px] h-12 left-[27px] top-[16px] absolute justify-start items-center gap-8 inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="w-[22px] h-[22px] relative">
                  <img src={gps} alt="gps-icon" />
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="justify-start items-center gap-1.5 inline-flex">
                    <div className="text-zinc-500 text-xs font-semibold">
                      Location
                    </div>
                    <div className="w-3.5 h-3.5 relative">
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="text-slate-800 text-xs font-bold">
                    Allentown, New Mexico
                  </div>
                </div>
              </div>
              <div className="w-px h-6 opacity-25 bg-zinc-500" />
              <div className="justify-start items-center gap-4 flex">
                <div className="w-[22px] h-[22px] relative">
                  <img src={calendar} alt="calendar-icon" />
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="justify-start items-center gap-1.5 inline-flex">
                    <div className="text-zinc-500 text-xs font-semibold">
                      Date
                    </div>
                    <div className="w-3.5 h-3.5 relative">
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="text-slate-800 text-xs font-bold">
                    04 Aug, 2022
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 relative">
                <div className="w-12 h-12 left-0 top-0 absolute bg-rose-600 rounded-full" />
                <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                  <img src={search} alt="search-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[445px] h-[579px]">
          <div className="w-[370px] relative ">
            <img
              className="w-[374px] rounded-tl-[233px] rounded-tr-[233px]"
              src="https://via.placeholder.com/374x430"
            />
            <img
              className="w-[147px] h-[230.04px] left-[298px] top-[270px]  absolute rounded-full border-4 border-white"
              src="https://via.placeholder.com/147x230"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
