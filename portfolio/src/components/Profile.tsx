import { socialLinks } from '@/constants'
import { Download, MapPin, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

function Profile() {
    return (
        <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6
    rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96 '>
            <div className='flex flex-col gap-4'>
                <div className='flex  flex-col'>
                    <h1 className='text-3xl font-bold'>Harshal N. Chalke</h1>
                    <p className='text-sm text-neutral-400'>Software Engineer</p>
                </div>
                <img src={`${import.meta.env.BASE_URL}/square_profile.JPG`} className='lg:w-40 lg:h-40 mx-auto rounded-full object-cover' />

                <div className='mt-6'>
                    <p className='text-sm text-neutral-400'>Specialization:</p>
                    <p className='text-lg capitalize'>AI Engineer & Full Stack Developer</p>
                    <p className='flex flex-row gap-2 mt-3 mb-3 text-lg capitalize'><MapPin className='mr-1 size-4' />New York, US</p>
                </div>
                <p className="pb-2 text-neutral-400">Socials</p>
                <div className="flex gap-3 text-neutral-500">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <a href={social.link} key={index}
                                target='_blank' rel='noopener noreferrer'
                                className="hover:text-primary border-2 border-neutral-500 p-2
                                    rounded-full hover:border-primary transition duration-200">
                                <Icon className='size-5' />
                            </a>
                        )
                    })}
                </div>
                <div className='flex gap-3 mt-3'>
                    <a href={`${import.meta.env.BASE_URL}harshal_chalke_resume.pdf`} download className='flex-1'>
                        <Button className='w-full'><Download className='mr-2 size-4' />Resume</Button>
                    </a>
                    <Button className='flex-1'
                        onClick={() => document.querySelector('#contact')?.scrollIntoView()}>
                        <MessageCircle className='mr-2 size-4' />Message</Button>
                </div>

            </div>
        </aside>
    )
}

export default Profile
