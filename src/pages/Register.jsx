import React from 'react'
import register from '../assets/undraw_ask_me_anything_re_x7pm.svg'
import { motion } from 'framer-motion'
import { FaRegUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const registerVariants = {
    initial :{
        opacity: 1,
        x: '-2000px'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition:{ duration:0.6 }
    },
    exit :{
        opacity: 0,
        x: '2000px',
        transition:{ duration:0.6 }
    }
}

const Register = () => {
  return (
    <motion.div 
    variants={registerVariants}
    initial="initial"
    animate='visible'
    exit="exit"
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 py-12 mx-2 md:mx-32 lg:mx-32'>
        <div >
            <img src="https://img.freepik.com/free-vector/realistic-wooden-brown-judge-gavel_88138-139.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais" className='object object-cover' alt="register" /> 
        </div>
        <div className='py-6 shadow shadow-xl m-4 px-8'>
            <h2 className='text-center text-xl font-bold pb-8 text-[#003566]'>Iyandikishe</h2>
            <form>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                    Izina ukoresha <span className='text-[#003566]'>*</span>
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
                     focus:border-[#003566]
                     focus:outline-none
                    
                    ' id='name' type='text' placeholder='user123...' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Imeri <span className='text-[#003566]'>*</span>
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
                     focus:border-[#003566]
                     focus:outline-none
                    
                    ' id='email' type='email' placeholder='example@example.com' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Ijambobanga <span className='text-[#003566]]'>*</span>
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
                    focus:border-[#003566]
                    focus:outline-none
                    ' id='password' 
                    type='password' 
                    placeholder='*********' />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password_confirmation'>
                        Ongera  Ijambobanga <span className='text-[#003566]'>*</span>
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
                     focus:border-[#003566]
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
                    bg-[#003566]
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
