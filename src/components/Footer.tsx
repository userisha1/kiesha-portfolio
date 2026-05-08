import { ArrowUp, BookOpen, ExternalLink, Github, MapPin, Route } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Destinations", href: "/#destinations" },
    { label: "Certificates", href: "/#certificates" },
    { label: "Journal", href: "/#journal" },
  ];

  const destinations = [
    { label: "Cebu", href: "/cebu", note: "Days 1-3" },
    { label: "Bohol", href: "/bohol", note: "Day 4" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-foreground text-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background)/0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container relative z-10 mx-auto px-6 py-14 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-background/75">
              <MapPin className="h-4 w-4 text-primary" />
              Cebu + Bohol Educational Tour
            </div>

            <p className="font-serif text-5xl leading-none tracking-tight text-background md:text-6xl">
              Kiesha's
              <span className="block text-primary italic">Tour Journal</span>
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/65 md:text-base">
              A curated portfolio of company visits, tour reflections, scanned journal pages,
              certificates, and captured moments from the educational tour.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/#journal"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View Journal
                <BookOpen className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/userisha1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/10 px-5 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:max-w-xs">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-background/55">
              <Route className="h-4 w-4 text-primary" />
              Explore
            </div>
            <nav className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/[0.06] px-4 py-2.5 text-sm font-medium text-background/75 transition-all duration-300 hover:border-primary/35 hover:bg-background/10 hover:text-background"
                >
                  {link.label}
                  <ArrowUp className="h-3.5 w-3.5 rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          <div className="w-full lg:max-w-xs">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-background/55">
              <MapPin className="h-4 w-4 text-primary" />
              Destinations
            </div>
            <div className="flex flex-col gap-3">
              {destinations.map((destination) => (
                <a
                  key={destination.href}
                  href={destination.href}
                  className="rounded-full border border-background/10 bg-background/[0.06] px-5 py-3 transition-all duration-300 hover:border-primary/35 hover:bg-background/10"
                >
                  <span className="flex items-center justify-between gap-3 text-sm font-semibold text-background">
                    {destination.label}
                    <ExternalLink className="h-3.5 w-3.5 text-background/45" />
                  </span>
                  <span className="mt-1 block text-xs text-background/50">{destination.note}</span>
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/35 bg-primary/15 px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-background/10 pt-6 text-xs text-background/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Kiesha Mae Jimenez. Educational Tour Documentation.</p>
          <p>Designed for Cebu and Bohol tour memories.</p>
        </div>
      </div>
    </footer>
  );
}
