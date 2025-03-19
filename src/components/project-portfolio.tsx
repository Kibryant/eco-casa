"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	location: string;
}

interface ProjectPortfolioProps {
	projects: Project[];
}

export function ProjectPortfolio({ projects }: ProjectPortfolioProps) {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium mb-4 block">
						NOSSOS PROJETOS
					</span>
					<h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
						Portfólio de Realizações
					</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						Conheça alguns dos nossos projetos realizados com excelência e
						compromisso com a sustentabilidade. Cada projeto reflete nossa
						dedicação à qualidade e ao meio ambiente.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
						>
							<div className="relative h-64 overflow-hidden">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>

								<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
									<MapPin className="h-4 w-4 text-primary" />
									<span>{project.location}</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link href="/cases">
						<Button variant="outline" size="lg" className="rounded-md px-8">
							Ver Todos os Projetos
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
