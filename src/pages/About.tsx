import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, PageIntro, PageShell, Testimonial } from "@/components/LuminorSite";
import { HowWeWorkGraphic } from "@/components/HowWeWorkGraphic";

const team = [
  ["Elena Vance", "Founder + Creative Director", "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?auto=format&fit=crop&w=700&q=85"],
  ["Marcus Sterling", "Head of Growth", "https://images.unsplash.com/photo-1606143412458-acc5f86de897?auto=format&fit=crop&w=700&q=85"],
  ["Chloe Lin", "Head of Content Studio", "https://images.unsplash.com/photo-1629511565591-a1d494ad6c58?auto=format&fit=crop&w=700&q=85"],
];

export default function About() {
  return <PageShell><main><PageIntro eyebrow="The studio" title={<>A little more <span className="italic text-[#ffbf00]">light</span> on the way in.</>} description="Luminor is an independent social and digital studio for brands with ambition, taste, and somewhere meaningful to go next." />
    <section className="mx-auto max-w-[1320px] px-5 pb-24 lg:px-8 lg:pb-32" data-testid="about-story-section">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="w-full">
          <HowWeWorkGraphic />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#8c8474]" data-testid="section-eyebrow">
            How we work
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl uppercase leading-[1.12]" data-testid="about-story-title">
            WE DON’T JUST BUILD BRANDS.<br />
            <span className="text-[#ffbf00]">WE BRING THEM INTO THE LIGHT.</span>
          </h2>
          <Link to="/services" className="mt-8 inline-flex items-center text-sm font-semibold" data-testid="about-story-services-link">
            See how we work <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-[#1a1814] text-[#fffbf2]" data-testid="about-team-section"><div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><Eyebrow>People behind the light</Eyebrow><h2 className="mt-5 font-serif text-5xl tracking-tight">The team, in focus.</h2></div><p className="max-w-sm text-sm leading-6 text-[#b9b1a2]">Senior thinking, generous collaboration, and just enough healthy obsession.</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">{team.map(([name, role, image]) => <div key={name} data-testid={`team-card-${name.toLowerCase().replaceAll(" ", "-")}`}><div className="aspect-[4/5] overflow-hidden rounded-3xl"><img src={image} alt={name} className="size-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" /></div><h3 className="mt-5 font-serif text-2xl">{name}</h3><p className="mt-1 text-sm text-[#b9b1a2]">{role}</p></div>)}</div></div></section>
    <section className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32" data-testid="about-difference-section">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-serif text-4xl tracking-tight text-[#1a1814] sm:text-5xl lg:text-6xl" data-testid="why-luminor-heading">
            <span className="font-bold text-[#ffbf00]">WHY</span> LUMINOR MEDIA
          </h2>
        </div>
        <div className="space-y-4">
          {[
            "Strategy built around your goals",
            "Creative that feels true to your brand",
            "Content made to connect, not just fill a feed",
            "A team that works with you, not just for you",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center gap-4 border-b border-[#e8e1ce] pb-5 text-lg font-medium text-[#1a1814] sm:text-xl"
              data-testid={`why-luminor-${text.slice(0, 8).toLowerCase().replaceAll(" ", "-")}`}
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ffbf00] text-[#1a1814]">
                <Check className="size-4 stroke-[3]" />
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="border-t border-[#e8e1ce] bg-[#f7f1e3]" data-testid="about-cta-section"><div className="mx-auto max-w-[1320px] px-5 py-20 lg:px-8"><Testimonial quote="The best partner is the one who makes your ambition feel more achievable." name="The Luminor philosophy" role="Since 2018" /></div></section>
  </main></PageShell>;
}