"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Award, Medal } from "lucide-react";
import { CountUp } from "./count-up";
import { parseStatValue } from "@/functions/parse-stat-value";
import Image from "next/image";

const stats = [
	{
		value: "5+",
		label: "Projetos concluídos",
		icon: Lightbulb,
	},
	{
		value: "5+",
		label: "Em andamento",
		icon: Award,
	},
	{
		value: "50+",
		label: "Clientes satisfeitos",
		icon: Medal,
	},
];

const highlights = [
	{
		title: "Inovação Ecológica:",
		description:
			"Transformando resíduos em soluções sofisticadas e sustentáveis.",
	},
	{
		title: "Design Excepcional:",
		description: "Cada produto Lesco é uma obra de arte.",
	},
	{
		title: "Compromisso Verde:",
		description: "Certificações LEED e ESG garantem práticas sustentáveis.",
	},
	{
		title: "Satisfação do Cliente:",
		description: "Depoimentos reais destacam nosso impacto positivo.",
	},
];

export function AboutContent() {
	return (
		<section className="py-24">
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="order-2 lg:order-1"
					>
						<div className="relative h-[600px] rounded-lg overflow-hidden">
							<Image
								src="/about-image.jpg"
								alt="Arquitetura moderna e sustentável"
								fill
								className="object-cover"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="order-1 lg:order-2"
					>
						<span className="text-primary font-medium mb-4 block">
							QUEM SOMOS
						</span>
						<h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
							Elevando padrões com
							<br />
							sustentabilidade e
							<br />
							inovação:
						</h2>

						<p className="text-foreground/70 mb-8">
							Com experiência de mercado, nossa empresa é referência na
							arquitetura de ambientes transformadores. Ao longo de nossa trajetória, buscamos
							constantemente soluções inovadoras
							para o setor da arquitetura e construção civil. Somos
							comprometidos com a excelência em cada projeto. Nossa missão é
							proporcionar alternativas elegantes, contribuindo
							assim para um futuro mais promissor e ecologicamente equilibrado.
						</p>

						<div className="space-y-4">
							{highlights.map((highlight, index) => (
								<motion.div
									key={highlight.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex items-start gap-2"
								>
									<ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
									<div>
										<span className="text-primary font-medium">
											{highlight.title}
										</span>{" "}
										<span className="text-foreground/70">
											{highlight.description}
										</span>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
