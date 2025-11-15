import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export function FAQ() {
	const faqs = [
		{
			question: "Is MindOS better than coaching or self-study?",
			answer: "MindOS doesn't replace content — it makes sure you remember it.",
		},
		{
			question: "Can I upload my own PDFs/notes?",
			answer: "Yes. Ask questions, generate quizzes, simplify content instantly.",
		},
		{
			question: "Does this work for any subject?",
			answer: "Yes — academic, competitive exams, coding, skills, music, anything.",
		},
		{
			question: "Is MindOS free for students?",
			answer: "Yes. The core version is free forever.",
		},
		{
			question: "How is this different from ChatGPT or notes apps?",
			answer:
				"ChatGPT gives answers. MindOS builds mastery — with plans, memory science, tasks, and an adaptive OS.",
		},
	];

	return (
		<section className="container mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mb-12 text-center">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
					Frequently Asked Questions
				</h2>
			</div>

			<div className="space-y-4">
				{faqs.map((faq, index) => (
					<Collapsible key={index} className="rounded-lg border bg-card p-4">
						<CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium hover:text-primary">
							{faq.question}
							<ChevronDown className="h-4 w-4 transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
						</CollapsibleTrigger>
						<CollapsibleContent className="pt-4 text-sm text-muted-foreground">
							{faq.answer}
						</CollapsibleContent>
					</Collapsible>
				))}
			</div>
		</section>
	);
}
