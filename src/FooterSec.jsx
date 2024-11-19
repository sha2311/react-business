import React from 'react'
import { Typography } from "@mui/material";
import { list } from 'postcss';

function FooterSec() {

  const menuBar = [
    {
    title: 'Home',
    link: ['Become Affiliate','Go Unlimited', 'Services'] 
    },
    {
      title: 'Products',
    link: ["Design Systems",'Themes & Templates','Mockups', 'Presentations', 'UI Kits'] 
    },
    {
      title: 'Legals',
      link: ['License','Refund Policy', 'About Us', 'Contacts'] 
      },
    {
      title: 'Blog',
      link: ['Business Stories','Digital Store', ' Social Media'] 
      },
  ]

  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row justify-center flex-wrap items-center  gap-y-6 gap-x-12 sm:gap-x-24 pb-5 text-white text-center ">
        <img src="/footerlg.png" alt="logo-ct" className="w-44" />
        <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
          <li>
              <Typography className='flex flex-col sm:flex-row lg:gap-28  gap-16 flex-wrap px-6 justify-between mx-auto '>
                {menuBar.map((value, index) => (
                  <div key={index} className='transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer'>
                    {value.title}
                    
                    {value.link.map((vale, index) => (
                        <div key={index} className='text-xs py-1.5 font-normal text-gray-400 transition-colors hover:text-pink-500 focus:text-blue-500 cursor-pointer'>
                            {vale}
                        </div>
                    ))}


                  </div>
                  
                ))}
                
              </Typography>
              
          </li>
        </ul>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center  text-gray-500 font-normal">
        &copy; {new Date().getFullYear()} Copyright SHA
      </Typography>
    </footer>
  )
}

export default FooterSec