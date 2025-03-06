import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-background py-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center text-center">
					<div className="relative w-24 h-24 mb-8">
						<Image
							src="/logo.png"
							alt="Eco Casa Logo"
							width={100}
							height={100}
							className="object-contain"
						/>
					</div>

					<div className="flex gap-4 mb-8">
						<Link
							href="https://www.facebook.com/people/ECO-CASA-Revestimentos/61564144720716/"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary p-2 rounded-md hover:bg-primary/90 transition-colors"
							aria-label="Visit our Facebook page"
						>
							<Facebook className="h-5 w-5 text-white" />
						</Link>
						<Link
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary p-2 rounded-md hover:bg-primary/90 transition-colors"
							aria-label="Visit our Twitter profile"
						>
							<Twitter className="h-5 w-5 text-white" />
						</Link>
						<Link
							href="https://youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary p-2 rounded-md hover:bg-primary/90 transition-colors"
							aria-label="Visit our YouTube channel"
						>
							<Youtube className="h-5 w-5 text-white" />
						</Link>
                        <Link
							href="https://www.instagram.com/ecocasa_revestimentos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary p-2 rounded-md hover:bg-primary/90 transition-colors"
							aria-label="Visit our YouTube channel"
						>
							<Instagram className="h-5 w-5 text-white" />
						</Link>
					</div>

					<p className="max-w-3xl mx-auto text-lg mb-8 text-foreground/80">
						Especialistas em madeira ecológica e referência na arquitetura de
						ambientes transformadores e na construção de um mundo mais
						sustentável.
					</p>

					<address className="text-primary mb-4 not-italic">
						Rua dos Antúrios, n°96, São Francisco, Praia do Sul, Ilhéus - BA,
						45655-157, 2° andar, sala 201
					</address>

					<div className="flex flex-col sm:flex-row justify-center gap-4 text-primary">
						<a href="tel:+557132802554" className="hover:underline">
							(71) 3280-2554 - Telefone
						</a>
						<a href="tel:+557194844904" className="hover:underline">
							(73) 98213-5734 Celular
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
