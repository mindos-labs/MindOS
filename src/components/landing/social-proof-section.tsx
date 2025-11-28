"use client"

import { Box, Container, VStack, Heading, Text, SimpleGrid, Badge, HStack, Icon } from "@chakra-ui/react"
import { FaTwitter, FaStar, FaQuoteLeft } from "react-icons/fa"

// Mock tweet data - replace with real tweets when available
const tweetData = [
    {
        id: "1",
        author: "Sarah M.",
        handle: "@sarahlearns",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2",
        content: "Just tried MindOS for my finals prep and WOW. The spaced repetition algorithm is *chef's kiss* 🤌 Went from barely passing to top of my class. #StudyTools #ProductivityHack",
        likes: 234,
        verified: true,
    },
    {
        id: "2",
        author: "Alex Chen",
        handle: "@alexdevs",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2",
        content: "As a CS student, I've tried EVERYTHING. Notion, Obsidian, Roam... MindOS is the first tool that actually helps me RETAIN information. The AI-generated connections are game-changing 🧠✨",
        likes: 567,
        verified: false,
    },
    {
        id: "3",
        author: "Dr. Emily Park",
        handle: "@profpark",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily2",
        content: "Started recommending MindOS to all my students. The evidence-based approach to learning is exactly what education needs. Finally, an app built on actual cognitive science! 📚🎓",
        likes: 892,
        verified: true,
    },
    {
        id: "4",
        author: "Mike Rodriguez",
        handle: "@mikelearning",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike2",
        content: "MindOS helped me learn Python in 3 weeks. The Feynman technique feature is incredible - it forces you to actually UNDERSTAND, not just memorize. Best $0 I ever spent 😅",
        likes: 445,
        verified: false,
    },
]

function TweetMockCard({ author, handle, avatar, content, likes, verified }: typeof tweetData[0]) {
    return (
        <Box
            p={6}
            bg="bg.panel"
            rounded="xl"
            borderWidth="1px"
            shadow="sm"
            transition="all 0.3s"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            position="relative"
        >
            <VStack align="start" gap={4}>
                <HStack gap={3} w="full" justify="space-between">
                    <HStack gap={3}>
                        <img
                            src={avatar}
                            alt={author}
                            width="48"
                            height="48"
                            style={{ borderRadius: '9999px' }}
                        />
                        <VStack align="start" gap={0}>
                            <HStack gap={2}>
                                <Text fontSize="sm" fontWeight="semibold">{author}</Text>
                                {verified && (
                                    <Badge colorPalette="blue" size="xs">✓</Badge>
                                )}
                            </HStack>
                            <Text fontSize="xs" color="fg.muted">{handle}</Text>
                        </VStack>
                    </HStack>
                    <Icon as={FaTwitter} color="#1DA1F2" boxSize={5} />
                </HStack>

                <Text fontSize="sm" lineHeight="1.6" color="fg">
                    {content}
                </Text>

                <HStack gap={1} color="fg.muted" fontSize="xs">
                    <Icon as={FaStar} color="yellow.500" />
                    <Text>{likes} likes</Text>
                </HStack>
            </VStack>

            <Icon
                as={FaQuoteLeft}
                position="absolute"
                top={2}
                right={2}
                boxSize={8}
                color="blue.200"
                opacity={0.1}
            />
        </Box>
    )
}

export function SocialProofSection() {
    return (
        <Box py={24} bg="bg.subtle">
            <Container maxW="container.xl">
                <VStack gap={12}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            What People Are Saying
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="2xl">
                            Join thousands of students sharing their success stories on social media.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                        {tweetData.map((tweet) => (
                            <TweetMockCard key={tweet.id} {...tweet} />
                        ))}
                    </SimpleGrid>

                    <Box textAlign="center" pt={4}>
                        <Text fontSize="sm" color="fg.muted">
                            Join the conversation on{" "}
                            <Text
                                as="a"
                                href="https://twitter.com/sh20raj"
                                target="_blank"
                                color="blue.500"
                                fontWeight="semibold"
                                _hover={{ textDecoration: "underline" }}
                            >
                                Twitter/X @sh20raj
                            </Text>
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
