import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, PageIntro, PageShell, ServiceCard, serviceCards, ProofProcessBanner } from "@/components/LuminorSite";

const process = [
  [
    "01",
    "Web Design & Development",
    "Websites designed to represent your brand and convert visitors."
  ],
  [
    "02",
    "Creative Direction",
    "Defining the visual style, tone, and creative direction of your brand."
  ],
  [
    "03",
    "Campaigns & Launches",
    "Planning and executing creative campaigns around your goals."
  ],
  [
    "04",
    "Analytics & Insights",
    "Tracking performance and turning data into smarter decisions."
  ]
];

export default function Services() {
  return <PageShell><main><PageIntro eyebrow="Capabilities" title={<>Make good work <span className="italic text-[#ffbf00]">matter.</span></>} description="Strategy, social media, content creation, and digital marketing aligned toward one clear outcome: a brand people notice, trust, and choose." />
    <section className="mx-auto max-w-[1320px] px-5 pb-24 lg:px-8 lg:pb-32" data-testid="services-grid-section"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{serviceCards.map((service, index) => <ServiceCard key={service.number} service={service} index={index} />)}</div></section>
    <section className="border-y border-[#e8e1ce] bg-[#f7f1e3]" data-testid="services-process-section"><div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32"><h2 className="font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl" data-testid="services-additional-expertise-title"><span className="text-[#1a1814]">ADDITIONAL</span> <span className="text-[#ffbf00]">EXPERTISE</span></h2><div className="mt-12 grid gap-0 border-l border-[#e8e1ce] lg:grid-cols-4 lg:border-l-0 lg:border-t">{process.map(([number, title, text]) => <div key={number} className="relative border-b border-[#e8e1ce] py-8 pl-8 lg:border-b-0 lg:border-l lg:pl-6 lg:pt-8" data-testid={`process-step-${number}`}><span className="absolute -left-[5px] top-9 size-2 rounded-full bg-[#ffbf00] lg:-top-[5px] lg:left-6" /><p className="font-mono text-xs font-bold text-[#ffbf00]">{number} —</p><h3 className="mt-6 font-serif text-2xl leading-snug lg:text-[1.75rem]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#575247]">{text}</p></div>)}</div></div></section>
    <section className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32" data-testid="services-proof-section">
      <ProofProcessBanner />
    </section>
    <section className="bg-[#1a1814] text-[#fffbf2]" data-testid="services-bottom-cta"><div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-8 lg:py-28"><h2 className="max-w-2xl font-serif text-5xl leading-none tracking-tight sm:text-6xl">You bring the ambition. We’ll bring the light.</h2><Link to="/contact" className="inline-flex shrink-0 items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814]" data-testid="services-bottom-cta-link">Let’s begin <ArrowRight className="ml-2 size-4" /></Link></div></section>
  </main></PageShell>;
}