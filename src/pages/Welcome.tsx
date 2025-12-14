import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Github } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import photo1 from "@/assets/1.jpg";
import photo2 from "@/assets/2.jpg";
import photo3 from "@/assets/3.jpg";

const locations = [
  {
    id: "cebu",
    name: "Cebu",
    description: "Queen City of the South",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    id: "bohol",
    name: "Bohol",
    description: "Island Paradise",
    gradient: "from-secondary/20 to-accent/20",
  },
];

// Photos for the About Me profile card
const aboutMePhotos = [
  {
    id: 1,
    src: photo1,
    alt: "Kiesha Mae Jimenez - Photo 1",
  },
  {
    id: 2,
    src: photo2,
    alt: "Kiesha Mae Jimenez - Photo 2",
  },
  {
    id: 3,
    src: photo3,
    alt: "Kiesha Mae Jimenez - Photo 3",
  },
];

export default function Welcome() {
  const navigate = useNavigate();
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const handleLocationSelect = (locationId: string) => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Welcome.tsx:handleLocationSelect',message:'Function called',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    navigate(`/${locationId}`);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Welcome.tsx:handleLocationSelect',message:'Navigate called',data:{path:`/${locationId}`},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              EDUC TOUR 2025
            </p>
          </div>

          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
              Welcome
            </h1>
          </div>

          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-12">
              Documenting my educational tour journey across the beautiful islands of Visayas.
            </p>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-fade-in-up opacity-0 text-muted-foreground hover:text-primary transition-colors duration-300"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMeSection scrollToDestinations={scrollToDestinations} />

      {/* Destinations Section */}
      <DestinationsSection handleLocationSelect={handleLocationSelect} hoveredLocation={hoveredLocation} setHoveredLocation={setHoveredLocation} />

      {/* Journal Section */}
      <JournalSection />

      {/* Footer */}
      <div className="py-8 text-center bg-background border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2025 Kiesha Mae Jimenez · Educational Tour Documentation
        </p>
      </div>
    </div>
  );
}

function AboutMeSection({ scrollToDestinations }: { scrollToDestinations: () => void }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div
              ref={ref}
              className={`text-center lg:text-left transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
                About Me
              </p>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
                Kiesha Mae
                <br />
                <span className="text-primary italic">Jimenez</span>
              </h2>

              <p className="text-xl md:text-2xl font-medium text-foreground mb-4">
                BSIT — 3rd Year Student
              </p>

              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                Passionate about technology and eager to learn. This portfolio documents 
                my educational tour experience, showcasing the companies visited, 
                certificates earned, and memorable moments captured along the way.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-6 py-3 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="font-medium">BS Information Technology</p>
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border border-border flex items-center gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Year Level</p>
                    <p className="font-medium">3rd Year</p>
                  </div>
                  <div className="w-px h-8 bg-border mx-2" />
                  <a
                    href="https://github.com/userisha1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>
                </div>
              </div>

              <button
                onClick={scrollToDestinations}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <p className="text-sm mb-2">Explore Destinations</p>
                <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
              </button>
            </div>

            {/* Right Side - Profile Card */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ProfileCard photos={aboutMePhotos} />
            </div>
          </div>

          {/* Tech Stack Marquee */}
          <div className="mt-16">
            <TechStackMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationsSection({
  handleLocationSelect,
  hoveredLocation,
  setHoveredLocation,
}: {
  handleLocationSelect: (id: string) => void;
  hoveredLocation: string | null;
  setHoveredLocation: (id: string | null) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="destinations" className="min-h-screen flex flex-col items-center justify-center py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-4xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Destinations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            Choose Your Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Select a destination to explore the educational tour experience.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <button
              key={location.id}
              onClick={() => handleLocationSelect(location.id)}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              className={`
                group relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-12
                bg-card border border-border
                transition-all duration-500 ease-out
                hover:shadow-xl hover:scale-[1.02] hover:border-primary/30
              `}
            >
              {/* Gradient Background */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${location.gradient}
                  transition-opacity duration-500
                  ${hoveredLocation === location.id ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Content */}
              <div className="relative z-10">
                <MapPin
                  className={`
                    w-6 h-6 md:w-8 md:h-8 mb-4 mx-auto
                    transition-all duration-500
                    ${hoveredLocation === location.id ? "text-primary scale-110" : "text-muted-foreground"}
                  `}
                />
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 tracking-tight">
                  {location.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {location.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div
                className={`
                  absolute bottom-4 left-1/2 -translate-x-1/2
                  transition-all duration-500
                  ${hoveredLocation === location.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                `}
              >
                <span className="text-primary text-sm font-medium">Explore →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journal" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Academic Documentation
          </p>
          <h2 className="section-heading mb-4">Tour Journal</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive record of daily activities, learnings, and reflections 
            throughout the educational tour experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-400">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl mb-2">Educational Tour 2025 Journal</h3>
                <p className="text-muted-foreground text-sm">
                  Complete documentation of the tour experience including daily activities, 
                  company visits, and personal reflections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
