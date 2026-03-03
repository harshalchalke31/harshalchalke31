import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { navLinks, socialLinks } from "@/constants"
import { cn } from "@/lib/utils"

export const Sidebar = () => {
    const [active, setActive] = useState('/')
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} size={'icon'}
                        className="m-4 fixed top-0 right-4 z-50 border-2 hover:border-primary
                    bg-neutral-800 py-5 px-5 rounded-full hover:text-primary cursor-pointer">
                        <Menu size={30} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right"
                    className="w-84 bg-neutral-900 text-white py-6 pl-10">
                    <SheetTitle className="text-lg font-semibold">
                        Menu
                    </SheetTitle>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon

                            return (
                                <a href={link.link} key={link.label}
                                    target='_blank' rel='noopener noreferrer'
                                    onClick={() => setActive(link.link)}
                                    className={cn('text-neutral-300 flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base',
                                        active === link.link && 'text-primary',

                                    )}>
                                    <Icon className='size-5' /> {link.label}
                                </a>
                            )
                        })}
                    </nav>
                    <div className="mt-30">
                        <p className="pb-2">Socials</p>
                        <div className="flex gap-3 text-neutral-500">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <a href={social.link} key={index}
                                        className="hover:text-primary border-2 border-neutral-500 p-2
                                    rounded-full hover:border-primary transition duration-200">
                                        <Icon className='size-5' />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}   
