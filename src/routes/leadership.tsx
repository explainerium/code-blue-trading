import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Code Blue Trading FZE" },
      { name: "description", content: "Experienced professionals leading our growth across global markets." },
      { property: "og:title", content: "Leadership — Code Blue Trading FZE" },
      { property: "og:description", content: "Our leadership team and regional sales management." },
    ],
  }),
  component: LeadershipPage,
});

const leaders = [
  {
    initials: "CH",
    name: "Christopher",
    title: "Senior Manager – Europe",
    region: "Europe",
    bio: "Christopher brings more than 15 years of experience in sales, business development, and international trade. As Senior Manager at Code Blue Trading FZE, he leads the company's sales and business development activities throughout Europe. His expertise in market expansion, client relationship management, and strategic partnerships has contributed significantly to the company's international growth and success.",
  },
  {
    initials: "MS",
    name: "Mohammad Shahid",
    title: "Manager – Gulf Region",
    region: "GCC & Gulf",
    bio: "Mohammad Shahid oversees sales and business development operations across the GCC and Gulf markets. With strong regional market knowledge and a customer-focused approach, he plays a key role in strengthening partnerships, expanding market presence, and delivering exceptional service to clients throughout the Gulf region.",
  },
];

function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Team"
        title="Leadership & Regional Sales Management"
        description="Experienced professionals leading our growth across global markets."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {leaders.map((l) => (
            <article key={l.name} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="bg-[var(--navy-deep)] text-primary-foreground p-8 flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  {l.initials}
                </span>
                <div>
                  <h2 className="text-xl font-bold">{l.name}</h2>
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Leadership Approach</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our leadership team is committed to delivering value through innovation, professionalism,
            integrity, and long-term customer relationships.
          </p>
        </div>
      </section>
    </>
  );
}