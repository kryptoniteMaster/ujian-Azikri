import logo from "../Assets/logo1.png";

const Navbar = () => {
  return (
    <div className="w-full h-[56px] bg-teal-600 dark:bg-teal-900 text-white sticky top-0 z-40 shadow-md flex items-center justify-between px-90 ">
      <div className="flex gap-5 items-center cursor-pointer">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center gap-1 hover:bg-teal-700 p-2 rounded-xl">
            <i className='bx bx-home'></i>
          <a href="">Home</a>
        </div>
        <div className="flex justify-center items-center gap-1 hover:bg-teal-700 p-2 rounded-xl">
            <i className='bx bx-play-circle'></i>
          <a href="">Kelas</a>
        </div>
        <div className="flex justify-center items-center gap-1 hover:bg-teal-700 p-2 rounded-xl">
            <i className='bx bx-file'></i>
          <a href="">Tutorial</a>
        </div>
        <div className="flex justify-center items-center gap-1 hover:bg-teal-700 p-2 rounded-xl">
            <i className='bx bx-book-open'></i>
          <a href="">Buku</a>
        </div>
        <div className="flex justify-center items-center gap-1 hover:bg-teal-700 p-2 rounded-xl">
            <i className='bx bxl-discord-alt'></i>
          <a href="">Discord</a>
        </div>
      </div>
      <div className="flex gap-1 items-center text-xl">
        <i className="bx bx-search hover:bg-teal-700 p-3 rounded-full"></i>
        <i className="bx bxs-sun hover:bg-teal-700 p-3 rounded-full"></i>
        <div className="flex justify-center items-center text-[17px]">
        <button className="bg-teal-500 p-2 rounded-[7px] hover:bg-teal-700">Join Newsletter</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
