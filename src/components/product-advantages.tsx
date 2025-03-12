"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Leaf, Shield, Clock, Heart, Recycle, Wind, Zap, Palette, TreePine, Droplets, Snowflake } from "lucide-react"

interface Advantage {
  title: string
  description: string
  icon: string
}

interface ProductAdvantagesProps {
  advantages: Advantage[]
}

export function ProductAdvantages({ advantages }: ProductAdvantagesProps) {
  const iconMap: Record<string, React.ElementType> = {
    Leaf,
    Shield,
    Clock,
    Heart,
    Recycle,
    Wind,
    Zap,
    Palette,
    TreePine,
    Droplets,
    Snowflake,
  }

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
          <span className="text-primary font-medium mb-4 block">POR QUE ESCOLHER</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Vantagens dos Nossos Produtos</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] || Leaf

            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/10"
              >
                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full transform rotate-6 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full transform -rotate-6 transition-transform group-hover:-rotate-12" />
                  <div className="relative flex items-center justify-center w-full h-full bg-primary/10 rounded-full">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

