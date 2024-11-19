import React from 'react'

function Bomb() {
  return (
    <>
     <section className='bg-[#5F62E2] w-full h-auto mb-5 '>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] mx-auto'>
            <div className='flex-1 flex flex-col gap-8 p-5'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center sm:text-start'>The quickest way to create awesome presentation</h2>
                <div className='flex flex-wrap gap-3 '>
                <button className='bg-[#2AB691] hover:bg-green-700 px-3 py-1.5  rounded-lg text-sm text-white font-semibold transition-all duration-300'>Get Started</button>
                <button className='bg-indigo-200 hover:bg-green-700 hover:text-white px-4 py-2  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300'>Learn More</button>
            </div>
            </div>

            <div className='flex-1'>
                <img  src="/Group 46.png" alt="" />
            </div>
        </div>
     </section>
    </>
  )
}

export default Bomb