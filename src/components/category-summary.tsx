"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface CategorySummaryProps {
  title: string
  description: string
  features: string[]
  image: string
}

export function CategorySummary({ title, description, features, image }: CategorySummaryProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{title}</h2>

            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-lg text-foreground/80">{description}</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={`feature-${index + 1}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg z-0" />
            <div className="relative h-[500px] rounded-lg overflow-hidden z-10">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

