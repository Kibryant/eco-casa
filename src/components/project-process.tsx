"use client"

import { motion } from "framer-motion"
import { FileText, Lightbulb, PenTool, Hammer, CheckSquare, Users } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Briefing",
    description: "Entendemos suas necessidades e objetivos para o projeto.",
  },
  {
    icon: Lightbulb,
    title: "Conceito",
    description: "Desenvolvemos o conceito inicial com foco em sustentabilidade.",
  },
  {
    icon: PenTool,
    title: "Projeto",
    description: "Elaboramos o projeto detalhado com especificações técnicas.",
  },
  {
    icon: Hammer,
    title: "Execução",
    description: "Implementamos o projeto com materiais sustentáveis de alta qualidade.",
  },
  {
    icon: CheckSquare,
    title: "Entrega",
    description: "Finalizamos o projeto com rigoroso controle de qualidade.",
  },
  {
    icon: Users,
    title: "Pós-venda",
    description: "Oferecemos suporte contínuo após a conclusão do projeto.",
  },
]

export function ProjectProcess() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">METODOLOGIA</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Nosso Processo</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Conheça as etapas do nosso processo de trabalho, desenvolvido para garantir a excelência em cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={`step-${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

