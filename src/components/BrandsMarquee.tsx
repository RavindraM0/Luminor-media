import { useState } from "react";
import { X, Sparkles, ExternalLink, Play, Pause } from "lucide-react";
import sakshiTailorLogo from "@/assets/images/sakshi_tailor_logo_1789157413801.jpg";
import grainesLotusLogo from "@/assets/images/graines_lotus_logo_1789157452714.jpg";
import ka16RunClubLogo from "@/assets/images/ka16_runclub_logo_1789157473645.jpg";

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  logo: string;
  accent: string;
  description: string;
  aspectClass?: string;
  logoHeight?: string;
  isCustomRound?: boolean;
}

export const brandPartners: BrandPartner[] = [
  {
    id: "sakshi-tailor",
    name: "Sakshi Tailor",
    category: "Boutique Fashion & Couture",
    subtitle: "Est. 2008",
    logo: sakshiTailorLogo,
    accent: "#ff9fb2",
    description: "Artisanal tailoring atelier and custom embroidery studio established in 2008, crafting bespoke garments with handcrafted care and timeless silhouette precision.",
    aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
    logoHeight: "h-16 sm:h-20",
    isCustomRound: true,
  },
  {
    id: "graines-de-lotus",
    name: "Graines de lotus",
    category: "Organic Botanicals & Wellness",
    subtitle: "Intemporelles · Savoureuses · Pures",
    logo: grainesLotusLogo,
    accent: "#b59b58",
    description: "French artisanal lotus botanical house offering pure, timeless, and delicate botanical nutrition and gourmet seed delicacies crafted in supreme elegance.",
    aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
    logoHeight: "h-16 sm:h-20",
    isCustomRound: true,
  },
  {
    id: "ka16-run-club",
    name: "KA16 Run Club",
    category: "Athletics & Community Running",
    subtitle: "Legacy in Motion",
    logo: ka16RunClubLogo,
    accent: "#ffbf00",
    description: "High-energy athletics collective and historic community running movement celebrating endurance, gritty heritage, and legacy in perpetual motion.",
    aspectClass: "h-16 w-28 sm:h-20 sm:w-36",
    logoHeight: "h-16 sm:h-20",
    isCustomRound: false,
  },
  {
    id: "elite-performance",
    name: "Elite Performance",
    category: "Athletic Gear & Cricket",
    subtitle: "Sports Performance",
    logo: "/logos/elite-performance.svg",
    accent: "#0e2254",
    description: "Precision-engineered sports equipment and high-performance athletic apparel engineered for professional cricketers and modern athletes.",
    aspectClass: "h-16 w-20 sm:h-20 sm:w-24",
    logoHeight: "h-16 sm:h-20",
  },
  {
    id: "chitradurga-cricket-club",
    name: "Chitradurga Cricket Clubb",
    category: "Sports & Club League",
    subtitle: "Heritage Cricket Club",
    logo: "/logos/chitradurga-cricket-club.svg",
    accent: "#0a4ba6",
    description: "Historic Karnataka sports institution championing regional cricket talent, historic discipline, and championship tournament excellence.",
    aspectClass: "h-16 w-16 sm:h-20 sm:w-20",
    logoHeight: "h-16 sm:h-20",
  },
  {
    id: "sri-ranga-medicals",
    name: "Sri Ranga Medicals",
    category: "Healthcare & Pharmacy",
    subtitle: "Medicals & Wellness",
    logo: "/logos/sri-ranga-medicals.svg",
    accent: "#005030",
    description: "Trusted community pharmacy and wellness care provider delivering essential healthcare products, guidance, and trusted patient care.",
    aspectClass: "h-14 w-32 sm:h-16 sm:w-44",
    logoHeight: "h-14 sm:h-16",
  },
];

export function BrandsMarquee() {
  const [selectedBrand, setSelectedBrand] = useState<BrandPartner | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triple array to ensure seamless uninterrupted scrolling across ultra-wide viewports
  const marqueeItems = [...brandPartners, ...brandPartners, ...brandPartners];

  return (
    <section 
      className="relative border-y border-[#e8e1ce] bg-[#fffbf2] py-8 overflow-hidden" 
      data-testid="brands-we-work-with-section"
    >
      <div className="mx-auto max-w-[1320px] px-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="size-2.5 rounded-full bg-[#ffbf00] animate-pulse" />
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1a1814]" data-testid="brands-heading">
            Brands we work with
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-block font-mono text-xs text-[#8c8474] tracking-wider uppercase">
            Hover to hold · Click to view
          </span>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e1ce] bg-white/80 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#575247] hover:border-[#ffbf00] hover:text-[#1a1814] transition shadow-sm"
            aria-label={isPaused ? "Resume animation" : "Pause animation"}
            data-testid="marquee-pause-toggle"
          >
            {isPaused ? <Play className="size-3.5 text-[#ffbf00]" /> : <Pause className="size-3.5 text-[#8c8474]" />}
            <span>{isPaused ? "Play" : "Pause"}</span>
          </button>
        </div>
      </div>

      {/* Marquee Track Container with Vignette Gradient Edges */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div 
          className="marquee-track py-3 gap-6 sm:gap-8 px-4"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          data-testid="brands-marquee-track"
        >
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              onClick={() => setSelectedBrand(brand)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedBrand(brand)}
              className="group relative flex shrink-0 cursor-pointer items-center gap-4 sm:gap-5 rounded-2xl border border-[#e8e1ce] bg-white/90 px-6 py-4 sm:px-7 sm:py-4.5 shadow-[0_4px_16px_rgba(26,24,20,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[#ffbf00] hover:bg-white hover:shadow-[0_16px_36px_rgba(255,191,0,0.18)]"
              data-testid={`brand-card-${brand.id}`}
            >
              {/* Subtle top indicator on hover */}
              <div 
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: brand.accent }}
              />

              {/* Logo Visual */}
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  className={`${brand.logoHeight || "h-16"} w-auto max-w-[180px] object-contain transition-all duration-300 filter drop-shadow-sm group-hover:drop-shadow-md ${brand.isCustomRound ? "rounded-full shadow-sm" : "rounded-lg"}`}
                  loading="lazy"
                />
              </div>

              {/* Brand Meta Text */}
              <div className="flex flex-col border-l border-[#e8e1ce]/80 pl-4 sm:pl-5 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1a1814] group-hover:text-[#ffbf00] transition-colors">
                    {brand.name}
                  </span>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#8c8474]">
                  {brand.subtitle}
                </span>
                <span className="mt-0.5 text-xs text-[#575247] font-medium hidden sm:block">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal on Logo Click */}
      {selectedBrand && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1814]/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedBrand(null)}
          data-testid="brand-detail-modal"
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-[#e8e1ce] bg-[#fffbf2] p-6 sm:p-8 shadow-2xl text-[#1a1814]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-[#e8e1ce] bg-white text-[#575247] hover:border-[#ffbf00] hover:text-[#1a1814] transition"
              aria-label="Close brand dialog"
              data-testid="close-brand-modal"
            >
              <X className="size-4" />
            </button>

            {/* Modal Badge */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c8474]">
              <Sparkles className="size-3.5 text-[#ffbf00]" />
              <span>Verified Client Partner</span>
            </div>

            {/* Centered High-Res Logo Showcase */}
            <div className="mt-6 flex min-h-[160px] items-center justify-center rounded-2xl border border-[#e8e1ce] bg-white p-8 shadow-inner">
              <img
                src={selectedBrand.logo}
                alt={`${selectedBrand.name} logo`}
                className={`max-h-36 w-auto max-w-full object-contain ${selectedBrand.isCustomRound ? "rounded-full shadow-md aspect-square" : "rounded-xl"}`}
              />
            </div>

            {/* Content info */}
            <div className="mt-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1814]">
                {selectedBrand.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-[#8c8474]">
                {selectedBrand.subtitle} · {selectedBrand.category}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#575247]">
                {selectedBrand.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-7 flex items-center justify-between border-t border-[#e8e1ce] pt-4">
              <span className="font-mono text-[10px] text-[#8c8474] uppercase tracking-wider">
                Original Brand Asset
              </span>
              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
                className="inline-flex items-center rounded-full bg-[#ffbf00] px-5 py-2 text-xs font-semibold text-[#1a1814] hover:bg-[#e5ab00] transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
