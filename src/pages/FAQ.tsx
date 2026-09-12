import { Search, ArrowRight, Plus, Minus } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, PageIntro, PageShell } from "@/components/LuminorSite";

const questions = [
  [
    "Why Luminor",
    "How far can we take our brand with Luminor?",
    "We turn your vision into meaningful digital experiences that help your brand stand out, connect, and grow."
  ],
  [
    "Why Luminor",
    "Why should we choose Luminor Media?",
    "We combine strategy, creativity, and execution to create work built around your brand—not a one-size-fits-all approach."
  ],
  [
    "Why Luminor",
    "What makes Luminor Media different from other agencies?",
    "We don’t just create content. We understand your story, shape your identity, and bring your brand to light."
  ],
  [
    "Process",
    "How does Luminor Media work with a brand?",
    "We understand your goals, build a clear strategy, and bring it to life through content, branding, and digital marketing."
  ],
  [
    "Services",
    "What are the benefits of having Luminor manage our social media?",
    "We take care of your social presence with strategy, consistent content, and creative execution—so you can focus on your business while your brand stays active and relevant."
  ],
  [
    "Getting started",
    "How do we get started with Luminor Media?",
    "Reach out to us and tell us about your brand and goals. Let’s start the conversation and bring your brand to light."
  ],
];
const categories = ["All", "Why Luminor", "Process", "Services", "Getting started"];

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = useMemo(
    () =>
      questions.filter(
        ([group, question, answer]) =>
          (category === "All" || group === category) &&
          `${group} ${question} ${answer}`.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );
  return <PageShell><main><PageIntro eyebrow="Questions, answered" title={<>The clear stuff, <span className="italic text-[#ffbf00]">first.</span></>} description="A few useful answers before we get into the more interesting questions — the ones about your brand." />
    <section className="mx-auto max-w-[960px] px-5 pb-24 lg:px-8 lg:pb-32" data-testid="faq-section"><div className="relative"><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8c8474]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the FAQs" className="h-14 w-full rounded-full border border-[#e8e1ce] bg-white pl-11 pr-5 text-sm outline-none transition focus:border-[#ffbf00]" aria-label="Search frequently asked questions" data-testid="faq-search-input" /></div><div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">{categories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${category === item ? "border-[#1a1814] bg-[#1a1814] text-[#fffbf2]" : "border-[#e8e1ce] hover:border-[#ffbf00]"}`} data-testid={`faq-category-${item.toLowerCase().replaceAll(" ", "-")}-button`}>{item}</button>)}</div><div className="mt-12 border-t border-[#e8e1ce]">{filtered.map(([group, question, answer], index) => <div key={question} className="border-b border-[#e8e1ce]" data-testid={`faq-item-${index}`}><button type="button" onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left" aria-expanded={open === index} data-testid={`faq-question-${index}-button`}><span><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8c8474]">{group}</span><span className="font-serif text-2xl tracking-tight">{question}</span></span>{open === index ? <Minus className="size-5 shrink-0 text-[#ffbf00]" /> : <Plus className="size-5 shrink-0" />}</button>{open === index && <div className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-[#575247]" data-testid={`faq-answer-${index}`}>{answer}</div>}</div>)}{filtered.length === 0 && <div className="py-12 text-center text-sm text-[#575247]" data-testid="faq-empty-state">No exact match — try a different phrase or <Link to="/contact" className="font-semibold underline decoration-[#ffbf00] underline-offset-4" data-testid="faq-empty-contact-link">ask us directly</Link>.</div>}</div></section>
    <section className="bg-[#f7f1e3]" data-testid="faq-cta-section"><div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8"><h2 className="font-serif text-3xl">Still curious? We like curious.</h2><Link to="/contact" className="inline-flex items-center text-sm font-semibold" data-testid="faq-contact-link">Ask a human <ArrowRight className="ml-2 size-4" /></Link></div></section>
  </main></PageShell>;
}