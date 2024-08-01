import React from 'react';
// import laptop from '../assets/image/laptop img.jpg'
import { CiCalendar } from "react-icons/ci";

function Main() {
    return (
        <div className='bg-[#F4FCFB] h-[710px] pt-[5px] mt-[25px]'>
            <div className='bg-[#d2dbdd] p-8 m-[30px] rounded'>
                <ul style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px' }}>
                    <li><span className='text-[#00b9ae]'>HOME</span> / BLOG</li>
                </ul>
            </div>
            <div className='max-w-[1280px] mx-auto my-10 md:grid grid-cols-5 gap-[20px] mt-[20px]'>
                <div className='col-span-2'>
                    <div className='max-w-[1240px] mx-auto'>
                        {data.map((d, index) => (
                            <div key={index} className='bg-white h-[530px] text-black rounded-xl mb-8'>
                                <div className='rounded-t-xl flex justify-center items-center'>
                                    <img src={d.img} alt='' className='w-full h-[250px] object-cover rounded-t-xl' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='my-2 text-justify' style={{ fontFamily: 'vollkern, serif;', fontSize: '25px', lineHeight: '1.2', fontWeight: '500' }}>{d.name}</p>
                                    <p>{d.review}</p>
                                    <ul className='text-[10px] flex justify-between items-center w-full' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                        <li className='flex items-center'>
                                            <CiCalendar className='text-[#137bdb]' />
                                            <span className='text-[#137bdb] ml-1'>Date</span>
                                            <span className='text-[#999999] ml-2'>| Writer Name</span>
                                        </li>
                                        <li className='text-[#71278b]'>Category</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-3 flex flex-col'>
                    <h1 className='text-white font-bold p-2 bg-[#71278b]' style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>Highlighted Posts</h1>
                    <div className='bg-white p-2'>
                        <p className='my-2 text-justify text-[16px] hover:text-[#33c7be]' style={{ fontFamily: 'Open Sans, serif', lineHeight: '140%', letterSpacing: '0.15px' }}>
                            AIIMS Declares MSc Nursing Entrance Exam Results for the The govt. post pones Sunday's planned NEET-PG Entrance Exam
                        </p>
                        <ul className='text-[10px] flex justify-between items-center' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            <li className='flex items-center'>
                                <CiCalendar className='text-[#137bdb]' />
                                <span className='text-[#137bdb] ml-1'>Date</span>
                                <span className='text-[#999999] ml-2'>| Writer Name</span>
                            </li>
                            <li className='text-[#71278b]'>Category</li>
                        </ul>
                    </div>
                    <div className='bg-white mt-1 p-2'>
                        <p className='my-2 text-justify text-[16px] hover:text-[#33c7be]' style={{ fontFamily: 'Open Sans, serif', lineHeight: '140%', letterSpacing: '0.15px' }}>
                            AIIMS Declares MSc Nursing Entrance Exam Results for the The govt. post pones Sunday's planned NEET-PG Entrance Exam
                        </p>
                        <ul className='text-[10px] flex justify-between items-center' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            <li className='flex items-center'>
                                <CiCalendar className='text-[#137bdb]' />
                                <span className='text-[#137bdb] ml-1'>Date</span>
                                <span className='text-[#999999] ml-2'>| Writer Name</span>
                            </li>
                            <li className='text-[#71278b]'>Category</li>
                        </ul>
                    </div>
                    <div className='bg-white mt-1 p-2'>
                        <p className='my-2 text-justify text-[16px] hover:text-[#33c7be]' style={{ fontFamily: 'Open Sans, serif', lineHeight: '140%', letterSpacing: '0.15px' }}>
                            AIIMS Declares MSc Nursing Entrance Exam Results for the The govt. post pones Sunday's planned NEET-PG Entrance Exam
                        </p>
                        <ul className='text-[10px] flex justify-between items-center' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            <li className='flex items-center'>
                                <CiCalendar className='text-[#137bdb]' />
                                <span className='text-[#137bdb] ml-1'>Date</span>
                                <span className='text-[#999999] ml-2'>| Writer Name</span>
                            </li>
                            <li className='text-[#71278b]'>Category</li>
                        </ul>
                    </div>
                    <div className='bg-white mt-1 p-2'>
                        <p className='my-2 text-justify text-[16px] hover:text-[#33c7be]' style={{ fontFamily: 'Open Sans, serif', lineHeight: '140%', letterSpacing: '0.15px' }}>
                            AIIMS Declares MSc Nursing Entrance Exam Results for the The govt. post pones Sunday's planned NEET-PG Entrance Exam
                        </p>
                        <ul className='text-[10px] flex justify-between items-center' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            <li className='flex items-center'>
                                <CiCalendar className='text-[#137bdb]' />
                                <span className='text-[#137bdb] ml-1'>Date</span>
                                <span className='text-[#999999] ml-2'>| Writer Name</span>
                            </li>
                            <li className='text-[#71278b]'>Category</li>
                        </ul>
                    </div>
                    <div className='bg-white mt-1 p-2'>
                        <p className='my-2 text-justify text-[16px] hover:text-[#33c7be]' style={{ fontFamily: 'Open Sans, serif', lineHeight: '140%', letterSpacing: '0.15px' }}>
                            AIIMS Declares MSc Nursing Entrance Exam Results for the The govt. post pones Sunday's planned NEET-PG Entrance Exam
                        </p>
                        <ul className='text-[10px] flex justify-between items-center' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            <li className='flex items-center'>
                                <CiCalendar className='text-[#137bdb]' />
                                <span className='text-[#137bdb] ml-1'>Date</span>
                                <span className='text-[#999999] ml-2'>| Writer Name</span>
                            </li>
                            <li className='text-[#71278b]'>Category</li>
                        </ul>
                    </div>
                    {/* <button className='w-[30%] bg-black text-white p-3 rounded'>Get Start</button> */}
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'AIIMS Declares MSc Nursing Entrance Exam Results for the August 2024 Session',
        img: '/student/Blog_Img.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor.',
    },
];

export default Main;
