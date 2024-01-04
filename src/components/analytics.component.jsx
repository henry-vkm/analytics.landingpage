import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white mx-auto">
      <div className="w-max-[1240px] grid md:grid-cols-2 items-center py-12">
        <img className="w-[550px]" src={Laptop} alt='' />
        <div className="p-3">
          <p className="text-[#00df9a] uppercase font-bold">Data Analytics Dashboard</p>
          <h2 className="font-bold text-2xl my-2 mx-auto">Manage Data Analytics Centrally</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Elit sed vulputate mi sit amet mauris commodo.</p>
      <button className="bg-black w-[150px] py-3 text-[#00df9a] rounded-md my-6 mx-auto font-bold">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics;