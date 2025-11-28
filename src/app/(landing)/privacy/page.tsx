import { Box, Container, Heading, Text, VStack, Separator } from "@chakra-ui/react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how MindOS collects, uses, and protects your personal information. Your privacy is our priority.",
}

export default function PrivacyPage() {
    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.md" py={16}>
                <VStack align="start" gap={8}>
                    <VStack align="start" gap={4}>
                        <Heading size="4xl" fontWeight="bold">
                            Privacy Policy
                        </Heading>
                        <Text fontSize="md" color="fg.muted">
                            Last updated: November 28, 2024
                        </Text>
                    </VStack>

                    <Separator />

                    <VStack align="start" gap={6}>
                        <Box>
                            <Heading size="xl" mb={3}>
                                Introduction
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                Welcome to MindOS ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our learning platform.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Information We Collect
                            </Heading>
                            <VStack align="start" gap={3}>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Personal Information
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        When you create an account, we collect information such as your name, email address, and authentication credentials. We use Stack Auth for secure authentication and user management.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Learning Data
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        We collect information about your learning activities, including projects you create, tasks you complete, quiz results, study time, progress metrics, and notes you save. This data helps us personalize your learning experience and track your progress.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Usage Information
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        We automatically collect certain information when you use MindOS, including your IP address, browser type, device information, pages visited, and interaction with features.
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                How We Use Your Information
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                We use the information we collect to:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• Provide, operate, and maintain our learning platform</Text>
                                <Text color="fg.muted">• Personalize your learning experience and recommendations</Text>
                                <Text color="fg.muted">• Track your progress and generate analytics</Text>
                                <Text color="fg.muted">• Send you notifications about your learning activities</Text>
                                <Text color="fg.muted">• Improve our services and develop new features</Text>
                                <Text color="fg.muted">• Communicate with you about updates and support</Text>
                                <Text color="fg.muted">• Ensure security and prevent fraud</Text>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Data Storage and Security
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We implement appropriate technical and organizational security measures to protect your personal information. Your data is stored securely using industry-standard encryption. We use Cloudflare infrastructure for hosting and Stack Auth for authentication, both of which maintain high security standards.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Third-Party Services
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                We use the following third-party services:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• <strong>Stack Auth</strong> - For user authentication and account management</Text>
                                <Text color="fg.muted">• <strong>Cloudflare</strong> - For hosting and content delivery</Text>
                                <Text color="fg.muted">• <strong>Analytics Services</strong> - To understand how users interact with our platform</Text>
                            </VStack>
                            <Text color="fg.muted" lineHeight="tall" mt={3}>
                                These services have their own privacy policies and we encourage you to review them.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Your Rights
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                You have the right to:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• Access your personal information</Text>
                                <Text color="fg.muted">• Correct inaccurate data</Text>
                                <Text color="fg.muted">• Request deletion of your data</Text>
                                <Text color="fg.muted">• Export your learning data</Text>
                                <Text color="fg.muted">• Opt-out of marketing communications</Text>
                                <Text color="fg.muted">• Withdraw consent at any time</Text>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Cookies and Tracking
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze usage patterns. You can control cookies through your browser settings. For more information, see our{" "}
                                <Link href="/cookies" style={{ color: "var(--chakra-colors-blue-500)", textDecoration: "underline" }}>
                                    Cookie Policy
                                </Link>.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Children's Privacy
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                MindOS is designed for learners of all ages, including students. If you are under 13 years old, please have a parent or guardian review this Privacy Policy and provide consent before using our services. We do not knowingly collect personal information from children under 13 without parental consent.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Changes to This Policy
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Contact Us
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
