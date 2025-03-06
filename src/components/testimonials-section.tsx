"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
	{
		id: 1,
		name: "João Silva",
		company: "Arquitetura Moderna",
		role: "Arquiteto",
		image: "/placeholder.svg?height=100&width=100",
		content:
			"A Eco Casa superou todas as expectativas. A qualidade dos revestimentos e o compromisso com a sustentabilidade são verdadeiramente impressionantes.",
		rating: 5,
	},
	{
		id: 2,
		name: "Maria Santos",
		company: "Santos Design",
		role: "Designer de Interiores",
		image: "/placeholder.svg?height=100&width=100",
		content:
			"Trabalhar com a Eco Casa tem sido uma experiência excepcional. Os produtos são de alta qualidade e o suporte é incomparável.",
		rating: 5,
	},
	{
		id: 3,
		name: "Pedro Costa",
		company: "Costa Construções",
		role: "Engenheiro Civil",
		image: "/placeholder.svg?height=100&width=100",
		content:
			"A sustentabilidade e inovação dos produtos Eco Casa agregaram um valor imenso aos nossos projetos. Recomendo fortemente.",
		rating: 5,
	},
];

export function TestimonialsSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (containerRef.current) {
			const scrollAmount = direction === "left" ? -400 : 400;
			containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium mb-4 block">
						DEPOIMENTOS
					</span>
					<h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
						O que nossos clientes dizem
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Descubra por que arquitetos, designers e construtores escolhem a Eco
						Casa para seus projetos sustentáveis
					</p>
				</motion.div>

				<div className="relative">
					<div
						ref={containerRef}
						className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="min-w-[400px] flex-shrink-0 snap-center"
							>
								<div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10">
									<div className="flex items-center gap-4 mb-6">
										<div className="relative w-16 h-16 rounded-full overflow-hidden">
											<Image
												src={testimonial.image || "/placeholder.svg"}
												alt={testimonial.name}
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<h3 className="font-semibold text-lg">
												{testimonial.name}
											</h3>
											<p className="text-primary font-medium">
												{testimonial.company}
											</p>
											<p className="text-sm text-muted-foreground">
												{testimonial.role}
											</p>
										</div>
									</div>

									<div className="flex gap-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={`${i + 1}`}
												className="h-5 w-5 fill-primary text-primary"
											/>
										))}
									</div>

									<blockquote className="text-foreground/80 max-w-64 sm:max-w-full">
										"{testimonial.content}"
									</blockquote>
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex justify-center gap-4 mt-8">
						<Button
							variant="outline"
							size="icon"
							onClick={() => scroll("left")}
							className="bg-background border-primary/20"
						>
							<ChevronLeft className="h-5 w-5" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={() => scroll("right")}
							className="bg-background border-primary/20"
						>
							<ChevronRight className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="mt-24 relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-primary" />

				<div className="container mx-auto px-4 py-16 relative z-10">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
						<div className="md:w-1/2 text-left">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="text-3xl md:text-4xl font-bold mb-4"
							>
								Precisa de ajuda com seu projeto?
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="text-lg text-white/90 mb-6 max-w-xl"
							>
								Nossa equipe está pronta para atender suas necessidades e
								transformar seus espaços com soluções sustentáveis e elegantes.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="flex flex-col sm:flex-row gap-4"
							>
								<a
									href="https://api.whatsapp.com/send?phone=5573982135734&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Eco%20Casa."
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
									Fale Conosco pelo WhatsApp
								</a>

								<a
									href="tel:+5511999999999"
									className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-phone"
									>
										<title>Whatsapp</title>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
									Ligue para Nós
								</a>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="md:w-1/2 flex justify-center md:justify-end"
						>
							<div className="relative w-64 h-64 md:w-80 md:h-80">
								<div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
								<div className="absolute inset-2 bg-white/20 rounded-full" />
								<div className="absolute inset-4 bg-white/30 rounded-full flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 24 24"
										className="w-24 h-24 text-white"
									>
                                        <title>Whatsapp</title>
										<path d="M12 0C5.373 0 0 5.373 0 12c0 2.146.565 4.142 1.556 5.873L0 24l6.341-1.631C8.11 23.435 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.59-.487-5.133-1.403l-.37-.215-3.766.97.99-3.67-.24-.38A9.934 9.934 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.417-7.41c-.297-.15-1.756-.867-2.03-.967s-.47-.15-.67.15c-.197.3-.767.967-.94 1.17-.17.2-.347.22-.643.075-.296-.15-1.25-.46-2.38-1.47a8.91 8.91 0 0 1-1.65-2.02c-.173-.3 0-.46.13-.61.134-.134.3-.347.44-.52.147-.173.197-.3.3-.5.1-.2.05-.375-.025-.52-.075-.15-.67-1.61-.92-2.2-.244-.587-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375s-1.04 1.02-1.04 2.48 1.064 2.88 1.21 3.08c.15.2 2.08 3.18 5.04 4.46 2.03.88 2.83.95 3.84.8.62-.1 1.756-.717 2.003-1.41.25-.693.25-1.287.175-1.41-.075-.12-.273-.197-.57-.347z" />
									</svg>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
