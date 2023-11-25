import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const listOfNavigation = [
    {
        link: 'Ahabanza',
        to : '/'
    },
    {
        link: 'Services'  
    },
    {
        link : 'Umunyamategeko',
        to : 'register'
    },
    {
        link : 'Injira'
    },
    {
        link: 'Ubufasha ?'
    }
]

const NavBar = () => {
  return (
    <div className='nav relative gap-12 grid justify-center shadow py-4  sticky top-0 right-0 z-30 text-gray-100  rounded-md bg-[#003566] mx-2 md:mx-32 lg:mx-32'>
        <div 
            className="logo absolute left-4 top-2 text-[40px]">
            <GoLaw />
        </div>
        <div className="menu">
            <div className='grid  justify-center gap-12 py-1 invisible md:invisible lg:visible'>
                <ul className='flex gap-6 md:gap-6 lg:gap-8'>
                    {listOfNavigation.map((item, index) => {
                        return (
                            <motion.li
                                whileHover={{ scale:1.1}}
                                transition={{ duration: 0.2 , ease: 'linear'}}
                                key={index}
                                >
                                <Link to={item.to} className='text-[13px] font-bold hover:border-b-4 hover:border-b-[#8338ec]'>{item.link}</Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className="search flex absolute right-12 top-2 invisible md:invisible lg:visible ">
        <ul className='flex gap-2 text-[20px] text-gray-100  pt-4 pb-6 '>
        <li><SlSocialFacebook /></li>
        <li><FiTwitter /></li>
        <li><FaInstagram /></li>
        <li><CiLinkedin /></li>
      </ul>
        </div>
        <div className="menu-icon absolute right-4 top-4 text-[30px] text-gray-100 show md:show lg:hidden">
            <TiThMenuOutline />
        </div>
    </div>
  )
}

export default NavBar;
