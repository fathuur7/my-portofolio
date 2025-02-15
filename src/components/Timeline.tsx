import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "2024",
    title: "Full Stack Developer",
    description: "Worked on a web application for client projects using React and Node.js.",
  },
  {
    year: "2023",
    title: "Junior Web Developer",
    description: "Started my career as a junior web developer on front-end development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    description: "learned the fundamentals of computer science and software engineering.",
  },
  {
    year: "2022",
    title: "Start of learning programming",
    description: "Started learning programming languages such as Python, JavaScript ",
  }
];

const DecorativeDot = ({ className = "" }) => (
  <motion.div
    className={`absolute left-1/2 transform -translate-x-1/2 ${className}`}
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <div className="w-3 h-3 rounded-full bg-indigo-400" />
  </motion.div>
);

export default function Timeline() {
  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Decorative Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            {/* Gradient Line */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-500 to-indigo-600">
              {/* Animated Shimmer Effect */}
              <div className="absolute top-0 bottom-0 w-full animate-pulse bg-white opacity-30"></div>
            </div>
            
            {/* Decorative Elements */}
            {[...Array(8)].map((_, index) => (
              <DecorativeDot key={index} className={`top-${index * 12}`} />
            ))}
          </div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="mb-24 flex justify-between items-center w-full relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'order-2 pl-8'}`}>
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-4 font-bold text-gray-800 text-2xl">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </motion.div>
              </div>

              <motion.div
                className="z-20 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-75 blur-sm" />
                  {/* Inner Circle */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white">{event.year}</span>
                  </div>
                </div>
              </motion.div>

              <div className={`w-5/12 ${index % 2 === 0 ? 'order-2 pl-8' : 'pr-8'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}