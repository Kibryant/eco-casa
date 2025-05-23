import { Banner } from "@/components/banner";
import { CategoryNav } from "@/components/category-nav";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import { PartnersSection } from "@/components/partners-section";
import { WhatsappBanner } from "@/components/whatsapp-banner";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<HeroSection />
			<CategoryNav />
			<Banner />
			<FeaturedProducts />
			<WhatsappBanner />
            <PartnersSection />
            <NewsletterSection />
		</main>
	);
}
