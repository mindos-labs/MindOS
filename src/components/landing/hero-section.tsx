import { Box, Container, SimpleGrid, VStack, Heading, Text, Stack, Button, Flex } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
import { Github } from "lucide-react"

export function HeroSection() {
    return (
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
                    <Text fontWeight="bold">ACME</Text>
                    <Text fontWeight="bold">Globex</Text>
                    <Text fontWeight="bold">Soylent</Text>
                    <Text fontWeight="bold">Initech</Text>
                </Flex>
            </Box>
        </Container>
    )
}
