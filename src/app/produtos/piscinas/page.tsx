import { HeroCategory } from "@/components/hero-category"
import { CategorySummary } from "@/components/category-summary"
import { ProductAdvantages } from "@/components/product-advantages"
import { CategoryProducts } from "@/components/category-products"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { ContactCTA } from "@/components/contact-cta"

export default function PiscinasPage() {
  const categoryData = {
    title: "Piscinas Ecológicas",
    description: "Lazer sustentável com beleza natural e baixo impacto ambiental",
    image: "/background-header-piscinas.webp?height=1080&width=1920",
    summary: {
      title: "Piscinas que Respeitam o Meio Ambiente",
      description:
        "Nossas piscinas ecológicas combinam tecnologia avançada e materiais sustentáveis para oferecer uma experiência de lazer em harmonia com a natureza. Projetadas para reduzir o consumo de água, energia e produtos químicos, nossas soluções proporcionam uma alternativa saudável e responsável às piscinas convencionais.",
      features: [
        "Sistema de filtragem biológica natural",
        "Redução de até 80% no uso de produtos químicos",
        "Economia significativa de água e energia",
        "Integração harmoniosa com a paisagem",
      ],
      image: "/background-header-piscinas.webp?height=600&width=800",
    },
    advantages: [
      {
        title: "Filtragem Natural",
        description:
          "Sistema que utiliza plantas e microorganismos para purificar a água, eliminando a necessidade de cloro e outros produtos químicos agressivos.",
        icon: "Leaf",
      },
      {
        title: "Economia de Recursos",
        description:
          "Menor consumo de água e energia em comparação com piscinas convencionais, reduzindo custos operacionais e impacto ambiental.",
        icon: "Droplets",
      },
      {
        title: "Benefícios à Saúde",
        description:
          "Água livre de produtos químicos agressivos, ideal para pessoas com pele sensível, alergias ou problemas respiratórios.",
        icon: "Heart",
      },
      {
        title: "Biodiversidade",
        description:
          "Cria um microecossistema que atrai pássaros e insetos benéficos, contribuindo para a biodiversidade local.",
        icon: "TreePine",
      },
    ],
    products: [
      {
        id: 1,
        name: "Piscina Cetus",
        description: "2,14 x 2,11 x 0,86m",
        image: "/piscina-1.webp?height=600&width=600",
        features: ["Zero produtos químicos", "Ecossistema autossustentável", "Baixa manutenção"],
      },
      {
        id: 2,
        name: "Piscina Kéramos",
        description: "2,14 x 2,11 x 0,86m",
        image: "/piscina-2.webp?height=600&width=600",
        features: ["Uso mínimo de químicos", "Economia de energia", "Fácil conversão"],
      },
      {
        id: 3,
        name: "Piscina Faenza",
        description: "3,05 x 2,27 x 0,86m",
        image: "/piscina-3.webp?height=600&width=600",
        features: ["Instalação simples", "Redução de químicos", "Economia imediata"],
      },
      {
        id: 4,
        name: "Piscina Ática",
        description: "4,00 x 2,00 x 1,00m",
        image: "/piscina-4.webp?height=600&width=600",
        features: ["Compatível com piscinas existentes", "Redução de cloro", "Água mais saudável"],
      },
    ],
    portfolio: [
      {
        id: 1,
        title: "Piscina Natural Residencial",
        description: "Projeto de piscina biológica integrada ao paisagismo de residência de alto padrão",
        image: "/placeholder.svg?height=600&width=800",
        location: "Jurerê Internacional, SC",
      },
      {
        id: 2,
        title: "Spa Ecológico Resort",
        description: "Sistema de piscinas naturais para área de bem-estar de resort sustentável",
        image: "/placeholder.svg?height=600&width=800",
        location: "Praia Brava, Itajaí",
      },
      {
        id: 3,
        title: "Condomínio Green Living",
        description: "Piscina comunitária com sistema híbrido de filtragem para condomínio sustentável",
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
