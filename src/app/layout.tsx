import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
	fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
	title: {
		default: "Mindos - Learn Everything. Scientifically. Fast.",
		template: "%s | Mindos",
	},
	description: "AI-driven note taking and knowledge management for developers",
	icons: {
		icon: "/favicon.svg",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
