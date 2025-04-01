"use client";

import { motion } from "framer-motion";
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
							Eco Casa: Transformando Espaços Com Elegância e Sofisticação
						</h2>

                        <p className="text-xl text-white/90 mb-8 max-w-lg">
                            Na Eco Casa, transformamos sonhos em realidade, oferecendo soluções
                            exclusivas em portas, revestimentos, decks e pedras naturais. Nosso
                            compromisso é unir versatilidade e sofisticação para criar espaços
                            que refletem harmonia, conforto e estilo, atendendo desde projetos
                            simples até os mais elaborados.
                        </p>
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
								<div className="mt-2 text-sm bg-white/20 rounded-full py-1 px-4 inline-block text-white">
									Inovação
								</div>

								<motion.div
									className="absolute bottom-20 -left-36 bg-white text-primary text-sm font-bold px-3 py-1 rounded-full"
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
									100+ Clientes Satisfeitos
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
