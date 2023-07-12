
import next from '../assets/next.svg';
import prev from '../assets/prev.svg';
import CardTestimonial from './CardTestimonial';

const Testimonials = () => {
  return (
    <>
      <div className=" h-screen relative  flex flex-col items-center justify-around ">
        <div className="w-[591px] h-[139px]  flex-col justify-start items-center gap-1 inline-flex">
          <div className="text-rose-600 text-base font-bold uppercase tracking-[3.20px]">
            Testimonial
          </div>

          <div className="w-[591px] text-center">
            <span className="text-slate-800 text-5xl font-bold">Satisfied </span>
            <span className="text-rose-600 text-5xl font-bold">travellers</span>
            <span className="text-slate-800 text-5xl font-bold">
              around the world
            </span>
          </div>
        </div>

        <div className="w-[1170px] h-[350px] relative ">
          {/* btn prev */}
          <div className="w-12 h-12 left-0 top-[151px] absolute">
            <div className="w-12 h-12 left-0 top-0 absolute bg-rose-600 bg-opacity-5 rounded-full" />
            <div className="w-6 h-6 left-[12px] top-[12px] absolute">
              <img src={next} alt="" />
            </div>
          </div>

          <div className="w-full h-[350px] flex justify-center items-center gap-8 ">
            <CardTestimonial/>
            <CardTestimonial/>
            <CardTestimonial/>           
          </div>

          {/* btn next */}
          <div className="w-12 h-12 left-[1122px] top-[151px] absolute ">
            <div className="w-12 h-12 left-0 top-0 absolute bg-rose-600 bg-opacity-5 rounded-full" />
            <div className="w-6 h-6 left-[12px] top-[12px] absolute">
              <img src={prev} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
