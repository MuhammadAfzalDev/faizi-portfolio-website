"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    {
      category: "Frontend",
      icon: "💻",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "AI & ML",
      icon: "🧠",
      items: [
        { name: "LangChain", level: 75 },
        { name: "LangGraph", level: 70 },
        { name: "AI Agents", level: 65 },
        { name: "AI Automation", level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various technologies.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl">{skillGroup.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{skillGroup.category}</h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.2 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
