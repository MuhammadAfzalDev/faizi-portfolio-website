"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedText } from "@/components/animations/animated-text"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const backgroundCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundCircleVariants}
          className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundCircleVariants}
          transition={{ delay: 0.3 }}
          className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center md:text-left"
          >
            <motion.p variants={itemVariants} className="text-cyan-600 font-medium mb-2">
              Full Stack Developer & AI Engineer
            </motion.p>

            <motion.div variants={itemVariants}>
              <AnimatedText
                text="Building digital solutions for tomorrow"
                el="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
                animation={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I create innovative web applications and AI solutions that solve real-world problems and deliver
              exceptional user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="gradient" size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                <Download className="mr-2 h-4 w-4" />
                <Link href="/resume.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              {[
                { icon: <Github size={24} />, href: "https://github.com" },
                { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
                { icon: <Twitter size={24} />, href: "https://twitter.com" },
              ].map((social, i) => (
                <motion.div key={i} custom={i} variants={socialVariants} initial="hidden" animate="visible">
                  <Link
                    href={social.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors transform hover:scale-110 inline-block"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1 shadow-xl">
              <div className="bg-white rounded-full h-full w-full flex items-center justify-center overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  src="/placeholder.svg?height=500&width=500"
                  alt="John Doe - Full Stack Developer and AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <span className="h-2 w-2 bg-white rounded-full animate-pulse"></span>
                  <span>Available for hire</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          className="bg-white p-2 w-10 h-10 ring-1 ring-gray-200 shadow-lg rounded-full flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-cyan-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}
