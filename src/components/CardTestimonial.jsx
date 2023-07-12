import quote from "../assets/quote.svg";
import star from "../assets/magic-star.svg";

const CardTestimonial = () => {
  return (
    <div className="w-[302px] h-[350px] relative bg-white rounded-md shadow border border-neutral-50">
      <img
        className="w-20 h-20 left-[113px] top-[46px] absolute rounded-full"
        src="https://via.placeholder.com/80x80"
      />
      <div className="left-[101px] top-[138px] absolute flex-col justify-start items-center gap-1 inline-flex">
        <div className="text-center text-slate-800 text-lg font-bold">
          Eleanor Pena
        </div>
        <div className="text-center text-slate-800 text-sm font-normal">
          UI/UX Designer
        </div>
        <div className="justify-center items-center inline-flex">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
      <div className="w-56 left-[41px] top-[213px] absolute text-center text-slate-800 text-sm font-normal leading-[18.62px]">
        Customer testimonials are more effective than paid marketing copy as
        they take the spotlight away from the seller to shine it on the
        customers.{" "}
      </div>
      <div className="w-10 h-10 left-[238px] top-[-20px] absolute">
        <img src={quote} alt="" />
      </div>
    </div>
  );
};

export default CardTestimonial;
