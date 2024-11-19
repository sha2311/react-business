import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowForward';
import img1 from "../src/assets/Group 44.png";
import img2 from "../src/assets/Group 45.png"

function WorkMake() {
  return (
    <>
    <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto' >
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            <div className='flex-1 items-start'>
                <img className='w-full max-w-lg h-auto' src={img1} alt="" />
            </div>

            <div className='flex-1 flex flex-col gap-6'>
                <h2 className='max-w-lg font-bold text-2xl sm:text-4xl lg:text-6xl'>Make more time for the work</h2>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Many ways to use illustrations in design</span>  </p>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Simply explained with illustrations</span>  </p>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Make more time for the work</span>  </p>
               

                <div className='mb-10 gap-3'>
                <button className='bg-indigo-100 hover:bg-[#5F62E2] hover:text-white px-5 py-2.5  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300  items-center flex justify-center mx-auto gap-1.5 lg:mx-0'> Learn more
                    <ArrowRightAltIcon  sx={{fontSize: 20}} />
                </button>
                </div>
            </div>
        </div>
    </section>

    <section  className='gap-16 py-10 px-6 lg:px-16 max-w-[1400px] mx-auto'>
    <div className='flex flex-col lg:flex-row items-center justify-between'>
          
            <div className='flex-1 flex flex-col gap-6'>
                <h2 className='max-w-lg font-bold text-2xl sm:text-4xl lg:text-6xl'>Make more time for the work</h2>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Many ways to use illustrations in design</span>  </p>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Simply explained with illustrations</span>  </p>
                <p> <CheckCircleOutlineIcon className='text-green-600 me-1' /> <span className='text-black text-lg'>Make more time for the work</span>  </p>
               

                <div className='mb-10 gap-3'>
                <button className='bg-indigo-100 hover:bg-[#5F62E2] hover:text-white px-5 py-2.5  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300  items-center flex justify-center mx-auto gap-1.5 lg:mx-0'>Learn more
                    <ArrowRightAltIcon  sx={{fontSize: 20}} />
                </button>
                </div>
            </div>

            <div className='flex-1 items-start'>
                <img className='w-full max-w-lg h-auto' src={img2} alt="" />
            </div>
        </div>
    </section>

    </>
  )
}

export default WorkMake