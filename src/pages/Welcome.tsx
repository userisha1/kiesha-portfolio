import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import photo1 from "@/assets/1.jpg";
import photo2 from "@/assets/2.jpg";
import photo3 from "@/assets/3.jpg";
import j1 from "@/assets/journal/j_1.JPG";
import j2 from "@/assets/journal/j_2.JPG";
import j3 from "@/assets/journal/j_3.JPG";
import j4 from "@/assets/journal/j_4.JPG";
import j5 from "@/assets/journal/j_5.JPG";
import j6 from "@/assets/journal/j_6.JPG";
import j7 from "@/assets/journal/j_7.JPG";
import j8 from "@/assets/journal/j_8.JPG";
import j9 from "@/assets/journal/j_9.JPG";

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

      {/* Certificates Section */}
      <CertificatesSection />

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

const journalPages = [
  { id: 1, label: "Page 1", title: "LEARNING JOURNAL", image: j1 },
  { id: 2, label: "Page 2", title: "ITINERARY", image: j2 },
  { id: 3, label: "Page 3", title: "GENERAL HOUSE RULES", image: j3 },
  { id: 4, label: "Page 4", title: "WORLDTECH INFORMATION SOLUTIONS", image: j4 },
  { id: 5, label: "Page 5", title: "RIVAN IT CEBU", image: j5 },
  { id: 6, label: "Page 6", title: "CODECHUM", image: j6 },
  { id: 7, label: "Page 7", title: "MATA TECHNOLOGIES INC.", image: j7 },
  { id: 8, label: "Page 8", title: "T.A.R.S.I.E.R. 117", image: j8 },
  { id: 9, label: "Page 9", title: "IMPRESSION SHEET", image: j9 },
];

function JournalSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const openCarousel = (idx: number) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === 0 ? journalPages.length - 1 : prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === journalPages.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="journal" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Academic Documentation
          </p>
          <h2 className="section-heading mb-4">Tour Journal</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive record of daily activities, learnings, and reflections 
            throughout the educational tour experience.
          </p>
        </div>

        {/* Deck of Cards - All 9 pages */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {journalPages.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => openCarousel(idx)}
                className="group relative bg-card border-2 border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${idx * 50}ms`, animationFillMode: "forwards" }}
                aria-label={`${page.label}: ${page.title}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded mb-2">
                        {page.label}
                      </span>
                      <h3 className="font-serif text-white text-sm sm:text-base line-clamp-2">
                        {page.title}
                      </h3>
                    </div>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Card Label - Always visible */}
                <div className="p-3 bg-card">
                  <span className="text-xs font-medium text-muted-foreground">{page.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Journal Fullscreen Modal with enhanced transitions */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-card rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur-sm">
              <div className="animate-in slide-in-from-left duration-300">
                <h2 className="font-serif text-2xl mb-1">{journalPages[currentIndex].title}</h2>
                <p className="text-sm text-muted-foreground">{journalPages[currentIndex].label}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Content with fade transition */}
            <div className="flex-1 flex items-center justify-center bg-muted/50 overflow-auto relative">
              {/* Carousel Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {journalPages.map((page, idx) => (
                  <div key={page.id} className="min-w-full flex-shrink-0 flex items-center justify-center p-4 h-full">
                    <img 
                      src={page.image} 
                      alt={page.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows inside modal */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation with enhanced effects */}
            <div className="flex items-center justify-between p-6 border-t border-border bg-background/95 backdrop-blur-sm">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="text-sm text-muted-foreground font-medium">
                {currentIndex + 1} / {journalPages.length}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Page Indicators */}
            <div className="px-6 pb-6 flex flex-wrap gap-2 justify-center bg-background/95 backdrop-blur-sm">
              {journalPages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => {
                    if (!isTransitioning && idx !== currentIndex) {
                      setIsTransitioning(true);
                      setCurrentIndex(idx);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
