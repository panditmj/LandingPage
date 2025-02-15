import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card  () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <div className='w-3/4 m-auto'>
        <div className='mt=20'>
        <Slider {...settings}>
        {data.map((d) =>(
           <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='h-50 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-xl font-semibold'>{d.name}</p>
            <p>{d.review}</p>
            <button  className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read more</button>
            </div>
           </div>        
        ))}
        </Slider>

        </div>
    </div>
  )
}

const data = [

    {
      name:' Nisha ',
      img:'/student/Pihu_Pandit.jpeg',
      review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
    },
    {
        name:' Nisha ',
        img:'/student/Pihu_Pandit.jpeg',
        review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
      },
      {
        name:' Nisha ',
        img:'/student/Pihu_Pandit.jpeg',
        review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
      },
      {
        name:' Nisha ',
        img:'/student/Pihu_Pandit.jpeg',
        review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
      },
      {
          name:' Nisha ',
          img:'/student/Pihu_Pandit.jpeg',
          review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
        },
        {
          name:' Nisha ',
          img:'/student/Pihu_Pandit.jpeg',
          review:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tincidunt felis, nec molestie mauris. Phasellus at orci viverra, mollis neque sit amet, elementum metus. Ut et cursus dolor,',
        }

]

export default Card
