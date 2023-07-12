const AboutUs = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-around">
        <div className="relative">
          <img
            className="rounded-[233px]"
            src="https://via.placeholder.com/320x500"
          />
          <img
            className=" left-[250px] top-[250px] absolute rounded-[237px] border-4 border-white"
            src="https://via.placeholder.com/200x300"
          />
        </div>
        <div className="flex-col justify-center items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="text-rose-600 text-base font-bold uppercase tracking-[3.20px]">
              About us
            </div>
            <div className="w-[469px]">
              <span className="text-slate-800 text-5xl font-bold">
                Our tour plan is to fulfil your{" "}
              </span>
              <span className="text-rose-600 text-5xl font-bold">dream wish</span>
            </div>
          </div>
          <div className="w-[442px] text-zinc-500 text-xl font-normal leading-loose">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </div>
          <div className="justify-center items-center gap-6 inline-flex">
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-rose-600 text-[40px] font-bold">15</div>
              <div className="w-[100px] text-zinc-500 text-base font-normal">
                Years of Experience
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-rose-600 text-[40px] font-bold">1k</div>
              <div className="w-[100px] text-zinc-500 text-base font-normal">
                Sucessful
                <br />
                Trips
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-rose-600 text-[40px] font-bold">20k</div>
              <div className="w-[100px] text-zinc-500 text-base font-normal">
                Happy
                <br />
                Customers
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-rose-600 text-[40px] font-bold">4.9</div>
              <div className="w-[100px] text-zinc-500 text-base font-normal">
                Overall
                <br />
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
