"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Banner() {
	return (
		<section className="py-24 bg-primary text-primary-foreground">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
							Revestimentos Ecológicos
						</h2>
						<p className="text-white/80 mb-6">
							Conheça nossa linha exclusiva de revestimentos sustentáveis que
							combinam beleza, durabilidade e responsabilidade ambiental.
						</p>
						<Button variant="outline" size="lg" className="rounded-full gap-2">
							Explorar Coleção
							<ArrowRight className="h-5 w-5" />
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex justify-center"
					>
						<div className="relative">
							{/* Animated Rings */}
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
										alt="Revestimentos Ecológicos"
										layout="fill"
										objectFit="contain"
									/>
								</div>

								<div className="text-4xl font-bold mb-2">Eco-Friendly</div>
								<div className="text-xl font-medium">
									Materiais Sustentáveis
								</div>
								<div className="mt-2 text-sm bg-white/20 rounded-full py-1 px-4 inline-block">
									100% Certificados
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
