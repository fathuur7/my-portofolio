import { motion } from 'framer-motion';
import { Send, ArrowUpRight } from 'lucide-react';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const CallToAction = () => (
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
  );

export default CallToAction;