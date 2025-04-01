import { PortfolioHeader } from "@/components/portfolio-header";
import { PortfolioIntro } from "@/components/portfolio-intro";
import { PortfolioCategories } from "@/components/portfolio-categories";
import { FeaturedProjects } from "@/components/featured-projects";
import { ProjectProcess } from "@/components/project-process";
import { ContactCTA } from "@/components/contact-cta";

export default function PortfolioPage() {
	return (
		<main className="flex flex-col min-h-screen">
			<PortfolioHeader />
			<PortfolioIntro />
			<PortfolioCategories />
			<FeaturedProjects />
			<ProjectProcess />
			<ContactCTA />
		</main>
	);
}
