"use client"

import { motion } from "framer-motion"
import { Building2, Home, Store, School, Hotel, Building } from "lucide-react"

const categories = [
  {
    id: "residential",
    name: "Residencial",
    icon: Home,
    description:
      "Projetos para casas e apartamentos com foco em sustentabilidade e conforto. Soluções personalizadas para cada cliente.",
  },
  {
    id: "commercial",
    name: "Comercial",
    icon: Store,
    description:
      "Lojas, restaurantes e espaços comerciais com design ecológico e funcional. Ambientes que atraem e encantam clientes.",
  },
  {
    id: "corporate",
    name: "Corporativo",
    icon: Building,
    description:
      "Escritórios e ambientes empresariais que refletem os valores da sua marca e promovem bem-estar aos colaboradores.",
  },
  {
    id: "hospitality",
    name: "Hotelaria",
    icon: Hotel,
    description:
      "Hotéis, pousadas e resorts com soluções sustentáveis que encantam os hóspedes e reduzem o impacto ambiental.",
  },
  {
    id: "educational",
    name: "Educacional",
    icon: School,
    description:
      "Escolas, universidades e centros de ensino com ambientes que inspiram aprendizado e consciência ambiental.",
  },
  {
    id: "institutional",
    name: "Institucional",
    icon: Building2,
    description:
      "Órgãos públicos e instituições com soluções que aliam funcionalidade, acessibilidade e sustentabilidade.",
  },
]

export function PortfolioCategories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">ÁREAS DE ATUAÇÃO</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossos Segmentos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos projetos sustentáveis para diversos segmentos, sempre com foco na qualidade, inovação e
            respeito ao meio ambiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>

              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

