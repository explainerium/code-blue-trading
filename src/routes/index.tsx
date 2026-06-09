import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe, Mail, MapPin, Package, Phone, ShieldCheck, Target, Eye, TrendingUp, Zap, Users, Cigarette, Shirt, Watch, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import vapeImg from "@/assets/vape-products.jpg";
import fmcgImg from "@/assets/fmcg.jpg";
import clothingImg from "@/assets/clothing.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import consultancyImg from "@/assets/consultancy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Code Blue Trading FZE — Trading & Consultancy in JAFZA, Dubai" },
      { name: "description", content: "Diversified trading and consultancy company in JAFZA, Dubai, delivering premium products and professional services across the UAE, GCC, Europe and global markets." },
      { property: "og:title", content: "Code Blue Trading FZE — Trading & Consultancy in JAFZA, Dubai" },
      { property: "og:description", content: "Diversified trading and consultancy company in JAFZA, Dubai, serving UAE, GCC, Europe and global markets." },
    ],
  }),
  component: Index,
});

const divisions = [
  {
    icon: Cigarette,
    title: "Vape & E-Cigarette Trading",
    image: vapeImg,
    desc: "Trading and distribution of premium vaping products and e-cigarette accessories sourced from reputable manufacturers worldwide. Focus on quality, compliance, and customer satisfaction.",
  },
  {
    icon: Briefcase,
    title: "Business Consultancy Services",
    image: consultancyImg,
    desc: "Strategic guidance and practical solutions for businesses seeking growth, operational efficiency, and market expansion. We work with startups, SMEs, and established enterprises.",
  },
  {
    icon: Shirt,
    title: "Clothing & Fashion Products",
    image: clothingImg,
    desc: "Supply and trade a wide range of clothing and fashion-related products, catering to diverse customer preferences and market demands. Retail and wholesale requirements.",
  },
  {
    icon: Watch,
    title: "Accessories Trading",
    image: accessoriesImg,
    desc: "From lifestyle products to fashion accessories, we offer a carefully selected range of items that combine quality, functionality, and value. Extensive sourcing capabilities.",
  },
  {
    icon: Package,
    title: "FMCG Products",
    image: fmcgImg,
    desc: "Comprehensive range of consumer products including soft drinks, bottled water, juices, and beverages. Strong supplier relationships and efficient distribution channels.",
  },
];

const fmcgList = ["Soft Drinks", "Bottled Water", "Juices", "Beverages", "Other FMCG Products"];

const strengths = [
  { icon: Globe, title: "Strong Global Sourcing Network", desc: "International partnerships with reliable manufacturers and suppliers worldwide." },
  { icon: ShieldCheck, title: "Commitment to Quality & Compliance", desc: "Rigorous standards ensuring all products meet market regulations and expectations." },
  { icon: Package, title: "Reliable Trading & Distribution", desc: "Efficient logistics and supply chain management for consistent delivery." },
  { icon: Users, title: "Customer-Focused Approach", desc: "Tailored solutions designed around your specific business needs and goals." },
  { icon: TrendingUp, title: "Professional Consultancy Expertise", desc: "Strategic guidance backed by deep market knowledge and industry experience." },
  { icon: Zap, title: "Competitive Pricing & Logistics", desc: "Cost-effective solutions with streamlined operations for maximum value." },
];

const contactCards = [
  { icon: Mail, label: "Email", value: "info@codebluefze.com" },
  { icon: Phone, label: "Phone", value: "+971 56 377 9922" },
  { icon: MapPin, label: "Location", value: "United Arab Emirates" },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={heroBg}
          alt="Dubai skyline at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--navy-deep)]/80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Globe className="h-4 w-4" /> UAE Based · Globally Connected
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Your Trusted Trading &amp;
            <br />
            <span className="text-accent">Consultancy Partner</span> in the UAE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/75">
            A dynamic company committed to delivering quality products, strategic business
            solutions, and reliable supply chain services across multiple industries.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/divisions" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Explore Our Divisions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What We Do</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Our Business Divisions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Diversified trading and consultancy services designed to meet evolving market needs
              across the UAE and international markets.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.slice(0, 3).map((d) => (
              <DivisionCard key={d.title} d={d} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {divisions.slice(3).map((d) => (
              <DivisionCard key={d.title} d={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={fmcgImg}
            alt="FMCG Products"
            loading="lazy"
            className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Fast-Moving Consumer Goods</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">FMCG Products Division</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our FMCG division provides a comprehensive range of consumer products through strong
              supplier relationships and efficient distribution channels, ensuring consistent product
              availability and competitive pricing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {fmcgList.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-md bg-card border border-border px-4 py-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Strengths</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Why Choose Us?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Partner with a company that combines global reach with local expertise to deliver
              exceptional value.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title} className="rounded-xl bg-card border border-border p-6 transition hover:shadow-md hover:border-accent/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-[var(--navy-deep)] p-8 text-primary-foreground">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 text-xl font-bold">Our Mission</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-primary-foreground/75">
              To create long-term value for our clients by delivering quality products, innovative
              business solutions, and dependable trading services while maintaining the highest
              standards of professionalism and integrity.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5" />
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 text-xl font-bold text-foreground">Our Vision</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              To become a leading diversified trading and consultancy company in the UAE,
              recognized for excellence, reliability, and sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get in Touch</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ready to explore how we can support your business? Reach out and our team will be happy
            to assist.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {contactCards.map((c) => (
              <div key={c.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{c.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DivisionCard({ d }: { d: { icon: typeof Cigarette; title: string; image: string; desc: string } }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/60 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={d.image}
          alt={d.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
          <d.icon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-foreground">{d.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
      </div>
    </div>
  );
}