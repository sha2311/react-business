import React from 'react'
import Marquee from "react-fast-marquee";

function ScroillLogo() {
    const scrollArray = [
   
        {link: 'google.png'},
        {link: 'stripe.png'},
        {link: 'uber.png'},
        {link: 'stripe.png'},
        {link: 'nick.png'},
        {link: 'air.png'},
        {link: 'master.png'}
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