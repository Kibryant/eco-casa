"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

interface ComplementaryProduct {
	id: number;
	name: string;
	description: string;
	image: string;
	price?: string;
	link: string;
}

interface ComplementaryProductsProps {
	title?: string;
	description?: string;
	products: ComplementaryProduct[];
}

export function ComplementaryProducts({
	title = "Equipamentos e Acessórios",
	description = "Produtos complementares para otimizar sua experiência",
	products,
}: ComplementaryProductsProps) {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium mb-4 block">
						PRODUTOS COMPLEMENTARES
					</span>
					<h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
						{title}
					</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						{description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group bg-background rounded-xl border border-primary/10 overflow-hidden hover:shadow-lg transition-all duration-300"
						>
							<div className="relative h-48 overflow-hidden">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>

							<div className="p-4">
								<h3 className="font-medium text-lg mb-2">{product.name}</h3>
								<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
									{product.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
