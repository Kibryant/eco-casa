"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroCategoryProps {
  title: string
  description: string
  image: string
}

export function HeroCategory({ title, description, image }: HeroCategoryProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full px-8 py-6 text-lg gap-2">
                Ver Produtos
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg gap-2 border-white/30 text-white hover:bg-white/20"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

