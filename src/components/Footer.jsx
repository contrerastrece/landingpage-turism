import fb from "../assets/fb-icon.svg";
import youtb from "../assets/youtube-icon.svg";
import inst from "../assets/inst-icon.svg";
import btnSend from "../assets/send.svg";

const Footer = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-white flex justify-around items-center">
        <div className="w-[200px] h-[129px]  flex-col justify-start items-start gap-[18px] inline-flex">
          <div className=" text-slate-800 text-2xl font-black">
            Vacation Hub
          </div>
          <div className="w-[200px] text-slate-800 text-sm font-normal leading-tight">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <img src={fb} alt="fb-icon" />
            <img src={inst} alt="instagram-icon" />
            <img src={youtb} alt="youtube-icon" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="text-center text-slate-800 text-lg font-bold">
            About
          </div>
          <div className="text-slate-800 text-sm font-normal">About us</div>
          <div className="text-slate-800 text-sm font-normal">Features</div>
          <div className="text-slate-800 text-sm font-normal">News</div>
          <div className="text-slate-800 text-sm font-normal">Plans</div>
        </div>
        <div className="w-[92px] h-[162px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="text-center text-slate-800 text-lg font-bold">
            Company
          </div>
          <div className="text-slate-800 text-sm font-normal">Why Tripy</div>
          <div className="text-slate-800 text-sm font-normal">
            Partner with us
          </div>
          <div className="text-slate-800 text-sm font-normal">FAQ</div>
          <div className="text-slate-800 text-sm font-normal">Blog</div>
        </div>
        <div className="w-[92px] h-[162px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="text-center text-slate-800 text-lg font-bold">
            Support
          </div>
          <div className="text-slate-800 text-sm font-normal">Account</div>
          <div className="text-slate-800 text-sm font-normal">
            Support center
          </div>
          <div className="text-slate-800 text-sm font-normal">Feedback</div>
          <div className="text-slate-800 text-sm font-normal">Contact us</div>
        </div>
        <div className=" flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="text-center text-slate-800 text-lg font-bold">
            Newsletter
          </div>
          <div className="w-[207px] text-slate-800 text-sm font-normal leading-tight">
            Subscribe our newsletter and get exciting offers
          </div>
          <div className="w-[270px] h-[51px] relative">
            <div className="w-[270px] h-[51px] left-0 top-0  bg-white rounded-[55px] shadow" />
            <div className="w-8 h-8 left-[230px] absolute top-[10px] ">
              <div className="w-8 h-8 flex justify-center items-center bg-rose-600 rounded-full">
                <img src={btnSend} alt="btn send" />
              </div>
            </div>
            <div className="  text-zinc-500 text-xs font-normal leading-none">
              Enter your email address
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
