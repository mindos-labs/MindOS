import Link from "next/link";

export function Footer() {
	const links = [
		{ label: "MindSchool", href: "#mindschool" },
		{ label: "Blog", href: "#blog" },
		{ label: "Community", href: "#community" },
		{ label: "Campus Program", href: "#campus" },
		{ label: "Privacy", href: "#privacy" },
		{ label: "Terms", href: "#terms" },
	];

	return (
		<footer className="border-t py-12">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<h3 className="mb-2 text-xl font-bold">MindOS</h3>
					<p className="text-sm text-muted-foreground">
						Learn Everything. Scientifically. Fast.
					</p>
					<p className="text-sm text-muted-foreground">
						Neuroscience + AI for every learner.
					</p>
				</div>

				<div className="mb-8 flex flex-wrap gap-4 text-sm">
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="border-t pt-8 text-center text-sm text-muted-foreground">
					<p>© 2025 MindOS — Built with ♥ to fix learning.</p>
				</div>
			</div>
		</footer>
	);
}
