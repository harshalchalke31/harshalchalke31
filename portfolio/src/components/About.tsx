import { motion } from "motion/react"
import { User } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const About = () => {
  return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className='mt-10 scroll-mt-10' id='hero'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <User size={15} /> <span>About</span>
            </motion.p>


        </motion.section>
  )
}

export default About
