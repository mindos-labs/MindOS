import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
	return (
		<section className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<div className="mb-6 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium">
					🧠 Learn Everything. Scientifically. Fast.
				</div>

				<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
					Learn Everything.
					<br />
					<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
						Scientifically. Fast.
					</span>
				</h1>

				<p className="mb-4 text-lg text-muted-foreground sm:text-xl">
					MindOS is a <strong>Scientific Learning Operating System</strong> that helps you learn, remember, and master anything — using AI + neuroscience.
				</p>

				<div className="mb-8 space-y-2 text-base text-muted-foreground">
					<p>📘 Prepare for exams.</p>
					<p>🧩 Master complex skills.</p>
					<p>🎸 Learn music, coding, or anything else you love.</p>
					<p>✨ Built with evidence-based learning science.</p>
				</div>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button size="lg" asChild>
						<Link href="#cta">Start Free — No Credit Card Needed</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href="#demo">Watch Demo</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
