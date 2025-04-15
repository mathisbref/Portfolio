import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  CodeBracketIcon,
  ServerIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = {
    frontend: {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    backend: {
      icon: <ServerIcon className="w-6 h-6" />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    design: {
      icon: <PaintBrushIcon className="w-6 h-6" />,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 75 },
        { name: 'UI/UX', level: 85 },
        { name: 'Prototypage', level: 80 },
      ],
    },
    devops: {
      icon: <CloudIcon className="w-6 h-6" />,
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 85 },
      ],
    },
  }

  return (
    <section id="competences" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et de mon expertise dans différents domaines du développement web.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categories[category].icon}
              <span>{categories[category].title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {categories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 