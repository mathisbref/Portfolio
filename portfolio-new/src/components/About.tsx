import { motion } from 'framer-motion'
import { CodeBracketIcon, ServerIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const About = () => {
  const stats = [
    { label: 'Années d\'expérience', value: '3+' },
    { label: 'Projets réalisés', value: '20+' },
    { label: 'Clients satisfaits', value: '15+' },
  ]

  const skills = [
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: 'Développement Frontend',
      description: 'Création d\'interfaces utilisateur modernes et réactives avec React, Vue.js et les dernières technologies web.',
    },
    {
      icon: <ServerIcon className="w-6 h-6" />,
      title: 'Développement Backend',
      description: 'Développement d\'API robustes et sécurisées avec Node.js, Python et gestion de bases de données.',
    },
    {
      icon: <PaintBrushIcon className="w-6 h-6" />,
      title: 'Design UI/UX',
      description: 'Conception d\'expériences utilisateur intuitives et esthétiques avec Figma et Adobe XD.',
    },
  ]

  return (
    <section id="apropos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionné par le développement web et l'innovation technologique, je m'efforce de créer des expériences numériques exceptionnelles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary relative">
              <img
                src="profil.jpg"
                alt="Mathis Brefuel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Qui suis-je ?</h3>
            <p className="text-gray-400 mb-6">
              Je suis un développeur full-stack passionné avec une expertise en création d'applications web modernes.
              Mon approche combine créativité et rigueur technique pour livrer des solutions innovantes et performantes.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 