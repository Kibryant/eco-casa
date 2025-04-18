"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const partners = [
	{
		id: 1,
		name: "Sincol",
		logo: "/1.png?height=800&width=800",
		instagram: "https://instagram.com/sincol_sa",
	},
	{
		id: 2,
		name: "Carpiso",
		logo: "/2.png?height=800&width=800",
		instagram: "https://instagram.com/empresa2",
	},
	{
		id: 3,
		name: "ATS",
		logo: "/3.png?height=800&width=800",
		instagram: "https://www.instagram.com/ats.dbs",
	},
	{
		id: 4,
		name: "Lesco",
		logo: "/4.jpg?height=800&width=800",
		instagram: "https://www.instagram.com/lesco_br",
	},
	{
		id: 5,
		name: "Quick Step",
		logo: "/5.png?height=800&width=800",
		instagram: "https://www.instagram.com/quickstep_brasil",
	},
	{
		id: 6,
		name: "Audaz",
		logo: "/6.png?height=800&width=800",
		instagram: "https://www.instagram.com/audaz.pro",
	},
	{
		id: 7,
		name: "Tijox",
		logo: "/7.png?height=800&width=800",
		instagram: "https://www.instagram.com/tijox.oficial",
	},
];

export function PartnersSection() {
	const [hoveredId, setHoveredId] = useState<number | null>(null);

	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium mb-4 block">
						PARCERIAS EXCLUSIVAS
					</span>
					<h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
						Marcas que Confiam na Eco Casa
					</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">
						A Eco Casa estabelece parcerias com empresas de destaque tanto no
						Brasil quanto no exterior, com o objetivo de atender às necessidades
						de construtores, designers e arquitetos. Além de facilitar a vida de
						pessoas que buscam o acabamento ideal para suas construções.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
					{partners.map((partner, index) => (
						<motion.div
							key={partner.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative group"
							onMouseEnter={() => setHoveredId(partner.id)}
							onMouseLeave={() => setHoveredId(null)}
						>
							<Link
								href={partner.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="block relative  bg-white rounded-lg p-4 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
								aria-label={`Visite o Instagram de ${partner.name}`}
							>
								<div className="relative h-full w-full">
									<Image
										src={partner.logo}
										alt={partner.name}
                                        width={800}
                                        height={400}
										className="object-contain"
									/>
								</div>

								<div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="bg-white rounded-full p-2 shadow-md">
										<Instagram className="h-5 w-5 text-primary" />
									</div>
								</div>
							</Link>

							<div
								className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-md text-xs whitespace-nowrap z-10 transition-opacity duration-200 ${
									hoveredId === partner.id
										? "opacity-100"
										: "opacity-0 pointer-events-none"
								}`}
							>
								{partner.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
