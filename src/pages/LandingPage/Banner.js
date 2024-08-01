import React from 'react';
import { ReactTyped } from "react-typed";

function Banner  ()  {
  return (
    <div className='bg-[#92a8d1] w-full py-[100px]'>
    <div className='max-w-[1240px] mx-auto py-[100px] text-center font-bold'>
        <div className='text-xl md:text-3xl md:p-[20px]'>
            Learn with Us
        </div>
        <h2 className='text-white text-3xl md:text-[60px] md:p-[20px]'>Grow with Us</h2>
        <div className='text-[20px] text-white md:text-[40px] md:p-[20px]'>
        Learn
        <ReactTyped 
        className='pl-3'
        strings={["web development","Ethical hacking"]} 
        typeSpeed={100} 
        loop={true}
        backSpeed={50}
        />
        </div>
        <button className='bg-black text-white p-3 rounded'>Get Start</button>
      </div>
      
      
    </div>
  );
}

export default Banner; 
