import { StartSection } from "@/components/start-section"
import { WelcomeSection } from "@/components/welcome-section"
import { AboutContent } from "@/components/about-content"
import { FeaturesProjects } from "@/components/features-projects"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationHoursSection } from "@/components/location-hours-section"

export default function WhoWeAre() {
  return (
    <main className="flex flex-col min-h-screen">
      <StartSection />
      <WelcomeSection />
      <AboutContent />
      <FeaturesProjects />
      <TestimonialsSection />
      <LocationHoursSection />
    </main>
  )
}

