"use client"

import { Box, Container, VStack, Heading, Text, HStack } from "@chakra-ui/react"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { FaStar } from "react-icons/fa"

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Computer Science Student, MIT",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        content: "MindOS helped me ace my algorithms exam. The spaced repetition feature is a game-changer. Went from B to A+ in one semester!",
        rating: 5,
    },
    {
        name: "Michael Rodriguez",
        role: "Medical student, Stanford",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        content: "Memorizing anatomy was impossible until I found MindOS. The AI-generated mnemonics and flashcards saved my grades.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Engineering Student, IIT Delhi",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        content: "The knowledge graph visualization is brilliant! I can see how all my concepts connect. Makes learning so much clearer.",
        rating: 5,
    },
    {
        name: "Alex Thompson",
        role: "High School Senior",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        content: "Got into my dream university thanks to MindOS. The study planning and active recall features are perfect for SAT prep.",
        rating: 5,
    },
    {
        name: "Emily Wang",
        role: "MBA Student, Harvard",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        content: "Managing case studies and frameworks is so easy now. The AI tutor chat helps me understand complex business concepts quickly.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Physics PhD Candidate, Caltech",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        content: "The Feynman Technique implementation is perfect. Explaining concepts to the AI really tests my understanding.",
        rating: 5,
    },
]

const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)

function TestimonialCard({ name, role, avatar, content, rating }: typeof testimonials[0]) {
    return (
        <Box
            p={6}
            bg="bg.panel"
            rounded="xl"
            borderWidth="1px"
            shadow="sm"
            w="400px"
            flexShrink={0}
        >
            <VStack align="start" gap={3}>
                <HStack gap={1}>
                    {Array(rating).fill(0).map((_, i) => (
                        <FaStar key={i} color="#fbbf24" size={14} />
                    ))}
                </HStack>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                    "{content}"
                </Text>
                <HStack gap={3}>
                    <img
                        src={avatar}
                        alt={name}
                        width="32"
                        height="32"
                        style={{ borderRadius: '9999px', background: '#e5e7eb' }}
                    />
                    <VStack align="start" gap={0}>
                        <Text fontSize="sm" fontWeight="semibold">{name}</Text>
                        <Text fontSize="xs" color="fg.muted">{role}</Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    )
}

export function TestimonialsSection() {
    return (
        <Box py={24} bg="bg.canvas">
            <Container maxW="container.xl">
                <VStack gap={12}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            Loved by Students Worldwide
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="2xl">
                            Join thousands of students who are learning faster, remembering longer, and achieving their academic goals with MindOS.
                        </Text>
                    </VStack>

                    <Box position="relative" w="full" overflow="hidden">
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {firstRow.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </Marquee>
                        <br /><br />
                        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                            {secondRow.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </Marquee>

                        {/* Gradient overlays for fade effect */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100px"
                            h="full"
                            bgGradient="to-r"
                            gradientFrom="bg.canvas"
                            gradientTo="transparent"
                            pointerEvents="none"
                            zIndex={1}
                        />
                        <Box
                            position="absolute"
                            top={0}
                            right={0}
                            w="100px"
                            h="full"
                            bgGradient="to-l"
                            gradientFrom="bg.canvas"
                            gradientTo="transparent"
                            pointerEvents="none"
                            zIndex={1}
                        />
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
