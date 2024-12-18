'use client'

import { ChevronDown, Send, Code, ArrowUpRight } from 'lucide-react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SimpleModel , BallBounce } from './components/SimpleModel'
// import { HumanModel } from './components/HumanModel' // Import the new HumanModel

export default function Portfolio() {
  const projects = [
    { name: "Web Design", description: "Innovative UI/UX solutions", tech: ["React", "Tailwind", "Framer Motion"] , githublink: "https://github.com/your-repo-link"},
    { name: "REST API", description: "Machine learning web application", tech: ["JAVASCRIPT", "Express.js","MongoDB", "Node"],  githublink: "https://github.com/fathuur7/API_JS-USER"},
    { name: "E-Commerce", description: "Full-stack shopping experience", tech: ["PHP", "MYSQL"] , githublink: "https://github.com/fathuur7/paw" },
  
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* ... (previous navbar code remains the same) ... */}
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Creative Developer <br />& Designer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Transforming ideas into elegant digital experiences with cutting-edge technology and innovative design.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowUpRight className="w-5 h-5" />
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  Contact Me <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="h-[500px]">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <BallBounce />
                  <SimpleModel />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

    
    {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-10 h-10 text-indigo-600 mr-4" />
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <a href={project.githublink} className="text-indigo-600 hover:underline">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Interested in collaborating or have a project in mind? I'm always open to exciting opportunities.
          </p>
          <a 
            href="mailto:kopisusu8ip@gmail.com" 
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-flex items-center gap-3"
          >
            <Send className="w-6 h-6" /> Send me an Email
          </a>
        </div>
      </section>

      {/* Scroll Indicator */}
      <a href="#home" className="fixed bottom-8 right-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </a>
    </main>
  )
}
