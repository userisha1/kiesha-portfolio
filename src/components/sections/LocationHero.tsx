import { MapPin, Calendar, Clock } from "lucide-react";
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
    <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={`Welcome to ${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{tagline}</span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            {name}
          </h1>

          {/* Duration */}
          <div
            className="flex items-center gap-4 mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Educational Tour 2025</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            {description}
          </p>

          {/* Scroll Indicator */}
          <div
            className="mt-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Scroll to explore</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
