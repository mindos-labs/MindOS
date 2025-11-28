"use client"

import * as React from "react"
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	SimpleGrid,
	Stack,
	Text,
	VStack,
	HStack,
	Link as ChakraLink,
} from "@chakra-ui/react"
import { Brain, Zap, Github } from "lucide-react"
import { LuCheck } from "react-icons/lu"
import { useUser, UserButton } from "@stackframe/stack"
import Link from "next/link"
import Image from "next/image"
import TechniquesShowcase from "@/components/landing-new/TechniquesShowcase"
import HowItWorksSection from "@/components/landing-new/HowItWorksSection"
import StatsSection from "@/components/landing-new/StatsSection"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
import { Lock } from "@/components/animate-ui/icons/lock"
import { useIsInView } from "@/hooks/use-is-in-view"

export default function Home() {
	const user = useUser();

	return (
		<Box minH="100vh" bg="bg.canvas">
			{/* Navbar */}
			<Box as="nav" py={4} position="sticky" top={0} zIndex={10} bg="bg.panel/80" backdropFilter="blur(10px)">
				<Container maxW="container.xl">
					<Flex justify="space-between" align="center">
						<Heading size="md" fontWeight="bold" letterSpacing="tight">
							Mindos
						</Heading>
						<HStack gap={4}>
							<Button variant="ghost" size="sm" asChild>
								<Link href="/mindcloud">MindCloud</Link>
							</Button>
							{user ? (
								<UserButton />
							) : (
								<>
									<Button variant="ghost" size="sm" asChild>
										<Link href="/handler/sign-in">Log in</Link>
									</Button>
									<Button size="sm" colorPalette="blue" asChild>
										<Link href="/handler/sign-up">Get Started</Link>
									</Button>
								</>
							)}
						</HStack>
					</Flex>
				</Container>
			</Box>

			{/* Hero Section */}
			<Container maxW="container.xl" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
				<SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
					<VStack gap={8} textAlign={{ base: "center", lg: "left" }} alignItems={{ base: "center", lg: "flex-start" }}>
						<AnimateIcon animateOnView animateOnViewOnce>
							<Box
								px={3}
								py={1}
								bg="blue.subtle"
								color="blue.fg"
								rounded="full"
								fontSize="sm"
								fontWeight="medium"
								display="inline-block"
							>
								v1.0 is now live.
							</Box>
						</AnimateIcon>
						<Heading
							size="6xl"
							fontWeight="bold"
							lineHeight="1.1"
							letterSpacing="tight"
						>
							Learn Everything. <br />
							<Box as="span" color="blue.500">
								Scientifically. Fast.
							</Box>
						</Heading>
						<Text fontSize="xl" color="fg.muted" maxW="2xl">
							AI-driven note taking and knowledge management for developers.
							Capture ideas, organize thoughts, and retain information with the power of science.
						</Text>
						<Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
							<Button size="xl" colorPalette="blue" asChild>
								<Link href="/handler/sign-up">
									Start Learning Free <ArrowRight animateOnHover size={20} className="inline-block ml-1" />
								</Link>
							</Button>
							<Button size="xl" variant="outline" asChild>
								<Link href="https://github.com/mindos-labs/MindOS" target="_blank">
									<AnimateIcon animateOnHover><Github size={20} className="inline-block mr-1" /></AnimateIcon> Star on GitHub
								</Link>
							</Button>
						</Stack>

						<Box pt={12} display={{ base: "block", lg: "none" }}>
							<Text fontSize="sm" color="fg.muted" mb={4}>Trusted by developers at</Text>
							<Flex gap={8} justify="center" opacity={0.6} wrap="wrap">
								{/* Placeholders for logos - using text for minimal look */}
								<Text fontWeight="bold">ACME</Text>
								<Text fontWeight="bold">Globex</Text>
								<Text fontWeight="bold">Soylent</Text>
								<Text fontWeight="bold">Initech</Text>
							</Flex>
						</Box>
					</VStack>

					{/* Hero Illustration */}
					<Box position="relative" display={{ base: "none", lg: "block" }}>
						<AnimateIcon animateOnView animateOnViewOnce>
							<Box
								position="relative"
								width="100%"
								height="auto"
								opacity={0.95}
								transition="all 0.3s ease"
								_hover={{ opacity: 1, transform: "scale(1.02)" }}
							>
								<Image
									src="/illustration-1.png"
									alt="MindOS AI Knowledge Management Illustration"
									width={600}
									height={600}
									priority
									style={{ width: "100%", height: "auto", borderRadius: "1.5rem" }}
								/>
							</Box>
						</AnimateIcon>
					</Box>
				</SimpleGrid>

				<Box pt={12} display={{ base: "none", lg: "block" }} textAlign="center">
					<Text fontSize="sm" color="fg.muted" mb={4}>Trusted by developers at</Text>
					<Flex gap={8} justify="center" opacity={0.6} wrap="wrap">
						{/* Placeholders for logos - using text for minimal look */}
						<Text fontWeight="bold">ACME</Text>
						<Text fontWeight="bold">Globex</Text>
						<Text fontWeight="bold">Soylent</Text>
						<Text fontWeight="bold">Initech</Text>
					</Flex>
				</Box>
			</Container>

			{/* Features Section */}
			<Box py={24} bg="bg.subtle">
				<Container maxW="container.xl">
					<VStack gap={16}>
						<VStack gap={4} textAlign="center">
							<Heading size="3xl">Why Mindos?</Heading>
							<Text fontSize="lg" color="fg.muted" maxW="2xl">
								We combine cognitive science with advanced AI to help you build a second brain that actually works.
							</Text>
						</VStack>

						<SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
							{/* Feature Cards */}
							<VStack gap={10}>
								<FeatureCard
									icon={Brain}
									title="Smart Capture"
									description="Instantly capture thoughts. Our AI automatically tags, categorizes, and links your notes."
									delay={0}
								/>
								<FeatureCard
									icon={Zap}
									title="Instant Recall"
									description="Never forget a thing. Semantic search allows you to find anything you've ever written in milliseconds."
									delay={150}
								/>
								<FeatureCard
									icon={Lock}
									title="Privacy First"
									description="Your data is yours. Local-first architecture ensures your thoughts remain private and secure."
									delay={300}
								/>
							</VStack>

							{/* Feature Illustration */}
							<Box position="relative" display={{ base: "none", lg: "block" }}>
								<AnimateIcon animateOnView animateOnViewOnce>
									<Box
										position="relative"
										width="100%"
										height="auto"
										opacity={0.95}
										transition="all 0.3s ease"
										_hover={{ opacity: 1, transform: "scale(1.02)" }}
									>
										<Image
											src="/illustration-2.png"
											alt="AI-Powered Learning Features"
											width={600}
											height={600}
											style={{ width: "100%", height: "auto", borderRadius: "1.5rem" }}
										/>
									</Box>
								</AnimateIcon>
							</Box>
						</SimpleGrid>
					</VStack>
				</Container>
			</Box>

			{/* Techniques Showcase */}
			<TechniquesShowcase />

			{/* How It Works */}
			<HowItWorksSection />

			{/* Stats Section */}
			<StatsSection />

			{/* CTA Section */}
			<Container maxW="container.lg" py={24}>
				<Box
					bg="blue.600"
					color="white"
					rounded="3xl"
					p={{ base: 8, md: 16 }}
					textAlign="center"
					position="relative"
					overflow="hidden"
				>
					<VStack gap={6} position="relative" zIndex={1}>
						<Heading size="4xl">Ready to upgrade your mind?</Heading>
						<Text fontSize="xl" opacity={0.9} maxW="xl">
							Join thousands of developers who are learning faster and retaining more.
						</Text>
						<Button size="xl" bg="white" color="blue.600" _hover={{ bg: "gray.100" }} asChild>
							<Link href="/handler/sign-up">
								Get Started for Free <ArrowRight animateOnHover size={20} className="inline-block ml-1" />
							</Link>
						</Button>
					</VStack>
				</Box>
			</Container>

			{/* Footer */}
			<Box borderTopWidth="1px" py={12}>
				<Container maxW="container.xl">
					<Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={4}>
						<Text fontSize="sm" color="fg.muted">
							&copy; {new Date().getFullYear()} Mindos. All rights reserved.
						</Text>
						<HStack gap={6}>
							<Button variant="plain" size="sm" color="fg.muted" asChild>
								<Link href="https://github.com/mindos-labs" target="_blank">GitHub</Link>
							</Button>
							<Button variant="plain" size="sm" color="fg.muted" asChild>
								<Link href="https://github.com/mindos-labs/MindOS" target="_blank">Repository</Link>
							</Button>
							<Button variant="plain" size="sm" color="fg.muted" asChild>
								<Link href="https://mindos.strivio.world" target="_blank">Website</Link>
							</Button>
						</HStack>
					</Flex>
				</Container>
			</Box>
		</Box>
	)
}

function FeatureCard({ icon: IconComponent, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) {
	const ref = React.useRef<HTMLDivElement>(null);
	const { isInView } = useIsInView(ref, {
		inView: true,
		inViewOnce: true,
		inViewMargin: '0px',
	});

	return (
		<Box
			ref={ref}
			p={8}
			bg="bg.panel"
			rounded="2xl"
			shadow="sm"
			borderWidth="1px"
			opacity={isInView ? 1 : 0}
			transform={isInView ? 'translateY(0)' : 'translateY(20px)'}
			transition={`all 0.6s ease-out ${delay}ms`}
		>
			<AnimateIcon animateOnView animateOnViewOnce>
				<IconComponent size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
			</AnimateIcon>
			<Heading size="lg" mb={2}>{title}</Heading>
			<Text color="fg.muted">{description}</Text>
		</Box>
	)
}
