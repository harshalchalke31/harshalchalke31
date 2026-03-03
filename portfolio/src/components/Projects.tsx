import { motion } from "motion/react"
import { fadeUp, staggerContainer } from '@/lib/animations'
import { Briefcase} from 'lucide-react'
import { projectsData } from '@/constants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className='mt-20 scroll-mt-20' id='projects'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <Briefcase size={15} /> <span>Projects</span>
            </motion.p>
            <motion.div initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0.5)}
            className='grid md:grid-cols-2 gap-10 mt-10'>
                {projectsData.map((project)=>(
                    <ProjectCard key={project.title} project={project}/>
                ))}
            </motion.div>

        </motion.section>
  )
}

export default Projects
