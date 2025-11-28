import { Box, Container, Heading, Text, VStack, Separator } from "@chakra-ui/react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions for using MindOS learning platform.",
}

export default function TermsPage() {
    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.md" py={16}>
                <VStack align="start" gap={8}>
                    <VStack align="start" gap={4}>
                        <Heading size="4xl" fontWeight="bold">
                            Terms of Service
                        </Heading>
                        <Text fontSize="md" color="fg.muted">
                            Last updated: November 28, 2024
                        </Text>
                    </VStack>

                    <Separator />

                    <VStack align="start" gap={6}>
                        <Box>
                            <Heading size="xl" mb={3}>
                                Agreement to Terms
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                By accessing or using MindOS ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Description of Service
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                MindOS is an AI-powered scientific learning platform that provides tools and features to help users learn, remember, and master various subjects. Our Service includes spaced repetition systems, quiz generators, progress tracking, and other learning tools based on neuroscience and cognitive science principles.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                User Accounts
                            </Heading>
                            <VStack align="start" gap={3}>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Account Creation
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        To use certain features of MindOS, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Account Security
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="md" mb={2}>
                                        Age Requirements
                                    </Heading>
                                    <Text color="fg.muted" lineHeight="tall">
                                        If you are under 13 years of age, you must have parental or guardian consent to use MindOS. By using the Service, you represent that you meet this requirement.
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Acceptable Use
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                You agree not to:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• Use the Service for any illegal purpose or in violation of any laws</Text>
                                <Text color="fg.muted">• Violate or infringe upon the rights of others</Text>
                                <Text color="fg.muted">• Transmit any harmful code, viruses, or malicious software</Text>
                                <Text color="fg.muted">• Attempt to gain unauthorized access to any part of the Service</Text>
                                <Text color="fg.muted">• Interfere with or disrupt the Service or servers</Text>
                                <Text color="fg.muted">• Use automated systems to access the Service without permission</Text>
                                <Text color="fg.muted">• Impersonate any person or entity</Text>
                                <Text color="fg.muted">• Share your account credentials with others</Text>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                User Content
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                You retain ownership of any content you create or upload to MindOS, including notes, projects, and learning materials. By using the Service, you grant us a license to use, store, and process your content to provide and improve the Service.
                            </Text>
                            <Text color="fg.muted" lineHeight="tall">
                                You are responsible for your content and must ensure you have the necessary rights to share it. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Intellectual Property
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                The Service and its original content, features, and functionality are owned by MindOS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Subscription and Payments
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                MindOS may offer both free and paid subscription plans. If you choose a paid plan:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• You agree to pay all fees associated with your subscription</Text>
                                <Text color="fg.muted">• Subscriptions automatically renew unless cancelled</Text>
                                <Text color="fg.muted">• Refunds are subject to our refund policy</Text>
                                <Text color="fg.muted">• We reserve the right to change pricing with notice</Text>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Disclaimers
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall" mb={3}>
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
                            </Text>
                            <VStack align="start" gap={2} pl={4}>
                                <Text color="fg.muted">• The Service will be uninterrupted, secure, or error-free</Text>
                                <Text color="fg.muted">• The results obtained from using the Service will be accurate or reliable</Text>
                                <Text color="fg.muted">• The quality of any products, services, or information obtained through the Service will meet your expectations</Text>
                            </VStack>
                            <Text color="fg.muted" lineHeight="tall" mt={3}>
                                MindOS is a learning tool and should not be considered a substitute for professional educational advice or formal education.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Limitation of Liability
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINDOS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Termination
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease. You may also terminate your account at any time through your account settings.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Changes to Terms
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Governing Law
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MindOS operates, without regard to its conflict of law provisions.
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xl" mb={3}>
                                Contact Information
                            </Heading>
                            <Text color="fg.muted" lineHeight="tall">
                                If you have any questions about these Terms, please contact us at:
                            </Text>
                            <Text color="fg.muted" lineHeight="tall" mt={2}>
                                Email: legal@mindos.strivio.world
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
