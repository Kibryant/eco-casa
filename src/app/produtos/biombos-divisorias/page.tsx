import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";
import { ComplementaryProducts } from "@/components/complementary-products";

export default function BiombosDivisoriasPage() {
	// Dados específicos para a página de Biombos e Divisórias
	const categoryData = {
		title: "Biombos e Divisórias Ecológicas",
		description:
			"Soluções sustentáveis para separação de ambientes com elegância e funcionalidade",
		image: "/background-header-biombos-divisorias.jpg?height=1080&width=1920",
		summary: {
			title: "Divisórias que Unem Estética e Modernidade",
			description:
				"Nossa linha de biombos e divisórias oferece soluções versáteis para organizar e delimitar espaços. Fabricados com materiais sustentáveis e design contemporâneo, nossos produtos combinam funcionalidade e beleza, criando ambientes harmoniosos e flexíveis.",
			features: [
				"Materiais reciclados e de origem certificada",
				"Design modular e personalizável",
				"Excelente isolamento acústico",
				"Fácil instalação e mobilidade",
			],
			image: "/background-header-biombos-divisorias.jpg?height=600&width=800",
		},
		advantages: [
			{
				title: "Versatilidade de Uso",
				description:
					"Soluções adaptáveis para residências, escritórios, restaurantes e espaços comerciais, com opções fixas ou móveis.",
				icon: "Layers",
			},
			{
				title: "Isolamento Acústico",
				description:
					"Materiais que absorvem o som, criando ambientes mais tranquilos e privados, ideais para espaços compartilhados.",
				icon: "Volume2",
			},
			{
				title: "Personalização",
				description:
					"Diversas opções de acabamentos, cores e texturas para harmonizar com qualquer estilo de decoração.",
				icon: "Palette",
			},
			{
				title: "Sustentabilidade",
				description:
					"Produzidos com materiais reciclados, bambu, madeira certificada e outros componentes ecológicos.",
				icon: "Leaf",
			},
		],
		products: [
			{
				id: 1,
				name: "Biombo",
				description:
					"Sistema modular de biombos com painéis intercambiáveis para máxima flexibilidade",
				image: "/biombo-1.jpg?height=600&width=600",
				features: [
					"Painéis intercambiáveis",
					"Fácil montagem",
					"Múltiplas configurações",
				],
			},
			{
				id: 2,
				name: "Divisória Acústica Natural",
				description:
					"Divisória com alto desempenho acústico, ideal para escritórios e espaços compartilhados",
				image: "/biombo-2.jpg?height=600&width=600",
				features: [
					"Redução de ruído",
					"Materiais naturais",
					"Instalação simples",
				],
			},
			{
				id: 3,
				name: "Biombo Articulado Bambu",
				description:
					"Biombo articulado produzido com bambu certificado, combinando leveza e resistência",
				image: "/biombo-3.jpg?height=600&width=600",
				features: ["Dobrável", "Leve e resistente", "Design oriental"],
			},
			{
				id: 4,
				name: "Divisória Vazada Ecológica",
				description:
					"Divisória com elementos vazados que permitem a passagem de luz e ventilação",
				image: "/biombo-4.jpg?height=600&width=600",
				features: [
					"Ventilação natural",
					"Filtragem de luz",
					"Efeito decorativo",
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
