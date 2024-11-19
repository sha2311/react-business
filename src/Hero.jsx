import React from 'react'
import hero from "../src/assets/hero.png"

function Hero() {
  return (
    <>

    <section className='flex justify-between flex-col-reverse md:flex-row gap-8 items-center  py-16 px-14 lg:px-16 bg-slate-50'>
        <div className='flex-1 flex flex-col text-center lg:text-start lg:items-start gap-6'>
            <h2 className='lg:text-[60px] sm:text-[35px] font-bold '>Simply explained with illustrations</h2>
            <p className='text-[16px] lg:pr-28  text-gray-500 mt-[-15px]'>There are a lot of different components that will help you create the perfect look for your project</p>

            <div className='flex flex-wrap gap-5 justify-center sm:justify-normal  mx-auto lg:mx-0'>
                <button className='bg-[#5F62E2] hover:bg-indigo-700 px-3 py-1.5  rounded-lg text-sm text-white font-semibold transition-all duration-300'>Get Started</button>
                <button className='bg-indigo-100 hover:bg-indigo-200 px-4 py-2  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300'>Learn More</button>
            </div>

        </div>
        <div className='flex-1 '>
            <img className='w-full h-auto md:max-w-lg' src={hero} alt="" />
        </div>
    </section>
      
    </>
  )
}

export default Hero