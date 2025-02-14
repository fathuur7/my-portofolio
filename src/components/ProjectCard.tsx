import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';

interface Project {
    name: string;
    description: string;
    tech: string[];
    githublink: string;
  }
  
  interface ProjectCardProps {
    project: Project;
    index: number; 
  }

const ProjectCard = ({ project , index } : ProjectCardProps)  => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Code className="w-10 h-10 text-indigo-600 mr-4" />
        <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <TechStack tech={project.tech} />
      <motion.div 
        className="flex gap-2 mt-4"
        whileHover={{ x: 5 }}
      >
        <a href={project.githublink} className="text-indigo-600 hover:underline">Github</a>
      </motion.div>
    </div>
  </motion.div>
);

export default ProjectCard;