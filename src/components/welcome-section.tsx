"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function WelcomeSection() {
	return (
		<section className="py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-primary font-medium mb-6 block">
							BEM-VINDO A ECO CASA
						</span>

						<h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
							Nossa Identidade:
							<br />
							Sustentabilidade e
							<br />
							Inovação
						</h2>

						<div className="border-l-4 border-primary pl-6 mb-8">
							<p className="text-lg text-foreground/80">
								Eco Casa visa atender necessidades de construtores, designers,
								arquitetos nos seguimentos de portas, revestimentos, decks e
								pedras naturais. Com versatilidade conseguimos atender a todos
								os gostos, desde os mais simples aos mais sofisticados, levando
								harmonia e aconchego a sua obra.
							</p>
						</div>

						<p className="text-foreground/70 mb-8">
							Nossa missão é levar harmonia e aconchego á sua residência,
							comércio ou indústria, buscamos integrar a beleza natural dos
							materiais com a funcionalidade necessária para o dia a dia. Nossos
							produtos são desenvolvidos com tecnologia de ponta e um cuidado
							especial para garantir durabilidade, segurança e um design que se
							adapte perfeitamente ao seu espaço, proporcionando um ambiente
							acolhedor e eficiente.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="absolute -bottom-6 -right-6 w-full h-full bg-primary rounded-lg z-0" />

						<div className="relative h-[500px] rounded-lg overflow-hidden z-10">
							<Image
								src="/welcome-image.jpeg"
								alt="Eco Casa Auditorium"
								fill
								className="object-cover"
							/>
							<div className="absolute bottom-0 right-0 bg-primary p-8 flex items-center gap-4 rounded-tl-lg">
								<div className="text-white">
									<Building2 className="h-12 w-12 mb-2" />
								</div>
							</div>
						</div>
					</motion.div>
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
