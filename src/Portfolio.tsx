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
    name: "Music Bot",
    description:
      "A versatile Telegram bot that allows users to search for and download music, offering seamless performance and user-friendly interactions.",
    tech: ["JavaScript", "Node.js", "Telegram API", "FFmpeg"],
    githublink: "https://github.com/fathuur7/tele",
    image: "./teleBot.png"
  },
  {
    name: "REST API",
    description:
      "Robust backend API for a machine learning web application, featuring secure authentication and efficient data processing.",
    tech: ["JavaScript", "Express.js", "MongoDB", "Node.js"],
    githublink: "https://github.com/fathuur7/API_JS-USER",
    image: "./Restapi.png",
  },
  {
    name: "Weather App Surabaya",
    description:
      "A weather application built with React, Tailwind CSS, and Framer Motion, featuring real-time weather data and location-based features.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    githublink: "https://github.com/fathuur7/weather",
    livelink: "https://weatherfinal-one.vercel.app/",
    image: "./Weather.png",
  },

  {
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing skills, projects, and contact information, built with React and Framer Motion for a smooth user experience.",
    tech: ["React", "Framer Motion", "JavaScript", "CSS"],
    githublink: "https://github.com/fathuur7/my-portofolio",
    livelink: "https://my-portofolio-iota-five.vercel.app/",
    image: "./Portofolio.png",
  },

  {
    name :"Rent Aps-boy/girl-friend (Upcoming)",
    description:"This application is used to find friends to hang out, eat, watch movies, etc. This application was built using React Native, Node.js, Express.js, and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB" , "TypeScript", "Tailwind CSS"
      ,"Monggose" , "JavaScript" , "Next"
    ],
    githublink: "https://github.com/fathuur7/rent-a-friend",
    livelink: "https://rent-a-friend.vercel.app/",
    image: "./Rent.png",
  }
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

