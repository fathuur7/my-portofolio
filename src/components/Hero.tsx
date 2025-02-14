"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ComputersCanvas from "./dekstop"
import CallToAction from "./CallToAction"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6 relative w-40 h-40 mx-auto md:mx-0" variants={fadeInUp}>
              <img
                src="/cat.jpeg"
                alt="John Doe"
                className="w-full h-full object-cover object-center rounded-full shadow-lg"
              />
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900" variants={fadeInUp}>
              John Doe
            </motion.h1>
            <motion.p className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4" variants={fadeInUp}>
              Full-Stack Developer | UI/UX Enthusiast
            </motion.p>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" variants={fadeInUp}>
              Creative <span className="text-indigo-600">Web Developer</span> <br />& Designer
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0" variants={fadeInUp}>
              Passionate about crafting seamless digital experiences. Specializing in modern web technologies and
              user-centric design to bring innovative ideas to life.
            </motion.p>
            <CallToAction />
          </motion.div>
          <motion.div
            className="h-[400px] sm:h-[500px] md:h-[600px]"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ComputersCanvas />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero

