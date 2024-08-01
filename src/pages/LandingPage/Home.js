import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Home () {
    const [toggle,setToggle] = useState(false);
  return (
   <>
    <div className='bg-[#92a8d1] p-4'>
        <div className='max-w-[1240px] border flex justify-between items-center border-none mx-auto'>
            <div className='text-3xl font-bold'>
                BlogPage
            </div>
            {
                toggle ?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineClose onClick={() => setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/>

            }
            <ul className='hidden md:flex text-white gap-4 cursor-pointer'>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
            </ul>
            {/* {Responsive menu} */}
            <ul className={`duration-300 md:hidden w-full text-white fixed bg-black  
                 ${toggle ? 'left-[0]' : 'left-[-100%]'}
                ` }style={{marginTop:'406px'}}>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
                <li className='p-4 hover:bg-[#182847] rounded-2xl px-2 py-1'>Home</li>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Home