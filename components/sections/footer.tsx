"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">
             Muhammad<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Afzal</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & AI Engineer creating innovative digital solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Afzaldeveloper" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#1877F2] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammadafzaldev/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#0A66C2] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/afzal__faizi/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#E4405F] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.015 7.052.072 5.773.129 4.548.392 3.5 1.44 2.452 2.488 2.189 3.713 2.132 4.992.015 8.332 0 8.735 0 12c0 3.265.015 3.668.072 4.948.057 1.279.32 2.504 1.368 3.552 1.048 1.048 2.273 1.311 3.552 1.368C8.332 23.985 8.735 24 12 24c3.265 0 3.668-.015 4.948-.072 1.279-.057 2.504-.32 3.552-1.368 1.048-1.048 1.311-2.273 1.368-3.552.057-1.28.072-1.683.072-4.948 0-3.265-.015-3.668-.072-4.948-.057-1.279-.32-2.504-1.368-3.552-1.048-1.048-2.273-1.311-3.552-1.368C15.668.015 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="https://github.com/MuhammadAfzalDev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#181717] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.305-.54-1.527.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.65.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: afzaldeveloper7@gmail.com</li>
              <li className="text-gray-400">Location: Faisalabad, Pakistan</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Muhammad Afzal. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
