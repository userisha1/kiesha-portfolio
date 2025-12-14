import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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

// Photos for the About Me profile card - Replace these with actual photos of Kiesha (3 photos)
const aboutMePhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
    alt: "Kiesha Mae Jimenez - Photo 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
    alt: "Kiesha Mae Jimenez - Photo 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
    alt: "Kiesha Mae Jimenez - Photo 3",
  },
];

export default function Welcome() {
  const navigate = useNavigate();
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleLocationSelect = (locationId: string) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/${locationId}`);
      // Scroll to top when navigating
      window.scrollTo(0, 0);
    }, 500);
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePhotoClick = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % aboutMePhotos.length);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

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
      <section id="about" className="min-h-screen flex items-center py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                <p
                  className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in-up opacity-0"
                  style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
                >
                  About Me
                </p>

                <h2
                  className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight animate-fade-in-up opacity-0"
                  style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
                >
                  Kiesha Mae
                  <br />
                  <span className="text-primary italic">Jimenez</span>
                </h2>

                <div
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
                >
                  <p className="text-xl md:text-2xl font-medium text-foreground mb-4">
                    BSIT — 3rd Year Student
                  </p>
                </div>

                <div
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
                >
                  <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                    Passionate about technology and eager to learn. This portfolio documents 
                    my educational tour experience, showcasing the companies visited, 
                    certificates earned, and memorable moments captured along the way.
                  </p>
                </div>

                <div
                  className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0"
                  style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
                >
                  <div className="px-6 py-3 bg-background rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p className="font-medium">BS Information Technology</p>
                  </div>
                  <div className="px-6 py-3 bg-background rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Year Level</p>
                    <p className="font-medium">3rd Year</p>
                  </div>
                  <div className="px-6 py-3 bg-background rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">Tour Year</p>
                    <p className="font-medium">2025</p>
                  </div>
                </div>

                <button
                  onClick={scrollToDestinations}
                  className="animate-fade-in-up opacity-0 text-muted-foreground hover:text-primary transition-colors duration-300"
                  style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
                >
                  <p className="text-sm mb-2">Explore Destinations</p>
                  <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
                </button>
              </div>

              {/* Right Side - Single Stacked Glassy Card */}
              <div
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <div className="relative w-full max-w-md mx-auto">
                  <button
                    onClick={handlePhotoClick}
                    className="relative w-full group cursor-pointer"
                  >
                    {/* Stacked card effect - showing 3 layers */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full bg-background/40 backdrop-blur-md rounded-2xl border border-border/50 transform rotate-3 z-0 transition-transform duration-300 group-hover:rotate-4 group-hover:scale-[1.02]" />
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 transform rotate-2 z-10 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.01]" />
                    
                    {/* Main card with glassy effect */}
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[3/4] bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl z-20 transition-transform duration-300 group-hover:scale-[1.02]">
                      <img
                        key={currentPhotoIndex}
                        src={aboutMePhotos[currentPhotoIndex].src}
                        alt={aboutMePhotos[currentPhotoIndex].alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        style={{
                          animation: "fadeIn 0.5s ease-in-out",
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Kiesha+Mae";
                        }}
                      />
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Click hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border/50">
                          <p className="text-sm font-medium">Click to see next photo</p>
                        </div>
                      </div>
                      
                      {/* Photo indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {aboutMePhotos.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              index === currentPhotoIndex
                                ? "w-6 bg-primary"
                                : "w-1.5 bg-background/40"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="min-h-screen flex flex-col items-center justify-center py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
            >
              Destinations
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Choose Your Journey
            </h2>
            <p
              className="text-muted-foreground text-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
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
                  group relative overflow-hidden rounded-2xl p-8 md:p-12
                  bg-card border border-border
                  transition-all duration-500 ease-out
                  hover:shadow-xl hover:scale-[1.02] hover:border-primary/30
                  animate-fade-in-up opacity-0
                `}
                style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
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
                      w-8 h-8 mb-4 mx-auto
                      transition-all duration-500
                      ${hoveredLocation === location.id ? "text-primary scale-110" : "text-muted-foreground"}
                    `}
                  />
                  <h3 className="font-serif text-3xl md:text-4xl mb-2 tracking-tight">
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

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Achievements
            </p>
            <h2 className="section-heading mb-4">Certificate</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Professional certification earned during the educational tour.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-background border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-400">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Educational Tour 2025</h3>
              <p className="text-muted-foreground text-sm mb-2">Completion Certificate</p>
              <p className="text-xs text-muted-foreground/70">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-24 bg-background">
        <div className="container mx-auto px-6">
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
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 text-secondary-foreground"
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
                  <h3 className="font-serif text-xl mb-2">Educational Tour 2025 Journal</h3>
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

      {/* Footer */}
      <div className="py-8 text-center bg-background border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2025 Kiesha Mae Jimenez · Educational Tour Documentation
        </p>
      </div>
    </div>
  );
}
