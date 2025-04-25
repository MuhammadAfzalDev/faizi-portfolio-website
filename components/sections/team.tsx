"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Team() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const team = [
    {
      name: "Muhammad Afzal",
      role: "Founder & Lead Developer",
      image: "/faizi.jpg",
      bio: "Full stack developer with expertise in Next.Js, python and AI integration. Passionate about building innovative solutions and leading teams.",
      social: {
        github: "https://github.com/MuhammadAfzalDev",
        linkedin: "https://www.linkedin.com/in/muhammadafzaldev/",
        twitter: "#",
      },
    },
    {
      name: "Syed Ali Zar Bukhari",
      role: "Business Manager",
      image: "/ali.jpg",
      bio: "Business strategist with a focus on AI-driven solutions and market analysis. Skilled in identifying opportunities and driving growth.",
      social: {
        github: "https://github.com/Alizarbukhari",
        linkedin: "https://www.linkedin.com/in/ali-zar-929b66116/",
        twitter: "#",
      },
    },
    {
      name: "Syed Hammad Ali Shah",
      role: "Full Stack Developer & AI Engineer",
      image: "/hammad.jpg",
      bio: "Full stack developer with a passion for creating seamless user experiences and robust backend systems. Skilled in Next.js, Python, and AI technologies.",
      social: {
        github: "https://github.com/Hamadalishah",
        linkedin: "https://www.linkedin.com/in/syed-muhammad-hamad-ali-aa33692b3/",
        twitter: "#",
      },
    },
    {
      name: "Mian Haroon",
      role: "AI Engineer & Data Scientist",
      image: "/haroon.jpg",
      bio: "AI engineer specializing in machine learning and natural language processing. Passionate about leveraging AI to solve real-world problems.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sajjad Haider",
      role: "Chief Technology Officer",
      image: "/sajjad.jpg",
      bio: "CTO with a strong background in software development and AI technologies. Experienced in leading tech teams and driving innovation.",
      social: {
        github: "https://github.com/Sajjad55555",
        linkedin: "https://www.linkedin.com/in/sajjad-haider-58021a27a/",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Team</span>
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our successful projects.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative overflow-hidden group aspect-[4/5]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-top"
                    priority={index < 2}
                    quality={90}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-cyan-600/90 to-purple-600/90 flex items-center justify-center"
                >
                  <div className="flex gap-4">
                    <Link
                      href={member.social.github}
                      className="bg-white p-2 rounded-full text-cyan-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="bg-white p-2 rounded-full text-cyan-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                    >
                      <Linkedin size={20} />
                    </Link>
                    {/* <Link
                      href={member.social.twitter}
                      className="bg-white p-2 rounded-full text-cyan-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                    >
                      <Twitter size={20} />
                    </Link> */}
                  </div>
                </motion.div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
