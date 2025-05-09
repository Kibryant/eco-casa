import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Script from "next/script";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Eco Casa",
	description:
		"Descubra nossa seleção exclusiva de produtos inovadores, cuidadosamente escolhidos para transformar sua casa em um ambiente mais ecológico e elegante. Cada item é projetado com materiais de alta qualidade e práticas de produção responsáveis, garantindo durabilidade e sofisticação.",
	verification: {
		other: {
			"facebook-domain-verification": "ysyjdrxmi0h2grgk9sj5xgcen5aqbq",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta
					name="facebook-domain-verification"
					content="ysyjdrxmi0h2grgk9sj5xgcen5aqbq"
				/>
				<Script id="fb-pixel" strategy="afterInteractive">
					{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1849784785810826');
            fbq('track', 'PageView');
          `}
				</Script>
				{/* Suporte a quem tem JS desabilitado */}
				<noscript
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{
						__html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1849784785810826&ev=PageView&noscript=1"
            />`,
					}}
				/>
			</head>

			<body className={`${montserrat.variable} antialiased`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
