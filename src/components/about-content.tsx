"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Award, Medal } from "lucide-react";
import { CountUp } from "./count-up";
import { parseStatValue } from "@/functions/parse-stat-value";
import Image from "next/image"

const stats = [
	{
		value: "100+",
		label: "Projetos concluídos",
		icon: Lightbulb,
	},
	{
		value: "15+",
		label: "Em andamento",
		icon: Award,
	},
	{
		value: "300+",
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
							Com mais de 14 anos no mercado, nossa empresa é referência na
							arquitetura de ambientes transformadores e na construção de um
							mundo mais sustentável. Ao longo de nossa trajetória, buscamos
							constantemente soluções inovadoras e ecologicamente conscientes
							para o setor da arquitetura e construção civil. Somos
							comprometidos com a excelência em cada projeto, sendo pioneiros na
							criação de produtos com madeira ecológica. Nossa missão é
							proporcionar alternativas elegantes e sustentáveis, contribuindo
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

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-24 py-20 bg-primary"
				>
					<div className="container mx-auto px-4 relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="text-center mb-16"
						>
							<h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
								Impacto em Números
							</h2>
							<p className="text-white/80 max-w-2xl mx-auto">
								Conheça os resultados do nosso compromisso com a
								sustentabilidade e a excelência
							</p>
						</motion.div>
                        
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
							{stats.map((stat, index) => {
								const { num, suffix } = parseStatValue(stat.value);

								return (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.8, delay: index * 0.2 }}
										className="relative group"
									>
										<div className="absolute inset-0 bg-white/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-105" />
										<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

										<div className="relative p-8 text-center">
											<div className="relative mx-auto mb-6 w-20 h-20">
												<motion.div
													animate={{
														scale: [1, 1.1, 1],
														opacity: [0.5, 0.8, 0.5],
													}}
													transition={{
														duration: 3,
														repeat: Number.POSITIVE_INFINITY,
														repeatType: "reverse",
													}}
													className="absolute inset-0 bg-white/10 rounded-full"
												/>
												<div className="absolute inset-2 bg-white/10 rounded-full" />
												<div className="absolute inset-0 flex items-center justify-center">
													<stat.icon className="h-10 w-10 text-white" />
												</div>
											</div>

											<div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
												<CountUp target={num} suffix={suffix} duration={2.5} />
											</div>

											<div className="text-lg font-medium text-white mb-3">
												{stat.label}
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
