import React, { useState } from 'react'
import { GoLaw } from "react-icons/go";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
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

const NavbarPhoneVariants = {
    hidden:{ y: '-100'},
    visible: {
         y: 0,
         transition:{ duration:0.4}
    },
    exit :{
        y: -300,
        transition:{ duration:0.6}
    }
}

const NavBarPhone = ()=>{
    return (
            <motion.nav 
            variants={NavbarPhoneVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            className="fixed max-w-12 z-10 text-gray-100 bg-[#003566] mx-2 md:mx-28 lg:mx-24 rounded-md">
            <ul
            className='px-8 py-8 gap-6 md:gap-6 lg:gap-8'>
                    {listOfNavigation.map((item, index) => {
                        return (
                            <motion.li
                                initial={{ scale:1 }}
                                whileHover={{ scale:1.1}}
                                transition={{ duration: 0.2}}
                                key={index}
                                >
                                <Link to={item.to} className='text-[13px] font-bold hover:border-b-4 hover:border-b-[#8338ec]'>{item.link}</Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </motion.nav>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='nav relative gap-12 grid justify-center shadow py-4  sticky top-0 right-0 z-30 text-gray-100  rounded-md bg-[#003566] mx-2 md:mx-28 lg:mx-24'>
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
        {/* <li><CiLinkedin /></li> */}
      </ul>
        </div>
        <div
        style={{cursor: 'pointer'}}
        className="menu-icon absolute right-4 top-4 text-[35px] text-gray-100 show md:show lg:hidden ">
        
        {isOpen ? <MdClose onClick={()=>setIsOpen(!isOpen)}  />  : <HiOutlineBars3BottomRight onClick={()=>setIsOpen(!isOpen)} />}
        
        </div>
    </div>
    <AnimatePresence>
    {isOpen && <NavBarPhone /> }
    </AnimatePresence>
    </>
  )
}

export default NavBar;
