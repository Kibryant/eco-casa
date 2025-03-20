import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";

export default function DecksPage() {
	const categoryData = {
		title: "Decks Ecológicos",
		description:
			"Soluções sustentáveis para áreas externas com beleza e durabilidade",
		image: "/deck-2.webp?height=1080&width=1920",
		summary: {
			title: "Decks que Transformam Espaços Externos",
			description:
				"Nossos decks ecológicos são a escolha perfeita para quem busca beleza, durabilidade e sustentabilidade em áreas externas. Fabricados com materiais reciclados e tecnologia avançada, oferecem a aparência da madeira natural sem os problemas de manutenção.",
			features: [
				"Resistentes à água e umidade",
				"Não racham, não empenam e não estilhaçam",
				"Baixa manutenção e longa vida útil",
				"Instalação simples e rápida",
			],
			image: "/deck-2.webp?height=600&width=800",
		},
		advantages: [
			{
				title: "Sustentabilidade",
				description:
					"Fabricados com materiais reciclados, nossos decks ajudam a preservar florestas e reduzir o impacto ambiental.",
				icon: "Leaf",
			},
			{
				title: "Durabilidade Superior",
				description:
					"Resistentes às intempéries, raios UV e variações de temperatura, mantendo sua beleza por muito mais tempo.",
				icon: "Shield",
			},
			{
				title: "Baixa Manutenção",
				description:
					"Não necessitam de pintura, verniz ou tratamentos constantes, economizando tempo e dinheiro.",
				icon: "Clock",
			},
			{
				title: "Conforto e Segurança",
				description:
					"Superfície antiderrapante e sem farpas, ideal para áreas de piscina, jardins e espaços externos.",
				icon: "Heart",
			},
		],
		products: [
			{
				id: 1,
				name: "Deck Ecológico Premium",
				description: "Acabamento sofisticado com textura de madeira natural",
				image: "/deck-1.webp?height=600&width=600",
				features: ["Resistente a UV", "Antiderrapante", "Fácil instalação"],
			},
			{
				id: 2,
				name: "Deck Modular",
				description: "Sistema de encaixe para instalação rápida e versátil",
				image: "/deck-2.webp?height=600&width=600",
				features: [
					"Instalação sem ferramentas",
					"Desmontável",
					"Ideal para varandas",
				],
			},
			{
				id: 3,
				name: "Deck Ecológico Rústico",
				description: "Textura marcante que remete à madeira de demolição",
				image: "/deck-3.webp?height=600&width=600",
				features: ["Aparência vintage", "Alta resistência", "Baixa manutenção"],
			},
			{
				id: 4,
				name: "Deck Flutuante Eco",
				description: "Sistema elevado para instalação sobre diversos pisos",
				image: "/deck-4.webp?height=600&width=600",
				features: [
					"Drenagem eficiente",
					"Nivelamento ajustável",
					"Fácil acesso a instalações",
				],
			},
		],
		portfolio: [
			{
				id: 1,
				title: "Pétra",
				description:
					"O Pétra é um empreendimento projetado pela Construtora Almeida Carneiro com foco na integração entre arquitetura, funcionalidade e paisagem. Localizado à beira-mar, o projeto combina técnicas arquitetônicas e materiais pensados para proporcionar conforto e elegância aos moradores.",
				image: "/background-header-revestimentos.webp?height=600&width=800",
				location: "Ilhéus, BA",
			},
			{
				id: 2,
				title: "Farani 221",
				description:
					"O Farani 221 representa o ápice da arquitetura de luxo, um projeto da renomada grife Almeida Carneiro que se destaca por sua localização privilegiada e acabamentos impecáveis. Cada detalhe deste empreendimento foi cuidadosamente planejado para oferecer uma experiência única de conforto e sofisticação, refletindo um estilo de vida que combina tradição e inovação.",
				image: "/farani.jpg?height=600&width=800",
				location: "Ilhéus, BA",
			},
		],
	};

	return (
		<main className="flex flex-col min-h-screen">
			<HeroCategory
				title={categoryData.title}
				description={categoryData.description}
				image={categoryData.image}
			/>
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
	);
}
