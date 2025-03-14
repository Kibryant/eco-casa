"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Decks Ecológicos",
    description: "Soluções sustentáveis para áreas externas",
    image: "/background-header-decks.webp?height=600&width=800",
    link: "/produtos/decks",
    color: "from-green-800/80 to-green-900/80",
  },
  {
    id: 2,
    title: "Portas Sustentáveis",
    description: "Elegância e responsabilidade ambiental",
    image: "/background-header-portas.jpg?height=600&width=800",
    link: "/produtos/portas",
    color: "from-emerald-800/80 to-emerald-900/80",
  },
  {
    id: 3,
    title: "Revestimentos Naturais",
    description: "Texturas que transformam ambientes",
    image: "/placeholder.svg?height=600&width=800",
    link: "/produtos/revestimentos",
    color: "from-teal-800/80 to-teal-900/80",
  },
]

export function CategoryNav() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">NOSSAS SOLUÇÕES</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Categorias em Destaque</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos sustentáveis para transformar seus espaços com beleza,
            durabilidade e responsabilidade ambiental.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white/80 mb-6">{category.description}</p>

                <Link href={category.link} className="inline-flex items-center text-white font-medium group/link">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:origin-bottom-right after:scale-x-0 group-hover/link:after:scale-x-100 group-hover/link:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-in-out">
                    Explorar Categoria
                  </span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

