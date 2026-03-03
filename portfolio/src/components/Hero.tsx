import { motion } from "motion/react"
import { fadeUp, staggerContainer } from '@/lib/animations'
import { Briefcase, Download, SparkleIcon } from 'lucide-react'
import { Button } from './ui/button'

function Hero() {
    return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className='pt-10 scroll-mt-20' id='hero'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <SparkleIcon size={15} /> <span>Introduction</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className='text-4xl md:text-5xl lg:6xl mt-2 font-semibold max-w-3xl md:leading-16'>
                I am a <span className='text-primary'>Software Engineer</span> with a Major in Artificial Intelligence.
            </motion.h1>
            <motion.p variants={fadeUp} className='mt-4 text-primary'>
                I can build end-to-end AI Software Applicatons. I specialize in building Agentic AI pipelines and Fullstack applications. Other than that I have academic experience
                in computer vision, natural language processing and machine learning model development. My core stack is MERN, Python,
                Pytorch, Google ADK and FastAPI. I have model deployment experience on GCP Vertex AI. On the AI side I have built RAG, MCP and general LLM inference pipelines that are
                current hot topics of AI domain.
            </motion.p>
            <motion.div variants={fadeUp} className='flex gap-3 mt-3 justify-end'>
                <Button className='w-40'
                    onClick={() => document.querySelector('#projects')?.scrollIntoView()}>
                        <Briefcase className="size-4 mr-2"/>My Projects</Button>
                <a className="w-40" href={`${import.meta.env.BASE_URL}/harshal_chalke_resume.pdf`} download>
                    <Button className='w-full'><Download className='mr-2 size-4' />Resume</Button>
                </a>

            </motion.div>


        </motion.section>
    )
}

export default Hero
