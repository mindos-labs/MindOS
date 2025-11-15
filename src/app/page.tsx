"use client";

import { useEffect, useState } from "react";
import {
	Navbar,
	Hero,
	SocialProof,
	Problem,
	Solution,
	HowItWorks,
	Features,
	Audience,
	Pricing,
	FAQ,
	CTA,
	Footer,
} from "@/components/landing";

export default function Home() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		setIsDark(root.classList.contains("dark"));
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<div className="min-h-screen">
			<Navbar isDark={isDark} toggleTheme={toggleTheme} />
			<main>
				<Hero />
				<SocialProof />
				<Problem />
				<Solution />
				<HowItWorks />
				<Features />
				<Audience />
				<Pricing />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
