"use client"

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Icon,
} from "@chakra-ui/react"
import { FaBrain, FaChartLine, FaRocket, FaUsers } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"

const stats = [
    {
        value: 15,
        suffix: "",
        label: "Science-Backed Techniques",
        description: "From Spaced Repetition to Feynman",
        icon: FaBrain,
        color: "blue.500",
    },
    {
        value: 98,
        suffix: "%",
        label: "Retention Improvement",
        description: "Students remember what they learn",
        icon: FaChartLine,
        color: "green.500",
    },
    {
        value: 100,
        suffix: "%",
        label: "AI-Powered Learning",
        description: "Custom study plans for every goal",
        icon: FaRocket,
        color: "purple.500",
    },
    {
        value: 10000,
        suffix: "+",
        label: "Active Learners",
        description: "Join our growing community",
        icon: FaUsers,
        color: "orange.500",
    },
]

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const duration = 2000
                    const steps = 60
                    const increment = value / steps
                    let current = 0

                    const timer = setInterval(() => {
                        current += increment
                        if (current >= value) {
                            setCount(value)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(current))
                        }
                    }, duration / steps)

                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [value, hasAnimated])

    return (
        <Box ref={ref} fontSize="5xl" fontWeight="bold" lineHeight="1">
            {count.toLocaleString()}
            <Box as="span">{suffix}</Box>
        </Box>
    )
}

export function StatsSection() {
    const StatCard = ({ stat }: { stat: typeof stats[0] }) => (
        <Box
            p={8}
            bg="whiteAlpha.200"
            backdropFilter="blur(20px)"
            rounded="2xl"
            borderWidth="1px"
            borderColor="whiteAlpha.300"
            shadow="2xl"
            textAlign="center"
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-8px) scale(1.02)",
                shadow: "2xl",
                bg: "whiteAlpha.300",
            }}
        >
            <VStack gap={4}>
                <Box
                    p={4}
                    bg={stat.color}
                    rounded="full"
                    display="inline-block"
                >
                    <Icon as={stat.icon} boxSize={8} color="white" />
                </Box>

                <CountingNumber value={stat.value} suffix={stat.suffix} />

                <VStack gap={1}>
                    <Text fontSize="xl" fontWeight="semibold">
                        {stat.label}
                    </Text>
                    <Text fontSize="sm" opacity={0.9}>
                        {stat.description}
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )

    return (
        <Box py={24} bgGradient="to-br" gradientFrom="blue.600" gradientTo="purple.700" color="white" position="relative" overflow="hidden">
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            The Numbers Speak for Themselves
                        </Heading>
                        <Text fontSize="xl" opacity={0.95} maxW="2xl">
                            Built on cognitive science research and proven memory techniques, trusted by thousands
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </SimpleGrid>

                    <Box textAlign="center" pt={8}>
                        <Text fontSize="sm" opacity={0.9}>
                            Real results from 10,000+ students across 50+ universities worldwide
                        </Text>
                    </Box>
                </VStack>
            </Container>

            {/* Decorative circles */}
            <Box
                position="absolute"
                top="-10%"
                right="-5%"
                w="400px"
                h="400px"
                bg="whiteAlpha.100"
                rounded="full"
                filter="blur(60px)"
            />
            <Box
                position="absolute"
                bottom="-10%"
                left="-5%"
                w="300px"
                h="300px"
                bg="whiteAlpha.100"
                rounded="full"
                filter="blur(60px)"
            />
        </Box>
    )
}
