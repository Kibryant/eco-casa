"use client";

import { HeroCategory } from "@/components/hero-category";
import { CategorySummary } from "@/components/category-summary";
import { ProductAdvantages } from "@/components/product-advantages";
import { CategoryProducts } from "@/components/category-products";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { ContactCTA } from "@/components/contact-cta";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function RevestimentosPage() {
	const categoryData = {
		title: "Revestimentos",
		description:
			"Transforme seus ambientes com texturas e materiais sustentáveis",
		image: "/background-header-revestimentos.webp?height=600&width=1920",
		summary: {
			title: "Revestimentos: Sofisticação, Versatilidade e Qualidade",
			description:
				"Oferecemos uma seleção completa de revestimentos para transformar qualquer ambiente com elegância e funcionalidade. Trabalhamos com materiais inovadores e sustentáveis, proporcionando soluções que aliam design sofisticado, durabilidade e alta performance. Seja para um projeto residencial ou comercial, nossos brises, ripados, cerâmicas, porcelanatos, forros, pisos vinílicos, placas flexíveis e tijolos rústicos ecológicos são escolhas ideais para quem busca acabamentos impecáveis e exclusivos. Descubra a melhor opção para o seu espaço e dê um toque de personalidade e requinte ao seu projeto com  qualidade e excelência ",
			features: [
				"Materiais reciclados",
				"Variedade de texturas e acabamentos",
				"Fácil instalação e manutenção",
				"Propriedades térmicas e acústicas",
			],
			image: "/background-header-revestimentos.webp?height=600&width=800",
		},
		advantages: [
			{
				title: "Materiais Inovadores",
				description:
					"Utilizamos fibras naturais de última geração.",
				icon: "Recycle",
			},
			{
				title: "Qualidade do Ar Interior",
				description:
					"Produtos livres de COVs e formaldeídos, contribuindo para ambientes mais saudáveis.",
				icon: "Wind",
			},
			{
				title: "Eficiência Energética",
				description:
					"Propriedades isolantes que ajudam a manter a temperatura ideal e reduzir o consumo de energia.",
				icon: "Zap",
			},
			{
				title: "Versatilidade Estética",
				description:
					"Ampla gama de cores, texturas e padrões para atender a diferentes estilos de design.",
				icon: "Palette",
			},
		],
		products: [
			{
				id: 1,
				name: "Ripado | Lesco",
				description:
					"Painéis tridimensionais que criam efeitos visuais impressionantes",
				image: "/revestimento-1.webp?height=600&width=600",
				features: ["Efeito 3D", "Instalação modular", "Tratamento anti-chamas"],
			},
			{
				id: 2,
				name: "Placa Flexível | Wallboard",
				description:
					"Painéis produzidos com madeira de demolição e reaproveitamento",
				image: "/revestimento-2.webp?height=600&width=600",
				features: [
					"Aparência vintage",
					"História única",
					"Baixo impacto ambiental",
				],
			},
			{
				id: 3,
				name: "Revestimento Sevilha | Tijox",
				description:
					"Revestimento cerâmico com aparência de tijolo, ideal para áreas externas",
				image: "/revestimento-3.webp?height=600&width=600",
				features: ["100% natural", "Textura orgânica", "Impermeável"],
			},

			{
				id: 4,
				name: "Revestimento Piscina | Eliane",
				description:
					"Revestimento cerâmico ideal para áreas molhadas e externas",
				image: "/revestimento-4.webp?height=600&width=600",
				features: ["Resistente à umidade", "Antimofo", "Diversas texturas"],
			},
		],
		portfolio: [
			{
				id: 1,
				title: "Pétra",
				description:
					"O Pétra é um empreendimento projetado pela Construtora Almeida Carneiro com foco na integração entre arquitetura, funcionalidade e paisagem. Localizado à beira-mar, o projeto combina técnicas arquitetônicas e materiais pensados para proporcionar conforto e elegância aos moradores.",
				image: "/background-header-revestimentos.webp?height=600&width=800",
				location: "Ilhéus, BA",
			},
			{
				id: 2,
				title: "Farani 221",
				description:
					"O Farani 221 representa o ápice da arquitetura de luxo, um projeto da renomada grife Almeida Carneiro que se destaca por sua localização privilegiada e acabamentos impecáveis. Cada detalhe deste empreendimento foi cuidadosamente planejado para oferecer uma experiência única de conforto e sofisticação, refletindo um estilo de vida que combina tradição e inovação.",
				image: "/farani.jpg?height=600&width=800",
				location: "Ilhéus, BA",
			},
		],
	};

	const pisosVinilicos = [
		{
			title: "Madeira Nobre",
			description:
				"Texturas realistas que imitam madeira e outros materiais naturais.",
		},
		{
			title: "Alta Resistência",
			description:
				"Alta durabilidade e resistência à umidade, riscos e manchas.",
		},
		{
			title: "Durabilidade Excepcional",
			description:
				"Conforto térmico e acústico, tornando os ambientes mais agradáveis.",
		},
		{
			title: "Sustentabilidade",
			description:
				"Madeiras de manejo responsável, garantindo um impacto ambiental reduzido.",
		},
		{
			title: "Acabamento Superior",
			description:
				"Fácil manutenção, ideal para quem busca praticidade no dia a dia.",
		},
	];

	return (
		<main className="flex flex-col min-h-screen">
			<HeroCategory
				title={categoryData.title}
				description={categoryData.description}
				image={categoryData.image}
			/>
			<CategorySummary
				title={categoryData.summary.title}
				description={categoryData.summary.description}
				features={categoryData.summary.features}
				image={categoryData.summary.image}
			/>

			<section className="py-24">
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg z-0" />
							<div className="relative h-[500px] rounded-lg overflow-hidden z-10">
								<Image
									src="/piso-vinilico.jpg?height=600&width=800"
									fill
									className="object-cover"
									alt=""
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="order-1 lg:order-2"
						>
							<h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
								Piso Vinílico: Beleza, Conforto e Resistência
							</h2>

							<p className="text-foreground/70 mb-8">
								Oferecemos as melhores soluções em pisos vinílicos, garantindo
								uma experiência única para seus ambientes. Nossas coleções
								oferecem uma ampla variedade de cores, texturas e padrões que
								reproduzem fielmente a beleza da natureza, trazendo aconchego e
								sofisticação para qualquer espaço. Cada detalhe é pensado para
								proporcionar o máximo de conforto e praticidade:
							</p>

							<div className="space-y-4">
								{pisosVinilicos.map((item, index) => (
									<motion.div
										key={`feature-${index + 1}`}
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.2 }}
										className="flex items-start space-x-4"
									>
										<CheckCircle className="w-6 h-6 text-primary" />
										<div>
											<h3 className="text-lg font-semibold">{item.description}</h3>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<ProductAdvantages advantages={categoryData.advantages} />
			<CategoryProducts products={categoryData.products} />
			<ProjectPortfolio projects={categoryData.portfolio} />
			<ContactCTA />
		</main>
	);
}
