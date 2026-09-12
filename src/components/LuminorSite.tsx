import { useEffect, useRef, useState, type FormEvent, type ReactNode, type Key } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Check,
  ChevronDown,
  Flame,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MoveUpRight,
  Palette,
  Play,
  Share2,
  Sparkles,
  Target,
  Video,
  X,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { apiPost } from "@/lib/api";
import type { Consultation, ConsultationCreate, NewsletterCreate, NewsletterSubscription } from "@/lib/types";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/luminor.media_?stkn=MTNuejRnbWh1OXBzbA==",
  linkedin: "https://www.linkedin.com/in/luminor-media-studio",
};

export const logoUrl = "https://customer-assets-0z36b82j.emergentagent.net/job_d0dc1b9e-821e-4a6c-b7f9-f5f2a678784c/artifacts/9mv4yxv3_luminor%20media%20logo.png";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Results", "/results"],
  ["Insights", "/insights"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e1ce]/80 bg-[#fffbf2]/85 backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" data-testid="nav-logo-link" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Luminor Media" className="h-10 w-auto object-contain mix-blend-multiply" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation" data-testid="desktop-navigation">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
              data-testid={`nav-${label.toLowerCase()}-link`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <NavLink to="/faq" className="nav-link" data-testid="nav-faq-link">FAQ</NavLink>
          <Link to="/contact" className={cn(buttonVariants({ size: "sm" }), "rounded-full bg-[#ffbf00] px-5 text-[#1a1814] shadow-[0_8px_20px_rgba(255,191,0,0.18)] hover:bg-[#e5ab00]")} data-testid="header-consultation-link">
            Start a conversation <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
        <button type="button" className="rounded-full border border-[#e8e1ce] p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} data-testid="mobile-navigation-toggle">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#e8e1ce] bg-[#fffbf2] px-5 py-5 md:hidden" data-testid="mobile-navigation-menu">
          <div className="flex flex-col gap-4">
            {navItems.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)} className="text-lg font-medium" data-testid={`mobile-nav-${label.toLowerCase()}-link`}>{label}</NavLink>
            ))}
            <NavLink to="/faq" onClick={() => setOpen(false)} className="text-lg font-medium" data-testid="mobile-nav-faq-link">FAQ</NavLink>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit rounded-full bg-[#ffbf00] px-5 py-3 text-sm font-semibold" data-testid="mobile-consultation-link">Book a consultation <ArrowRight className="ml-2 size-4" /></Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const newsletter = useMutation({
    mutationFn: (body: NewsletterCreate) => apiPost<NewsletterSubscription>("/consultations/newsletter", body),
    onSuccess: () => { setEmail(""); toast.success("You’re on the list. Watch your inbox for the next insight."); },
    onError: () => toast.error("That email could not be added. Please try again."),
  });
  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim().length < 5) { toast.error("Please enter a valid email address."); return; }
    newsletter.mutate({ email: email.trim() });
  };
  return (
    <footer className="border-t border-[#e8e1ce] bg-[#f7f1e3]" data-testid="site-footer">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.3fr] lg:px-8">
        <div data-testid="footer-brand-block">
          <img src={logoUrl} alt="Luminor Media" className="h-12 w-auto object-contain mix-blend-multiply" />
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#575247]">Your brand in a new light. Strategy, storytelling, and scale for the brands shaping what’s next.</p>
          <div className="mt-6 flex gap-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon" data-testid="footer-instagram-link"><Instagram className="size-4" /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon" data-testid="footer-linkedin-link"><Linkedin className="size-4" /></a>
          </div>
        </div>
        <div data-testid="footer-navigation-block"><p className="eyebrow">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm"><Link to="/about" data-testid="footer-about-link">About</Link><Link to="/services" data-testid="footer-services-link">Services</Link><Link to="/results" data-testid="footer-results-link">Results</Link><Link to="/insights" data-testid="footer-insights-link">Insights</Link></div></div>
        <div data-testid="footer-contact-block"><p className="eyebrow">Find us</p><div className="mt-4 space-y-3 text-sm text-[#575247]"><p>Bengaluru / Chitradurga<br />Karnataka / India</p><Link to="/contact" className="font-semibold text-[#1a1814] underline decoration-[#ffbf00] underline-offset-4" data-testid="footer-contact-link">Let’s talk <ArrowRight className="ml-1 inline size-3" /></Link></div></div>
        <div data-testid="footer-newsletter-block"><p className="eyebrow">The Luminor letter</p><p className="mt-4 text-sm leading-6 text-[#575247]">A considered monthly note on the ideas making brands impossible to ignore.</p><form onSubmit={submitNewsletter} className="mt-5 flex border-b border-[#1a1814] pb-2" data-testid="newsletter-form"><Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-label="Your email address" className="h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0" data-testid="newsletter-email-input" /><button type="submit" aria-label="Subscribe to newsletter" className="text-[#1a1814]" disabled={newsletter.isPending} data-testid="newsletter-submit-button"><ArrowRight className="size-5" /></button></form></div>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-3 border-t border-[#e8e1ce] px-5 py-5 text-[11px] uppercase tracking-[0.14em] text-[#8c8474] sm:flex-row lg:px-8" data-testid="footer-legal-row"><span>© 2025 Luminor Media</span><span>Built for brands with somewhere to go.</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffbf2] text-[#1a1814]">
      <div className="noise-overlay" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export function OrbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let animationId = 0;
    const points = Array.from({ length: 110 }, (_, index) => ({ angle: (index / 110) * Math.PI * 2, radius: 0.28 + (index % 7) * 0.025, speed: 0.00025 + (index % 5) * 0.00004 }));
    const render = () => {
      const width = canvas.clientWidth || 0;
      const height = canvas.clientHeight || 0;
      if (width <= 0 || height <= 0) {
        animationId = requestAnimationFrame(render);
        return;
      }
      const ratio = window.devicePixelRatio || 1;
      if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        context.scale(ratio, ratio);
      }
      context.clearRect(0, 0, width, height);
      const centerX = width * 0.52;
      const centerY = height * 0.48;
      const base = Math.max(1, Math.min(width, height));
      const innerRadius = Math.max(0.1, base * 0.03);
      const outerRadius = Math.max(innerRadius + 1, base * 0.42);
      const halo = context.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius);
      halo.addColorStop(0, "rgba(255,191,0,0.22)");
      halo.addColorStop(0.45, "rgba(255,191,0,0.07)");
      halo.addColorStop(1, "rgba(255,191,0,0)");
      context.fillStyle = halo;
      context.fillRect(0, 0, width, height);
      points.forEach((point, index) => {
        point.angle += point.speed;
        const orbit = base * point.radius;
        const wobble = Math.sin(frame * 0.012 + index) * base * 0.018;
        const x = centerX + Math.cos(point.angle) * (orbit + wobble);
        const y = centerY + Math.sin(point.angle) * (orbit * 0.54 + wobble);
        const particleRadius = Math.max(0.5, 1.4 + (index % 3) * 0.55);
        context.beginPath();
        context.arc(x, y, particleRadius, 0, Math.PI * 2);
        context.fillStyle = index % 4 === 0 ? "#1a1814" : "#ffbf00";
        context.globalAlpha = 0.35 + (index % 5) * 0.1;
        context.fill();
      });
      context.globalAlpha = 1;
      const glowOrbRadius = Math.max(0.1, base * 0.18 + Math.sin(frame * 0.018) * 3);
      context.beginPath();
      context.arc(centerX, centerY, glowOrbRadius, 0, Math.PI * 2);
      context.fillStyle = "rgba(255,191,0,0.12)";
      context.fill();

      const coreOrbRadius = Math.max(0.1, base * 0.085);
      context.beginPath();
      context.arc(centerX - base * 0.015, centerY - base * 0.018, coreOrbRadius, 0, Math.PI * 2);
      context.fillStyle = "#ffbf00";
      context.shadowBlur = 34;
      context.shadowColor = "rgba(255,191,0,0.5)";
      context.fill();
      context.shadowBlur = 0;
      frame += 1;
      animationId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationId);
  }, []);
  return <canvas ref={canvasRef} className="orb-canvas" aria-label="Animated luminous particle globe" data-testid="hero-orb-canvas" />;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow" data-testid="section-eyebrow">{children}</p>; }

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28" data-testid="page-intro"><Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl" data-testid="page-intro-title">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[#575247]" data-testid="page-intro-description">{description}</p></section>;
}

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<ConsultationCreate>({ name: "", email: "", company: "", investment: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);
  const consultation = useMutation({ mutationFn: (body: ConsultationCreate) => apiPost<Consultation>("/consultations", body), onSuccess: () => { setSubmitted(true); toast.success("Your note is with the Luminor team."); }, onError: () => toast.error("We couldn’t send that just yet. Please try again.") });
  const update = (field: keyof ConsultationCreate, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); consultation.mutate(form); };
  if (submitted) return <div className="flex min-h-[360px] flex-col justify-center rounded-3xl border border-[#ffbf00]/40 bg-[#fff3cc] p-8" data-testid="consultation-success"><div className="flex size-12 items-center justify-center rounded-full bg-[#ffbf00] text-[#1a1814]"><Check className="size-6" /></div><h3 className="mt-6 font-serif text-4xl tracking-tight">A brighter next chapter starts here.</h3><p className="mt-4 max-w-md leading-7 text-[#575247]">Thanks for reaching out. We’ll be in touch within one business day to find the clearest way forward.</p><Link to="/results" className="mt-7 inline-flex items-center font-semibold" data-testid="consultation-success-results-link">See what’s possible <ArrowRight className="ml-2 size-4" /></Link></div>;
  return <form onSubmit={submit} className={cn("grid gap-5", compact ? "" : "lg:grid-cols-2")} data-testid={compact ? "compact-consultation-form" : "consultation-form"}>
    <div><label htmlFor={`${compact ? "compact-" : ""}name`} className="form-label">Your name</label><Input id={`${compact ? "compact-" : ""}name`} required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Alex Morgan" data-testid={`${compact ? "compact-" : ""}consultation-name-input`} /></div>
    <div><label htmlFor={`${compact ? "compact-" : ""}email`} className="form-label">Work email</label><Input id={`${compact ? "compact-" : ""}email`} required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="alex@company.com" data-testid={`${compact ? "compact-" : ""}consultation-email-input`} /></div>
    <div><label htmlFor={`${compact ? "compact-" : ""}company`} className="form-label">Company</label><Input id={`${compact ? "compact-" : ""}company`} required value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Company name" data-testid={`${compact ? "compact-" : ""}consultation-company-input`} /></div>
    <div><label htmlFor={`${compact ? "compact-" : ""}investment`} className="form-label">Monthly investment</label><select id={`${compact ? "compact-" : ""}investment`} required value={form.investment} onChange={(event) => update("investment", event.target.value)} className="field-select" data-testid={`${compact ? "compact-" : ""}consultation-investment-select`}><option value="">Select a range</option><option value="$2k–$5k">$2k–$5k</option><option value="$5k–$10k">$5k–$10k</option><option value="$10k+">$10k+</option></select></div>
    <div className="lg:col-span-2"><label htmlFor={`${compact ? "compact-" : ""}challenge`} className="form-label">What would you like to make brighter?</label><Textarea id={`${compact ? "compact-" : ""}challenge`} required minLength={10} value={form.challenge} onChange={(event) => update("challenge", event.target.value)} placeholder="Tell us where your brand is headed..." className="min-h-28 resize-none" data-testid={`${compact ? "compact-" : ""}consultation-challenge-textarea`} /></div>
    <div className="lg:col-span-2"><Button type="submit" disabled={consultation.isPending} className="h-12 rounded-full bg-[#ffbf00] px-6 text-[#1a1814] hover:bg-[#e5ab00]" data-testid={`${compact ? "compact-" : ""}consultation-submit-button`}>{consultation.isPending ? "Sending…" : "Request a consultation"}<ArrowRight className="ml-2 size-4" /></Button><p className="mt-3 text-xs text-[#8c8474]">No hard sell. Just a useful first conversation.</p></div>
  </form>;
}

export const serviceCards = [
  {
    number: "01",
    title: "Social Media",
    text: "Build a strong social presence with consistent, engaging content.",
    icon: Share2,
    accent: "#ffbf00",
  },
  {
    number: "02",
    title: "Content Creation",
    text: "Reels, photos, and creative content designed to make your brand stand out.",
    icon: Video,
    accent: "#e5ab00",
  },
  {
    number: "03",
    title: "Digital Marketing",
    text: "Strategic digital campaigns that connect your brand with the right audience.",
    icon: BarChart3,
    accent: "#d4af37",
  },
  {
    number: "04",
    title: "Branding",
    text: "Create a clear, memorable identity that gives your business a stronger presence.",
    icon: Palette,
    accent: "#c59b27",
  },
];

export function ServiceCard({ service, index }: { service: typeof serviceCards[number]; index: number; key?: Key }) {
  const Icon = service.icon;
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between min-h-[340px] overflow-hidden rounded-[28px] border border-[#e8e1ce] bg-white p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbf00] hover:shadow-[0_22px_55px_rgba(255,191,0,0.14)]",
        index % 2 === 1 && "lg:translate-y-2"
      )}
      data-testid={`service-card-${service.number}`}
    >
      <div className="absolute -right-10 -top-10 size-44 rounded-full border border-[#ffbf00]/15 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.08),transparent_70%)] transition-all duration-700 ease-out group-hover:scale-125 group-hover:border-[#ffbf00]/30" />
      <div>
        <div className="flex items-start justify-between relative z-10">
          <span className="font-mono text-xs font-semibold text-[#8c8474] tracking-wider">{service.number}</span>
          <div
            className="flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
          >
            <Icon className="size-5" />
          </div>
        </div>
        <h3 className="mt-14 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1814]">
          {service.title}
        </h3>
        <p className="mt-3.5 text-sm leading-relaxed text-[#575247]">
          {service.text}
        </p>
      </div>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center text-xs sm:text-sm font-semibold text-[#1a1814] group-hover:text-[#ffbf00] transition-colors"
        data-testid={`service-card-${service.number}-link`}
      >
        Explore the work <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

function AnimatedCounter({ end, duration = 800 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const startVal = 1;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.round(startVal + (end - startVal) * easeOut);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function MetricStrip() {
  const metrics = [
    { target: 1, suffix: "+", label: "Years of experience", progress: 70, icon: BarChart3 },
    { target: 20, suffix: "+", label: "Brands worked with", progress: 85, icon: Briefcase },
    { target: 100, suffix: "+", label: "Campaigns created", progress: 95, icon: Flame },
    { target: 50, suffix: "+", label: "Projects completed", progress: 90, icon: Award },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4" data-testid="metric-strip">
      {metrics.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e8e1ce] bg-[#fffbf2] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_16px_35px_rgba(255,191,0,0.12)]"
            data-testid={`metric-${item.target}plus`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-bold tracking-tight text-[#1a1814] sm:text-4xl lg:text-5xl group-hover:text-[#ffbf00] transition-colors">
                <AnimatedCounter end={item.target} duration={750} />{item.suffix}
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#ffbf00]/15 text-[#c59b27] group-hover:bg-[#ffbf00] group-hover:text-[#1a1814] transition-all">
                <Icon className="size-4" />
              </div>
            </div>
            
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#8c8474]">
              {item.label}
            </p>

            {/* Animated metric growth indicator bar */}
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#e8e1ce]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ffbf00] to-[#e5ab00] transition-all duration-1000 ease-out group-hover:brightness-110"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ProofProcessBanner() {
  const metrics = [
    { target: 1, suffix: "+", label: "YEARS OF EXPERIENCE", accent: "from-[#ffbf00] to-[#ffd752]", bar: "w-[70%]" },
    { target: 20, suffix: "+", label: "BRANDS WORKED WITH", accent: "from-[#ffffff] to-[#e2dfd7]", bar: "w-[85%]" },
    { target: 100, suffix: "+", label: "CAMPAIGNS CREATED", accent: "from-[#ffbf00] to-[#ffd752]", bar: "w-[95%]" },
    { target: 50, suffix: "+", label: "PROJECTS COMPLETED", accent: "from-[#ffffff] to-[#e2dfd7]", bar: "w-[90%]" },
  ];

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#2e2a22] bg-[#12110e] px-6 py-14 text-center text-[#fffbf2] shadow-2xl sm:px-12 sm:py-20" data-testid="proof-in-the-process-banner">
      {/* Background golden ambient glow */}
      <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-72 w-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.18),transparent_70%)] blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Real Impact, Delivered
        </h2>
        <p className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-[#9f9888] uppercase">
          Proven momentum across social, creative, and digital growth. <span className="text-[#ffbf00]">Built to make your brand impossible to ignore.</span>
        </p>

        {/* 4 Metrics with ambient top glow and animated progress bars */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1.5"
            >
              {/* Soft vertical light beam effect above the number */}
              <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-white/10 blur-xl group-hover:bg-[#ffbf00]/25 transition-all duration-500" />

              <div
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-b bg-clip-text text-transparent pb-1 transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: m.accent.includes("ffbf00") 
                    ? "linear-gradient(to bottom, #ffe066, #ffbf00)" 
                    : "linear-gradient(to bottom, #ffffff, #cfc9bd)"
                }}
              >
                <AnimatedCounter end={m.target} duration={800} />{m.suffix}
              </div>

              <div className="mt-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#a59e90] uppercase">
                {m.label}
              </div>

              {/* Progress bar animation in golden yellow */}
              <div className="mt-5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out",
                    m.bar,
                    m.accent.includes("ffbf00")
                      ? "bg-gradient-to-r from-[#ffe066] to-[#ffbf00]"
                      : "bg-gradient-to-r from-white to-[#cfc9bd]"
                  )} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) { return <blockquote className="max-w-3xl" data-testid="testimonial-block"><p className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-5xl">“{quote}”</p><footer className="mt-8 flex items-center gap-3 text-sm"><span className="size-2 rounded-full bg-[#ffbf00]" /><span className="font-semibold">{name}</span><span className="text-[#8c8474]">{role}</span></footer></blockquote>; }