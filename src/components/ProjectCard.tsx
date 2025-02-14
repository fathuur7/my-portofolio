"use client"

import { useState } from "react"
import { Code, Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import TechStack from "./TechStack"

interface Project {
  name: string
  description: string
  tech: string[]
  githublink: string
  livelink?: string
  image?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={"./cat.jpeg"}
          alt={project.name}
          width={400}
          height={300}
          className="transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h3 className="text-white text-2xl font-bold">{project.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Code className="w-6 h-6 text-indigo-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <TechStack tech={project.tech} />
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-1" />
            GitHub
          </a>
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

