import React from 'react'
import Marquee from "react-fast-marquee";
import google from "../src/assets/google.png";
import stripe from "../src/assets/stripe.png";
import uber from "../src/assets/uber.png";
import nick from "../src/assets/nick.png";
import air from "../src/assets/air.png";
import master from "../src/assets/master.png";

function ScroillLogo() {
    const scrollArray = [
   
        {link: google },
        {link: stripe  },
        {link: uber },
        {link: stripe },
        {link:  nick },
        {link: air },
        {link:  master}
    ]
  return (
    <div className='my-24'>
        <Marquee pauseOnHover={true} gradient={true}  gradientWidth={70} speed={100}>
        <div className='flex items-center justify-center mx-6 gap-8'>
            {scrollArray.map((scrollMap) => (
                <img className='w-[70%] bg-gray-50 px-3 py-1 rounded-lg hover:bg-green-200' src={scrollMap.link} alt="" />
            ))}
        </div>
        </Marquee>

    </div>
  )
}

export default ScroillLogo