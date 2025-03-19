"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function PortfolioIntro() {
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
            <span className="text-primary font-medium mb-4 block">NOSSA EXPERIÊNCIA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Compromisso com a Excelência e Sustentabilidade
            </h2>

            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-lg text-foreground/80">
                Há mais de 14 anos, a Eco Casa desenvolve projetos que combinam inovação, design e responsabilidade
                ambiental. Nossa trajetória é marcada por parcerias de sucesso com arquitetos, designers e construtores
                que compartilham nossa visão de um futuro mais sustentável.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Mais de 500 projetos realizados em todo o Brasil</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Soluções personalizadas para cada tipo de projeto</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Equipe especializada em projetos sustentáveis</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">
                  Reconhecimento e premiações no setor de construção sustentável
                </span>
              </motion.div>
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
              <Image
                src="/petra-2.webp?height=600&width=800"
                alt="Projetos Eco Casa"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

