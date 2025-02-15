// import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/3 relative"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="./cat.jpeg"
                  alt="Nur Fathur Rachman"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-2/3"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  Hello! I'm <span className="font-bold text-indigo-600">Nur Fathur Rachman</span>, a passionate web developer 
                  with a keen eye for design and a love for creating seamless user experiences. As a Senior Web Developer, 
                  I specialize in building responsive and scalable web applications using modern technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100"
              >
            <p className="text-xl text-gray-700 leading-relaxed">
              My journey in technology started with a deep interest in programming, which led me to pursue a Computer Science degree. Over the years, I have evolved from learning fundamental programming concepts to developing full-stack applications. Now, as a Full Stack Developer,
               I specialize in building scalable web applications with React and Node.js, 
               focusing on intuitive user experiences and performance optimization.
            </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {[
                  { label: "Years Experience", value: "3+" },
                  { label: "Projects Completed", value: "10+" },
                  { label: "Technologies", value: "15+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/80 rounded-xl shadow-md border border-indigo-100">
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}