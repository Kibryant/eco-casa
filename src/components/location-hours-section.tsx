"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const businessHours = [
	{ day: "Segunda - Sexta", hours: "08:00 - 18:00" },
	{ day: "Sábado", hours: "09:00 - 13:00" },
	{ day: "Domingo", hours: "Fechado" },
];

const contactInfo = [
	{
		icon: MapPin,
		label: "Endereço",
		value:
			"Rua dos Antúrios, n°96, São Francisco, Praia do Sul, Ilhéus - BA, 45655-157, 2° andar, sala 201",
		link: "https://maps.google.com/?q=Rua+dos+Antúrios,+n°96,+São+Francisco,+Praia+do+Sul,+Ilhéus+-+BA,+45655-157",
	},
	{
		icon: Phone,
		label: "Telefone",
		value: "(71) 3280-2554",
		link: "tel:+557132802554",
	},
	{
		icon: Mail,
		label: "Email",
		value: "contato@ecocasa.com.br",
		link: "mailto:contato@ecocasa.com.br",
	},
];

export function LocationHoursSection() {
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
						VISITE-NOS
					</span>
					<h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
						Localização e Horários
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Estamos à disposição para atendê-lo em nossa loja física. Confira
						nosso endereço e horário de funcionamento.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Map */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-primary/10 relative"
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.7978272402606!2d-39.031334773884616!3d-14.836600576564308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739a060539272d9%3A0x22d8c5dcc16881a0!2sR.%20dos%20Ant%C3%BArios%2C%2096%20-%20S%C3%A3o%20Francisco%2C%20Ilh%C3%A9us%20-%20BA%2C%2045655-120!5e0!3m2!1sen!2sbr!4v1741296376719!5m2!1sen!2sbr"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Localização da Eco Casa"
							className="absolute inset-0"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-col justify-between"
					>
						{/* Hours */}
						<div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 mb-8">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
									<Clock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
							</div>

							<div className="space-y-4">
								{businessHours.map((item, index) => (
									<div
										key={item.day}
										className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
									>
										<span className="font-medium">{item.day}</span>
										<span
											className={`${item.hours === "Fechado" ? "text-red-500" : "text-primary"} font-semibold`}
										>
											{item.hours}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Contact Info */}
						<div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10">
							<h3 className="text-2xl font-bold mb-6">
								Informações de Contato
							</h3>

							<div className="space-y-6">
								{contactInfo.map((item, index) => (
									<motion.div
										key={item.label}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
										className="flex items-start gap-4"
									>
										<div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
											<item.icon className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground">
												{item.label}
											</p>
											<a
												href={item.link}
												target={item.icon === MapPin ? "_blank" : undefined}
												rel={
													item.icon === MapPin
														? "noopener noreferrer"
														: undefined
												}
												className="font-medium hover:text-primary transition-colors"
											>
												{item.value}
											</a>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
