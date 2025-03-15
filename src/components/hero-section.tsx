"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const heroProducts = [
	{
		id: 1,
		title: "Portas Ecológicas",
		subtitle: "Elegância Sustentável",
		description:
			"Portas premium feitas com madeira certificada e processos sustentáveis",
		image: "/background-header-portas-first-page.jpg?height=1080&width=1920",
		cta: "Ver Coleção",
		link: "/produtos/portas",
	},
	{
		id: 2,
		title: "Revestimentos Naturais",
		subtitle: "Beleza que Preserva",
		description:
			"Transforme seu ambiente com revestimentos que respeitam a natureza",
		image: "/background-header-portas-first-page.jpg?height=1080&width=1920",
		cta: "Explorar",
		link: "/produtos/revestimentos",
	},
	{
		id: 3,
		title: "Pisos Sustentáveis",
		subtitle: "Conforto Ecológico",
		description:
			"Pisos duráveis e ecológicos para todos os ambientes da sua casa",
		image: "/background-header-pisos-first-page.jpg?height=1080&width=1920",
		cta: "Descobrir",
		link: "/produtos/pisos",
	},
];

export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-[80vh] min-h-[600px] pt-24 overflow-hidden">
			{heroProducts.map((product, index) => (
				<motion.div
					key={product.id}
					className="absolute inset-0 z-0"
					initial={{ opacity: 0 }}
					animate={{
						opacity: currentSlide === index ? 1 : 0,
						scale: currentSlide === index ? 1 : 1.1,
					}}
					transition={{
						opacity: { duration: 1 },
						scale: { duration: 8 },
					}}
				>
					<Image
						src={product.image}
						alt={product.title}
						fill
						className="object-cover"
						priority={index === 0}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
				</motion.div>
			))}

			<div className="container mx-auto px-4 h-full relative z-10">
				<div className="flex flex-col justify-center h-full max-w-2xl">
					{heroProducts.map((product, index) => (
						<motion.div
							key={product.id}
							className="text-white"
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: currentSlide === index ? 1 : 0,
								y: currentSlide === index ? 0 : 20,
							}}
							transition={{ duration: 0.8 }}
							style={{ display: currentSlide === index ? "block" : "none" }}
						>
							<motion.span
								className="inline-block text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								{product.subtitle}
							</motion.span>

							<motion.h1
								className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
							>
								{product.title}
							</motion.h1>

							<motion.p
								className="text-xl text-white/90 mb-8 max-w-lg"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								{product.description}
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
								<Link href={product.link}>
									<Button
										size="lg"
										className="rounded-md py-6 text-lg gap-2 border border-primary hover:border-primary/90 flex items-center"
										asChild
									>
										<ShoppingBag className="h-5 w-5" />
										{product.cta}
									</Button>
								</Link>
							</motion.div>
						</motion.div>
					))}
				</div>

				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
					{heroProducts.map((_, index) => (
						<button
							key={`indicator-${index + 1}`}
							type="button"
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								currentSlide === index ? "bg-primary w-4" : "bg-white/50"
							}`}
							onClick={() => setCurrentSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>

			<div className="absolute bottom-28 right-8 md:right-12 z-20 hidden md:block">
				<div className="flex flex-col gap-4">
					{[0, 1].map((offset) => {
						const index = (currentSlide + offset) % heroProducts.length;
						return (
							<motion.div
								key={`card-${index}`}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.6 + offset * 0.2 }}
								className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden w-64 shadow-lg border border-white/20"
							>
								<div className="relative h-32">
									<Image
										src={heroProducts[index].image || "/placeholder.svg"}
										alt={heroProducts[index].title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-white font-medium">
										{heroProducts[index].title}
									</h3>
									<p className="text-white/70 text-sm">
										{heroProducts[index].subtitle}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			<a
				href="https://api.whatsapp.com/send?phone=5573982135734&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Eco%20Casa."
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors z-50"
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
			</a>
		</section>
	);
}
