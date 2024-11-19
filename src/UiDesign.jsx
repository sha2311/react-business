import React from 'react'
import mask from "../src/assets/Mask Group.png"

function UiDesign() {
  return (
    <>

    <section className='bg-gray-100 py-14 lg:px-12'>
        <div>
         <h2 className='text-center text-xl lg:text-4xl font-bold'>Use illustrations in UI design</h2>
            <div className='flex justify-center items-center'>
            <img className='w-full px-16 py-6 object-cover' src={mask} alt="" />
            </div>
        </div>
    </section>
    
    </>
  )
}

export default UiDesign