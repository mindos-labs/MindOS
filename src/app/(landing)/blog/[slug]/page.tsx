import { Box, Container, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react"
import { blogArticles } from "@/data/blog/articles"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import ReactMarkdown from "react-markdown"

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params
    const article = blogArticles.find((a) => a.slug === slug)

    if (!article) {
        return {
            title: "Article Not Found - MindOS",
        }
    }

    return {
        title: `${article.title} - MindOS Blog`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [article.image],
            type: "article",
            publishedTime: article.publishedAt,
            authors: [article.author],
        },
    }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params
    const article = blogArticles.find((a) => a.slug === slug)

    if (!article) {
        notFound()
    }

    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.md" py={16}>
                <VStack gap={8} align="start">
                    {/* Header */}
                    <VStack gap={4} align="start" w="full">
                        <Badge colorPalette="blue" size="lg">
                            {article.category}
                        </Badge>

                        <Heading size="5xl" fontWeight="bold" lineHeight="1.2">
                            {article.title}
                        </Heading>

                        <Text fontSize="xl" color="fg.muted">
                            {article.description}
                        </Text>

                        <HStack gap={4} fontSize="sm" color="fg.muted" pt={2}>
                            <Text fontWeight="medium">{article.author}</Text>
                            <Text>•</Text>
                            <Text>{article.readingTime} min read</Text>
                            <Text>•</Text>
                            <Text>{new Date(article.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</Text>
                        </HStack>
                    </VStack>

                    {/* Featured Image */}
                    <Box
                        w="full"
                        h="400px"
                        bgImage={article.image}
                        bgSize="cover"
                        bgPosition="center"
                        rounded="xl"
                    />

                    {/* Article Content */}
                    <Box
                        w="full"
                        className="prose prose-lg dark:prose-invert max-w-none"
                        sx={{
                            "& h1": {
                                fontSize: "3xl",
                                fontWeight: "bold",
                                mt: 8,
                                mb: 4,
                            },
                            "& h2": {
                                fontSize: "2xl",
                                fontWeight: "bold",
                                mt: 8,
                                mb: 4,
                            },
                            "& h3": {
                                fontSize: "xl",
                                fontWeight: "semibold",
                                mt: 6,
                                mb: 3,
                            },
                            "& p": {
                                mb: 4,
                                lineHeight: "1.8",
                            },
                            "& ul, & ol": {
                                mb: 4,
                                pl: 6,
                            },
                            "& li": {
                                mb: 2,
                            },
                            "& strong": {
                                fontWeight: "bold",
                                color: "fg",
                            },
                            "& a": {
                                color: "blue.500",
                                textDecoration: "underline",
                                _hover: {
                                    color: "blue.600",
                                },
                            },
                            "& table": {
                                width: "full",
                                mb: 4,
                            },
                            "& th": {
                                bg: "bg.subtle",
                                p: 3,
                                textAlign: "left",
                                fontWeight: "semibold",
                            },
                            "& td": {
                                p: 3,
                                borderTopWidth: "1px",
                            },
                            "& blockquote": {
                                borderLeftWidth: "4px",
                                borderColor: "blue.500",
                                pl: 4,
                                py: 2,
                                fontStyle: "italic",
                                color: "fg.muted",
                            },
                            "& code": {
                                bg: "bg.subtle",
                                px: 1,
                                py: 0.5,
                                rounded: "sm",
                                fontSize: "sm",
                            },
                            "& hr": {
                                my: 8,
                                borderColor: "border",
                            },
                        }}
                    >
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </Box>

                    {/* Tags */}
                    <HStack gap={2} flexWrap="wrap" pt={8}>
                        {article.tags.map((tag) => (
                            <Badge key={tag} size="sm" variant="subtle" colorPalette="gray">
                                #{tag}
                            </Badge>
                        ))}
                    </HStack>
                </VStack>
            </Container>
        </Box>
    )
}
