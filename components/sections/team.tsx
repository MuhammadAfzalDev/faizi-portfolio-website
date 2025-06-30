"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion"
import { Github, Linkedin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Particle Background Component
const ParticleBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const particlesRef = useRef<any[]>([])
  const animationRef = useRef<number>(0)

  // More vibrant colors
  const particleColors = [
    "rgba(255, 70, 199, 0.7)", // Hot pink
    "rgba(0, 255, 170, 0.7)", // Bright teal
    "rgba(111, 0, 255, 0.7)", // Vibrant purple
    "rgba(255, 216, 0, 0.7)", // Bright yellow
  ]

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return

    const { width, height } = canvasRef.current
    const particles: any[] = []

    // Create particles based on screen size (more for larger screens)
    const particleCount = Math.min(Math.floor((width * height) / 9000), 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        connection: Math.random() * 100 + 50, // Connection distance
      })
    }

    particlesRef.current = particles
  }

  // Handle window resize
  const handleResize = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const { width, height } = canvas.getBoundingClientRect()

      // Set canvas dimensions to match display size
      canvas.width = width
      canvas.height = height

      setDimensions({ width, height })

      // Reinitialize particles when resizing
      initParticles()
    }
  }

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setIsMouseInCanvas(true)
  }

  const handleMouseLeave = () => {
    setIsMouseInCanvas(false)
  }

  // Draw particles and connections
  const drawParticles = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x > canvas.width || particle.x < 0) {
        particle.speedX = -particle.speedX
      }

      if (particle.y > canvas.height || particle.y < 0) {
        particle.speedY = -particle.speedY
      }

      // Mouse interaction - particles move away from mouse
      if (isMouseInCanvas) {
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.speedX -= (dx / distance) * force * 0.2
          particle.speedY -= (dy / distance) * force * 0.2

          // Limit speed
          const maxSpeed = 2
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
          }
        }
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
      ctx.globalAlpha = 1

      // Draw connections between particles
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < particle.connection) {
          // Opacity based on distance
          const opacity = 1 - distance / particle.connection

          // Draw line
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = particle.color
          ctx.globalAlpha = opacity * 0.2
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }
    })

    // Continue animation
    animationRef.current = requestAnimationFrame(drawParticles)
  }

  // Setup effect
  useEffect(() => {
    if (!canvasRef.current) return

    // Initial setup
    handleResize()

    // Add event listeners
    window.addEventListener("resize", handleResize)
    canvasRef.current.addEventListener("mousemove", handleMouseMove)
    canvasRef.current.addEventListener("mouseenter", handleMouseEnter)
    canvasRef.current.addEventListener("mouseleave", handleMouseLeave)

    // Start animation
    animationRef.current = requestAnimationFrame(drawParticles)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove)
        canvasRef.current.removeEventListener("mouseenter", handleMouseEnter)
        canvasRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
      cancelAnimationFrame(animationRef.current)
    }
  }, [isMouseInCanvas, mousePosition])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "auto" }}
    />
  )
}

// Main Team Component
export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  // Team data
  const team = [
    {
      name: "Muhammad Afzal",
      role: "Founder & Lead Developer",
      image: "/faizi.jpg?height=400&width=300",
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
      image: "/ali.jpg?height=400&width=300",
      bio: "Business strategist with a focus on AI-driven solutions and market analysis. Skilled in identifying opportunities and driving growth.",
      social: {
        github: "https://github.com/Alizarbukhari",
        linkedin: "https://www.linkedin.com/in/ali-zar-929b66116/",
        twitter: "#",
      },
    },
    {
      name: "Syed Hammad Ali Shah",
      role: "Full Stack Software Developer & AI Engineer",
      image: "/hammad.jpg?height=400&width=300",
      bio: "Full stack developer with a passion for creating seamless user experiences and robust backend systems. Skilled in Next.js,React,Node.js,Electron, Python, and AI technologies{LangGraph OpenAISDK}.",
      social: {
        github: "https://github.com/Hamadalishah",
        linkedin: "https://www.linkedin.com/in/syed-muhammad-hamad-ali-aa33692b3/",
        twitter: "#",
      },
    },
    {
      name: "Mian Haroon",
      role: "AI Engineer & Data Scientist",
      image: "/haroon.jpg?height=400&width=300",
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
      image: "/sajjad.jpg?height=400&width=300",
      bio: "CTO with a strong background in software development and AI technologies. Experienced in leading tech teams and driving innovation.",
      social: {
        github: "https://github.com/Sajjad55555",
        linkedin: "https://www.linkedin.com/in/sajjad-haider-58021a27a/",
        twitter: "#",
      },
    },
  ]

  // Navigation functions
  const nextMember = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1))
  }

  const prevMember = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1))
  }

  // Variants for card animations
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  }

  // Scroll animation hooks
  const { scrollYProgress } = useScroll()
  const scaleHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const opacityHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
  const yHeader = useTransform(scrollYProgress, [0, 0.1], [0, -20])

  return (
    <section className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Interactive particle background */}
      <ParticleBackground className="z-0" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with scroll animation */}
        <motion.div
          style={{
            scale: scaleHeader,
            opacity: opacityHeader,
            y: yHeader,
          }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-white"
          >
            Meet My Team
          </motion.h2>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-white mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl font-medium"
          >
            The brilliant minds behind our innovative solutions and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Team Member Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 md:-translate-x-24 z-20">
            <button
              onClick={prevMember}
              className="bg-gradient-to-r from-[#FF46C7] to-[#6F00FF] p-3 sm:p-4 md:p-5 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,70,199,0.7)]"
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 md:translate-x-24 z-20">
            <button
              onClick={nextMember}
              className="bg-gradient-to-r from-[#6F00FF] to-[#00FFAA] p-3 sm:p-4 md:p-5 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.7)]"
              aria-label="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Card Carousel */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-[#1A2035]/90 to-[#131B2E]/90 backdrop-blur-sm rounded-2xl overflow-hidden h-full border border-[#2A3352] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full sm:w-2/5 h-64 sm:h-full overflow-hidden">
                    <Image
                      src={team[currentIndex].image || "/placeholder.svg"}
                      alt={team[currentIndex].name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      quality={90}
                    />
                    {/* Glowing accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#6F00FF]/20 blur-3xl"></div>
                  </div>
                  {/* Content Section */}
                  <div className="relative w-full sm:w-3/5 p-4 sm:p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                          {team[currentIndex].name}
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {team[currentIndex].role}
                        </p>
                      </div>

                      <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-[#FF46C7] to-[#00FFAA] mb-6 sm:mb-8 rounded-full"></div>

                      <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium">
                        {team[currentIndex].bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Link
                        href={team[currentIndex].social.github}
                        className="bg-[#1A2035] hover:bg-[#FF46C7]/90 p-2 sm:p-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,70,199,0.7)]"
                      >
                        <Github size={20} />
                      </Link>
                      <Link
                        href={team[currentIndex].social.linkedin}
                        className="bg-[#1A2035] hover:bg-[#6F00FF]/90 p-2 sm:p-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(111,0,255,0.7)]"
                      >
                        <Linkedin size={20} />
                      </Link>
                      <Link
                        href="#"
                        className="bg-[#1A2035] p-2 sm:p-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,170,0.7)]"
                      >
                        <ExternalLink size={20} />
                      </Link>

                      {/* Pagination Indicator */}
                      <div className="ml-auto flex items-center gap-1 sm:gap-2">
                        {team.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setDirection(index > currentIndex ? 1 : -1)
                              setCurrentIndex(index)
                            }}
                            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                              ? "bg-white w-3 sm:w-4 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                              : "bg-[#2A3352] hover:bg-[#3A4362] w-2 sm:w-3"
                              }`}
                            aria-label={`Go to team member ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to work with our <span className="text-transparent bg-clip-text text-white font-extrabold">talented team</span>?
          </h3>
          <p className="text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto text-lg sm:text-xl">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF46C7] via-[#6F00FF] to-[#00FFAA] text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(111,0,255,0.5)] transition-all duration-300"
          >
            <Link href="#contact">Get in Touch</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
