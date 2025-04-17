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

export default function PedrasPage() {
	const categoryData = {
		title: "Pedras",
		description: "Beleza natural e sustentabilidade para seus projetos",
		image: "/background-header-pedras.jpg?height=1080&width=1920",
		summary: {
			title:
				"Pedras Naturais: Beleza, Conforto e Durabilidade que Transformam Ambientes",
			description:
				"Na Eco Casa, cada detalhe importa. Por isso, selecionamos cuidadosamente uma linha de pedras naturais que alia design sofisticado, conforto térmico e durabilidade incomparável. São materiais que não apenas revestem, mas transformam ambientes — internos ou externos — com charme, autenticidade e funcionalidade.  As pedras naturais, como a Espanha Cotton, Moledo Calcária e Pedra Moledo, são fundamentais para compor ambientes rústicos e elegantes.",
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

	const pedraAtermica = [
		{
			title: "Pedra Atérmica",
			description:
				"Você pode caminhar descalço tranquilamente, sem o incômodo do calor!",
		},
		{
			title: "Durabilidade",
			description: "Superfície antiderrapante para maior segurança.",
		},
		{
			title: "Resistência",
			description: "Alta durabilidade e resistência às intempéries",
		},
		{
			title: "Estética",
			description: "Design moderno que valoriza o paisagismo.",
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
									src="/pedra-atermica.png?height=600&width=800"
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
								Pedras Atérmicas
							</h2>
							<p className="text-foreground/70 mb-8">
								Ideal para áreas de piscina, jardins, varandas e áreas gourmet,
								nossas bordas atérmicas foram desenvolvidas para proporcionar o
								máximo de conforto térmico mesmo nos dias mais quentes.
							</p>
							<div className="space-y-4">
								{pedraAtermica.map((item, index) => (
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
