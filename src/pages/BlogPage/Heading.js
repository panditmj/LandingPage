import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaYoutube
 } from "react-icons/fa";
 import { SlSocialTwitter } from "react-icons/sl";
 import { SlSocialLinkedin } from "react-icons/sl";

function Heading() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='bg-[#204b57] p-2'>
            <div className='max-w-[1240px] border flex justify-between items-center border-none mx-auto'>
                    <div style={{ fontSize: "12px" }}>
                        <p className='text-10px text-white'>Notification:
                            <span className='text-[#fad176] font-[10px]' style={{ marginLeft: '4px' }}>
                                the rajasthan data mining has been stated in medical college
                            </span>
                        </p>
                    </div>
                    {
                        toggle ?
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                            :
                            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

                    }
                    <ul className='hidden md:flex text-white font-[10px] text-[12px] gap-4'>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://stage.medicaljagat.com/community">Community</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md '><a href="https://stage.medicaljagat.com/news">News</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://stage.medicaljagat.com/blog">Blog </a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://tally.so/r/nP9X2Q" target="_blank">Write Reviews</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://www.whatsapp.com/channel/0029Va9fA457dmeWVUP6eX1F" target="_blank"><FaWhatsapp size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://facebook.com/medicaljagat" target="_blank"><FaFacebookF size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://twitter.com/medicaljagat" target="_blank"><SlSocialTwitter size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://instagram.com/medicaljagat" target="_blank"><FaInstagram size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://youtube.com/@medicaljagat" target="_blank"><FaYoutube size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://linkedin.com/company/medicaljagat" target="_blank"><SlSocialLinkedin size={18} /></a></li>
                    </ul>
                    {/* {Responsive menu} */}
                    <ul className={`duration-300 md:hidden w-full text-white fixed bg-[#204b57] gap-4
                 ${toggle ? 'left-[0]' : 'left-[-100%]'}
                ` } style={{ marginTop: '232px' }}>
                         <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://stage.medicaljagat.com/community">Community</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md '><a href="https://stage.medicaljagat.com/news">News</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://stage.medicaljagat.com/blog">Blog </a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://tally.so/r/nP9X2Q" target="_blank">Write Reviews</a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://www.whatsapp.com/channel/0029Va9fA457dmeWVUP6eX1F" target="_blank"><FaWhatsapp size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://facebook.com/medicaljagat" target="_blank"><FaFacebookF size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://twitter.com/medicaljagat" target="_blank"><SlSocialTwitter size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://instagram.com/medicaljagat" target="_blank"><FaInstagram size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://youtube.com/@medicaljagat" target="_blank"><FaYoutube size={18} /></a></li>
                        <li className='bg-[#204b57] p-[4px] hover:bg-[#33c7be] hover:rounded-md'><a href="https://linkedin.com/company/medicaljagat" target="_blank"><SlSocialLinkedin size={18} /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Heading
