import { Box, Container, Flex, Text, HStack, Button } from "@chakra-ui/react"
import Link from "next/link"

export function LandingFooter() {
    return (
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
    )
}
