import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white mx-auto flex flex-col justify-center text-center h-screen mt-[-96px]">
      <div className="w-max-[600px]">
        <p className="text-[#00df9a] font-bold uppercase">Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-1">Grow with data.</h1>
        <div className="flex justify-center">
          <p className="md:text-2xl text-xl font-bold">Fast, flexible financing for </p>
          <Typed 
            className="md:text-2xl text-xl font-bold pl-2 text-[#00df9a]"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-wrap py-4 font-bold text-gray-500 md:text-xl">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] py-3 text-black rounded-md my-6 mx-auto text-xl">Get Started</button>
      </div>
    </div>
  )
}

export default Hero;