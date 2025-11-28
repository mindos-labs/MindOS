"use client"

import { Box, Container, VStack, Heading, Text, Button, HStack, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
import ShineBorder from "@/components/ui/shine-border"
import { FaRocket, FaCheck } from "react-icons/fa"

const benefits = [
    "Free forever for individual learners",
    "No credit card required",
    "Access to all premium features",
    "Join 10,000+ active students",
]

export function CTASection() {
    return (
        <Box py={32} bg="bg.canvas" position="relative" overflow="hidden">
            <Container maxW="container.lg">
                <ShineBorder
                    className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#667eea", "#764ba2", "#f093fb"]}
                >
                    <Box
                        p={{ base: 12, md: 20 }}
                        textAlign="center"
                        position="relative"
                        w="full"
                        bg="linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
                    >
                        <VStack gap={8}>
                            {/* Icon */}
                            <Box
                                p={4}
                                bg="blue.500"
                                rounded="full"
                                display="inline-block"
                                animation="bounce 2s infinite"
                            >
                                <Icon as={FaRocket} boxSize={12} color="white" />
                            </Box>

                            <VStack gap={4}>
                                <Heading size="5xl" fontWeight="bold" lineHeight="1.2">
                                    Ready to Upgrade <br />
                                    <Box as="span" bgGradient="to-r" gradientFrom="blue.500" gradientTo="purple.500" bgClip="text">
                                        Your Learning?
                                    </Box>
                                </Heading>

                                <Text fontSize="xl" color="fg.muted" maxW="xl">
                                    Join thousands of students who are learning faster, remembering longer,
                                    and achieving their academic goals with MindOS.
                                </Text>
                            </VStack>

                            {/* Benefits List */}
                            <VStack gap={2} pt={4}>
                                {benefits.map((benefit, index) => (
                                    <HStack key={index} gap={3}>
                                        <Icon as={FaCheck} color="green.500" boxSize={5} />
                                        <Text fontSize="md" fontWeight="medium">
                                            {benefit}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>

                            {/* CTA Buttons */}
                            <HStack gap={4} pt={6}>
                                <Button
                                    size="2xl"
                                    colorPalette="blue"
                                    fontSize="lg"
                                    px={8}
                                    py={7}
                                    asChild
                                >
                                    <Link href="/handler/sign-up">
                                        Get Started for Free <ArrowRight animateOnHover size={24} className="inline-block ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    size="2xl"
                                    variant="outline"
                                    fontSize="md"
                                    px={8}
                                    py={7}
                                    asChild
                                >
                                    <Link href="/handler/sign-in">
                                        Sign In
                                    </Link>
                                </Button>
                            </HStack>

                            <Text fontSize="xs" color="fg.muted" pt={4}>
                                Start your learning journey in less than 60 seconds
                            </Text>
                        </VStack>
                    </Box>
                </ShineBorder>
            </Container>

            <style jsx>{`
				@keyframes bounce {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-10px); }
				}
			`}</style>
        </Box>
    )
}
