import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Users, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Code Blue Trading FZE" },
      { name: "description", content: "Get in touch with Code Blue Trading FZE. We welcome inquiries from clients, suppliers, distributors and partners worldwide." },
      { property: "og:title", content: "Contact — Code Blue Trading FZE" },
      { property: "og:description", content: "Contact our team in JAFZA, Dubai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="We welcome inquiries from clients, suppliers, distributors, and business partners worldwide."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-foreground">Company</h3>
              </div>
              <div className="mt-5 text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">Code Blue Trading FZE</p>
                <p>Jebel Ali Free Zone (JAFZA)</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-foreground">Sales Contacts</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Europe</p>
                  <p className="text-muted-foreground">Christopher — Senior Manager, Europe</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">GCC &amp; Gulf Region</p>
                  <p className="text-muted-foreground">Muhammad shahid — Manager, Gulf Region</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[var(--navy-deep)] text-primary-foreground p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">General Inquiries</h3>
              </div>
              <div className="mt-5 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <a href="mailto:info@codebluefze.com" className="hover:text-accent transition-colors">info@codebluefze.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <a href="tel:+971563779922" className="hover:text-accent transition-colors">+971 56 377 9922</a>
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              toast.success("Thanks! Your inquiry has been sent.");
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-border bg-card p-8 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-foreground">Send us an inquiry</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required name="name" />
              <Field label="Company Name" name="company" />
              <Field label="Email Address" required type="email" name="email" />
              <Field label="Phone Number" name="phone" />
              <div className="sm:col-span-2">
                <Field label="Subject" required name="subject" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Submit Inquiry
            </button>
            {submitted && (
              <p className="mt-3 text-sm text-accent">Thanks — we received your message.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, type = "text", name }: { label: string; required?: boolean; type?: string; name: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}