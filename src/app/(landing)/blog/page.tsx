import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge } from "@chakra-ui/react"
import Link from "next/link"
import { blogArticles } from "@/data/blog/articles"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog - MindOS | Learning Science & Productivity",
    description: "Expert insights on learning techniques, memory improvement, productivity, and cognitive science. Learn how to study smarter with evidence-based methods.",
}

export default function BlogPage() {
    const categories = Array.from(new Set(blogArticles.map(article => article.category)))

    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.xl" py={16}>
                <VStack gap={12} align="start">
                    {/* Header */}
                    <VStack gap={4} textAlign="center" w="full">
                        <Heading size="5xl" fontWeight="bold">
                            Learning Science Blog
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="2xl">
                            Evidence-based insights on learning, memory, and productivity from cognitive science research.
                        </Text>
                    </VStack>

                    {/* Categories */}
                    <HStack gap={3} flexWrap="wrap" justify="center" w="full">
                        {categories.map((category) => (
                            <Badge key={category} size="lg" colorPalette="blue">
                                {category}
                            </Badge>
                        ))}
                    </HStack>

                    {/* Articles Grid */}
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
                        {blogArticles.map((article) => (
                            <Link key={article.slug} href={`/blog/${article.slug}`}>
                                <Box
                                    h="full"
                                    bg="bg.panel"
                                    rounded="xl"
                                    overflow="hidden"
                                    borderWidth="1px"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "translateY(-4px)",
                                        shadow: "lg",
                                        borderColor: "blue.500",
                                    }}
                                >
                                    {/* Image */}
                                    <Box
                                        h="200px"
                                        bgImage={article.image}
                                        bgSize="cover"
                                        bgPosition="center"
                                    />

                                    {/* Content */}
                                    <VStack gap={3} p={6} align="start">
                                        <Badge colorPalette="blue" size="sm">
                                            {article.category}
                                        </Badge>

                                        <Heading size="lg" lineHeight="1.3">
                                            {article.title}
                                        </Heading>

                                        <Text fontSize="sm" color="fg.muted" noOfLines={3}>
                                            {article.description}
                                        </Text>

                                        <HStack gap={4} fontSize="xs" color="fg.muted" pt={2}>
                                            <Text>{article.author}</Text>
                                            <Text>•</Text>
                                            <Text>{article.readingTime} min read</Text>
                                            <Text>•</Text>
                                            <Text>{new Date(article.publishedAt).toLocaleDateString()}</Text>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </Link>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    )
}
