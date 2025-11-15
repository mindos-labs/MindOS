import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check } from "lucide-react";

export function Pricing() {
	const plans = [
		{
			name: "Free Forever Plan",
			price: "Free",
			features: [
				"Basic tools",
				"Limited projects",
				"MindSchool",
				"Essential AI help",
			],
		},
		{
			name: "Pro Plan",
			badge: "Most Popular",
			price: "₹199–₹299",
			period: "/month",
			features: [
				"Unlimited projects",
				"AI Tutor",
				"Chat with PDFs",
				"Full MindCloud",
				"Certificates",
				"Smart revision engine",
				"All scientific techniques unlocked",
			],
		},
		{
			name: "Teams / Institutions",
			price: "Custom",
			description: "Schools | Colleges | Coaching Centers",
			cta: "Request Demo",
		},
	];

	return (
		<section id="pricing" className="bg-secondary/30 py-20">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						Simple & Transparent Pricing
					</h2>
				</div>

				<div className="grid gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<Card key={plan.name} className={plan.badge ? "border-primary shadow-lg" : ""}>
							<CardHeader>
								{plan.badge && (
									<Badge className="mb-2 w-fit">{plan.badge}</Badge>
								)}
								<CardTitle>{plan.name}</CardTitle>
								<div className="mt-4">
									<span className="text-3xl font-bold">{plan.price}</span>
									{plan.period && (
										<span className="text-muted-foreground">{plan.period}</span>
									)}
								</div>
								{plan.description && (
									<CardDescription className="mt-2">{plan.description}</CardDescription>
								)}
							</CardHeader>
							<CardContent>
								{plan.features && (
									<ul className="space-y-2">
										{plan.features.map((feature, index) => (
											<li key={index} className="flex items-start gap-2">
												<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												<span className="text-sm">{feature}</span>
											</li>
										))}
									</ul>
								)}
							</CardContent>
							<CardFooter>
								<Button className="w-full" variant={plan.badge ? "default" : "outline"} asChild>
									<Link href={plan.cta ? "#demo" : "#cta"}>
										{plan.cta || "Get Started"}
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
