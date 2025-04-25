import HeroGeometric from "@/components/kokonutui/hero-geometric"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Team from "@/components/sections/team"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroGeometric 
        name="Muhammad Afzal"
        role="Full Stack Developer"
        description="Crafting exceptional digital experiences through innovative design and cutting-edge technology."
      />
      <About />
      <Skills />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
