"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Lightbulb,
	Award,
	BadgeIcon as Certificate,
	Palette,
} from "lucide-react";
import Link from "next/link";

const features = [
	{
		icon: Lightbulb,
		title: "Inovação Sustentável",
		description:
			"Transformamos recursos naturais em soluções ecológicas, valorizando o ambiente.",
	},
	{
		icon: Award,
		title: "Desempenho Excepcional",
		description:
			"Beleza natural aliada a requisitos funcionais, garantindo durabilidade.",
	},
	{
		icon: Certificate,
		title: "Certificações Internacionais",
		description:
			"Compromisso global com as melhores práticas do setor e normas ambientais.",
	},
	{
		icon: Palette,
		title: "Variedade de Design",
		description:
			"Ampla oferta de designs, acabamentos e cores para personalizar projetos.",
	},
];

const projects = [
	{
		title: "Pétra",
		image: "/petra-1.webp?height=400&width=600",
		category: "Hotelaria",
	},
	{
		title: "Farani 221",
		image: "/farani.jpg?height=400&width=600",
		category: "Hotelaria",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

export function FeaturesProjects() {
	return (
		<section className="py-24">
			<div className="container mx-auto px-4">
				<div className="container mx-auto px-4 relative">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={containerVariants}
						className="text-center mb-20"
					>
						<span className="text-primary font-medium mb-4 block">
							DIFERENCIAIS ECO CASA
						</span>
						<h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
							Transformando conceitos
							<br />
							em realidade
						</h2>

						<motion.div
							variants={containerVariants}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
						>
							{features.map((feature) => (
								<motion.div
									key={feature.title}
									variants={itemVariants}
									whileHover={{
										scale: 1.02,
										transition: { duration: 0.2 },
									}}
									className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									<div className="relative mb-6 flex justify-center items-center">
										<div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 transition-colors duration-300">
											<feature.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
										</div>
									</div>

									<h3 className="font-display text-xl font-semibold mb-3 relative z-10">
										{feature.title}
									</h3>
									<p className="text-foreground/70 leading-relaxed relative z-10">
										{feature.description}
									</p>

									<div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-primary/20 transition-colors duration-300" />
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-32"
				>
					<span className="text-primary font-medium mb-4 block">
						ÚLTIMOS TRABALHOS
					</span>
					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
						<h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 lg:mb-0">
							O nosso legado
							<br />
							em cada projeto
						</h2>
						<p className="text-foreground/70 max-w-xl">
							Explore nossa galeria de realizações recentes, onde cada projeto é
							um testemunho da excelência Lesco. Uma coleção diversificada de
							transformações que se tornaram listas em ambientes
							extraordinários. Descubra o poder da Lesco em nossos últimos
							trabalhos.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						{projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
								className="relative group overflow-hidden rounded-lg"
							>
								<div className="relative h-[300px] lg:h-[400px]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="text-sm font-medium text-primary">
											{project.category}
										</span>
										<h3 className="text-xl font-bold">{project.title}</h3>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<div className="text-center">
						<Link href="/cases">
							<Button
								variant="default"
								size="lg"
								className="bg-primary hover:bg-primary/90"
							>
								VER TUDO
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
