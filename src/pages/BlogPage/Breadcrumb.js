import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

function Breadcrumb() {
  return (
    <>
      <div className='bg-white h-[35px]'>
        <div className='max-w-[1240px] border flex justify-between items-center border-none mx-auto'>
          <img src='https://medicaljagat.com/assets/img/medicaljagat-logo.svg' alt='Medical Jagat Logo' />
          <div className='relative m-2 flex items-center'>
            <input type='text' className='rounded p-2 pr-8 border border-gray w-[370px] text-slate-300 ml-[230px]' placeholder='Search Exam, College, Hospital, Many more...' />
            <IoSearchSharp className='absolute right-2 text-[#33c7be]' />
          </div>
          <ul className='hidden md:flex text-black font-[20px] gap-5'>
            <li>Exam</li>
            <li>Courses</li>
            <li>Colleges</li>
            <li>Hospital</li>
          </ul>
          <button className='border border-[#00b9ae] py-1 text-[#00b9ae] text-center w-[150px] rounded-[50px] flex items-center justify-center'>
            <FaRegUserCircle className='mr-2' />
            login/signup
          </button>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
