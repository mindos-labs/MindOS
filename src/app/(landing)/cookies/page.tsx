import { Box, Container, Heading, Text, VStack, Separator } from "@chakra-ui/react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Learn about how MindOS uses cookies and similar tracking technologies.",
}

export default function CookiesPage() {
    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.md" py={16}>
                <VStack align="start" gap={8}>
                    <VStack align="start" gap={4}>
                        <Heading size="4xl" fontWeight="bold">
                            Cookie Policy
                        </Heading>
                        <Text fontSize="md" color="fg.muted">
                            Last updated: November 28, 2024
                        </Text>
                    </VStack>

                    <Separator />

                    <VStack align="start" gap={6}>
                        <Box>
                            <Heading size="xl" mb={3}>
                                What Are Cookies?
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. MindOS uses cookies and similar tracking technologies to enhance your experience and improve our services.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                How We Use Cookies
                            </Heading>
                            <VStack align="start" gap={3}>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Essential Cookies
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and accessibility. Without these cookies, certain services cannot be provided.
                                    </Text>
                                    <VStack align="start" gap={1} pl={4} mt={2}>
                                        <Text color="fg.muted" fontSize="sm">• Authentication tokens</Text>
                                        <Text color="fg.muted" fontSize="sm">• Session management</Text>
                                        <Text color="fg.muted" fontSize="sm">• Security features</Text>
                                    </VStack>
                                </Box>

                                <Box>
                                    <Heading size="md" mb={2}>
                                        Functional Cookies
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        These cookies allow us to remember your preferences and settings to provide enhanced, personalized features.
                                    </Text>
                                    <VStack align="start" gap={1} pl={4} mt={2}>
                                        <Text color="fg.muted" fontSize="sm">• Theme preferences (light/dark mode)</Text>
                                        <Text color="fg.muted" fontSize="sm">• Language settings</Text>
                                        <Text color="fg.muted" fontSize="sm">• User interface customizations</Text>
                                    </VStack>
                                </Box>

                                <Box>
                                    <Heading size="md" mb={2}>
                                        Analytics Cookies
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                    </Text>
                                    <VStack align="start" gap={1} pl={4} mt={2}>
                                        <Text color="fg.muted" fontSize="sm">• Page views and navigation patterns</Text>
                                        <Text color="fg.muted" fontSize="sm">• Feature usage statistics</Text>
                                        <Text color="fg.muted" fontSize="sm">• Performance metrics</Text>
                                    </VStack>
                                </Box>

                                <Box>
                                    <Heading size="md" mb={2}>
                                        Performance Cookies
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        These cookies help us improve the performance and functionality of our website by analyzing how users interact with different features.
                                    </Text>
                                    <VStack align="start" gap={1} pl={4} mt={2}>
                                        <Text color="fg.muted" fontSize="sm">• Load time optimization</Text>
                                        <Text color="fg.muted" fontSize="sm">• Error tracking</Text>
                                        <Text color="fg.muted" fontSize="sm">• Feature performance monitoring</Text>
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Third-Party Cookies
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                We use services from trusted third parties that may set cookies on your device:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• <strong>Stack Auth</strong> - For authentication and user management</Text>
                                <Text color="fg.muted">• <strong>Cloudflare</strong> - For security and performance optimization</Text>
                                <Text color="fg.muted">• <strong>Analytics Providers</strong> - To understand user behavior and improve our service</Text>
                            </VStack>
                            <Text color="fg.muted" lineHeight="tall" mt={3}>
                                These third parties have their own privacy policies and cookie policies. We recommend reviewing them to understand how they use cookies.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Managing Cookies
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                You have several options for managing cookies:
                            </Text>
                            <VStack align="start" gap={3}>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Browser Settings
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable cookies, some features of MindOS may not function properly.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Opt-Out Tools
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        For analytics cookies, you can opt out using browser extensions or privacy tools. However, this may affect your ability to use certain features of our service.
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Cookie Duration
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                We use both session cookies and persistent cookies:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• <strong>Session Cookies</strong> - Temporary cookies that expire when you close your browser</Text>
                                <Text color="fg.muted">• <strong>Persistent Cookies</strong> - Cookies that remain on your device for a set period or until you delete them</Text>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Your Consent
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                By using MindOS, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our website.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Updates to This Policy
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Contact Us
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                If you have any questions about our use of cookies, please contact us at:
                            </Text>
                            <Text color="fg.muted" lineHeight="tall" mt={2}>
                                Email: privacy@mindos.strivio.world
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
