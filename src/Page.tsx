import { ChevronDown, Send, Code, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Computers from './components/dekstop';
import Komentar from './layout/komentar';
import { Footer } from './layout/footer';

export default function Portfolio() {
  const projects = [
    { name: "Web Design", description: "Innovative UI/UX solutions", tech: ["HTML", "JavaScript", "Tailwind", "Framer Motion"], githublink: "https://github.com/your-repo-link" },
    { name: "REST API", description: "Machine learning web application", tech: ["JavaScript", "Express.js", "MongoDB", "Node"], githublink: "https://github.com/fathuur7/API_JS-USER" },
    { name: "E-Commerce", description: "Full-stack shopping experience", tech: ["PHP", "MYSQL"], githublink: "https://github.com/fathuur7/paw" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src="../public/cat.jpeg" alt="#" className="h-8 rounded-xl shadow-md" />
            <div className="ml-4">
              <h1 className="text-xl font-bold">Portfolio</h1>
            </div>
          </motion.div>
          <ul className="hidden md:flex gap-8">
            {["Home", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
                variants={fadeInUp}
              >
                Creative Developer <br />& Designer
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0"
                variants={fadeInUp}
              >
                Transforming ideas into elegant digital experiences with cutting-edge technology and innovative design.
              </motion.p>
              <motion.div 
                className="flex gap-4 justify-center md:justify-start"
                variants={fadeInUp}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowUpRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  Contact Me <Send className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="h-[600px]" // Increased height for larger computer model
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Computers />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div 
                    className="flex gap-2 mt-4"
                    whileHover={{ x: 5 }}
                  >
                    <a href={project.githublink} className="text-indigo-600 hover:underline">Github</a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Komentar />
      <Footer />
      <motion.a
        href="#"
        className="fixed bottom-8 right-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.a>
    </main>
  );
}