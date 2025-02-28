"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, MessageCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary font-medium mb-6 block">BEM-VINDO A ECO CASA</span>

            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Nossa Identidade:
              <br />
              Sustentabilidade e
              <br />
              Inovação
            </h2>

            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-lg text-foreground/80">
                Na essência da Eco Casa, você encontrará a sinergia perfeita entre beleza, durabilidade e respeito ao
                meio ambiente, transformando espaços de maneira única e responsável.
              </p>
            </div>

            <p className="text-foreground/70 mb-8">
              A identidade da Eco Casa é moldada por uma visão audaciosa de transformar o cenário da construção com
              responsabilidade e inovação. Fundada em 2010, somos líderes em design e fabricação de produtos compostos
              de madeira ecológica. Com uma abordagem centrada na sustentabilidade, nos associamos ao Green Building
              Council e buscamos certificações como LEED e ESG, reforçando nosso compromisso em construir um futuro mais
              verde.
            </p>

            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
              SABER MAIS
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BLOB_URL}/9I0hu.png`}
                alt="Eco Casa Auditorium"
                fill
                className="object-cover"
              /> */}
              <div className="absolute bottom-0 right-0 bg-primary p-8 flex items-center gap-4">
                <div className="text-white">
                  <Building2 className="h-12 w-12 mb-2" />
                </div>
                <div className="text-white">
                  <span className="text-5xl font-bold">13</span>
                  <p className="text-sm font-medium">
                    ANOS DE
                    <br />
                    EXPERIÊNCIA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  )
}

