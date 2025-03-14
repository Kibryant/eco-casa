import { HeroCategory } from "@/components/hero-category"
import { CategorySummary } from "@/components/category-summary"
import { ProductAdvantages } from "@/components/product-advantages"
import { CategoryProducts } from "@/components/category-products"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { ContactCTA } from "@/components/contact-cta"

export default function PisosPage() {
  const categoryData = {
    title: "Pisos Ecológicos",
    description: "Soluções sustentáveis para pisos com beleza, durabilidade e consciência ambiental",
    image: "/placeholder.svg?height=1080&width=1920",
    summary: {
      title: "Pisos que Unem Estética e Sustentabilidade",
      description:
        "Nossa linha de pisos ecológicos oferece alternativas sustentáveis para diversos ambientes, combinando design contemporâneo, durabilidade excepcional e responsabilidade ambiental. Fabricados com materiais reciclados e renováveis, nossos pisos reduzem significativamente o impacto ambiental sem comprometer a qualidade e a estética.",
      features: [
        "Materiais reciclados e de origem certificada",
        "Baixa emissão de compostos orgânicos voláteis (COVs)",
        "Excelente durabilidade e resistência ao desgaste",
        "Variedade de estilos e acabamentos",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    advantages: [
      {
        title: "Materiais Sustentáveis",
        description:
          "Utilizamos materiais reciclados, bambu, cortiça e outras matérias-primas renováveis na fabricação dos nossos pisos.",
        icon: "Recycle",
      },
      {
        title: "Qualidade do Ar Interior",
        description:
          "Nossos pisos são livres de formaldeído e outros compostos nocivos, contribuindo para ambientes mais saudáveis.",
        icon: "Wind",
      },
      {
        title: "Eficiência Energética",
        description:
          "Propriedades isolantes que ajudam a manter a temperatura ideal e reduzir o consumo de energia.",
        icon: "Zap",
      },
      {
        title: "Fácil Manutenção",
        description:
          "Produtos duráveis e de fácil limpeza, reduzindo a necessidade de substituição e o uso de produtos químicos.",
        icon: "Clock",
      },
    ],
    products: [
      {
        id: 1,
        name: "Piso de Bambu Ecológico",
        description: "Elegância natural com a resistência do bambu, uma das plantas de crescimento mais rápido do mundo",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Alta durabilidade", "Resistente à umidade", "Múltiplos acabamentos"],
      },
      {
        id: 2,
        name: "Piso Vinílico Sustentável",
        description: "Fabricado com materiais reciclados e livre de ftalatos, ideal para ambientes residenciais e comerciais",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Instalação fácil", "Resistente a impactos", "Isolamento acústico"],
      },
      {
        id: 3,
        name: "Piso de Cortiça Natural",
        description: "Conforto térmico e acústico com um material 100% natural e renovável",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Antialérgico", "Isolamento térmico", "Absorção de impacto"],
      },
      {
        id: 4,
        name: "Piso de Madeira Certificada",
        description: "Beleza clássica da madeira com certificação FSC, garantindo origem responsável",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Madeira certificada", "Acabamento não-tóxico", "Longa vida útil"],
      },
    ],
    portfolio: [
      {
        id: 1,
        title: "Residência Sustentável",
        description: "Aplicação de pisos ecológicos em projeto residencial de alto padrão",
        image: "/placeholder.svg?height=600&width=800",
        location: "Florianópolis, SC",
      },
      {
        id: 2,
        title: "Escritório Corporativo Verde",
        description: "Pisos sustentáveis para ambiente corporativo com certificação LEED",
        image: "/placeholder.svg?height=600&width=800",
        location: "Centro Empresarial, Itajaí",
      },
      {
        id: 3,
        title: "Escola Ecológica",
        description: "Pisos de baixo impacto ambiental para instituição de ensino sustentável",
        image: "/placeholder.svg?height=600&width=800",
        location: "Balneário Camboriú, SC",
      },
    ],
  }

  return (
    <main className="flex flex-col min-h-screen">
      <HeroCategory title={categoryData.title} description={categoryData.description} image={categoryData.image} />
      <CategorySummary
        title={categoryData.summary.title}
        description={categoryData.summary.description}
        features={categoryData.summary.features}
        image={categoryData.summary.image}
      />
      <ProductAdvantages advantages={categoryData.advantages} />
      <CategoryProducts products={categoryData.products} />
      <ProjectPortfolio projects={categoryData.portfolio} />
      <ContactCTA />
    </main>
  )
}
