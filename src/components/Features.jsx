import React from 'react'
import BenefitsCard from './BenefitsCard'
import { motion } from "framer-motion"
import { HandPointing, Smiley, UsersThree, CloudArrowUp, LineSegments, ChatsCircle, Fire, FileLock, Archive} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
const Features = ({featuresRef}) => {
  const [t] = useTranslation("global")
  return (
    <section id='features' className='section flex flex-col  items-center justify-center  px-12 font-bold  -mb-px md:-mb-0 min-h-screen   pb-8 md:px-48 xl:px-64' >
      
      <p className='text-4xl md:text-5xl dark:text-[#faf5e8] text-black font-bold flex  mb-12'>{t("benefits.title")}</p>

      <div className='flex gap-12 flex-wrap  pt-12  w-full md:w-full  justify-center' ref={featuresRef}>
          
          <motion.div 
          className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle1")} description={t("benefits.cardDescription1")} icon={<HandPointing size={28}/>} color={`#f72585`} />
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true , margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle2")} description={t("benefits.cardDescription2")} icon={<Smiley size={28}/>} color={`#f72585`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle3")} description={t("benefits.cardDescription3")} icon={<UsersThree  size={28}/>} color={`#f72585`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 0.5}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle4")} description={t("benefits.cardDescription4")} icon={<CloudArrowUp  size={28}/>} color={`#b5179e`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:0.5}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle5")} description={t("benefits.cardDescription5")} icon={<LineSegments  size={28}/>} color={`#b5179e`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 0.5}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle6")} description={t("benefits.cardDescription6")} icon={<ChatsCircle  size={28}/>} color={`#b5179e`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay: 1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle7")} description={t("benefits.cardDescription7")} icon={<Fire  size={28}/>} color={`#4361ee`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle8")} description={t("benefits.cardDescription8")} icon={<FileLock  size={28}/>} color={`#4361ee`}/>
          </motion.div>
          <motion.div
           className='w-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px"}}
            transition={{ duration: 1, delay:1}}
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0}
            }}
          >
          <BenefitsCard title={t("benefits.cardTitle9")} description={t("benefits.cardDescription9")} icon={<Archive  size={28}/>} color={`#4361ee`}/>
          </motion.div>
          
      </div>
          
    </section>
  )
}

export default Features