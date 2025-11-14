"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [isDark, setIsDark] = useState(false);

	const navItems = [
		{ label: "Features", href: "#features" },
		{ label: "Science", href: "#science" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Login", href: "#login" },
	];

	const problemPoints = [
		"Students forget most of what they study.",
		"Notes, videos, and books stay fragmented.",
		"No retention strategy.",
		"No personalized plan for different learners.",
		"Learning is easy. Remembering is hard.",
	];

	const featureCards = [
		{ name: "MindRepeater", detail: "Spaced repetition flashcards." },
		{ name: "MindQuiz", detail: "Active recall quizzes." },
		{ name: "SmartMix", detail: "Interleaved learning planner." },
		{ name: "DeepLinker", detail: "Elaborative encoding prompts." },
		{ name: "Visual Builder", detail: "Mindmaps and diagrams." },
		{ name: "Mnemonix", detail: "Mnemonics and memory aids." },
		{ name: "Exam Simulator", detail: "Testing effect engine." },
		{ name: "MindFocus", detail: "Deep-work timer." },
	];

	const processSteps = [
		"Create a learning project.",
		"Answer onboarding questions.",
		"Get a personalized scientific plan.",
		"Use daily tools to learn and revise.",
		"Track progress and retain longer.",
	];

	const audiences = [
		"School students",
		"Board aspirants",
		"JEE/NEET students",
		"College learners",
		"Professionals",
		"Lifelong learners",
	];

	const pricing = [
		{ tier: "Free", description: "Basic tools and limited projects" },
		{ tier: "Pro", description: "Full tools, unlimited projects, advanced analytics" },
		{ tier: "Institutional", description: "For schools, colleges, and coaching centers" },
	];

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

	return (
		<div className="min-h-screen bg-[var(--color-page-bg)] text-[var(--color-text-primary)]">
			<header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-page-bg)]">
				<div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
					<div className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">MindOS</div>
					<nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--color-text-strong)]">
						{navItems.map((item) => (
							<a key={item.label} href={item.href} className="transition-colors hover:text-[var(--color-text-primary)]">
								{item.label}
							</a>
						))}
						<button
							type="button"
							onClick={() => setIsDark((prev) => !prev)}
							aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
							className="inline-flex items-center justify-center bg-[var(--color-page-bg)] px-3 py-1 text-sm font-semibold text-[var(--color-button-secondary-text)] ring-1 ring-[var(--color-ring)] transition-colors hover:bg-[var(--color-button-secondary-hover)]"
						>
							{isDark ? "Light Mode" : "Dark Mode"}
						</button>
						<a
							href="#cta"
							className="inline-flex items-center justify-center bg-[var(--color-page-bg)] px-3 py-1 text-sm font-semibold text-[var(--color-button-secondary-text)] ring-1 ring-[var(--color-ring)] transition-colors hover:bg-[var(--color-button-secondary-hover)]"
						>
							Get Started
						</a>
					</nav>
				</div>
			</header>
			<main>
				<section className="border-b border-[var(--color-border)]">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16">
						<div className="flex flex-col gap-4">
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">MindOS — Learn Everything. Scientifically. Fast.</p>
							<h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">Learn Everything. Scientifically. Fast.</h1>
							<p className="max-w-2xl text-base text-[var(--color-text-secondary)]">
								MindOS is a scientific learning OS that helps you learn, remember, and master any topic using proven cognitive techniques.
							</p>
						</div>
						<div className="flex flex-wrap gap-3" id="login">
							<a
								className="inline-flex items-center justify-center rounded-sm bg-[var(--color-button-primary-bg)] px-5 py-2 text-sm font-semibold text-[var(--color-button-primary-text)] transition-colors hover:bg-[var(--color-button-primary-hover)]"
								href="#cta"
							>
								Get Started
							</a>
							<a
								className="inline-flex items-center justify-center rounded-sm bg-[var(--color-page-bg)] px-5 py-2 text-sm font-semibold text-[var(--color-button-secondary-text)] ring-1 ring-[var(--color-ring)] transition-colors hover:bg-[var(--color-button-secondary-hover)]"
								href="#features"
							>
								Explore Features
							</a>
						</div>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]" id="problem">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14">
						<div>
							<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">The Problem We Fix</h2>
						</div>
						<ul className="grid gap-3 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
							{problemPoints.map((point) => (
								<li key={point} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-3">
									{point}
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]" id="features">
					<div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">A Scientific System for Long-Term Learning</h2>
						<p className="max-w-3xl text-sm text-[var(--color-text-secondary)]">
							MindOS turns 15+ evidence-based learning techniques into simple, everyday tools that improve retention, understanding, and recall.
						</p>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Tools That Make Learning Stick</h2>
						<div className="grid gap-4 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
							{featureCards.map((feature) => (
								<div key={feature.name} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-4">
									<p className="font-semibold text-[var(--color-text-primary)]">{feature.name}</p>
									<p className="mt-1 text-[var(--color-text-secondary)]">{feature.detail}</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Simple Process</h2>
						<ol className="grid gap-4 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
							{processSteps.map((step) => (
								<li key={step} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-3">
									{step}
								</li>
							))}
						</ol>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]" id="science">
					<div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Backed by Cognitive Science</h2>
						<p className="max-w-3xl text-sm text-[var(--color-text-secondary)]">
							MindOS is built on spaced repetition, active recall, interleaving, dual coding, mnemonics, sleep-driven consolidation, and emotional tagging — the most
							reliable memory principles known today.
						</p>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Made for Every Learner</h2>
						<ul className="grid gap-3 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
							{audiences.map((audience) => (
								<li key={audience} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-3">
									{audience}
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]" id="pricing">
					<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Simple Pricing</h2>
						<div className="grid gap-4 text-sm text-[var(--color-text-secondary)] sm:grid-cols-3">
							{pricing.map((plan) => (
								<div key={plan.tier} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-4">
									<p className="font-semibold text-[var(--color-text-primary)]">{plan.tier}</p>
									<p className="mt-1 text-[var(--color-text-secondary)]">{plan.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="border-b border-[var(--color-border)]" id="cta">
					<div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-14">
						<h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Start Learning Better Today</h2>
						<a
							className="inline-flex items-center justify-center rounded-sm bg-[var(--color-button-primary-bg)] px-5 py-2 text-sm font-semibold text-[var(--color-button-primary-text)] transition-colors hover:bg-[var(--color-button-primary-hover)]"
							href="#cta"
						>
							Get Started with MindOS
						</a>
					</div>
				</section>
			</main>
			<footer className="px-6 py-10">
				<div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-[var(--color-text-secondary)]">
					<div className="font-semibold text-[var(--color-text-primary)]">MindOS</div>
					<div className="flex flex-wrap gap-4">
						<a className="transition-colors hover:text-[var(--color-text-primary)]" href="#documentation">
							Documentation
						</a>
						<a className="transition-colors hover:text-[var(--color-text-primary)]" href="#github">
							GitHub Repo
						</a>
						<a className="transition-colors hover:text-[var(--color-text-primary)]" href="mailto:support@mindos">
							Contact: support@mindos
						</a>
					</div>
					<p className="text-[var(--color-text-muted)]">© 2025 MindOS</p>
				</div>
			</footer>
		</div>
	);
}
