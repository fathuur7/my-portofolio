import { motion } from 'framer-motion';
import ComputersCanvas from './dekstop';
import CallToAction from './CallToAction';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
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
            <CallToAction />
          </motion.div>
          <motion.div 
            className="h-[600px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ComputersCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;