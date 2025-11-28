import { Box } from "@chakra-ui/react"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CTASection } from "@/components/landing/cta-section"
import { LandingFooter } from "@/components/landing/landing-footer"
import TechniquesShowcase from "@/components/landing-new/TechniquesShowcase"
import HowItWorksSection from "@/components/landing-new/HowItWorksSection"
import StatsSection from "@/components/landing-new/StatsSection"

export default function Home() {
	return (
		<Box minH="100vh" bg="bg.canvas">
			<LandingNavbar />
			<HeroSection />
			<FeaturesSection />
			<TechniquesShowcase />
			<HowItWorksSection />
			<StatsSection />
			<CTASection />
			<LandingFooter />
		</Box>
	)
}
