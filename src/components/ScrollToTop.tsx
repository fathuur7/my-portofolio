import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => (
    <motion.a
      href="/contact"
      className="fixed bottom-8 right-8"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="w-8 h-8 text-gray-400" />
    </motion.a>
  );

  export default ScrollToTop;