import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
	return (
		<section id="cta" className="bg-gradient-to-b from-secondary/30 to-background py-20">
			<div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					Start Learning Scientifically Today
				</h2>
				<p className="mb-8 text-lg text-muted-foreground">
					MindOS is free to try. Upgrade only when you love it.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button size="lg" asChild>
						<Link href="#signup">Get Started</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href="#demo">Try Demo Project</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
