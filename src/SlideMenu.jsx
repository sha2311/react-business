import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function SlideMenu() {
  
    const slideAuto = [
        {
            id: 1,
            imgage: "Group 43.png",
            heading: "Make more time for the work that matters most",
            text: "Best software platform for running an internet business."

        },
        {
            id: 2,
            imgage: "Group 4.png",
            heading: "Make more time for the work that matters most",
            text: "Best software platform for running an internet business."

        },
        {
            id: 3,
            imgage: "Group 3.png",
            heading: "Make more time for the work that matters most",
            text: "Best software platform for running an internet business."

        }
    ];
   
    const[currentIndex, setIndex] = useState(0);

    const prevSlider = ()=>{
        setIndex((prevIndex)=> (prevIndex === 0 ? slideAuto.length - 1 : prevIndex - 1 ))
    }

    const nextSlider = ()=>{
        setIndex((prevIndex)=>( prevIndex === slideAuto.length -1 ? 0 : prevIndex + 1 ))
    };

    const {imgage, heading,text} = slideAuto[currentIndex]

  return (
    <>
    <section className='max-w-[1400px] py-24 px-6 md:px-12 mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-20'>
            <div className='flex flex-col space-y-6 justify-between w-full lg:w-1/2'>

                <h1 className='text-2xl max-w-md font-bold md:text-5xl text-black'> {heading} </h1>
                <p className='text-[20px] max-w-xs  text-gray-500'> {text} </p>
                <div className='flex items-center gap-3 '>
                    <button onClick={prevSlider} className='bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all flex justify-center items-center'>
                            <ChevronLeftIcon/>
                    </button>
                    <button onClick={nextSlider} className='bg-gray-100  p-2 rounded-full hover:bg-gray-200 transition-all flex justify-center items-center'>
                            <ChevronRightIcon/>
                    </button>
                </div>
            </div>


            <div className='w-full md:w-1/2 flex justify-center'>
                    <img className='w-full md:w-[65%] bg-cover' src={imgage} alt="" />
            </div>
        </div>
    </section>

    </>
  )
}

export default SlideMenu