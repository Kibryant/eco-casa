"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ContactCTA() {
	const [ref, isVisible] = useScrollAnimation();

	return (
		<section className="relative py-24 overflow-hidden">
			<div className="absolute inset-0 bg-primary">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.2 }}
					transition={{ duration: 1 }}
					className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:500px_500px] animate-[gradient_5s_linear_infinite]"
				/>
			</div>

			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				animate={isVisible ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className="relative container mx-auto px-4 text-center"
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={isVisible ? { scale: 1, opacity: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="max-w-3xl mx-auto"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Pronto para Transformar seu Espaço?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Agende uma consulta com nossos especialistas e descubra como podemos
						ajudar a transformar sua visão em realidade com nossas soluções
						sustentáveis.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://api.whatsapp.com/send?phone=5573982135734&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20orçamento.%20"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								size="lg"
								className="text-primary text-lg py-6 rounded-md bg-background hover:bg-background/90 flex items-center gap-2"
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
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
