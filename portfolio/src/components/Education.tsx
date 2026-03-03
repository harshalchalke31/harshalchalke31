import { motion } from "motion/react"
import { fadeUp, staggerContainer } from '@/lib/animations'
import { SchoolIcon } from 'lucide-react'
import { education } from '@/constants'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} 
            className='-mt-5 scroll-mt-10' id='education'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <SchoolIcon size={15} />Education<span></span>
            </motion.p>
            <motion.div variants={fadeUp} className='grip gap-x-10 my-16 md:grid-cols-2
            space-y-8 border-l border-neutral-700 pl-6 mt-2'>
                {education.map((item, index)=>(
                    <ResumeCard key={index} item={item}/>
                ))}
            </motion.div>
        </motion.section>
  )
}

export default Education
