// src/pages/Portfolio.jsx
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
// import Komentar from './components/komentar';
import ScrollToTop from './components/ScrollToTop';
import Footer  from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Bottom from './components/layout/bottom';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { useTransform } from 'framer-motion';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

interface Project {
  name: string
  description: string
  tech: string[]
  githublink: string
  livelink?: string
  image?: string
}

const projects: Project[] = [
  {
    name: "Web Design",
    description:
      "Innovative UI/UX solutions for modern web applications, focusing on user-centric design principles and responsive layouts.",
    tech: ["HTML", "JavaScript", "Tailwind CSS", "Framer Motion"],
    githublink: "https://github.com/your-repo-link",
    livelink: "https://your-live-demo-link.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "REST API",
    description:
      "Robust backend API for a machine learning web application, featuring secure authentication and efficient data processing.",
    tech: ["JavaScript", "Express.js", "MongoDB", "Node.js"],
    githublink: "https://github.com/fathuur7/API_JS-USER",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "E-Commerce",
    description:
      "Full-stack shopping experience with secure payment integration, inventory management, and responsive design for mobile and desktop.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    githublink: "https://github.com/fathuur7/paw",
    livelink: "https://your-ecommerce-demo.com",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, #4F46E5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: backgroundY,
        }}
      />

      <main className="flex-grow relative z-10">
        <Hero />

        <AboutMe />

        <Skills />

        <section id="projects" className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-16 text-gray-900"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Timeline />
      </main>

      <Footer />
      <ScrollToTop />
      <Bottom />
    </motion.div>
  )
}

