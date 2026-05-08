import { Calendar, ChevronDown, Clock, MapPin } from "lucide-react";
import heroCebu from "@/assets/hero-cebu.jpg";
import heroBohol from "@/assets/hero-bohol.jpg";

interface LocationHeroProps {
  name: string;
  tagline: string;
  duration: string;
  description: string;
  locationId?: string;
}

export function LocationHero({ name, tagline, duration, description, locationId }: LocationHeroProps) {
  const heroImage = locationId === "bohol" ? heroBohol : heroCebu;

  return (
    <section className="relative min-h-[76vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt={`Welcome to ${name}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto min-w-0 px-6">
        <div className="min-w-0 max-w-[18.5rem] sm:max-w-2xl">
          <div
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-background/75 px-4 py-2 text-primary shadow-sm backdrop-blur"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate text-sm font-semibold">{tagline}</span>
          </div>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 mt-6 tracking-tight"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            {name}
          </h1>

          <div
            className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-3 mb-6"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="text-sm">Educational Tour 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>

          <p
            className="max-w-full break-words text-muted-foreground text-base md:text-xl leading-relaxed"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            {description}
          </p>

          <div
            className="mt-12"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm backdrop-blur transition-colors duration-300 hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Scroll to explore</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
