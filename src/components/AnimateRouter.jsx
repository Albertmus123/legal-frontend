import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import { AnimatePresence } from 'framer-motion'


const AnimateRouter = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimateRouter;
