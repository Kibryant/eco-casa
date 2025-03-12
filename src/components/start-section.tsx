"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StartSection() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<motion.div
				className="absolute inset-0 z-0"
				style={{
					y: scrollY * 0.5,
				}}
			>
				<Image
					src="/background-header.png?height=1080&width=1920"
					alt="Luxury interior with sustainable materials"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
			</motion.div>

			<div className="container relative z-10 mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="max-w-4xl mx-auto text-center text-white"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="inline-block"
					>
						<span className="text-primary font-medium block">
							Portas e Revestimentos
						</span>
					</motion.div>

					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
					>
						Transforme seu espaço com design{" "}
						<span className="text-primary">eco-consciente</span>
					</motion.h1>

					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl mb-8 text-white/90"
					>
						Portas premium e revestimentos de parede elaborados com materiais
						sustentáveis e elegância atemporal
					</motion.p>

					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a
							href="https://api.whatsapp.com/send?phone=5573982135734&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20orçamento.%20"
							target="_blank"
							rel="noopener noreferrer"
                            className="hover:underline"
						>
							<Button
								size="lg"
								className="text-lg py-8 rounded-full bg-primary hover:bg-primary/90 flex items-center gap-2"
							>
								Faça seu orçamento
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									className="w-5 h-5"
								>
									<title>WhatsApp</title>
									<path d="M12 0C5.373 0 0 5.373 0 12c0 2.146.565 4.142 1.556 5.873L0 24l6.341-1.631C8.11 23.435 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.59-.487-5.133-1.403l-.37-.215-3.766.97.99-3.67-.24-.38A9.934 9.934 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.417-7.41c-.297-.15-1.756-.867-2.03-.967s-.47-.15-.67.15c-.197.3-.767.967-.94 1.17-.17.2-.347.22-.643.075-.296-.15-1.25-.46-2.38-1.47a8.91 8.91 0 0 1-1.65-2.02c-.173-.3 0-.46.13-.61.134-.134.3-.347.44-.52.147-.173.197-.3.3-.5.1-.2.05-.375-.025-.52-.075-.15-.67-1.61-.92-2.2-.244-.587-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375s-1.04 1.02-1.04 2.48 1.064 2.88 1.21 3.08c.15.2 2.08 3.18 5.04 4.46 2.03.88 2.83.95 3.84.8.62-.1 1.756-.717 2.003-1.41.25-.693.25-1.287.175-1.41-.075-.12-.273-.197-.57-.347z" />
								</svg>
							</Button>
						</a>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.8 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
					<motion.div
						animate={{
							y: [0, 12, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
						}}
						className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
					/>
				</div>
			</motion.div>
		</section>
	);
}
