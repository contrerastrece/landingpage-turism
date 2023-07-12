import star from '../assets/magic-star.svg'
const Card = () => {
  return (
   
      <div className='w-[370px] h-[500px] bg-white rounded-[1rem] '>
        <img
          className=" w-[370px] h-[300px] rounded-t-[1rem]"
          src="https://via.placeholder.com/370x300"
        />
          
        <div className="w-[370px] p-[1rem] flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-80 text-slate-800 text-xl font-bold leading-relaxed">
            Fall in love among the winding streets and snow-covered
          </div>

          <div className="text-slate-800 text-sm font-normal">
            Prague, Czechia
          </div>

          <div className="px-1.5 py-1 bg-amber-400 bg-opacity-10 rounded-[38px] flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-center items-center gap-0.5 inline-flex">
              <img src={star} alt="star-icon" />
              <div className="text-amber-400 text-sm font-semibold">4.9</div>
            </div>
          </div>
          <div className="w-80 justify-between items-center gap-2 inline-flex">
            <div className="text-rose-600 text-2xl font-bold leading-loose">
              $200
            </div>
            <div className="text-zinc-500 text-xs font-medium leading-none">
              10 days tour
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
