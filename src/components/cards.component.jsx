import React from 'react'
import Card from './card.component';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="w-max-[1240px] grid md:grid-cols-3 gap-8 mx-10">
        <Card img={Single} title="Single User" price="99$" stats={["500 GB Storage", 
      "Granted User", "Send up to 2 GB"]}/>
        <Card img={Double} title="Partnership" price="149$" stats={["1000 GB Storage", 
        "Granted User", "Send up to 5 GB"]}/>
        <Card img={Triple} title="Group Account" price="199$" stats={["1500 GB Storage", 
        "Granted User", "Send up to 20 GB"]}/>
      </div>
    </div>
  )
}

export default Cards;