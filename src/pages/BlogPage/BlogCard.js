import React from 'react';
import { CiCalendar } from "react-icons/ci";

function BlogCard() {
  return (
    <div className='bg-[#F4FCFB] h-[600px]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {data.map((d, index) => (
          <div key={index} className='bg-white h-[550px] text-black rounded-xl'>
            <div className='rounded-t-xl flex justify-center items-center'>
              <img src={d.img} alt='' className='w-full h-[250px] object-cover rounded-t-xl' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='my-2 text-justify' style={{ fontFamily: 'vollkern, serif', fontSize: '25px', lineHeight: '1.2', fontWeight: '500' }}>{d.name}</p>
              <p>{d.review}</p>
              <ul className='text-[10px] flex justify-between items-center w-full' style={{ fontWeight: '400', lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <li className='flex items-center text-[#137bdb]'>
                  <CiCalendar />
                  <span className='ml-1'>Date</span>
                  <span className='text-[#999999] ml-2'>| Writer Name</span>
                </li>
                <li className='flex items-center text-[#71278b]'>
                  <span className='mr-1'>Category</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
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
  {
    name: 'AIIMS Declares MSc Nursing Entrance Exam Results for the August 2024 Session',
    img: '/student/Blog_Img.jpeg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor.',
  },
  {
    name: 'AIIMS Declares MSc Nursing Entrance Exam Results for the August 2024 Session',
    img: '/student/Blog_Img.jpeg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor.',
  },
];

export default BlogCard;
