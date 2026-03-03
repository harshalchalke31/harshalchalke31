import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Lenis from 'lenis'
import { useEffect } from "react"


export const App = () => {
  useEffect(()=>{
    const lenis = new Lenis()
    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-5xl">
      <Hero />
      <div className="grid gap-x-10 my-16 md:grid-cols-2">
        <Education />
        <Experience />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}