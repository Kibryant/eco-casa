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
    count: 1,
  },
  {
    id: "commercial",
    name: "Comercial",
    icon: Store,
    description:
      "Lojas, restaurantes e espaços comerciais com design ecológico e funcional. Ambientes que atraem e encantam clientes.",
    count: 1,
  },
  {
    id: "corporate",
    name: "Corporativo",
    icon: Building,
    description:
      "Escritórios e ambientes empresariais que refletem os valores da sua marca e promovem bem-estar aos colaboradores.",
    count: 0,
  },
  {
    id: "hospitality",
    name: "Residencial",
    icon: Hotel,
    description:
      "Hotéis, pousadas e resorts com soluções sustentáveis que encantam os hóspedes e reduzem o impacto ambiental.",
    count: 0,
  },
  {
    id: "educational",
    name: "Educacional",
    icon: School,
    description:
      "Escolas, universidades e centros de ensino com ambientes que inspiram aprendizado e consciência ambiental.",
    count: 0,
  },
  {
    id: "institutional",
    name: "Institucional",
    icon: Building2,
    description:
      "Órgãos públicos e instituições com soluções que aliam funcionalidade, acessibilidade e sustentabilidade.",
    count: 0,
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
                  <div className="flex items-center">
                    <span
                      className={`text-sm ${category.count > 0 ? "text-primary font-medium" : "text-muted-foreground"}`}
                    >
                      {category.count} {category.count === 1 ? "projeto" : "projetos"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">{category.description}</p>

              {category.count > 0 && (
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <a
                    href={`#${category.id}-projects`}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Ver projeto
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                        <title>Ver projeto</title>
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

