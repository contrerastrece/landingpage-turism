import Card from "./Card";
import next from '../assets/next.svg';
import prev from '../assets/prev.svg';

const TourPackage = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col gap-[1rem] items-center">
        <div className="w-11/12 h-[135px] justify-between items-center gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-rose-600 text-base font-bold uppercase tracking-[3.20px]">
              Tour Packages
            </div>
            <div className="w-[591px]">
              <span className="text-slate-800 text-5xl font-bold">
                The amazing places around
              </span>
              <span className="text-rose-600 text-5xl font-bold">
                the world
              </span>
            </div>
          </div>
          <div className="justify-start items-start gap-3 flex">
            <div className="w-12 h-12 relative">
              <div className="w-12 h-12 left-0 top-0 absolute bg-rose-600 bg-opacity-5 rounded-full" />
              <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                <img src={next} alt="" />
              </div>
            </div>
            
            <div className="w-12 h-12 relative">
              <div className="w-12 h-12 left-0 top-0 absolute bg-rose-600 bg-opacity-5 rounded-full" />
              <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                <img src={prev} alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-11/12 flex gap-[1.5rem] overflow-hidden">
          <Card/>
          <Card/>
          <Card/>
          <Card/>          
          <Card/>          
        </div>
      </div>
    </>
  );
};

export default TourPackage;
