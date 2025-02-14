// src/pages/Portfolio.jsx
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Komentar from './components/komentar';
import ScrollToTop from './components/ScrollToTop';
import Footer  from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Bottom from './components/layout/bottom';

interface Project {
  name: string;
  description: string;
  tech: string[];
  githublink: string;
  index?: number; // Buat opsional agar tidak error
}

export default function Portfolio() {
  const projects: Project[] = [
    { name: "Web Design", description: "Innovative UI/UX solutions", tech: ["HTML", "JavaScript", "Tailwind", "Framer Motion"], githublink: "https://github.com/your-repo-link" },
    { name: "REST API", description: "Machine learning web application", tech: ["JavaScript", "Express.js", "MongoDB", "Node"], githublink: "https://github.com/fathuur7/API_JS-USER" },
    { name: "E-Commerce", description: "Full-stack shopping experience", tech: ["PHP", "MYSQL"], githublink: "https://github.com/fathuur7/paw" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      
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
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Komentar />
      <Footer />
      <ScrollToTop />
      <Bottom />
    </main>
  );
}
