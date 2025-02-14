import { motion } from "framer-motion"
export default function AboutMe() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <img
              src="./cat.jpeg"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <p className="text-xl text-gray-700 mb-6">
              Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With [X] years of experience in full-stack development, I specialize in
              building responsive and scalable web applications using modern technologies.
            </p>
            <p className="text-xl text-gray-700">
              My journey in web development started [brief background]. Since then, I've worked on a variety of
              projects, from small business websites to complex enterprise applications. I'm always excited to take on
              new challenges and learn emerging technologies to stay at the forefront of web development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

