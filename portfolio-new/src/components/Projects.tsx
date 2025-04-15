import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous')

  const projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Une plateforme de vente en ligne moderne avec paiement sécurisé et gestion des stocks.',
      image: 'https://placehold.co/600x400/1f2937/3b82f6?text=E-commerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: 'https://demo-ecommerce.com',
      code: 'https://github.com/votre-profil/ecommerce',
      category: 'web',
    },
    {
      id: 2,
      title: 'Application Mobile de Fitness',
      description: 'Une application mobile pour suivre ses séances d\'entraînement et sa progression.',
      image: 'https://placehold.co/600x400/1f2937/3b82f6?text=Fitness',
      tags: ['React Native', 'Firebase', 'Redux'],
      demo: 'https://demo-fitness.com',
      code: 'https://github.com/votre-profil/fitness',
      category: 'mobile',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Un tableau de bord interactif pour visualiser et analyser des données en temps réel.',
      image: 'https://placehold.co/600x400/1f2937/3b82f6?text=Dashboard',
      tags: ['Vue.js', 'D3.js', 'Express'],
      demo: 'https://demo-dashboard.com',
      code: 'https://github.com/votre-profil/dashboard',
      category: 'web',
    },
    {
      id: 4,
      title: 'Jeu Mobile',
      description: 'Un jeu mobile addictif développé avec Unity.',
      image: 'https://placehold.co/600x400/1f2937/3b82f6?text=Game',
      tags: ['Unity', 'C#', 'Firebase'],
      demo: 'https://demo-game.com',
      code: 'https://github.com/votre-profil/game',
      category: 'mobile',
    },
  ]

  const filters = ['tous', 'web', 'mobile']

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projets" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus significatifs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    <span>Voir le projet</span>
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>Code source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 