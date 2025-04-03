"use client";

import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function DecksPage() {
	const categoryData = {
		title: "Decks",
		description: "Soluções para áreas externas com beleza e durabilidade",
		image: "/background-header-decks.webp?height=1080&width=1920",
		summary: {
			title: "Decks que Transformam Espaços Externos",
			description:
				"Os Lesco Green Decks, disponíveis na Eco Casa, são a escolha ideal para áreas externas, unindo sofisticação e resistência incomparáveis. Produzidos com madeira ecológica de alta qualidade, esses decks foram projetados para enfrentar as condições climáticas mais exigentes, oferecendo máxima durabilidade com mínima manutenção.",
			features: [
				"Estética Natural",
				"Alta Resistência",
				"Sustentabilidade",
				"Manutenção Simplificada",
			],
			image: "/background-decks.png?height=600&width=800",
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
				name: "Lesco Green Deck",
				description: "Acabamento sofisticado com textura de madeira natural",
				image: "/deck-1.webp?height=600&width=600",
				features: ["Resistente a UV", "Antiderrapante", "Fácil instalação"],
			},
			{
				id: 2,
				name: "Lesco Green Deck",
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
				name: "Lesco Green Deck",
				description: "Textura marcante que remete à madeira de demolição",
				image: "/deck-3.webp?height=600&width=600",
				features: ["Aparência vintage", "Alta resistência", "Baixa manutenção"],
			},
			{
				id: 4,
				name: "Lesco Green Deck",
				description: "Textura marcante que remete à madeira de demolição",
				image: "/deck-4.webp?height=600&width=600",
				features: ["Aparência vintage", "Alta resistência", "Baixa manutenção"],
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

	const camaruDeck = [
		{
			title: "Madeira Nobre",
			description:
				"Textura única e coloração marcante que valorizam qualquer ambiente.",
		},
		{
			title: "Alta Resistência",
			description:
				"Suporta variações climáticas extremas, sendo ideal para áreas externas.",
		},
		{
			title: "Durabilidade Excepcional",
			description:
				"Longevidade garantida sem comprometer a estética ao longo do tempo.",
		},
		{
			title: "Sustentabilidade",
			description:
				"Madeiras de manejo responsável, garantindo um impacto ambiental reduzido.",
		},
		{
			title: "Acabamento Superior",
			description:
				"Perfeito para decks de piscinas, varandas, jardins e espaços sofisticados.",
		},
	];

	const camaruDeckProducts = [
		{
			id: 1,
			name: "Cumaru Deck",
			description: "Acabamento sofisticado com textura de madeira natural",
			image: "/cumaru-deck.jpg?height=600&width=600",
			features: ["Resistente a UV", "Antiderrapante", "Fácil instalação"],
		},
		{
			id: 2,
			name: "Cumaru Deck",
			description: "Sistema de encaixe para instalação rápida e versátil",
			image: "/cumaru-deck-2.jpg?height=600&width=600",
			features: [
				"Instalação sem ferramentas",
				"Desmontável",
				"Ideal para varandas",
			],
		},
		{
			id: 3,
			name: "Cumaru Deck",
			description: "Textura marcante que remete à madeira de demolição",
			image: "/cumaru-deck-3.jpg?height=600&width=600",
			features: ["Aparência vintage", "Alta resistência", "Baixa manutenção"],
		},
		{
			id: 4,
			name: "Cumaru Deck",
			description: "Textura marcante que remete à madeira de demolição",
			image: "/cumaru-deck-4.png?height=600&width=600",
			features: ["Aparência vintage", "Alta resistência", "Baixa manutenção"],
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
			<CategoryProducts products={categoryData.products} />
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
									src="/cumaru-deck.jpg?height=600&width=800"
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
								Deck Cumaru Exportação
							</h2>

							<p className="text-foreground/70 mb-8">
								Qualidade Premium para Ambientes Externos O Deck Cumaru
								Exportação, disponível na Eco Casa, é sinônimo de sofisticação,
								resistência e durabilidade. Produzido com madeira Cumaru de alta
								densidade, esse deck é amplamente reconhecido por sua alta
								performance e acabamento impecável, sendo uma escolha perfeita
								para projetos que exigem excelência e requinte. Principais
								Benefícios do Deck Cumaru Exportação
							</p>

							<div className="space-y-4">
								{camaruDeck.map((item, index) => (
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
			<CategoryProducts products={camaruDeckProducts} />
			<ProductAdvantages advantages={categoryData.advantages} />
			<ProjectPortfolio projects={categoryData.portfolio} />
			<ContactCTA />
		</main>
	);
}
