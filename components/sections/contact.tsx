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
                className="rounded-lg overflow-hidden h-[400px] shadow-md"
              >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4890.195606047447!2d73.58391870000001!3d31.500113899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1745604642614!5m2!1sen!2s"
                 width="100%" 
                 height="100%" 
                 loading="lazy" ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
