import { tools } from "@/constants"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Toolbox } from "lucide-react"
import { motion } from "motion/react"
import ToolCard from "./ToolCard"

const Skills = () => {
  return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)}
            className='-mt-25 scroll-mt-10' id='skills'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <Toolbox size={15} />Skills<span></span>
            </motion.p>
            <motion.div variants={fadeUp} className='grip gap-x-10 my-16 md:grid-cols-2
            space-y-8 border-l border-neutral-700 pl-6 mt-2'>
            </motion.div>
            {/* <motion.h2 variants={fadeUp} className="text-neutral-400 -mt-15">
                Languages:
            </motion.h2> */}
            <motion.div initial='hidden' whileInView='visible'
            viewport={{once:true, amount:0.3}} 
            variants={staggerContainer(0.5)}
            className="grid gap-5 grid-cols-2 -mt-5 sm:grid-cols-3 md:grid-cols-5">
                {tools.map((tool,index)=>(
                    <ToolCard key={index} tool={tool} />
                ))}
            </motion.div>
        </motion.section>
  )
}

export default Skills
