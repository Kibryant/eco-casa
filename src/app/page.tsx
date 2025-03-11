import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedProducts />
    </main>
  )
}

