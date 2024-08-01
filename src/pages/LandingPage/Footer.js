import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
function Footer  ()  {
  return (
    <div className='bg-[#92a8d1] p-4'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-white'>
    <div>
      <h1 className='w-full text-3xl font-bold text-black'>BlogPage.</h1>
      <p className='py-4 text-[10px] md:text-[20px] text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      <div className='flex justify-between md:w-[75%] my-6 cursor-pointer '>
        <FaFacebookSquare size={35} className='hover:bg-[#182847] rounded-2xl py-2 px-2'/>
        <FaInstagram size={35} className='hover:bg-[#182847] rounded-2xl py-2 px-2'/>
        <FaTwitterSquare size={35} className='hover:bg-[#182847] rounded-2xl py-2 px-2'/>
        <FaGithubSquare size={35} className='hover:bg-[#182847] rounded-2xl py-2 px-2'/>
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6 cursor-pointer'>
      <div>
        <h6 className='font-medium text-black'>Solutions</h6>
        <ul className=''>
          <li className='py-2 text-sm hover:text-[#182847]'>Analytics</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Marketing</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Commerce</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Insights</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-black'>Support</h6>
        <ul>
          <li className='py-2 text-sm hover:text-[#182847]'>Pricing</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Documentation</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Guides</li>
          <li className='py-2 text-sm hover:text-[#182847]'>API Status</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-black'>Company</h6>
        <ul className=''>
          <li className='py-2 text-sm hover:text-[#182847]'>About</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Blog</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Jobs</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Press</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Careers</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-black'>Legal</h6>
        <ul>
          <li className='py-2 text-sm hover:text-[#182847]'>Claim</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Policy</li>
          <li className='py-2 text-sm hover:text-[#182847]'>Terms</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Footer; 
