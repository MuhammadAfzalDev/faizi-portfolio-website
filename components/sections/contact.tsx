"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-600" size={24} />,
      title: "Email",
      value: "afzaldeveloper7@gmail.com",
      link: "afzaldeveloper7@gmail.com",
    },
    {
      icon: <Phone className="text-cyan-600" size={24} />,
      title: "Phone",
      value: "+923064153756",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="text-cyan-600" size={24} />,
      title: "Location",
      value: "Faisalabad, Pakistan",
      link: "https://maps.google.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-cyan-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Touch</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {info.icon}
              </motion.div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-cyan-50 to-purple-50 p-6 rounded-lg border border-cyan-100 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-200 transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-200 transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-200 transition-all"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px] border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-200 transition-all"
                      />
                    </div>
                    <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden h-[400px] shadow-md bg-gradient-to-br from-cyan-50 to-purple-50 p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">How to Reach Me</h3>
                  <p className="text-gray-600 mb-4">Feel free to send me a message using the form on the left. I will get back to you as soon as possible.</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="text-cyan-600" size={20} />
                      <span className="text-gray-600">+923064153756</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="text-cyan-600" size={20} />
                      <span className="text-gray-600">afzaldeveloper7@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <a href="https://www.facebook.com/Afzaldeveloper" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1877F2" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="https://www.linkedin.com/in/muhammadafzaldev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="https://www.instagram.com/afzal__faizi/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#E4405F" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.015 7.052.072 5.773.129 4.548.392 3.5 1.44 2.452 2.488 2.189 3.713 2.132 4.992.015 8.332 0 8.735 0 12c0 3.265.015 3.668.072 4.948.057 1.279.32 2.504 1.368 3.552 1.048 1.048 2.273 1.311 3.552 1.368C8.332 23.985 8.735 24 12 24c3.265 0 3.668-.015 4.948-.072 1.279-.057 2.504-.32 3.552-1.368 1.048-1.048 1.311-2.273 1.368-3.552.057-1.28.072-1.683.072-4.948 0-3.265-.015-3.668-.072-4.948-.057-1.279-.32-2.504-1.368-3.552-1.048-1.048-2.273-1.311-3.552-1.368C15.668.015 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="https://github.com/MuhammadAfzalDev" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#181717" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.305-.54-1.527.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.65.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">Stay updated and connect with me through social media platforms.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
