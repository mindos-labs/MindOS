"use client"

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
} from "@chakra-ui/react"
import { FaBrain, FaBolt, FaLock, FaArrowRight, FaGithub } from "react-icons/fa"
import { LuCheck } from "react-icons/lu"

export default function Home() {
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
							<Button variant="ghost" size="sm">Log in</Button>
							<Button size="sm" colorPalette="blue">Get Started</Button>
						</HStack>
					</Flex>
				</Container>
			</Box>

			{/* Hero Section */}
			<Container maxW="container.lg" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
				<VStack gap={8} textAlign="center">
					<Box
						px={3}
						py={1}
						bg="blue.subtle"
						color="blue.fg"
						rounded="full"
						fontSize="sm"
						fontWeight="medium"
					>
						v1.0 is now live
					</Box>
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
						<Button size="xl" colorPalette="blue">
							Start Learning Free <Icon as={FaArrowRight} />
						</Button>
						<Button size="xl" variant="outline">
							<Icon as={FaGithub} /> Star on GitHub
						</Button>
					</Stack>

					<Box pt={12}>
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

						<SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
							<FeatureCard
								icon={FaBrain}
								title="Smart Capture"
								description="Instantly capture thoughts. Our AI automatically tags, categorizes, and links your notes."
							/>
							<FeatureCard
								icon={FaBolt}
								title="Instant Recall"
								description="Never forget a thing. Semantic search allows you to find anything you've ever written in milliseconds."
							/>
							<FeatureCard
								icon={FaLock}
								title="Privacy First"
								description="Your data is yours. Local-first architecture ensures your thoughts remain private and secure."
							/>
						</SimpleGrid>
					</VStack>
				</Container>
			</Box>

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
						<Button size="xl" bg="white" color="blue.600" _hover={{ bg: "gray.100" }}>
							Get Started for Free
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
							<Button variant="plain" size="sm" color="fg.muted">Privacy</Button>
							<Button variant="plain" size="sm" color="fg.muted">Terms</Button>
							<Button variant="plain" size="sm" color="fg.muted">Twitter</Button>
						</HStack>
					</Flex>
				</Container>
			</Box>
		</Box>
	)
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
	return (
		<Box p={8} bg="bg.panel" rounded="2xl" shadow="sm" borderWidth="1px">
			<Icon as={icon} boxSize={8} color="blue.500" mb={4} />
			<Heading size="lg" mb={2}>{title}</Heading>
			<Text color="fg.muted">{description}</Text>
		</Box>
	)
}
