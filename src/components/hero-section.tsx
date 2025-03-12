"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag } from "lucide-react"

// Featured products for the hero carousel
const heroProducts = [
  {
    id: 1,
    title: "Portas Ecológicas",
    subtitle: "Elegância Sustentável",
    description: "Portas premium feitas com madeira certificada e processos sustentáveis",
    image: "/placeholder.svg?height=1080&width=1920",
    cta: "Ver Coleção",
    link: "/category/portas",
  },
  {
    id: 2,
    title: "Revestimentos Naturais",
    subtitle: "Beleza que Preserva",
    description: "Transforme seu ambiente com revestimentos que respeitam a natureza",
    image: "/placeholder.svg?height=1080&width=1920",
    cta: "Explorar",
    link: "/category/revestimentos",
  },
  {
    id: 3,
    title: "Pisos Sustentáveis",
    subtitle: "Conforto Ecológico",
    description: "Pisos duráveis e ecológicos para todos os ambientes da sua casa",
    image: "/placeholder.svg?height=1080&width=1920",
    cta: "Descobrir",
    link: "/category/pisos",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] pt-24 overflow-hidden">
      {heroProducts.map((product, index) => (
        <motion.div
          key={product.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8 },
          }}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          {heroProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                y: currentSlide === index ? 0 : 20,
              }}
              transition={{ duration: 0.8 }}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              <motion.span
                className="inline-block text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {product.subtitle}
              </motion.span>

              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {product.title}
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="rounded-full py-6 text-lg gap-2 bg-primary hover:bg-primary/90"
                  asChild
                >
                    <ShoppingBag className="h-5 w-5" />
                  <a href={product.link}>
                    {product.cta}
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg gap-2 border-white/30 text-primary hover:bg-white/20"
                  asChild
                >
                    <ArrowRight className="h-5 w-5" />

                  <a href="/products">
                    Ver Todos Produtos
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroProducts.map((_, index) => (
            <button
              key={`indicator-${index + 1}`}
              type="button"
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary w-10" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Product Cards */}
      <div className="absolute bottom-12 right-8 md:right-12 z-20 hidden md:block">
        <div className="flex flex-col gap-4">
          {[0, 1].map((offset) => {
            const index = (currentSlide + offset) % heroProducts.length
            return (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + offset * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden w-64 shadow-lg border border-white/20"
              >
                <div className="relative h-32">
                  <Image
                    src={heroProducts[index].image || "/placeholder.svg"}
                    alt={heroProducts[index].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium">{heroProducts[index].title}</h3>
                  <p className="text-white/70 text-sm">{heroProducts[index].subtitle}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

