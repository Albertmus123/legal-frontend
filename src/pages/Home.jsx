import React from 'react'
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const homeVariants = {
    visible: {
        scale: 1.01,
        transition:{duration:1 }
    },
    exit :{
        opacity: 0,
        scale:0,
        x: '20vw', y:'20vw',
        transition:{ duration:0.6 }
    }
}
const Home = () => {
  return (
    <motion.div
    variants={homeVariants}
    animate='visible'
    exit="exit"
    >
      <HeroSection />
      <SectionTitle />
      <Services />
    </motion.div>
  )
}

export default Home;