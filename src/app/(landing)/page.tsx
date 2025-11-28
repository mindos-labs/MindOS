import { Box } from "@chakra-ui/react"
import { HeroSection } from "@/components/landing/hero-section"
import { WhyMindosSection } from "@/components/landing/why-mindos-section"
import { ScienceSection } from "@/components/landing/science-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import TechniquesShowcase from "@/components/landing-new/TechniquesShowcase"
import HowItWorksSection from "@/components/landing-new/HowItWorksSection"

export default function Home() {
	return (
		<Box minH="100vh" bg="bg.canvas">
			<HeroSection />
			<WhyMindosSection />
			<ScienceSection />
			<TestimonialsSection />
			<SocialProofSection />
			<TechniquesShowcase />
			<HowItWorksSection />
			<StatsSection />
			<CTASection />
		</Box>
	)
}
