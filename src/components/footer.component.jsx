import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240px] px-6 my-8 grid lg:grid-cols-3 gap-8 text-white mx-auto justify-between">
      <div className="">
        <h1 className="w-full cursor-pointer text-3xl font-bold text-[#00df9a]">
          REACT.
        </h1>
        <p className="text-gray-300 text-[1rem] my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="flex justify-between mt-8 w-[70%]">
          <FaFacebookSquare size={30} className="cursor-pointer"/>
          <FaInstagram size={30} className="cursor-pointer"/>
          <FaGithubSquare size={30} className="cursor-pointer"/>
          <FaTwitterSquare size={30} className="cursor-pointer"/>
          <FaDribbbleSquare size={30} className="cursor-pointer"/>
        </div>
      </div>
      <div className='cols-span-2'></div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-gray-400 font-medium">Solutions</h2>
          <ul className="mt-2">
            <li className="py-1">Questions</li>
            <li className="py-1">Company</li>
            <li className="py-1">Departments</li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-400 font-medium">About</h2>
          <ul className="mt-2">
            <li className="py-1">Contact</li>
            <li className="py-1">Story</li>
            <li className="py-1">Mission</li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-400 font-medium">Dev</h2>
          <ul className="mt-2">
            <li className="py-1">API status</li>
            <li className="py-1">Server</li>
            <li className="py-1">Ioid</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;