// import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
  { name: "React", level: 85, color: "from-cyan-400 to-cyan-500" },
  { name: "Node.js", level: 80, color: "from-green-400 to-green-500" },
  { name: "TypeScript", level: 75, color: "from-blue-400 to-blue-500" },
  { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-500" },
  { name: "SQL", level: 70, color: "from-purple-400 to-purple-500" },
];

const SkillCard = ({ skill, index } : { skill: { name: string, level: number, color: string }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text"
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative">
        {/* Background Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          {/* Animated Gradient Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
          >
            {/* Shimmer Effect */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-1/2 h-full bg-white/20 skew-x-12 animate-shimmer" />
            </div>
          </motion.div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
              className="w-1 h-1 bg-gray-300 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
            Skills
          </h2>
          <p className="text-gray-600 text-lg">Expertises & Technical Proficiencies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}