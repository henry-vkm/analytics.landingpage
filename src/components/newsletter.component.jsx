import React from 'react'

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16 px-6">
      <div className="w-max-[1240px] grid lg:grid-cols-3 items-center mx-auto">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
          <p>Sign Up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <input placeholder='Enter Email' className="p-3 flex w-[300px] rounded-md text-black"/>
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] sm:ml-4 sm:my-6 my-3 px-6 py-3">Subscribe</button>
          </div>
          <p>We care about the protection of your data. Read our <span className="text-[#00df9a] underline">Privacy Policies</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;