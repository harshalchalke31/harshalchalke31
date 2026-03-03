import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'

function FloatingMenu() {
  const [active, setActive] = useState('/')
  return (
    <div className='fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-6 
    bg-black border border-neutral-500 px-4 py-2 rounded-full z-50 hidden lg:flex'>
      {navLinks.map((link) => {
        const Icon = link.icon
        return (
          <a href={link.link} key={link.label}
            onClick={() => setActive(link.link)}
            className={cn(`text-neutral-400 flex items-center gap-2 hover:text-white transition-colors duration-300 px-4`,
              active === link.link && 'text-primary'
            )}>
            <Icon className={`size-5`} />
          </a>
        )
      })}
    </div>
  )
}

export default FloatingMenu
