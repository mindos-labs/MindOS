"use client"

import { Box, Container, Flex, Heading, HStack, Button } from "@chakra-ui/react"
import { useUser, UserButton } from "@stackframe/stack"
import Link from "next/link"

export function LandingNavbar() {
    const user = useUser();

    return (
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
    )
}
