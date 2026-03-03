import { motion } from "motion/react"
import type { ProjectType } from '@/types'
import { fadeUp } from '@/lib/animations'

type Props = {
  project: ProjectType
}

const ProjectCard = ({project}: Props) => {
  return (
    <motion.div variants={fadeUp} className='relative'>
      <figure className='overflow-hidden rounded-xl'>
        <img src={`${import.meta.env.BASE_URL}${project.imgSrc}`}
        className='rounded-xl transition hover:scale-105 duration-300 w-full'></img>
      </figure>
      <div className='absolute bottom-0 p-2 flex gap-2 '>
        {project.tags.map((tag, index)=>(
          <span key={index} className='bg-background hover:bg-primary 
          hover:text-black py-1 px-2 rounded-md text-sm cursor-pointer'>
            {tag}
            </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard
