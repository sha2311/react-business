import ArrowRightAltIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import card1 from "../src/assets/Group 1.png";
import card2 from "../src/assets/Group 2.png";
import card3 from "../src/assets/Group 3.png";
import card4 from "../src/assets/Group 4.png";
import socialfb from "../src/assets/fb.png";
import socialtw from "../src/assets/twitter.png";
import socialins from "../src/assets/instagram.png";

function Presentation() {
const presentData = [
    {
        source: card1,
        heading: "Managment",
        text: "Software platform for running your new internet business"
    },
    {
        source: card2,
        heading: "Entertainment",
        text: "Software platform for running your new internet business"
    },
    {
        source: card3,
        heading: "Marketing",
        text: "Software platform for running your new internet business"
    },
    {
        source: card4,
        heading: "References",
        text: "Software platform for running your new internet business"
    }
    
]


 const socialIcon = [
    {link: socialfb},
    {link: socialtw},
    {link: socialins}
 ] 

  return (

    <>
    <section className='bg-indigo-50'>
        <div className='flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 container max-w-[1400px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
                    {presentData.map((value, index) => (
                        <div key={index} className='p-4 bg-white rounded-xl hover:bg-indigo-100 transition-all text-center hover:shadow hover:scale-105 cursor-pointer'>
                            <div className='flex items-center justify-center'>
                                <img src={value.source} alt="" />
                            </div>
                            <div>
                                <h2 className='text-black text-lg md:text-xl font-semibold'> {value.heading} </h2>
                                <p className='text-gray-500 text-sm md:text-base'> {value.text} </p>
                            </div>

                        </div>
                    ))}
            </div>

            <div className='text-center lg:text-left w-full lg:w-1/2 space-y-6'>   
                <h1 className='text-black text-3xl font-bold md:text-4xl lg:text-5xl max-w-md mx-auto lg:mx-0'>The quickest way to create modern presentation</h1>
                <p className='text-gray-500 max-w-md mx-auto lg:mx-0 text-sm md:text-base'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

                <button className='bg-indigo-100 hover:bg-indigo-200 px-5 py-2.5  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300  items-center flex justify-center mx-auto gap-1.5 lg:mx-0'>Explore All
                    <ArrowRightAltIcon  sx={{fontSize: 20}} />
                </button>

                <p className='lg:!mt-[85px] text-gray-500'>Follow us</p>
                <div className='flex justify-center lg:justify-start mt-6 gap-4 items-center'>
                    {socialIcon.map((value) => (
                            <a href="" className='bg-gray-300 p-2 rounded-full'>
                                <img className='w-[25px] h-[25px]' src={value.link} alt="Logo" />
                            </a>
                    ))}
                </div>
            </div>
        </div>  
    </section>
    
    </>
  )
}

export default Presentation