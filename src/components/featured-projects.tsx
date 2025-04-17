"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

const featuredProjects = [
	{
		id: 1,
		title: "Pétra",
		description:
			"O Pétra é um empreendimento projetado pela Construtora Almeida Carneiro com foco na integração entre arquitetura, funcionalidade e paisagem. Localizado à beira-mar, o projeto combina técnicas arquitetônicas e materiais pensados para proporcionar conforto e elegância aos moradores.",
		image: "/background-header-revestimentos.webp?height=600&width=800",
		location: "Ilhéus, Bahia",
		category: "Residencial",
		date: "2023",
		link: "/projetos/residencia-sustentavel",
	},
	{
		id: 2,
		title: "Farani 221",
		description:
			"O Farani 221 representa o ápice da arquitetura de luxo, um projeto da renomada grife Almeida Carneiro que se destaca por sua localização privilegiada e acabamentos impecáveis. Cada detalhe deste empreendimento foi cuidadosamente planejado para oferecer uma experiência única de conforto e sofisticação, refletindo um estilo de vida que combina tradição e inovação.",
		image: "/farani.jpg?height=600&width=800",
		location: "Ilhéus, Bahia",
		category: "Residencial",
		date: "2022",
		link: "/projetos/hotel-boutique-eco",
	},

	{
		id: 3,
		title: "Porta Carpiso entrada 2023",
		description:
			"Porta de entrada com design moderno e elegante, perfeita para qualquer ambiente.",
		image: "/porta-carpiso.jpg?height=600&width=800",
		location: "Ilhéus, Bahia",
		category: "Residencial",
		date: "2023",
		link: "/projetos/loja-carpiso",
	},
	{
		id: 4,
		title: "Deck madeira ecológica 2023",
		description:
			"Deck de madeira ecológica, ideal para áreas externas, proporcionando beleza e resistência.",
		image: "/deck-madeira-ecologica.jpg?height=600&width=800",
		location: "Ilhéus, Bahia",
		category: "Residencial",
		date: "2023",
		link: "/projetos/deck-madeira-ecologica",
	},
];

export function FeaturedProjects() {
	return (
		<section className="py-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-primary font-medium mb-4 block">
							DESTAQUES
						</span>
						<h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
							Projetos em Destaque
						</h2>
						<p className="text-muted-foreground max-w-xl">
							Conheça alguns dos nossos projetos mais recentes e impactantes,
							onde combinamos sustentabilidade, design e funcionalidade.
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative overflow-hidden rounded-xl"
						>
							<div className="relative h-[500px]">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<div className="absolute top-4 left-4">
									<span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
										{project.category}
									</span>
								</div>

								<div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
									<h3 className="text-xl font-bold text-white mb-2">
										{project.title}
									</h3>
									<p className="text-white/80 mb-4">{project.description}</p>

									<div className="flex items-center gap-4 text-white/70 mb-4">
										<div className="flex items-center gap-1">
											<MapPin className="h-4 w-4" />
											<span className="text-sm">{project.location}</span>
										</div>
										<div className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											<span className="text-sm">{project.date}</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
