"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StartSection() {
	return (
		<section className="relative h-[70vh] min-h-[500px] pt-24 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/background-header.png"
					alt="Quem Somos - Eco Casa"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 h-full relative z-10">
				<div className="flex flex-col justify-center h-full max-w-2xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-white"
					>
						<motion.span
							className="inline-block text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							CONHEÇA NOSSA HISTÓRIA
						</motion.span>

						<motion.h1
							className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							Quem Somos
						</motion.h1>

						<motion.p
							className="text-xl text-white/90 mb-8 max-w-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							Transformando espaços com soluções sustentáveis e design inovador!
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<a
								href="https://api.whatsapp.com/send?phone=5573982135734&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20orçamento.%20"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									size="lg"
									className="text-lg py-6 rounded-md bg-primary hover:bg-primary/90 flex items-center gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 24 24"
										className="w-5 h-5"
									>
										<title>WhatsApp</title>
										<path d="M12 0C5.373 0 0 5.373 0 12c0 2.146.565 4.142 1.556 5.873L0 24l6.341-1.631C8.11 23.435 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.59-.487-5.133-1.403l-.37-.215-3.766.97.99-3.67-.24-.38A9.934 9.934 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.417-7.41c-.297-.15-1.756-.867-2.03-.967s-.47-.15-.67.15c-.197.3-.767.967-.94 1.17-.17.2-.347.22-.643.075-.296-.15-1.25-.46-2.38-1.47a8.91 8.91 0 0 1-1.65-2.02c-.173-.3 0-.46.13-.61.134-.134.3-.347.44-.52.147-.173.197-.3.3-.5.1-.2.05-.375-.025-.52-.075-.15-.67-1.61-.92-2.2-.244-.587-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375s-1.04 1.02-1.04 2.48 1.064 2.88 1.21 3.08c.15.2 2.08 3.18 5.04 4.46 2.03.88 2.83.95 3.84.8.62-.1 1.756-.717 2.003-1.41.25-.693.25-1.287.175-1.41-.075-.12-.273-.197-.57-.347z" />
									</svg>
									Faça seu orçamento
								</Button>
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
