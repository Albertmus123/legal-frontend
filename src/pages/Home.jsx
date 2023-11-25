import React from 'react'
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import {SliderLawyers} from '../components/SliderLawyers';

const homeVariants = {
    visible: {
        transition:{duration:0.5 }
    },
    exit :{
        opacity: 0,
        x: '2000px',
        transition:{ duration:0.6 }
    }
}
const Home = () => {
  return (
    <motion.div
    variants={homeVariants}
    animate='visible'
    exit="exit"
    className='mx-2 md:mx-32 lg:mx-32'
    >
      <HeroSection />
      <Services />
      <SliderLawyers />
    </motion.div>
  )
}

export default Home;