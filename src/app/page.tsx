import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AboutContent } from "@/components/about-content"
import { FeaturesProjects } from "@/components/features-projects"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationHoursSection } from "@/components/location-hours-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <AboutContent />
      <FeaturesProjects />
      <TestimonialsSection />
      <LocationHoursSection />
    </main>
  )
}

