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
      bio: "Full stack developer with expertise in Next.Js, python and AI integration.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Syed Ali Zar Bukhari",
      role: "UI/UX Designer",
      image: "/ali.jpg",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Syed Hammad Ali Shah",
      role: "AI Engineer",
      image: "/hammad.jpg",
      bio: "Machine learning specialist with experience in NLP and computer vision.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mian Haroon",
      role: "Backend Developer",
      image: "/haroon.jpg",
      bio: "Database expert specializing in scalable architecture and performance optimization.",
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
      bio: "Cloud infrastructure and automation specialist with expertise in CI/CD pipelines.",
      social: {
        github: "#",
        linkedin: "#",
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
                    <Link
                      href={member.social.twitter}
                      className="bg-white p-2 rounded-full text-cyan-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                    >
                      <Twitter size={20} />
                    </Link>
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
