import React from 'react'
import mindfull from '../assets/undraw_helpful_sign_re_8ms5.svg'
import { motion } from 'framer-motion'

const imgVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1
  },
  visible: {
    opacity: 1,
    scale: 0.7,
    transition: { type: 'spring', stiffness: '60' }
  },
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1
  },
  visible: {
    opacity: 1,
    scale: 0.8,
  },
  hover : {
    borderColor: '#8338ec', 
    scale: 0.9,
  }
}

const HeroSection = () => {
  return (
    <motion.div className='grid justify-center'>
        <div className='object object-cover'>
            <motion.img
            variants={imgVariants} 
            initial="hidden"
            animate="visible"
            src={mindfull} 
            alt="mindfull" 
            />
        </div>
        <div className="button flex justify-center py-8">
              <motion.button
              variants={buttonVariants}
              initial='hidden'
              animate='visible'
              whileHover="hover"
              className='   
              border
              border-gray-300
              rounded-md
              text-[12px]
              md:text-[14px]
              lg:text-[14px]
              shadow
              bg-[#8338ec]
              shadow-xl
              py-3
              px-3
              text-gray-100
              '
              >
                  Saba Ubufasha
              </motion.button>
        </div>
      </motion.div>
  )
}

export default HeroSection;
