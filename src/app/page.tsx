import { Box } from "@chakra-ui/react"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { WhyMindosSection } from "@/components/landing/why-mindos-section"
import { ScienceSection } from "@/components/landing/science-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import { LandingFooter } from "@/components/landing/landing-footer"
import TechniquesShowcase from "@/components/landing-new/TechniquesShowcase"
import HowItWorksSection from "@/components/landing-new/HowItWorksSection"

export default function Home() {
	return (
		<Box minH="100vh" bg="bg.canvas">
			<LandingNavbar />
			<HeroSection />
			<WhyMindosSection />
			<ScienceSection />
			<TestimonialsSection />
			<SocialProofSection />
			<TechniquesShowcase />
			<HowItWorksSection />
			<StatsSection />
			<CTASection />
			<LandingFooter />
		</Box>
	)
}
