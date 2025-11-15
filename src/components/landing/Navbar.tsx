"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
	const navItems = [
		{ label: "Features", href: "#features" },
		{ label: "MindSchool", href: "#mindschool" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "For Parents / Teachers", href: "#parents-teachers" },
		{ label: "Blog", href: "#blog" },
	];

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="text-xl font-bold tracking-tight">
					MindOS
				</Link>

				<nav className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon-sm"
						onClick={toggleTheme}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
					>
						{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
					</Button>
					<Button variant="ghost" size="sm" asChild>
						<Link href="#login">Login</Link>
					</Button>
					<Button size="sm" asChild>
						<Link href="#cta">Get Started</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
