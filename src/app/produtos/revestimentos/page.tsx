import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";

export default function RevestimentosPage() {
	// Dados específicos para a página de Revestimentos
	const categoryData = {
		title: "Revestimentos Ecológicos",
		description:
			"Transforme seus ambientes com texturas e materiais sustentáveis",
		image: "/background-header-revestimentos.webp?height=600&width=1920",
		summary: {
			title: "Revestimentos que Respeitam o Planeta",
			description:
				"Nossa linha de revestimentos ecológicos oferece soluções inovadoras para paredes e superfícies, combinando estética, funcionalidade e compromisso ambiental. Produzidos com materiais reciclados e naturais, nossos revestimentos transformam qualquer ambiente com texturas e acabamentos exclusivos.",
			features: [
				"Materiais reciclados",
				"Variedade de texturas e acabamentos",
				"Fácil instalação e manutenção",
				"Propriedades térmicas e acústicas",
			],
			image: "/background-header-revestimentos.webp?height=600&width=800",
		},
		advantages: [
			{
				title: "Materiais Inovadores",
				description:
					"Utilizamos fibras naturais, materiais reciclados e compostos ecológicos de última geração.",
				icon: "Recycle",
			},
			{
				title: "Qualidade do Ar Interior",
				description:
					"Produtos livres de COVs e formaldeídos, contribuindo para ambientes mais saudáveis.",
				icon: "Wind",
			},
			{
				title: "Eficiência Energética",
				description:
					"Propriedades isolantes que ajudam a manter a temperatura ideal e reduzir o consumo de energia.",
				icon: "Zap",
			},
			{
				title: "Versatilidade Estética",
				description:
					"Ampla gama de cores, texturas e padrões para atender a diferentes estilos de design.",
				icon: "Palette",
			},
		],
		products: [
			{
				id: 1,
				name: "Revestimento 3D",
				description:
					"Painéis tridimensionais que criam efeitos visuais impressionantes",
				image: "/revestimento-1.webp?height=600&width=600",
				features: ["Efeito 3D", "Instalação modular", "Tratamento anti-chamas"],
			},
			{
				id: 2,
				name: "Revestimento de Fibras Naturais",
				description:
					"Composto de fibras de coco, sisal e outras matérias-primas renováveis",
				image: "/revestimento-2.webp?height=600&width=600",
				features: [
					"100% natural",
					"Propriedades acústicas",
					"Textura orgânica",
				],
			},
			{
				id: 3,
				name: "Revestimento de Madeira Reciclada",
				description:
					"Painéis produzidos com madeira de demolição e reaproveitamento",
				image: "/revestimento-3.webp?height=600&width=600",
				features: [
					"Aparência vintage",
					"História única",
					"Baixo impacto ambiental",
				],
			},
			{
				id: 4,
				name: "Revestimento Mineral Ecológico",
				description:
					"Composto de minerais naturais com acabamento contemporâneo",
				image: "/revestimento-4.webp?height=600&width=600",
				features: ["Resistente à umidade", "Antimofo", "Diversas texturas"],
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
