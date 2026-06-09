import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--navy-deep)] text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/75">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}