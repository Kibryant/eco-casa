"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Trophy, ThumbsUp } from "lucide-react";
import Image from "next/image";

export function Banner() {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#fff_0%,transparent_60%)]" />
					<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#fff_0%,transparent_60%)]" />
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-white"
					>
						<h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
							Eco Casa: Transformando Espaços e Preservando o Planeta
						</h2>

						<p className="text-xl text-white/90 mb-8 max-w-lg">
							Há mais de 14 anos, a Eco Casa é pioneira em soluções sustentáveis
							para construção e decoração, unindo inovação, design e compromisso
							ambiental em cada produto.
						</p>

						<div className="space-y-5 mb-8">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="flex items-start gap-3"
							>
								<div className="bg-white/20 p-2 rounded-full mt-0.5">
									<Trophy className="h-5 w-5 text-white" />
								</div>
								<div>
									<h3 className="text-white font-semibold text-lg">
										Excelência Reconhecida
									</h3>
									<p className="text-white/80">
										Premiada por nossa qualidade e inovação em produtos
										sustentáveis
									</p>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="flex items-start gap-3"
							>
								<div className="bg-white/20 p-2 rounded-full mt-0.5">
									<CheckCircle2 className="h-5 w-5 text-white" />
								</div>
								<div>
									<h3 className="text-white font-semibold text-lg">
										Compromisso Ambiental
									</h3>
									<p className="text-white/80">
										Produtos certificados e processos que respeitam o meio
										ambiente
									</p>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.7 }}
								className="flex items-start gap-3"
							>
								<div className="bg-white/20 p-2 rounded-full mt-0.5">
									<ThumbsUp className="h-5 w-5 text-white" />
								</div>
								<div>
									<h3 className="text-white font-semibold text-lg">
										Satisfação Garantida
									</h3>
									<p className="text-white/80">
										Mais de 500 projetos realizados com 98% de clientes
										satisfeitos
									</p>
								</div>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex justify-center"
					>
						<div className="relative">
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
								className="absolute -inset-8 rounded-full bg-white/10"
							/>

							<motion.div
								animate={{
									scale: [1, 1.15, 1],
									opacity: [0.3, 0.6, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
									delay: 0.5,
								}}
								className="absolute -inset-16 rounded-full bg-white/5"
							/>

							<div className="relative bg-white/20 backdrop-blur-md rounded-full p-10 text-center shadow-lg border border-white/20">
								<div className="relative w-48 h-48 mx-auto mb-4">
									<Image
										src="/logo.png"
										alt="Eco Casa Logo"
										fill
										className="object-contain"
										priority
									/>
									<div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/60 to-transparent" />
								</div>

								<div className="text-4xl font-bold mb-2 text-white">
									Eco Casa
								</div>
								<div className="text-xl font-medium text-white">Desde 2010</div>
								<div className="mt-2 text-sm bg-white/20 rounded-full py-1 px-4 inline-block text-white">
									Inovação Sustentável
								</div>

								<motion.div
									className="absolute -top-4 -right-4 bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full"
									animate={{
										y: [0, -5, 0],
									}}
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "reverse",
									}}
								>
									2+ Anos
								</motion.div>

                                <motion.div
									className="absolute bottom-20 -left-26 bg-white text-primary text-sm font-bold px-3 py-1 rounded-full"
									animate={{
										y: [0, 5, 0],
									}}
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "reverse",
										delay: 0.5,
									}}
								>
                                    50+ Clientes Satisfeitos
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
