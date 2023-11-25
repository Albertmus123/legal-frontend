import React from 'react'
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { MdArrowRightAlt } from "react-icons/md";

export const services =[{
    id: 1,
    title: "Amategeko y'umuryango",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    svgIcon : ''
    },
    {
        id: 2,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,
    {
        id: 3,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,
    {
        id: 4,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,
    {
        id: 5,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,
    {
        id: 6,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,
    {
        id: 7,
        title: "Amategeko y'ubutaka",
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    }
    ,

]

const cardVariants = {
    hidden: {
        opacity: 0,
        y: '200', 
    },
    visible: {
        opacity: 1,
        y: 0, 
    }
}

const Services = () => {
  return (
    <div>
        <SectionTitle  title="Ibyo Dukora"/>
        <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 px-4 md:px-6 lg:px-2 mb-6'>
            {services.map((service,i)=>(
                <motion.div 
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true}}
                    className="card shadow shadow-md hover:space-x-2 pt-4 pb-6 px-4 border hover:border-1 hover:border-[#003566]">
                    <div className="card-body">
                        <h1 className="card-title font-bold text-[17px] text-[#003566] border-b-4 border-b-[#003566]">{service.title}</h1>
                        <p className="card-text py-4 text-[14px]">{service.description.substring(0,100)}...</p>
                       <div className="flex text-[14px] text-sky-900 hover:text-[#003566] cursor-pointer">
                            Soma birambuye
                            <h1 className='text-[20px]'>{<MdArrowRightAlt />}</h1>
                       </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Services;
