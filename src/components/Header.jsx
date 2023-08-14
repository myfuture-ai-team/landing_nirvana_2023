import React from 'react'

import {IoIosArrowForward} from "react-icons/io";
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
const Header = ({colorMode, featureIsVisible}) => {

  const [t] = useTranslation("global")
  return (
    <header id='home' className={`flex flex-col items-center justify-between w-full relative min-h-[calc(100vh-6rem)] md:py-12 py-12 mb-12 px-10 md:px-24`}>
      <div className='flex flex-col items-start md:w-7/12 sm:py-24  '>
          <p className=' text-2xl text-white mb-6 '>{t("header.subtitle")}</p>
          <div className=' text-5xl sm:text-6xl text-[#F72585] font-bold mb-6'>
            
            <p>{t("header.title")}</p>
          </div>
          <p className='text-2xl text-white inline-block mb-36 md:mb-0 w-full '>{t("header.description")}</p>
        </div>
        <motion.div className='hover:cursor-pointer font-bold  flex  group'
        initial={{
          y:0
        }}
        animate={{
          opacity: featureIsVisible ?  0 : 1,
          y: ["0rem", "-0.1rem", "0rem"]
        }}
        
        transition={{
          y: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay:0
          }
        }}>
          <IoIosArrowForward size={24} color='white' className='group-hover:rotate-90 duration-700'/>
          <button className='rounded-full text-white'
        >
          {t("header.cta")}
        </button>
        </motion.div>
    </header>
    
  )
}

export default Header