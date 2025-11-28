"use client"

import { Box, Container, VStack, Heading, Text, Button, HStack, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
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
                <Box
                    p={{ base: 12, md: 20 }}
                    textAlign="center"
                    position="relative"
                    w="full"
                    bgGradient="to-br"
                    gradientFrom="blue.500"
                    gradientTo="purple.600"
                    rounded="3xl"
                    shadow="2xl"
                    overflow="hidden"
                >
                    <VStack gap={8} position="relative" zIndex={1} color="white">
                        {/* Icon */}
                        <Box
                            p={4}
                            bg="whiteAlpha.300"
                            rounded="full"
                            display="inline-block"
                            animation="bounce 2s infinite"
                            backdropFilter="blur(10px)"
                        >
                            <Icon as={FaRocket} boxSize={12} />
                        </Box>

                        <VStack gap={4}>
                            <Heading size="5xl" fontWeight="bold" lineHeight="1.2">
                                Ready to Upgrade <br />
                                Your Learning?
                            </Heading>

                            <Text fontSize="xl" opacity={0.95} maxW="xl">
                                Join thousands of students who are learning faster, remembering longer,
                                and achieving their academic goals with MindOS.
                            </Text>
                        </VStack>

                        {/* Benefits List */}
                        <VStack gap={2} pt={4}>
                            {benefits.map((benefit, index) => (
                                <HStack key={index} gap={3}>
                                    <Icon as={FaCheck} color="green.300" boxSize={5} />
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
                                bg="white"
                                color="blue.600"
                                fontSize="lg"
                                px={8}
                                py={7}
                                _hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
                                transition="all 0.2s"
                                shadow="lg"
                                asChild
                            >
                                <Link href="/handler/sign-up">
                                    Get Started for Free <ArrowRight animateOnHover size={24} className="inline-block ml-2" />
                                </Link>
                            </Button>
                            <Button
                                size="2xl"
                                variant="outline"
                                borderColor="white"
                                color="white"
                                fontSize="md"
                                px={8}
                                py={7}
                                _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                                transition="all 0.2s"
                                asChild
                            >
                                <Link href="/handler/sign-in">
                                    Sign In
                                </Link>
                            </Button>
                        </HStack>

                        <Text fontSize="xs" opacity={0.9} pt={4}>
                            Start your learning journey in less than 60 seconds
                        </Text>
                    </VStack>

                    {/* Decorative elements */}
                    <Box
                        position="absolute"
                        top="-20%"
                        right="-10%"
                        w="300px"
                        h="300px"
                        bg="whiteAlpha.200"
                        rounded="full"
                        filter="blur(80px)"
                    />
                    <Box
                        position="absolute"
                        bottom="-20%"
                        left="-10%"
                        w="250px"
                        h="250px"
                        bg="whiteAlpha.200"
                        rounded="full"
                        filter="blur(80px)"
                    />
                </Box>
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
