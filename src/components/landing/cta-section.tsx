import { Box, Container, VStack, Heading, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"

export function CTASection() {
    return (
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
    )
}
