import { ArrowDownRight, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { OrbCanvas, PageShell, ServiceCard, Testimonial, Eyebrow, MetricStrip, serviceCards } from "@/components/LuminorSite";
import { BrandsMarquee } from "@/components/BrandsMarquee";

const studioImage = "https://images.unsplash.com/photo-1638545818407-ac7a54b544fd?auto=format&fit=crop&w=1200&q=85";
const portraitImage = "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?auto=format&fit=crop&w=900&q=85";

export default function Home() {
  return <PageShell>
    <main>
      <section className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-[1320px] items-center gap-8 overflow-hidden px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20" data-testid="home-hero-section">
        <div className="relative z-10" data-testid="home-hero-copy"><div className="eyebrow flex items-center gap-3"><span className="size-2 rounded-full bg-[#ffbf00]" /> Independent social + digital studio</div><h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[7.25rem]" data-testid="home-hero-title">Make your brand <span className="italic text-[#ffbf00]">impossible</span> to scroll past.</h1><p className="mt-8 max-w-xl text-lg leading-8 text-[#575247]" data-testid="home-hero-description">Luminor Media is a Digital Marketing Agency helping brands grow through strategy, branding content and social media.</p><div className="mt-9 flex flex-wrap items-center gap-4"><Link to="/contact" className="inline-flex items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814] shadow-[0_12px_30px_rgba(255,191,0,0.2)] transition hover:-translate-y-1 hover:bg-[#e5ab00]" data-testid="hero-primary-cta">Start a conversation <ArrowRight className="ml-2 size-4" /></Link><Link to="/results" className="inline-flex items-center rounded-full border border-[#1a1814]/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[#ffbf00]" data-testid="hero-secondary-cta"><Play className="mr-2 size-4 fill-[#ffbf00] text-[#ffbf00]" /> See the work</Link></div><div className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.12em] text-[#8c8474]" data-testid="hero-scroll-cue"><ArrowDownRight className="size-5 text-[#ffbf00]" /> Scroll to explore</div></div>
        <div className="relative min-h-[430px] lg:min-h-[650px]" data-testid="home-hero-visual"><div className="absolute right-0 top-1/2 h-[88%] w-[94%] -translate-y-1/2 rounded-[48%] border border-[#ffbf00]/20 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.12),transparent_62%)]" /><OrbCanvas /><div className="absolute bottom-10 left-2 rounded-2xl border border-[#e8e1ce] bg-[#fffbf2]/85 p-4 backdrop-blur-md" data-testid="hero-floating-note"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8c8474]">The Luminor lens</p><p className="mt-2 max-w-[170px] text-sm leading-5">Good content gets attention. Great content gives it somewhere to go.</p></div><div className="absolute right-4 top-14 hidden rounded-full bg-[#1a1814] px-4 py-2 text-xs font-semibold text-[#ffbf00] sm:block" data-testid="hero-floating-badge">strategy × story</div></div>
      </section>

      {/* Brands we work with - Animated side-by-side Marquee with Hover Effects */}
      <BrandsMarquee />

      {/* Services Section */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32" data-testid="home-services-section">
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 max-w-md font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.08]" data-testid="home-services-title">
              Bringing your brand into a <span className="italic text-[#ffbf00]">new light.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#575247]" data-testid="home-services-description">
              We help businesses grow through strategy, social media, content creation, and digital marketing that gets your brand seen and remembered.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="group inline-flex items-center rounded-full bg-[#1a1814] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#fffbf2] shadow-sm transition hover:bg-[#ffbf00] hover:text-[#1a1814]"
                data-testid="home-services-link"
              >
                Explore our services <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {serviceCards.map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1814] text-[#fffbf2]" data-testid="home-results-preview"><div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32"><div><Eyebrow>Proof, not promises</Eyebrow><h2 className="mt-6 max-w-xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl" data-testid="home-results-title">Creative that earns its keep.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#b9b1a2]">Every beautiful idea has a job to do. We make sure yours shows up in the numbers, too.</p><Link to="/results" className="mt-8 inline-flex items-center rounded-full border border-[#ffbf00]/50 px-5 py-3 text-sm font-semibold text-[#ffbf00] transition hover:bg-[#ffbf00] hover:text-[#1a1814]" data-testid="home-results-link">Explore results <ArrowRight className="ml-2 size-4" /></Link></div><div className="grid gap-5 sm:grid-cols-2"><MetricStrip /><div className="relative min-h-64 overflow-hidden rounded-3xl"><img src={studioImage} alt="Creative team in a studio" className="absolute inset-0 size-full object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-transparent to-transparent" /><p className="absolute bottom-5 left-5 max-w-[210px] font-serif text-2xl leading-tight">Make the feed feel different.</p></div></div></div></section>

      <section className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8 lg:py-32" data-testid="home-testimonial-section"><div><Eyebrow>A note from the other side</Eyebrow><Testimonial quote="They made us feel like the most interesting brand in the room — and gave us the growth to prove it." name="Sofia Chen" role="VP Marketing, ARC / 01" /><Link to="/results" className="mt-9 inline-flex items-center text-sm font-semibold" data-testid="home-testimonial-link">Read the full story <ArrowRight className="ml-2 size-4" /></Link></div><div className="relative mx-auto max-w-sm"><div className="absolute -inset-4 rounded-[46%] border border-[#ffbf00]/30" /><img src={portraitImage} alt="Luminor client portrait" className="relative aspect-[4/5] w-full rounded-[40%] object-cover grayscale" data-testid="home-testimonial-image" /><div className="absolute -bottom-5 -left-6 rounded-2xl bg-[#ffbf00] px-5 py-4 text-sm font-semibold text-[#1a1814]" data-testid="home-testimonial-note">+480% engagement<br /><span className="font-normal">in one quarter</span></div></div></section>

      <section className="border-t border-[#e8e1ce] bg-[#f7f1e3]" data-testid="home-cta-section"><div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-5 py-20 lg:flex-row lg:items-end lg:px-8 lg:py-28"><div><Eyebrow>Ready when you are</Eyebrow><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-tight sm:text-6xl">Your brand has more to say.</h2></div><Link to="/contact" className="inline-flex shrink-0 items-center rounded-full bg-[#ffbf00] px-6 py-3.5 text-sm font-semibold text-[#1a1814] transition hover:-translate-y-1 hover:bg-[#e5ab00]" data-testid="home-bottom-cta">Let’s find the signal <ArrowRight className="ml-2 size-4" /></Link></div></section>
    </main>
  </PageShell>;
}