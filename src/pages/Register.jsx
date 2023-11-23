import React from 'react'
import register from '../assets/undraw_ask_me_anything_re_x7pm.svg'
import { motion } from 'framer-motion'
import { FaRegUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const registerVariants = {
    visible: {
        scale: 1.01,
        transition:{duration:1 }
    },
    exit :{
        opacity: 0,
        scale:0,
        x: '20vw',y:'20vw',
        transition:{ duration:0.6 }
    }
}

const Register = () => {
  return (
    <motion.div 
    variants={registerVariants}
    animate='visible'
    exit="exit"
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 py-12'>
        <div >
            <img src={register} className='object object-cover' alt="register" /> 
        </div>
        <div className='py-6 shadow shadow-xl m-4 px-8'>
            <h2 className='text-center text-xl font-bold pb-8 text-[#8338ec]'>Iyandikishe</h2>
            <form>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                    Izina ukoresha <span className='text-[#8338ec]'>*</span>
                    </label>
                    <FaRegUser className='relative top-7 left-2' />
                    <input className='
                     border
                     border-gray-300
                     rounded-md
                     ps-8
                     w-full
                     py-2
                     text-sm
                     focus:border-[#8338ec]
                     focus:outline-none
                    
                    ' id='name' type='text' placeholder='user123...' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Imeri <span className='text-[#8338ec]'>*</span>
                    </label>
                    <TfiEmail className='relative top-7 left-2' />
                    <input className='
                     border
                     border-gray-300
                     rounded-md
                     ps-8
                     w-full
                     py-2
                     text-sm
                     focus:border-[#8338ec]
                     focus:outline-none
                    
                    ' id='email' type='email' placeholder='example@example.com' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Ijambobanga <span className='text-[#8338ec]'>*</span>
                    </label>
                    <RiLockPasswordLine className='relative top-7 left-2' />
                    <input className='
                    
                    border
                    border-gray-300
                    rounded-md
                    ps-8
                    w-full
                    py-2
                    text-sm
                    focus:border-[#8338ec]
                    focus:outline-none
                    ' id='password' 
                    type='password' 
                    placeholder='*********' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password_confirmation'>
                        Ongera  Ijambobanga <span className='text-[#8338ec]'>*</span>
                    </label>
                    <RiLockPasswordLine className='relative top-7 left-2' />
                    <input className='
                     border
                     border-gray-300
                     rounded-md
                     ps-8
                     w-full
                     py-2
                     text-sm
                     focus:border-[#8338ec]
                     focus:outline-none
                    ' id='password_confirmation' 
                    type='password' 
                    placeholder='*********' />
                </div>
                <div className='mb-6'>
                <button 
                className='
                    border
                    border-gray-300
                    rounded-md
                    text-[13px]
                    shadow
                    bg-[#8338ec]
                    shadow-xl
                    px-4
                    pt-1.5
                    pb-1.5
                    text-gray-100
                    '
              >
                  Emeza
              </button>
                </div>
            </form>
        </div>
    </motion.div>
  )
}

export default Register;
