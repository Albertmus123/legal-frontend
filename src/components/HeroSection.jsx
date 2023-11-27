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
    <motion.div className='heroImageb bg-cover bg-no-repeat bg-center grid justify-center pt-4 md:pt-16 lg:pt-24 pb-28'>
        <div className='hero-title py-12'>
          <h1 className='text-gray-100 text-[40px] md:text-[60px] lg:text-[60px] ps-16 md:ps-32 lg:ps-48 pb-12'>MURAKAZA <span className='text-[#003566] bg-gray-100 rounded-xl px-2'>NEZA?</span> </h1>
          <p className='text-gray-100 text-[22px] md:text-[26px] lg:text-[26px] ps-6 md:p-0 lg:p-0 font-bold'> Tugishe Inama Mubyamategeko,  Turaguha Umu avoka uguhagararira, 
            <span className='block text-[#003566] text-[16px] md:text-[26px] lg:text-[26px] bg-gray-100 rounded-full me-4 ps-4 mg:ps-12 lg:ps-12 my-4'>Kurikirana ikirego cyawe aho kigeze .</span>
            
          </p>
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
              text-[16px]
              md:text-[17px]
              lg:text-[18px]
              shadow
              bg-[#003566]
              shadow-xl
              py-4
              px-4
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
