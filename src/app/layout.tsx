import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}><StackProvider app={stackClientApp}><StackTheme>
				<Provider>{children}</Provider>
			</StackTheme></StackProvider></body>
		</html>
	);
}
