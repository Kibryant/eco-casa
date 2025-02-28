"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Lightbulb, Award, Medal } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const stats = [
  {
    value: "10+",
    label: "Anos de inovação",
    icon: Lightbulb,
  },
  {
    value: "100%",
    label: "Produtos reciclados",
    icon: Award,
  },
  {
    value: "3",
    label: "Certificações de qualidade",
    icon: Medal,
  },
]

const highlights = [
  {
    title: "Inovação Ecológica:",
    description: "Transformando resíduos em soluções sofisticadas e sustentáveis.",
  },
  {
    title: "Design Excepcional:",
    description: "Cada produto Lesco é uma obra de arte.",
  },
  {
    title: "Compromisso Verde:",
    description: "Certificações LEED e ESG garantem práticas sustentáveis.",
  },
  {
    title: "Satisfação do Cliente:",
    description: "Depoimentos reais destacam nosso impacto positivo.",
  },
]

// Função para separar o valor numérico do sufixo (ex.: "10+" vira { num: 10, suffix: "+" })
function parseStatValue(value) {
  const num = parseInt(value, 10)
  const suffix = value.replace(num.toString(), "")
  return { num, suffix }
}

// Componente que anima a contagem somente quando o elemento estiver visível
function CountUp({ target, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const frameDuration = 1000 / 60 // ~60 fps
    const totalFrames = Math.round(duration * 60)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(target * progress)
      setCount(currentCount)
      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function AboutContent() {
  return (
    <section className="py-24">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              {/*
              <Image
                src={`${process.env.NEXT_PUBLIC_BLOB_URL}/iFKEf.png`}
                alt="Arquitetura moderna e sustentável"
                fill
                className="object-cover"
              />
              */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium mb-4 block">QUEM SOMOS</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Elevando padrões com
              <br />
              sustentabilidade e
              <br />
              inovação:
            </h2>

            <p className="text-foreground/70 mb-8">
              Com mais de 14 anos no mercado, nossa empresa é referência na arquitetura de ambientes transformadores e
              na construção de um mundo mais sustentável. Ao longo de nossa trajetória, buscamos constantemente soluções
              inovadoras e ecologicamente conscientes para o setor da arquitetura e construção civil. Somos
              comprometidos com a excelência em cada projeto, sendo pioneiros na criação de produtos com madeira
              ecológica. Nossa missão é proporcionar alternativas elegantes e sustentáveis, contribuindo assim para um
              futuro mais promissor e ecologicamente equilibrado.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-primary font-medium">{highlight.title}</span>{" "}
                    <span className="text-foreground/70">{highlight.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 bg-primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {stats.map((stat, index) => {
              const { num, suffix } = parseStatValue(stat.value)
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-center gap-4 text-white text-center"
                >
                  <stat.icon className="h-8 w-8" />
                  <div>
                    <div className="text-3xl font-bold mb-1">
                      <CountUp target={num} suffix={suffix} duration={1.5} />
                    </div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
