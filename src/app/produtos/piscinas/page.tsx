import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";
import { ComplementaryProducts } from "@/components/complementary-products";

export default function PiscinasPage() {
	const categoryData = {
		title: "Piscinas Ecológicas",
		description:
			"Lazer com beleza natural e baixo impacto ambiental",
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
				features: [
					"Zero produtos químicos",
					"Ecossistema",
					"Baixa manutenção",
				],
			},
			{
				id: 2,
				name: "Piscina Kéramos",
				description: "2,14 x 2,11 x 0,86m",
				image: "/piscina-2.webp?height=600&width=600",
				features: [
					"Uso mínimo de químicos",
					"Economia de energia",
					"Fácil conversão",
				],
			},
			{
				id: 3,
				name: "Piscina Faenza",
				description: "3,05 x 2,27 x 0,86m",
				image: "/piscina-3.webp?height=600&width=600",
				features: [
					"Instalação simples",
					"Redução de químicos",
					"Economia imediata",
				],
			},
			{
				id: 4,
				name: "Piscina Ática",
				description: "4,00 x 2,00 x 1,00m",
				image: "/piscina-4.webp?height=600&width=600",
				features: [
					"Compatível com piscinas existentes",
					"Redução de cloro",
					"Água mais saudável",
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

	const complementaryProducts = [
		{
			id: 1,
			name: "Sistema de Filtragem",
			description:
				"G6, um conceito de filtros para sua piscina com itens de série importantes para proteger e facilitar a vida de sua família, como Quadro de Comando, Clorador iGUi e Corrimão Max, e desta forma garantir muito mais divertimento com total segurança.",
			image: "/piscina-produto-complementar-1.webp?height=400&width=400",
			price: "Sob consulta",
			link: "/produtos/piscinas/filtros",
		},
		{
			id: 2,
			name: "Thermas Kelvin",
			description:
				"Mantenha a água da sua piscina aquecida em qualquer estação. O Thermas Kelvin recolhe e absorve o calor do ar ambiente, este calor é comprimido e transferido para a água da piscina.",
			image: "/piscina-produto-complementar-2.webp?height=400&width=400",
			price: "Sob consulta",
			link: "/produtos/piscinas/plantas",
		},
		{
			id: 3,
			name: "Kit de limpeza",
			description:
				"O Kit de Limpeza iGUi torna a manutenção da sua piscina simples e eficiente. Com tecnologia moderna e design inteligente, cada componente oferece praticidade sem igual. Desde o Filtro Pratic até o Catador Plus e a Escova, cada item é projetado para proporcionar resultados impecáveis com mínimo esforço.",
			image: "/piscina-produto-complementar-3.webp?height=400&width=400",
			price: "Sob consulta",
			link: "/produtos/piscinas/bombas",
		},
		{
			id: 4,
			name: "Cascatas",
			description:
				"Cascatas em piscinas são elementos muito utilizados pelos arquitetos, decoradores e paisagistas, pois propicia movimento à água, criando um ambiente aconchegante e acolhedor.",
			image: "/piscina-produto-complementar-4.webp?height=400&width=400",
			price: "Sob consulta",
			link: "/produtos/piscinas/iluminacao",
		},
	];

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
			<ComplementaryProducts
				title="Equipamentos para Piscinas Ecológicas"
				description="Acessórios e equipamentos especializados para otimizar o funcionamento e manutenção da sua piscina ecológica"
				products={complementaryProducts}
			/>
			<ProjectPortfolio projects={categoryData.portfolio} />
			<ContactCTA />
		</main>
	);
}
