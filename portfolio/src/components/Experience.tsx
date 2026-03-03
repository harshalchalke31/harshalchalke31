import { motion } from "motion/react"
import { fadeUp, staggerContainer } from '@/lib/animations'
import { experience } from '@/constants'
import ResumeCard from './ResumeCard'
import { CgWorkAlt } from "react-icons/cg"

const Experience = () => {
    return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)}
            className='-mt-5 scroll-mt-20' id='experience'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <CgWorkAlt size={15} />Experience<span></span>
            </motion.p>
            <motion.div variants={fadeUp} className='grip gap-x-10 my-16 md:grid-cols-2
            space-y-8 border-l border-neutral-700 pl-6 mt-2'>
                {experience.map((item, index) => (
                    <ResumeCard key={index} item={item} />
                ))}
            </motion.div>
        </motion.section>
    )
}


export default Experience
