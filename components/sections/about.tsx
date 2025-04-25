"use client"

import { motion } from "framer-motion"
import { CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ParallaxWrapper from "@/components/animations/parallax-wrapper"
import AnimatedCounter from "@/components/animations/animated-counter"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    "Frontend Development",
    "Backend Architecture",
    "Machine Learning",
    "Natural Language Processing",
    "UI/UX Design",
    "API Development",
    "Cloud Solutions",
    "DevOps",
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-cyan-600">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me as a developer.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <ParallaxWrapper baseVelocity={-0.05}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative">
                <Image
                  src="/faizi.jpg"
                  alt="Faizi working on code"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </ParallaxWrapper>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <AnimatedCounter
                from={0}
                to={2}
                suffix="+"
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600"
              />
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold text-gray-800 mb-4">
              Full Stack Developer & AI Engineer
            </motion.h3>

            <motion.p variants={fadeIn} className="text-gray-600 mb-6">
              I'm a passionate developer with over 2 years of experience in building web applications and AI solutions.
              I specialize in creating scalable, user-friendly applications that solve real-world problems.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-600 mb-6">
              With a background in computer science and a deep interest in artificial intelligence, I bridge the gap
              between traditional web development and cutting-edge AI technologies.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <CheckCircle className="text-cyan-600 mr-2" size={18} />
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <Button variant="gradient">
                <Link href="#contact">Let's Work Together</Link>
              </Button>
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                <Download className="mr-2 h-4 w-4" />
                <Link href="/resume.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
