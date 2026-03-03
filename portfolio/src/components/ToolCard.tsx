import { fadeUp } from "@/lib/animations"
import type { ToolsType } from "@/types"
import { motion } from "motion/react"

type Props = {
    tool: ToolsType
}

const ToolCard = ({tool}:Props) => {
    const Icon = tool.imgSrc
    return (
        <motion.div variants={fadeUp}
        className="border border-neutral-600 rounded-xl flex justify-center
        items-center flex-col py-2">
            <Icon className='size-10'/>
            <p className="font-bold pt-5">{tool.label}</p>
        </motion.div>
  )
}

export default ToolCard
