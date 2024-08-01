import React from 'react';
import { FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaYoutube
 } from "react-icons/fa";
 import { SlSocialTwitter } from "react-icons/sl";
 import { SlSocialLinkedin } from "react-icons/sl";
function BlogFooter  ()  {
  return (
    <div className='bg-[#F4FCFB] h-[300px]'>
    <div className='bg-[#204b57]'>
    <div className='text-center items-center '>
    <img src="https://stage.medicaljagat.com/assets/img/medicaljagat-white.svg" class="footer_logo " className='ml-[550px] mt-[10px] pt-[50px]'/>
    <p className='font-[14px] text-white pt-[20px]'>At MedicalJagat, Our aim is to streamline crucial information related to the exams, courses, colleges, and other pertinent aspects of the medical <br/>
    field. Whether you're a student entering medicine or a professional advancing your career, we're here to support every step of your journey.</p>
    <ul className='text-white flex items-center mx-auto pl-0 gap-10 ml-[500px] pt-[10px]'>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'> <FaWhatsapp size={24}/></li>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><FaFacebookF size={24}/></li>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><SlSocialTwitter size={24}/></li>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><FaInstagram size={24}/></li>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><FaYoutube size={24}/></li>
    <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'> <SlSocialLinkedin size={24}/></li>
    </ul>
    <ul className='text-white font-[14px] flex gap-2 ml-[300px] pt-[20px] pb-[20px]'>
        <li> Claim College</li>
        <li> Claim College</li>
        <li> Claim College</li>
        <li> Claim College</li>
        <li> Claim College</li>
        <li> Claim College</li>
        <li> Claim College</li>
    </ul>
    <hr className='border border-[#4d6f79] ml-4 mr-4'/>
    <p className='text-white text-[12px] pt-[20px] pb-[30px]'>Copyright © 2024 Mahishika Digital Pvt. Ltd. | All Right Reserved | Terms & Conditions | Privacy Policy | Refund Policy</p>
    </div>
    </div>
  </div>
  );
}

export default BlogFooter; 
