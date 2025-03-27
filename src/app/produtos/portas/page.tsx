import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";

export default function PortasPage() {
	const categoryData = {
		title: "Portas Ecológicas",
		description:
			"Elegância e sustentabilidade para entradas e ambientes internos",
		image: "/background-header-portas.jpg?height=1080&width=1920",
		summary: {
			title: "Portas que Unem Design e Consciência Ambiental",
			description:
				"Na Eco Casa, somos representantes exclusivos da renomada marca Sincol no sul da Bahia, sinônimo de qualidade e inovação em portas de madeira. Também trabalhamos com a Carpiso, ampliando nossa seleção para atender a diferentes estilos e projetos. Nossas portas são produzidas com madeira certificada e garantem elegância, durabilidade e respeito ao meio ambiente. Cada peça reflete a harmonia e tecnologia avançada, oferecendo soluções ideais para residências e espaços comerciais.",
			features: [
				"Madeira de reflorestamento certificada",
				"Acabamentos não tóxicos",
				"Isolamento térmico e acústico",
				"Representantes exclusivos da Sincol no Sul da Bahia, trazendo produtos renomados no mercado.",
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
				description:
					"Vernizes e tintas à base d'água, livres de compostos orgânicos voláteis prejudiciais à saúde.",
				icon: "Droplets",
			},
			{
				title: "Isolamento Superior",
				description:
					"Estrutura que proporciona excelente isolamento térmico e acústico, gerando economia de energia.",
				icon: "Snowflake",
			},
			{
				title: "Durabilidade Garantida",
				description:
					"Tratamento especial contra umidade, cupins e outros fatores que comprometem a vida útil.",
				icon: "Shield",
			},
		],
		products: [
			{
				id: 1,
				name: "Porta Modelo Viena",
				description:
					"Design clássico com detalhes em relevo e acabamento premium",
				image: "/porta-1.jpg?height=600&width=600",
				features: [
					"Madeira certificada",
					"Isolamento acústico",
					"Fechadura de segurança",
				],
			},
			{
				id: 2,
				name: "Porta de Correr",
				description: "Imponente e moderna, ideal para entradas principais",
				image: "/porta-2.jpg?height=600&width=600",
				features: ["Giro 360°", "Altura personalizada", "Sistema anti-ruído"],
			},
			{
				id: 3,
				name: "Porta Pivotante",
				description: "Solução elegante para otimização de espaços",
				image: "/porta-3.jpg?height=600&width=600",
				features: [
					"Sistema embutido",
					"Trilhos silenciosos",
					"Fechadura especial",
				],
			},
			{
				id: 4,
				name: "Porta Acústica Verde",
				description:
					"Isolamento sonoro superior para ambientes que exigem privacidade",
				image: "/porta-4.jpg?height=600&width=600",
				features: [
					"Redução de até 40dB",
					"Vedação completa",
					"Núcleo especial",
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
