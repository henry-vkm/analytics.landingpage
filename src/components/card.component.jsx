import React from 'react'

const Card = (props) => {
  const { img, price, stats } = props;
  return (
    <div className="w-full border shadow-xl p-4 my-4 rounded-lg cursor-pointer hover:scale-105 duration-500 text-center">
      <img src={img} alt="" className="w-20 mx-auto mt-[-3rem] bg-white" />
      <h2 className="text-xl font-bold py-8">Single User</h2>
      <p className="text-4xl font-bold">{price}</p>
      <div className="mt-4">
        {
          stats.map(stat => {
            return (
              <p className="border-b py-2 mx-8 font-bold">{stat}</p>
            )
          })
        }
      </div>
      <button className="text-black font-bold bg-[#00df9a] py-3 px-8 rounded-md mt-5">Start Trial</button>
    </div>
  )
}

export default Card;