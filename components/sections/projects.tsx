"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "/projects/faizi-port.png?height=400&width=600",
      tags: ["Next.js", "React.js", "Python", "FastAPI", "Tailwind CSS"],
      category: "web",
      liveUrl: "https://muhammad-afzal.vercel.app/",
    },
    {
      title: "Landing page",
      description:
        "A landing page for a product showcasing its features and benefits.",
      image: "/projects/landingPage.png?height=400&width=600",
      tags: ["Next.js", "Shadcn", "Python", "Redux"],
      category: "web",
      liveUrl: "https://faizi-tech.vercel.app/",
    },
    {
      title: "TI-84CalculatorOnline",
      description:
        "An online calculator for the TI-84 graphing calculator.",
      image: "/projects/tlcalculator.png?height=400&width=600",
      tags: ["Next.js", "Shadcn UI", "React", "Tailwind CSS"],
      category: "web",
      liveUrl: "https://www.ti84calc.net/calculator",
    },
    {
      title: "Attrangs E-Commerce Website",
      description:
        "An Korean Based e-commerce website for Attrangs, a clothing brand, featuring product listings and shopping cart functionality.",
      image: "/projects/Attrangs.png?height=400&width=600",
      tags: ["Next.js", "Shadcn UI", "React", "python", "FastAPI", "Tailwind CSS"],
      category: "web",
      liveUrl: "https://new-ecom-xi.vercel.app/",
    },
    
    
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { name: "All", value: "all" },
    { name: "Web Apps", value: "web" },
    { name: "AI Projects", value: "ai" },
  ]

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent web and AI development projects.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  activeFilter === filter.value ? "text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeFilter === filter.value && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{filter.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <Link
                        href={project.liveUrl}
                        className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gradient-to-r from-cyan-50 to-purple-50 text-cyan-600 text-xs font-medium px-2.5 py-0.5 rounded border border-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://github.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
