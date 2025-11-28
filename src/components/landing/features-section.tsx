"use client"

import { Box, Container, VStack, SimpleGrid, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Brain, Zap } from "lucide-react"
import { Lock } from "@/components/animate-ui/icons/lock"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { FeatureCard } from "./feature-card"

export function FeaturesSection() {
    return (
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
    )
}
