import { HeroCategory } from "@/components/hero-category"
import { CategorySummary } from "@/components/category-summary"
import { ProductAdvantages } from "@/components/product-advantages"
import { CategoryProducts } from "@/components/category-products"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { ContactCTA } from "@/components/contact-cta"

export default function PortasPage() {
  const categoryData = {
    title: "Portas Ecológicas",
    description: "Elegância e sustentabilidade para entradas e ambientes internos",
    image: "/background-header-portas.jpg?height=1080&width=1920",
    summary: {
      title: "Portas que Unem Design e Consciência Ambiental",
      description:
        "Nossas portas ecológicas combinam materiais sustentáveis com design contemporâneo, oferecendo soluções elegantes e duráveis para residências e espaços comerciais. Cada porta é produzida com madeira certificada e processos que respeitam o meio ambiente.",
      features: [
        "Madeira de reflorestamento certificada",
        "Acabamentos não tóxicos",
        "Isolamento térmico e acústico",
        "Designs exclusivos e personalizáveis",
      ],
      image: "/background-header-portas.jpg?height=600&width=800",
    },
    advantages: [
      {
        title: "Matéria-Prima Certificada",
        description:
          "Utilizamos apenas madeira de reflorestamento com certificação FSC, garantindo origem responsável.",
        icon: "TreePine",
      },
      {
        title: "Acabamento Ecológico",
        description: "Vernizes e tintas à base d'água, livres de compostos orgânicos voláteis prejudiciais à saúde.",
        icon: "Droplets",
      },
      {
        title: "Isolamento Superior",
        description: "Estrutura que proporciona excelente isolamento térmico e acústico, gerando economia de energia.",
        icon: "Snowflake",
      },
      {
        title: "Durabilidade Garantida",
        description: "Tratamento especial contra umidade, cupins e outros fatores que comprometem a vida útil.",
        icon: "Shield",
      },
    ],
    products: [
      {
        id: 1,
        name: "Porta Ecológica Modelo Viena",
        description: "Design clássico com detalhes em relevo e acabamento premium",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Madeira certificada", "Isolamento acústico", "Fechadura de segurança"],
      },
      {
        id: 2,
        name: "Porta Pivotante Sustentável",
        description: "Imponente e moderna, ideal para entradas principais",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Giro 360°", "Altura personalizada", "Sistema anti-ruído"],
      },
      {
        id: 3,
        name: "Porta de Correr Ecológica",
        description: "Solução elegante para otimização de espaços",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Sistema embutido", "Trilhos silenciosos", "Fechadura especial"],
      },
      {
        id: 4,
        name: "Porta Acústica Verde",
        description: "Isolamento sonoro superior para ambientes que exigem privacidade",
        image: "/placeholder.svg?height=600&width=600",
        features: ["Redução de até 40dB", "Vedação completa", "Núcleo especial"],
      },
    ],
    portfolio: [
      {
        id: 1,
        title: "Residência Contemporânea",
        description: "Projeto com portas pivotantes e de correr para casa de alto padrão",
        image: "/placeholder.svg?height=600&width=800",
        location: "Jurerê Internacional, SC",
      },
      {
        id: 2,
        title: "Escritório Corporativo",
        description: "Portas acústicas para salas de reunião e ambientes executivos",
        image: "/placeholder.svg?height=600&width=800",
        location: "Centro Empresarial, Florianópolis",
      },
      {
        id: 3,
        title: "Hotel Boutique",
        description: "Portas de entrada e interiores para empreendimento hoteleiro sustentável",
        image: "/placeholder.svg?height=600&width=800",
        location: "Praia dos Ingleses, SC",
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

