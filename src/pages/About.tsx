import { useState, useEffect, useId } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, PageIntro, PageShell, Testimonial } from "@/components/LuminorSite";
import { HowWeWorkGraphic } from "@/components/HowWeWorkGraphic";
import { TeamPhotoManager, TeamMemberInfo } from "@/components/TeamPhotoManager";
import preethamImg from "@/assets/images/team/preetham.jpg";
import ravindraImg from "@/assets/images/team/ravindra.jpg";
import chetasImg from "@/assets/images/team/chetas.jpg";
import vishnuImg from "@/assets/images/team/vishnu.jpg";
import hardikImg from "@/assets/images/team/hardik.jpg";
import gokulImg from "@/assets/images/team/gokul.jpg";
import sanjanaImg from "@/assets/images/team/sanjana.jpg";
import sagarImg from "@/assets/images/team/sagar.jpg";
import suheartImg from "@/assets/images/team/suheart.jpg";

const teamMembersData: TeamMemberInfo[] = [
  { id: "preetham", name: "Preetham A", role: "Founder", defaultImage: preethamImg },
  { id: "ravindra", name: "Ravindra M.O", role: "Web Developer", defaultImage: ravindraImg },
  { id: "chetas", name: "Chetas", role: "Creative Head", defaultImage: chetasImg },
  { id: "vishnu", name: "Vishnu Reddy", role: "Executive Manager", defaultImage: vishnuImg },
  { id: "hardik", name: "Hardik P", role: "Co-Founder / Content Strategist", defaultImage: hardikImg },
  { id: "gokul", name: "Gokul", role: "Graphic Designer", defaultImage: gokulImg },
  { id: "sanjana", name: "Sanjana A", role: "Finance Co-ordinator", defaultImage: sanjanaImg },
  { id: "sagar", name: "Sagar RS", role: "Technical Advisor", defaultImage: sagarImg },
  { id: "suheart", name: "Suheart", role: "Cinematographer", defaultImage: suheartImg },
];

export default function About() {
  const [photoUpdateKey, setPhotoUpdateKey] = useState(0);
  const [memberPhotos, setMemberPhotos] = useState<Record<string, string>>({});

  useEffect(() => {
    const photos: Record<string, string> = {};
    teamMembersData.forEach((member) => {
      const stored = localStorage.getItem(`luminor_team_photo_${member.id}`);
      if (stored) {
        photos[member.id] = stored;
      }
    });
    setMemberPhotos(photos);
  }, [photoUpdateKey]);

  return (
    <PageShell>
      <main>
        <PageIntro
          eyebrow="The studio"
          title={<>A little more <span className="italic text-[#ffbf00]">light</span> on the way in.</>}
          description="Luminor is an independent social and digital studio for brands with ambition, taste, and somewhere meaningful to go next."
        />
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

        <section className="bg-[#1a1814] text-[#fffbf2]" data-testid="about-team-section">
          <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>People behind the light</Eyebrow>
                <h2 className="mt-5 font-serif text-5xl tracking-tight">The team, in focus.</h2>
              </div>
              <div className="flex flex-col items-start gap-4 sm:items-end">
                <p className="max-w-sm text-sm leading-6 text-[#b9b1a2]">
                  Senior thinking, generous collaboration, and just enough healthy obsession.
                </p>
                <TeamPhotoManager
                  members={teamMembersData}
                  onPhotosUpdated={() => setPhotoUpdateKey((k) => k + 1)}
                />
              </div>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembersData.map((member) => {
                const photoSrc = memberPhotos[member.id] || `/team/${member.id}.png` || member.defaultImage;

                return (
                  <div
                    key={member.id}
                    className="group rounded-3xl border border-[#2e2a22] bg-[#14120f] p-4 transition-all duration-500 hover:border-[#ffbf00]/50 hover:bg-[#1a1814]"
                    data-testid={`team-card-${member.id}`}
                  >
                    <div className="aspect-square overflow-hidden rounded-2xl bg-black">
                      <img
                        src={memberPhotos[member.id] || member.defaultImage}
                        onError={(e) => {
                          if (e.currentTarget.src !== member.defaultImage) {
                            e.currentTarget.src = member.defaultImage;
                          }
                        }}
                        alt={member.name}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 px-1 pb-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl text-[#fffbf2]">{member.name}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffbf00]">
                          {member.id === "preetham" || member.id === "hardik" ? "Leadership" : "Studio"}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#8c8474]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
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
        <section className="border-t border-[#e8e1ce] bg-[#f7f1e3]" data-testid="about-cta-section">
          <div className="mx-auto max-w-[1320px] px-5 py-20 lg:px-8">
            <Testimonial quote="The best partner is the one who makes your ambition feel more achievable." name="The Luminor philosophy" role="Since 2018" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}