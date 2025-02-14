import { motion } from "framer-motion";

// src/components/Projects/TechStack.jsx
const TechStack = ({ tech } : { tech: string[] }) => (
    <div className="flex flex-wrap gap-2">
      {tech.map((tech, idx)  => (
        <motion.span
          key={idx}
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );

export default TechStack;