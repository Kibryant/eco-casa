"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "Arquitetura Moderna",
    role: "Arquiteto",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "A Eco Casa superou todas as expectativas. A qualidade dos revestimentos e o compromisso com a sustentabilidade são verdadeiramente impressionantes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Santos Design",
    role: "Designer de Interiores",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Trabalhar com a Eco Casa tem sido uma experiência excepcional. Os produtos são de alta qualidade e o suporte é incomparável.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pedro Costa",
    company: "Costa Construções",
    role: "Engenheiro Civil",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "A sustentabilidade e inovação dos produtos Eco Casa agregaram um valor imenso aos nossos projetos. Recomendo fortemente.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">DEPOIMENTOS</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">O que nossos clientes dizem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra por que arquitetos, designers e construtores escolhem a Eco Casa para seus projetos sustentáveis
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="min-w-[400px] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-primary font-medium">{testimonial.company}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`${i + 1}`} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-foreground/80 max-w-64 sm:max-w-full">"{testimonial.content}"</blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="bg-background border-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="bg-background border-primary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

