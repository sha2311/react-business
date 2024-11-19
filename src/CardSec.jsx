import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowForward';
import card1 from "../src/assets/Group 38.png";
import card2 from "../src/assets/Group 39.png";
import card3 from "../src/assets/Group 40.png";

function CardSec() {

    const newCard = [
        {
            id : '1',
            imgage: card1,
            heading: 'Make myspace your best designed space',
            title: 'A lot of different components that will help you create the perfect look for your project',
            buttonLevel: 'Design'
        },
        {
            id : '2',
            imgage: card2,
            heading: 'My company culture has changed today',
            title: 'A lot of different components that will help you create the perfect look for your project',
            buttonLevel: '3D illustrations'
        },
        {
            id : '3',
            imgage: card3,
            heading: 'Professionals in craft! All products were super great',
            title: 'A lot of different components that will help you create the perfect look for your project',
            buttonLevel: 'Development'
        },
    ]

  return (
    <>
    <section className='max-w-[1400px] mx-auto py-12 px-8'>
            <div className='flex flex-col sm:flex-row justify-between items-center mb-10 '>
            <div>
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-800  '>Get more from our blog</h2>
            <p className='max-w-md text-[20px] mt-3 text-gray-500 '>There are a lot of different components that will help you create the perfect look for your project</p>
            </div>
                
             <div>
             <button className='bg-indigo-100 hover:bg-indigo-200 px-5 text-nowrap py-2.5  rounded-lg text-sm text-[#5F62E2] font-semibold transition-all duration-300  items-center flex justify-center mx-auto gap-1.5 lg:mx-0'>Explore All
                    <ArrowRightAltIcon  sx={{fontSize: 20}} />
                </button>
             </div>
            </div>
       

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5'>

        {newCard.map((value) => (
            <div key={value.id} className='bg-gray-100 rounded-xl transition duration-300 overflow-hidden hover:shadow-xl'>
                <img  src={value.imgage} alt="" />

                <div className='px-6'>
                    <h2 className='text-2xl font-semibold'> {value.heading} </h2>
                    <p className='text-base text-gray-700'> {value.title} </p>
                    <button  className='bg-emerald-100  hover:bg-emerald-200 text-[#2AB691] px-6 py-1.5 my-2  rounded-lg text-sm  font-semibold transition-all duration-300'> {value.buttonLevel} </button>
                </div>
            </div>

          

        ))}

       </div>
    </section>
    </>
  )
}

export default CardSec