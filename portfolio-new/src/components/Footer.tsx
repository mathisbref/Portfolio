import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-6 h-6" />,
      url: 'https://github.com/votre-profil',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-6 h-6" />,
      url: 'https://linkedin.com/in/votre-profil',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon className="w-6 h-6" />,
      url: 'https://twitter.com/votre-profil',
    },
  ]

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400">
              © {currentYear} Votre Nom. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Développé avec ❤️ en utilisant React, TypeScript et Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 