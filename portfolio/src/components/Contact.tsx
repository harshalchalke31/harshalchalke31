import { fadeUp, staggerContainer } from "@/lib/animations"
import { Contact2Icon } from "lucide-react"
import { motion } from "motion/react"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { BiSend } from "react-icons/bi"

type ContactFormValues = {
    name: string,
    company: string,
    email: string,
    phone: string,
    message: string,
}
const Contact = () => {
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
        }
    })
    const onSubmit = (values: ContactFormValues) => {
        console.log(values)
    }
    return (
        <motion.section initial='hidden' whileInView='visible'
            viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)}
            className='mt-10 scroll-mt-10' id='contact'>
            <motion.p variants={fadeUp} className='flex items-center justify-center py-1 gap-2 border
                border-neutral-600 rounded-lg w-32'>
                <Contact2Icon size={15} />Contact<span></span>
            </motion.p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full mx-auto space-y-4 mt-10">
                    <div className="grid grid-cols-1 gap-4 
                    md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Your Name"
                                            className="border-0"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Company Name"
                                            className="border-0"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="you@example.com"
                                            type="email"
                                            className="border-0"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="+1 785 345 6782"
                                            type="tel"
                                            className="border-0"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder="Write your message..."
                                    className="h-36 border-0"
                                    {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" size='lg'><BiSend />Send</Button>
                </form>
            </Form>
        </motion.section>
    )
}

export default Contact
