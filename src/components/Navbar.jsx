const Navbar = () => {
  return (
    <>
      <div className="h-[100px] px-[5rem] flex justify-between items-center bg-[#fff]">

        <div className="text-slate-800 text-2xl font-black">
          Vacation Hub
        </div>

        <ul className="flex gap-10">
          <li className="text-slate-800 text-xl font-medium">Home</li>
          <li className="text-zinc-500 text-xl font-normal">About</li>
          <li className="text-zinc-500 text-xl font-normal">Services</li>
          <li className="text-zinc-500 text-xl font-normal">Price </li>
          <li className="text-zinc-500 text-xl font-normal">Contact</li>
        </ul>

        <div className="flex gap-5 items-center">
          <div className="text-zinc-500 text-xl font-normal">Login</div>
          <div className="w-[10rem] h-[3rem] text-white text-xl font-medium bg-rose-600 rounded-[45px] px-6 py-[18] justify-center items-center flex">
            Register
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
