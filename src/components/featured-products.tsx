"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const whatsappNumber = "5573982135734";

const featuredProducts = [
	{
		id: 1,
		name: "Porta Sincolors Laqueado Cinza Grafite",
		price: "R$ 1.299,00",
		image: "/porta-destaque.webp?height=600&width=600",
		rating: 4.8,
		reviews: 124,
		tag: "Mais Vendido",
	},
	{
		id: 2,
		name: "Ripado Lesco",
		price: "R$ 189,90",
		originalPrice: "R$ 249,90",
		image: "/revestimento-1.webp?height=600&width=600",
		rating: 4.9,
		reviews: 86,
		tag: "Oferta",
	},
	{
		id: 3,
		name: "Biombo e Divisória",
		price: "R$ 399,00",
		image: "/biombo-3.jpg?height=600&width=600",
		rating: 4.7,
		reviews: 53,
		tag: "Novo",
	},
	{
		id: 4,
		name: "Lesco Green Deck",
		price: "R$ 129,90",
		image: "/deck-destaque.jpg?height=600&width=600",
		rating: 4.6,
		reviews: 78,
		tag: "Exclusivo",
	},
].map((product) => ({
	...product,
	link: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Olá, eu quero saber mais sobre a ${product.name}!`)}`,
}));

export function FeaturedProducts() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium mb-4 block">
						NOSSOS DESTAQUES
					</span>
					<h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
						Produtos em Destaque
					</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						Descubra nossa seleção exclusiva de produtos inovadores,
						cuidadosamente escolhidos para transformar sua casa em um ambiente
						mais ecológico e elegante. Cada item é projetado com materiais de
						alta qualidade e práticas de produção responsáveis, garantindo
						durabilidade e sofisticação.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredProducts.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative group bg-background rounded-xl border border-primary/10 overflow-hidden hover:shadow-lg transition-all duration-300"
						>
							<div className="absolute top-3 left-3 z-50">
								<span
									className={`text-xs font-medium px-2 py-1 rounded-full ${
										product.tag === "Oferta"
											? "bg-red-500 text-white"
											: product.tag === "Mais Vendido"
												? "bg-amber-500 text-white"
												: product.tag === "Novo"
													? "bg-blue-500 text-white"
													: "bg-primary text-white"
									}`}
								>
									{product.tag}
								</span>
							</div>

							<div className="relative h-64 overflow-hidden">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>

							<div className="p-4">
								<div className="flex items-center mb-2">
									<div className="flex items-center text-amber-500">
										<Star className="h-4 w-4 fill-current" />
										<span className="ml-1 text-sm font-medium">
											{product.rating}
										</span>
									</div>
									<span className="mx-2 text-muted-foreground">•</span>
									<span className="text-sm text-muted-foreground">
										{product.reviews} avaliações
									</span>
								</div>

								<h3 className="font-medium mb-2 line-clamp-2 h-12">
									{product.name}
								</h3>

								<a
									href={product.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										className="flex flex-row w-full gap-2 justify-center items-center bg-primary text-white hover:bg-primary/90"
										size="default"
									>
										Conhecer mais
									</Button>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
