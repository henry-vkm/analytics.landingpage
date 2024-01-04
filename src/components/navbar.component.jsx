import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full cursor-pointer text-3xl font-bold text-[#00df9a]">
        REACT.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} /> }
      </div>
      <div className={nav ? "fixed top-0 left-0 h-full border-r border-gray-900 w-[60%]  bg-[rgb(0,3,0)] p-5 ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full cursor-pointer text-3xl font-bold text-[#00df9a] p-4">
          REACT.
        </h1>
        <ul className="mt-2 uppercase">
          <li className="p-4 cursor-pointer border-b border-gray-400">Home</li>
          <li className="p-4 cursor-pointer  border-b border-gray-400">Company</li>
          <li className="p-4 cursor-pointer  border-b border-gray-400">Resources</li>
          <li className="p-4 cursor-pointer  border-b border-gray-400">About</li>
          <li className="p-4 cursor-pointer border-b border-gray-400">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;