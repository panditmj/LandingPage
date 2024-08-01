import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function BlogNewsletter() {
    return (
        <div className='bg-[#F4FCFB] h-[170px]'>
            <div className='bg-[#d2dbdd] p-8'>
                <h1 className='text-[#204b57] font-bold text-lg text-center mb-2'>
                    Subscribe to our newsletter to get regular updates straight to your inbox
                </h1>
                <p className='text-[#5c5c5c] text-center mb-4'>
                    Fill in the details to subscribe now!
                </p>
                <div className='flex justify-center'>
                    <ul className='flex gap-4'>
                        <li className='relative flex-grow'>
                            <FaRegCircleUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            <input
                                type='text'
                                className='pl-10 rounded p-3 border border-gray-300 w-full text-gray-700'
                                placeholder='Full Name'
                            />
                        </li>
                        <li className='relative flex-grow'>
                            <CiViewList className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            <input
                                type='text'
                                className='pl-10 rounded p-3 border border-gray-300 w-full text-gray-700'
                                placeholder='--Select Course--'
                            />
                        </li>
                        <li className='relative flex-grow'>
                            <MdOutlineMarkEmailUnread className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            <input
                                type='text'
                                className='pl-10 rounded p-3 border border-gray-300 w-full text-gray-700'
                                placeholder='Enter your Email Id'
                            />
                        </li>
                        <li className='relative flex-grow'>
                            <input
                                type='text'
                                className='pl-10 rounded p-3 border border-gray-300 w-full text-white bg-[#00b9ae]'
                                placeholder='Subscribe Newsletter'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogNewsletter;
