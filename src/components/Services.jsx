import React from 'react'
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { MdArrowRightAlt } from "react-icons/md";

export const services =[{
    id: 1,
    title: 'Amategeko yumuryango',
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
        title: 'Ihohotera',
        description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ',
        svgIcon : ''
    },

    {
        id: 4,
        title: 'Saba Ubufasha',
        description: '....',
        svgIcon : ''
    },
    {
        id: 5,
        title: 'Saba Ubufasha',
        description: '....',
        svgIcon : ''
    },
    {
        id: 6,
        title: 'Saba Ubufasha',
        description: '....',
        svgIcon : ''
    }
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
    const title = "Ibyo Dukora"
  return (
    <div>
        <SectionTitle  title={title}/>
        <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 px-2 md:px-6 lg:px-2'>
            {services.map((service,i)=>(
                <motion.div 
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.6, delay: i * 0.3 }}
                    viewport={{ once: true}}
                    className="card shadow-xl hover:space-x-2 pt-12 pb-6 px-4">
                    <div className="card-body">
                        <h1 className="card-title font-bold text-[17px]">{service.title}</h1>
                        <p className="card-text py-4 text-[14px]">{service.description.substring(0,100)}...</p>
                        <motion.button
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            whileHover={{ borderColor: '#8338ec', scale: 1.06 }}
                            transition={{ type: 'spring', duration: 0.5}}
                            className='
                                flex
                                border
                                border-gray-300
                                rounded-md
                                text-[12px]
                                md:text-[14px]
                                lg:text-[14px]
                                shadow
                                bg-[#8338ec]
                                shadow-xl
                                py-2
                                px-4
                                text-gray-100
                            '
                            >
                            Soma birambuye   <h1 className='text-[20px]'>{<MdArrowRightAlt />}</h1>
                        </motion.button>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Services;
