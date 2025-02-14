import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ["Home", "Projects", "Contact"];
  
  return (
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
          {navItems.map((item, index) => (
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
  );
};


export default Navbar;