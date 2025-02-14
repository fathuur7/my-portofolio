import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Bottom() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
      className="relative w-full py-6 overflow-hidden"
    >
      {/* Gradient background to match the footer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 opacity-90" />

      {/* Subtle animated background element */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Made with love section */}
          <motion.div 
            className="flex items-center gap-2 text-white/90 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400" />
            </motion.div>
            <Code className="w-4 h-4" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-400" />
            <div className="text-white/80 text-sm">
                © {currentYear} Nur Fathur Rachman. All rights reserved.
            </div>
          </motion.div>

          {/* Copyright text */}
        </div>
      </div>
    </motion.div>
  );
}