import { fadeUp, staggerContainer } from "@/lib/animations"
import { Contact2Icon } from "lucide-react"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { BiSend } from "react-icons/bi"
import { useState } from "react"

type ContactFormValues = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const Contact = () => {
  const [serverMessage, setServerMessage] = useState("")
  const [serverError, setServerError] = useState("")

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onSubmit",
  })

  const onSubmit = async (values: ContactFormValues) => {
    setServerMessage("")
    setServerError("")

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/harshal.chalke2001@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            company: values.company || "Not provided",
            email: values.email,
            phone: values.phone || "Not provided",
            message: values.message,
            _subject: "New Contact Form Submission",
            _template: "table",
            _captcha: "false",
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message")
      }

      form.reset()
      setServerMessage("Message sent successfully.")
    } catch (error) {
      console.error("Contact form error:", error)
      setServerError("Failed to send message. Please try again.")
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-10 scroll-mt-20"
      id="contact"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-lg w-32"
      >
        <Contact2Icon size={15} />
        Contact
        <span></span>
      </motion.p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto space-y-4 mt-10"
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      className="border-0"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      className="border-0"
                      autoComplete="organization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      className="border-0"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="+1 785 345 6782"
                      type="tel"
                      className="border-0"
                      autoComplete="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            rules={{
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Write your message..."
                    className="h-36 border-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError ? (
            <p className="text-sm text-red-500">{serverError}</p>
          ) : null}

          {serverMessage ? (
            <p className="text-sm text-green-500">{serverMessage}</p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            <BiSend />
            {form.formState.isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </motion.section>
  )
}

export default Contact