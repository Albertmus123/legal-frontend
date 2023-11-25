import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Card = () => {
  return (
    <div className='card border border-2 border-gray-100 shadow shadow-xl hover:shadow-none hover:border-[#003566] rounded-2xl mt-4 mx-4'>
      <div className='card-img'>
        <img className='object object-cover w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbFEKm4C4R_PhCBYsc8YSZzcHLbdgGeAB-A&usqp=CAU" alt="user"  />
      </div>
      <div className='card-title flex justify-center py-4'>
        <h1 className='font-bold'>Dr musabyemungu Albert</h1>
      </div>
      <div className='card-content px-4 py-2'>
            <p>A user is someone who employs or uses a particular thing, 
            like a user of nicotine or a user of an internet site.</p>
      </div>
      <div className='card-link flex justify-center'>
            <h2 className='font-bold'>Follow me</h2>
      </div>
      <ul className='card-footer flex gap-2 text-[24px] text-[#003566]  pt-4 pb-6 justify-center'>
        <li className='border border-[#003566] rounded-full p-2'><SlSocialFacebook /></li>
        <li className='border border-[#003566] rounded-full rounded-full p-2'><FiTwitter /></li>
        <li className='border border-[#003566] rounded-full rounded-full p-2'><FaInstagram /></li>
        <li className='border border-[#003566] rounded-full rounded-full p-2'><CiLinkedin /></li>
      </ul>
    </div>
  )
}

export default Card;
