import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Handshake, Lightbulb, Heart, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Code Blue Trading FZE" },
      { name: "description", content: "A UAE-based trading and consultancy company operating from Jebel Ali Free Zone (JAFZA), one of the world's premier logistics and trade hubs." },
      { property: "og:title", content: "About — Code Blue Trading FZE" },
      { property: "og:description", content: "UAE-based trading and consultancy company operating from JAFZA, Dubai." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We conduct our business with honesty, transparency, and accountability." },
  { icon: Award, title: "Excellence", desc: "We strive to exceed expectations through quality products and professional services." },
  { icon: Handshake, title: "Reliability", desc: "We build lasting relationships through consistency and dependability." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously seek smarter and more effective business solutions." },
  { icon: Heart, title: "Customer Focus", desc: "Our clients' success remains at the center of everything we do." },
];

const leaders = [
  {
    initials: "CH",
    name: "Christopher",
    title: "Senior Manager – Europe",
    region: "Europe",
    bio: "Over 15 years of experience in sales, business development, and international trade. Christopher leads our sales and business development activities throughout Europe, driving market expansion and strategic partnerships.",
  },
  {
    initials: "MS",
    name: "Muhammad shahid",
    title: "Manager – Gulf Region",
    region: "GCC & Gulf",
    bio: "Muhammad shahid oversees sales and business development across the GCC and Gulf markets, strengthening regional partnerships and delivering exceptional service to clients throughout the region.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Code Blue Trading FZE"
        description="A UAE-based trading and consultancy company operating from Jebel Ali Free Zone (JAFZA), one of the world's premier logistics and trade hubs."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Who We Are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in international trading, product sourcing, distribution, and business
              consultancy services. Our goal is to build long-term partnerships through trust,
              transparency, and exceptional service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What We Do</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We connect global suppliers with regional and international markets through efficient
              sourcing, procurement, distribution, and business support services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What We Stand For</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The People Behind Code Blue</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Meet Our Leadership</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Experienced professionals driving our growth across Europe, the GCC, and global markets.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {leaders.map((l) => (
              <article key={l.name} className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="bg-[var(--navy-deep)] text-primary-foreground p-8 flex items-center gap-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                    {l.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{l.name}</h3>
                    <p className="text-accent">{l.title}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-foreground/70">
                      <MapPin className="h-3.5 w-3.5" /> {l.region}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed">{l.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/leadership" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Meet the Full Leadership Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}