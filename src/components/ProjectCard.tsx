"use client"

import { useState } from "react"
import { Code, Github, Folder, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

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

const TechBadge = ({ tech }: { tech: string }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 
    text-indigo-600 border border-indigo-100 shadow-sm"
  >
    {tech}
  </motion.span>
);

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500"
    >
      {/* Hover Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img
              src={project.image || "./cat.jpeg"}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </motion.div>

          {/* Project Type Badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md"
            >
              <Folder size={14} className="text-indigo-600" />
              <span className="text-sm font-medium text-gray-800">Project</span>
            </motion.div>
          </div>

          {/* Links Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/90 text-gray-800 hover:bg-white transition-colors duration-200 shadow-lg"
            >
              <Github size={20} />
            </motion.a>
            {project.livelink && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/90 text-gray-800 hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <ArrowUpRight size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Title */}
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 line-clamp-3">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TechBadge tech={tech} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard