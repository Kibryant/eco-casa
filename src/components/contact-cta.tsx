"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactCTA() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:500px_500px] animate-[gradient_5s_linear_infinite]"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para Transformar seu Espaço?</h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma consulta com nossos especialistas e descubra como podemos ajudar a transformar sua visão em realidade com nossas soluções sustentáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/20"
            >
              Ver Catálogo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-white/80">Projetos Concluídos</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-white/80">Satisfação dos Clientes</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white/80">Prêmios de Design</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
