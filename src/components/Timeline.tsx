import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: "2023",
    title: "Senior Web Developer",
    description: "Led a team in developing a large-scale e-commerce platform.",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    description: "Worked on various client projects using React and Node.js.",
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    description: "Started my career working on front-end development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    description: "Graduated with honors in Computer Science.",
  },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900"
        >
          My Journey
        </motion.h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-indigo-600 shadow-xl w-24 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
              </div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{event.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

