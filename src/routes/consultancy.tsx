import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Globe, ClipboardList, Truck, Settings } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import consultancy from "@/assets/consultancy.jpg";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Consultancy — Code Blue Trading FZE" },
      { name: "description", content: "Practical and strategic consultancy services to help businesses grow and improve operational performance." },
      { property: "og:title", content: "Consultancy — Code Blue Trading FZE" },
      { property: "og:description", content: "Strategy, market entry, supply chain and operations consultancy." },
    ],
  }),
  component: ConsultancyPage,
});

const services = [
  { icon: TrendingUp, title: "Business Development", desc: "Supporting organizations in identifying growth opportunities and expanding revenue streams." },
  { icon: Globe, title: "Market Entry & Expansion", desc: "Helping companies successfully enter new regional and international markets." },
  { icon: ClipboardList, title: "Strategic Planning", desc: "Developing sustainable growth strategies aligned with business objectives." },
  { icon: Truck, title: "Supply Chain & Procurement", desc: "Optimizing sourcing, procurement, logistics, and supplier management processes." },
  { icon: Settings, title: "Operational Improvement", desc: "Enhancing business efficiency and performance through process improvements and best practices." },
];

const sectors = ["Trading & Distribution", "FMCG", "Retail", "Consumer Products", "Fashion & Apparel", "Startups and SMEs"];

function ConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultancy Services"
        title="Business Consultancy Solutions"
        description="Practical and strategic consultancy services designed to help businesses grow and improve operational performance."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <img
            src={consultancy}
            alt="Consultancy"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full rounded-2xl object-cover aspect-[4/3]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Strategy, execution, and measurable results.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We partner with startups, SMEs, and established enterprises to unlock growth — from
              identifying new opportunities to streamlining day-to-day operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Sectors</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Industries We Support</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {sectors.map((sec) => (
              <span key={sec} className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground">
                {sec}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}