import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";

export default function PedrasPage() {
	const categoryData = {
		title: "Pedras",
		description: "Beleza natural e sustentabilidade para seus projetos",
		image: "/background-header-pedras.jpg?height=1080&width=1920",
		summary: {
			title: "Pedras que Unem Natureza e Inovação",
			description:
				"Nossa linha de pedras oferece a beleza e textura das pedras naturais com o compromisso ambiental que você procura. Fabricadas a partir de materiais reciclados e técnicas sustentáveis, nossas pedras são a escolha perfeita para quem busca autenticidade sem impacto ambiental.",
			features: [
				"Aparência idêntica à pedra natural",
				"Menor peso e maior facilidade de instalação",
				"Resistência superior a manchas e intempéries",
				"Manutenção mínima e durabilidade excepcional",
			],
			image: "/background-header-pedras.jpg?height=600&width=800",
		},
		advantages: [
			{
				title: "Sustentabilidade Real",
				description:
					"Nossas pedras reduzem a necessidade de extração mineral, preservando paisagens naturais e ecossistemas.",
				icon: "Leaf",
			},
			{
				title: "Versatilidade de Aplicação",
				description:
					"Perfeitas para revestimentos internos e externos, muros, fachadas, pisos e elementos decorativos.",
				icon: "Palette",
			},
			{
				title: "Propriedades Térmicas",
				description:
					"Contribuem para o conforto térmico dos ambientes, reduzindo a necessidade de climatização artificial.",
				icon: "Snowflake",
			},
			{
				title: "Instalação Simplificada",
				description:
					"Mais leves que pedras naturais, facilitam o transporte e instalação, reduzindo custos e tempo de obra.",
				icon: "Clock",
			},
		],
		products: [
			{
				id: 1,
				name: "Pedra Travertino Imperial Noir Black",
				description: "30x60",
				image: "/pedra-1.webp?height=600&width=600",
				features: [
					"Múltiplas tonalidades",
					"Fácil aplicação",
					"Resistente a intempéries",
				],
			},
			{
				id: 2,
				name: "Pedra Rockface Silver",
				description: "10x30",
				image: "/pedra-2.webp?height=600&width=600",
				features: [
					"Acabamento premium",
					"Instalação modular",
					"Resistente a raios UV",
				],
			},
			{
				id: 3,
				name: "Pedra Travertino Rockface",
				description: "10x30",
				image: "/pedra-3.webp?height=600&width=600",
				features: [
					"Antiderrapante",
					"Resistente a cloro e sal",
					"Baixa absorção de água",
				],
			},
			{
				id: 4,
				name: "Pedra Rockface Bricks",
				description: "7,5x20",
				image: "/pedra-4.webp?height=600&width=600",
				features: [
					"Design exclusivo",
					"Múltiplas possibilidades",
					"Fácil manutenção",
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
