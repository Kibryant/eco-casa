"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Check, Mail, Send } from "lucide-react";

// Lista de estados brasileiros
const estados = [
	{ value: "AC", label: "Acre" },
	{ value: "AL", label: "Alagoas" },
	{ value: "AP", label: "Amapá" },
	{ value: "AM", label: "Amazonas" },
	{ value: "BA", label: "Bahia" },
	{ value: "CE", label: "Ceará" },
	{ value: "DF", label: "Distrito Federal" },
	{ value: "ES", label: "Espírito Santo" },
	{ value: "GO", label: "Goiás" },
	{ value: "MA", label: "Maranhão" },
	{ value: "MT", label: "Mato Grosso" },
	{ value: "MS", label: "Mato Grosso do Sul" },
	{ value: "MG", label: "Minas Gerais" },
	{ value: "PA", label: "Pará" },
	{ value: "PB", label: "Paraíba" },
	{ value: "PR", label: "Paraná" },
	{ value: "PE", label: "Pernambuco" },
	{ value: "PI", label: "Piauí" },
	{ value: "RJ", label: "Rio de Janeiro" },
	{ value: "RN", label: "Rio Grande do Norte" },
	{ value: "RS", label: "Rio Grande do Sul" },
	{ value: "RO", label: "Rondônia" },
	{ value: "RR", label: "Roraima" },
	{ value: "SC", label: "Santa Catarina" },
	{ value: "SP", label: "São Paulo" },
	{ value: "SE", label: "Sergipe" },
	{ value: "TO", label: "Tocantins" },
];

// Opções de profissão relacionadas ao ramo
const profissoes = [
	{ value: "arquiteto", label: "Arquiteto(a)" },
	{ value: "designer", label: "Designer de Interiores" },
	{ value: "engenheiro", label: "Engenheiro(a) Civil" },
	{ value: "construtor", label: "Construtor(a)" },
	{ value: "paisagista", label: "Paisagista" },
	{ value: "decorador", label: "Decorador(a)" },
	{ value: "lojista", label: "Lojista" },
	{ value: "incorporador", label: "Incorporador(a)" },
	{ value: "cliente", label: "Cliente Final" },
	{ value: "estudante", label: "Estudante" },
	{ value: "outro", label: "Outro" },
];

export function NewsletterForm() {
	const [formData, setFormData] = useState({
		email: "",
		telefone: "",
		estado: "",
		profissao: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		// Formatação específica para telefone
		if (name === "telefone") {
			// Remove tudo que não é número
			let numericValue = value.replace(/\D/g, "");

			// Limita a 11 dígitos (2 para DDD + 9 para o número)
			numericValue = numericValue.slice(0, 11);

			// Formata como (XX) XXXXX-XXXX
			let formattedValue = numericValue;
			if (numericValue.length > 2) {
				formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
			}
			if (numericValue.length > 7) {
				formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
			}

			setFormData((prev) => ({ ...prev, [name]: formattedValue }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}

		// Limpa o erro do campo quando o usuário começa a digitar
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Limpa o erro do campo quando o usuário seleciona uma opção
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		// Validação de email
		if (!formData.email) {
			newErrors.email = "O email é obrigatório";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email inválido";
		}

		// Validação de telefone
		if (!formData.telefone) {
			newErrors.telefone = "O telefone é obrigatório";
		} else if (formData.telefone.replace(/\D/g, "").length < 10) {
			newErrors.telefone = "Telefone inválido";
		}

		// Validação de estado
		if (!formData.estado) {
			newErrors.estado = "Selecione um estado";
		}

		// Validação de profissão
		if (!formData.profissao) {
			newErrors.profissao = "Selecione sua profissão";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		try {
			// Aqui você implementaria a lógica para enviar os dados para seu backend
			// Por exemplo:
			// await fetch('/api/newsletter', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(formData)
			// })

			// Simulando um delay de envio
			await new Promise((resolve) => setTimeout(resolve, 1500));

			setIsSubmitted(true);
			// Opcional: resetar o formulário
			setFormData({
				email: "",
				telefone: "",
				estado: "",
				profissao: "",
			});
		} catch (error) {
			console.error("Erro ao enviar formulário:", error);
			// Aqui você poderia adicionar uma mensagem de erro
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="container mx-auto px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="text-center mb-12"
			>
				<span className="text-white font-medium mb-4 block">
					FIQUE POR DENTRO
				</span>
				<h2 className="text-white text-4xl md:text-5xl font-display font-bold mb-6">
					Receba Nossas Novidades
				</h2>
				<p className="text-white max-w-2xl mx-auto">
					Cadastre-se para receber em primeira mão nossas novidades, lançamentos
					de produtos, dicas de sustentabilidade e ofertas exclusivas.
				</p>
			</motion.div>

			<div className="max-w-3xl mx-auto">
				{isSubmitted ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="bg-primary/10 rounded-xl p-8 text-center"
					>
						<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
							<Check className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-2xl font-bold mb-4">Inscrição Confirmada!</h3>
						<p className="text-muted-foreground mb-6">
							Obrigado por se inscrever em nossa newsletter. Em breve você
							começará a receber nossas novidades e conteúdos exclusivos.
						</p>
						<Button
							variant="outline"
							onClick={() => setIsSubmitted(false)}
							className="mx-auto"
						>
							Fazer nova inscrição
						</Button>
					</motion.div>
				) : (
					<motion.form
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						onSubmit={handleSubmit}
						className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary/10"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="email">
									Email <span className="text-red-500">*</span>
								</Label>
								<div className="relative">
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="seu@email.com"
										value={formData.email}
										onChange={handleInputChange}
										className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
									/>
									<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								</div>
								{errors.email && (
									<p className="text-red-500 text-sm">{errors.email}</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="telefone">
									Telefone com DDD <span className="text-red-500">*</span>
								</Label>
								<Input
									id="telefone"
									name="telefone"
									type="tel"
									placeholder="(00) 00000-0000"
									value={formData.telefone}
									onChange={handleInputChange}
									className={
										errors.telefone
											? "border-red-500 focus-visible:ring-red-500"
											: ""
									}
								/>
								{errors.telefone && (
									<p className="text-red-500 text-sm">{errors.telefone}</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="estado">
									Estado <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.estado}
									onValueChange={(value) => handleSelectChange("estado", value)}
								>
									<SelectTrigger
										id="estado"
										className={
											errors.estado
												? "border-red-500 focus-visible:ring-red-500"
												: ""
										}
									>
										<SelectValue placeholder="Selecione seu estado" />
									</SelectTrigger>
									<SelectContent>
										{estados.map((estado) => (
											<SelectItem key={estado.value} value={estado.value}>
												{estado.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{errors.estado && (
									<p className="text-red-500 text-sm">{errors.estado}</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="profissao">
									Profissão <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.profissao}
									onValueChange={(value) =>
										handleSelectChange("profissao", value)
									}
								>
									<SelectTrigger
										id="profissao"
										className={
											errors.profissao
												? "border-red-500 focus-visible:ring-red-500"
												: ""
										}
									>
										<SelectValue placeholder="Selecione sua profissão" />
									</SelectTrigger>
									<SelectContent>
										{profissoes.map((profissao) => (
											<SelectItem key={profissao.value} value={profissao.value}>
												{profissao.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{errors.profissao && (
									<p className="text-red-500 text-sm">{errors.profissao}</p>
								)}
							</div>
						</div>

						<div className="mt-8">
							<Button
								type="submit"
								className="w-full md:w-auto bg-primary hover:bg-primary/90 py-2 px-6 text-white"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<title>Ícone de envio</title>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										Enviando...
									</>
								) : (
									<>
										Inscrever-se
										<Send className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</div>

						<div className="mt-6 text-center text-sm text-muted-foreground">
							Ao se inscrever, você concorda em receber comunicações da Eco Casa
							de acordo com nossa
							<a
								href="/politica-de-privacidade"
								className="text-primary hover:underline"
							>
								{" "}
								Política de Privacidade
							</a>
							.
						</div>
					</motion.form>
				)}
			</div>
		</div>
	);
}
