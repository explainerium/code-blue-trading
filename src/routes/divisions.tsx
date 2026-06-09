import { createFileRoute } from "@tanstack/react-router";
import { Check, Cigarette, ShoppingBag, Shirt, Watch } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import vape from "@/assets/vape-products.jpg";
import fmcg from "@/assets/fmcg.jpg";
import clothing from "@/assets/clothing.jpg";
import accessories from "@/assets/accessories.jpg";

export const Route = createFileRoute("/divisions")({
  head: () => ({
    meta: [
      { title: "Trading Divisions — Code Blue Trading FZE" },
      { name: "description", content: "Diversified trading divisions backed by a strong global network of manufacturers and suppliers: vape, FMCG, clothing, and accessories." },
      { property: "og:title", content: "Trading Divisions — Code Blue Trading FZE" },
      { property: "og:description", content: "Premium products and global sourcing across vape, FMCG, clothing and accessories." },
    ],
  }),
  component: DivisionsPage,
});

const items = [
  {
    icon: Cigarette,
    title: "Vape & E-Cigarette Trading",
    image: vape,
    desc: "We specialize in sourcing and distributing premium vaping products, e-cigarettes, and accessories from reputable international manufacturers. Our focus is on quality, compliance, and customer satisfaction.",
    listLabel: "Services",
    list: ["Product sourcing", "Wholesale distribution", "Retail supply support", "International trading solutions"],
  },
  {
    icon: ShoppingBag,
    title: "FMCG Products",
    image: fmcg,
    desc: "Our FMCG division supplies a broad range of consumer goods through reliable sourcing and distribution networks.",
    listLabel: "Product Categories",
    list: ["Soft Drinks", "Bottled Water", "Juices", "Beverages", "Other FMCG Products"],
  },
  {
    icon: Shirt,
    title: "Clothing & Fashion Products",
    image: clothing,
    desc: "We supply quality clothing and fashion products designed to meet retail and wholesale market demands.",
    listLabel: "Product Range",
    list: ["Casual wear", "Fashion apparel", "Seasonal collections", "Wholesale fashion products"],
  },
  {
    icon: Watch,
    title: "Accessories Trading",
    image: accessories,
    desc: "We provide a diverse range of lifestyle and fashion accessories sourced from trusted international suppliers.",
    listLabel: "Product Categories",
    list: ["Fashion accessories", "Lifestyle products", "Promotional items", "Consumer accessories"],
  },
];

function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trading Divisions"
        title="Premium Products, Global Sourcing"
        description="Diversified trading divisions backed by a strong global network of manufacturers and suppliers."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`grid gap-10 md:grid-cols-2 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-foreground">{item.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  {item.listLabel}
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.list.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}