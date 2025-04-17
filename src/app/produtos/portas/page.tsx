"use client";

import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PortasPage() {
	const categoryData = {
		title: "Portas Elegantes",
		description: "Elegância para entradas e ambientes internos",
		image: "/background-header-portas.jpg?height=1080&width=1920",
		summary: {
			title: "Portas que Unem Design e Consciência Ambiental",
			description:
				"Na Eco Casa, somos representantes exclusivos da renomada marca Sincol no sul da Bahia e extremo sul, sinônimo de qualidade e inovação em kits de portas prontas. Também trabalhamos com a Carpiso, ampliando nossa seleção para atender a diferentes estilos e projetos. Nossas portas são produzidas com madeira certificada e garantem elegância, durabilidade e sofisticação. Cada peça reflete harmonia e tecnologia avançada, oferecendo soluções ideais para residências e espaços comerciais.",
			features: [
				"Madeira de reflorestamento certificada",
				"Acabamentos não tóxicos",
				"Isolamento térmico e acústico",
				"Representantes exclusivos da Sincol no Sul e extremo Sul da Bahia, trazendo produtos renomados no mercado.",
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
				name: "Porta Principal",
				description: "Estilo contemporâneo com acabamentos em madeira",
				image: "/porta-3.jpg?height=600&width=600",
				features: [
					"Design minimalista",
					"Acabamento em laca",
					"Durabilidade extrema",
				],
			},
			{
				id: 4,
				name: "Porta Madeira Maciça",
				description:
					"A opção mais robusta e resistente, ideal para ambientes internos",
				image: "/porta-4.jpg?height=600&width=600",
				features: [
					"Acabamento natural",
					"Isolamento acústico",
					"Durabilidade extrema",
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
			{
				id: 3,
				title: "Porta Carpiso entrada 2023",
				description:
					"Porta de entrada com design moderno e elegante, perfeita para qualquer ambiente.",
				image: "/porta-carpiso.jpg?height=600&width=800",
				location: "Ilhéus, BA",
			},
			{
				id: 4,
				title: "Deck madeira ecológica 2023",
				description:
                    "Deck de madeira ecológica, ideal para áreas externas, proporcionando beleza e resistência.",
				image: "/deck-madeira-ecologica.jpg?height=600&width=800",
				location: "Ilhéus, BA",
			},
		],
	};

	const fechaduras = [
		{
			title: "Fechaduras Inteligentes",
			description:
				"Segurança com Alta Tecnologia. Dê um passo à frente com as fechaduras eletrônicas da Eco Casa, projetadas para oferecer máxima segurança e praticidade no seu dia a dia.",
		},
		{
			title: "Biometria ultrarrápida",
			description:
				"leitura em apenas 0,3 segundos, com alta assertividade, inclusive para idosos e crianças",
		},
		{
			title: "Vários modos de acesso",
			description:
				"biometria, senha, duas tags de aproximação, chave de emergência e entrada USB",
		},
		{
			title: "APP TTLOCK",
			description:
				"gerencie sua fechadura remotamente, com controle total do seu imóvel na palma da mão",
		},
		{
			title: "Estrutura robusta",
			description:
				"Fechadura Euro perfil 55mm em inox 304, com trava trinco em canto redondo ou quadrado",
		},
		{
			title: "Garantia",
			description: "Garantia de 18 meses.",
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
			<section className="py-24">
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg z-0" />
							<div className="relative h-[500px] rounded-lg overflow-hidden z-10">
								<Image
									src="/fechadura.png?height=600&width=800"
									fill
									className="object-cover"
									alt=""
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="order-1 lg:order-2"
						>
							<h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
								Fechadura
							</h2>
							<div className="space-y-4">
								{fechaduras.map((item, index) => (
									<motion.div
										key={`feature-${index + 1}`}
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.2 }}
										className="flex items-start space-x-4"
									>
										<CheckCircle className="w-6 h-6 text-primary" />
										<div>
											<h3 className="text-lg font-semibold">{item.title}</h3>
											<p className="text-foreground/70">{item.description}</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<ProductAdvantages advantages={categoryData.advantages} />
			<CategoryProducts products={categoryData.products} />
			<ProjectPortfolio projects={categoryData.portfolio} />
			<ContactCTA />
		</main>
	);
}
