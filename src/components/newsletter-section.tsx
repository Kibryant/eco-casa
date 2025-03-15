import { NewsletterForm } from "./newsletter-form";

export default function NewsletterSection() {
	return (
		<section className="flex flex-col min-h-screen bg-primary py-20">
			<NewsletterForm />
		</section>
	);
}
