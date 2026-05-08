import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Github,
  MapPin,
  X,
} from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { Footer } from "@/components/Footer";
import Stack from "@/components/Stack";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroCebu from "@/assets/hero-cebu.jpg";
import heroBohol from "@/assets/hero-bohol.jpg";
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
    image: heroCebu,
    days: "Days 1-3",
    highlights: "Tech visits, city views, learning journals",
  },
  {
    id: "bohol",
    name: "Bohol",
    description: "Island Paradise",
    image: heroBohol,
    days: "Day 4",
    highlights: "Emergency response center and island culture",
  },
];

const aboutMePhotos = [
  {
    id: 1,
    src: photo1,
    alt: "Kiesha Mae Jimenez portrait during the educational tour",
  },
  {
    id: 2,
    src: photo2,
    alt: "Kiesha Mae Jimenez outdoor travel photo",
  },
  {
    id: 3,
    src: photo3,
    alt: "Kiesha Mae Jimenez educational tour portrait",
  },
];

export default function Welcome() {
  const navigate = useNavigate();
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return true;
    return !["#about", "#destinations", "#journal", "#certificates"].includes(window.location.hash);
  });

  const handleLocationSelect = (locationId: string) => {
    navigate(`/${locationId}`);
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const enterPortfolio = () => {
    setShowSplash(false);
  };

  const enterDestinations = () => {
    setShowSplash(false);
    window.setTimeout(() => {
      document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const enterJournal = () => {
    setShowSplash(false);
    window.setTimeout(() => {
      document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (showSplash) {
    return (
      <main className="min-h-screen overflow-hidden bg-background">
        <section className="relative flex min-h-screen items-end overflow-hidden px-6 py-8 md:items-center md:py-12">
          <div className="absolute inset-0">
            <img
              src={heroCebu}
              alt="Cebu educational tour background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-background/35 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl pb-4 text-left md:pb-0">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-primary shadow-sm backdrop-blur">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Cebu + Bohol</span>
                </span>
                <span className="rounded-full border border-border bg-background/75 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
                  Educational Tour 2025
                </span>
              </div>

              <h1 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[10rem]">
                Kiesha's
                <span className="block text-primary italic">Travel Journal</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
                A curated educational tour portfolio of Cebu and Bohol, told through journal pages,
                company visits, certificates, and captured moments.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={enterPortfolio}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Enter Portfolio
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={enterJournal}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-7 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  Open Journal
                  <BookOpen className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="hidden shrink-0 lg:block">
              <div className="relative h-[430px] w-[360px]">
                <img
                  src={heroBohol}
                  alt="Bohol tour highlight"
                  className="absolute right-0 top-0 h-56 w-44 rotate-6 rounded-[2rem] object-cover shadow-2xl"
                />
                <img
                  src={heroCebu}
                  alt="Cebu tour highlight"
                  className="absolute bottom-14 left-0 h-72 w-56 -rotate-3 rounded-[2rem] object-cover shadow-2xl"
                />
                <div className="absolute bottom-0 right-2 w-64 rounded-[1.75rem] border border-white/50 bg-background/85 p-5 shadow-2xl backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Quick View</p>
                  <div className="mt-4 flex justify-between gap-3">
                    {[
                      ["4", "Days"],
                      ["9", "Pages"],
                      ["5", "Visits"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <p className="font-serif text-4xl leading-none">{value}</p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section id="welcome" className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroCebu}
            alt="Cebu educational tour view"
            className="h-full w-full object-cover opacity-20 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.28)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 py-24">
          <div className="flex w-full flex-col items-center gap-14 lg:flex-row lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/75 px-4 py-2 text-primary shadow-sm backdrop-blur">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Cebu + Bohol Educational Tour 2025
                  </span>
                </div>
              </div>

              <div>
                <h1 className="font-serif text-6xl leading-none tracking-tight md:text-8xl lg:text-9xl">
                  Welcome
                  <span className="mt-2 block text-4xl text-primary italic md:text-6xl lg:text-7xl">
                    to Kiesha's Tour Journal
                  </span>
                </h1>
              </div>

              <div>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
                  A visual portfolio of my educational tour across Cebu and Bohol, featuring company visits,
                  certificates, journal pages, and moments from every stop.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  onClick={scrollToAbout}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Enter Portfolio
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollToDestinations}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/75 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  Choose Destination
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/15"
                >
                  View Journal
                  <BookOpen className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
                {[
                  ["4", "Tour Days"],
                  ["5", "Visits"],
                  ["50+", "Photos"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="min-w-28 rounded-full border border-border bg-background/75 px-5 py-3 text-center shadow-sm backdrop-blur"
                  >
                    <p className="font-serif text-3xl leading-none text-foreground">{value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-lg lg:w-[44%]">
              <div className="relative mx-auto min-h-[500px]">
                <div className="absolute left-0 top-4 h-80 w-[62%] overflow-hidden rounded-[2rem] border border-white/50 bg-card shadow-2xl">
                  <img src={heroCebu} alt="Cebu tour destination" className="h-full w-full object-cover" />
                </div>
                <div className="absolute right-0 top-20 h-64 w-[52%] overflow-hidden rounded-[2rem] border border-white/50 bg-card shadow-xl">
                  <img src={heroBohol} alt="Bohol tour destination" className="h-full w-full object-cover" />
                </div>
                <div className="absolute bottom-8 right-8 w-64 rounded-[1.75rem] border border-border bg-background/90 p-5 shadow-xl backdrop-blur">
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      <Camera className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-widest">Captured</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Photo galleries, journal scans, and certificates in one guided portfolio.
                    </p>
                </div>
                <div className="absolute bottom-0 left-8 w-[78%] rounded-[1.75rem] border border-border bg-background/90 p-4 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Educational Tour Documentation</p>
                      <p className="text-xs text-muted-foreground">Cebu and Bohol, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMeSection scrollToDestinations={scrollToDestinations} />
      <DestinationsSection
        handleLocationSelect={handleLocationSelect}
        hoveredLocation={hoveredLocation}
        setHoveredLocation={setHoveredLocation}
      />
      <CertificatesSection />
      <JournalSection />
      <Footer />
    </div>
  );
}

function AboutMeSection({ scrollToDestinations }: { scrollToDestinations: () => void }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-card/80 py-24">
      <div className="absolute left-0 top-16 h-64 w-1/3 rounded-r-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
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
                BSIT - 3rd Year Student
              </p>

              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                Passionate about technology and eager to learn. This portfolio documents
                my educational tour experience, showcasing the companies visited,
                certificates earned, and memorable moments captured along the way.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <div className="rounded-full border border-border bg-background px-6 py-3 shadow-sm">
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="font-medium">BS Information Technology</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 shadow-sm">
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                Explore Destinations
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>

            <div
              className={`w-full transition-all duration-1000 delay-300 lg:w-[42%] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ProfileCard photos={aboutMePhotos} />
            </div>
          </div>

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
    <section id="destinations" className="relative min-h-screen overflow-hidden bg-background py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Destinations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            Choose Your Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a destination to explore the educational tour experience.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {locations.map((location, index) => (
            <button
              key={location.id}
              onClick={() => handleLocationSelect(location.id)}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border bg-card p-6 text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-h-[420px] ${
                index === 1 ? "md:ml-16" : "md:mr-16"
              }`}
            >
              <img
                src={location.image}
                alt={`${location.name} destination`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/15" />

              <div className="relative z-10 flex min-h-[300px] max-w-xl flex-col justify-end md:min-h-[360px]">
                <MapPin
                  className={`w-6 h-6 md:w-8 md:h-8 mb-4 transition-all duration-500 ${
                    hoveredLocation === location.id ? "text-primary scale-110" : "text-muted-foreground"
                  }`}
                />
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 tracking-tight">
                  {location.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{location.description}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{location.days}</p>
                <p className="mt-2 max-w-xs text-sm text-foreground/80">{location.highlights}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-transform duration-300 group-hover:translate-x-1">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const journalPages = [
  { id: 1, label: "Page 1", title: "LEARNING JOURNAL", image: j1, note: "Opening reflection and documentation cover." },
  { id: 2, label: "Page 2", title: "ITINERARY", image: j2, note: "Tour schedule, route, and planned activities." },
  { id: 3, label: "Page 3", title: "GENERAL HOUSE RULES", image: j3, note: "Guidelines followed throughout the tour." },
  { id: 4, label: "Page 4", title: "WORLDTECH INFORMATION SOLUTIONS", image: j4, note: "Day 1 company exposure and key learnings." },
  { id: 5, label: "Page 5", title: "RIVAN IT CEBU", image: j5, note: "Networking and IT training insights." },
  { id: 6, label: "Page 6", title: "CODECHUM", image: j6, note: "Programming platform and academic technology visit." },
  { id: 7, label: "Page 7", title: "MATA TECHNOLOGIES INC.", image: j7, note: "Virtual tour and mapping technology experience." },
  { id: 8, label: "Page 8", title: "T.A.R.S.I.E.R. 117", image: j8, note: "Emergency response and disaster management exposure." },
  { id: 9, label: "Page 9", title: "IMPRESSION SHEET", image: j9, note: "Final impressions and personal reflection." },
];

function JournalSection() {
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
    setCurrentIndex((prev) => (prev === 0 ? journalPages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === journalPages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const renderJournalModal = () =>
    isOpen && (
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className="bg-card rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl transform animate-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="min-w-0">
              <h2 className="font-serif text-xl md:text-2xl mb-1 truncate">{journalPages[currentIndex].title}</h2>
              <p className="text-sm text-muted-foreground">{journalPages[currentIndex].label}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Close journal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center bg-muted/50 overflow-hidden relative p-4 md:p-6">
            <img
              src={journalPages[currentIndex].image}
              alt={journalPages[currentIndex].title}
              className="max-h-[68vh] max-w-full rounded-lg object-contain shadow-xl"
            />

            <button
              onClick={goToPrevious}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="px-4 py-4 md:px-6 flex flex-wrap gap-2 justify-center bg-background/95 backdrop-blur-sm">
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
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <section id="journal" className="relative overflow-hidden bg-background py-24">
      <div className="absolute right-0 top-20 h-96 w-1/2 rounded-l-full bg-primary/10 blur-3xl" />
      <div
        className="container relative z-10 mx-auto px-6"
      >
        <div className="mx-auto mb-14 flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Academic Documentation
            </p>
            <h2 className="section-heading mb-4">Tour Journal</h2>
          </div>
          <p className="section-subheading max-w-2xl lg:ml-auto lg:text-right">
            Drag the stack to shuffle pages. Click any journal card to view it full screen.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="mx-auto h-[330px] w-[250px] sm:h-[420px] sm:w-[320px] md:h-[520px] md:w-[390px]">
            <Stack
              randomRotation
              sensitivity={180}
              mobileClickOnly
              pauseOnHover
              cards={journalPages.map((page, idx) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openCarousel(idx);
                  }}
                  className="group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`View ${page.label}: ${page.title}`}
                >
                  <img src={page.image} alt={page.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                      {page.label}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                      {page.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/80">
                      {page.note}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
                      Click to view
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            />
          </div>

          <div className="w-full rounded-[2rem] border border-border bg-card/75 p-6 shadow-xl backdrop-blur md:p-8 lg:w-[48%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">Interactive Journal Stack</span>
            </div>
            <h3 className="font-serif text-4xl leading-tight md:text-6xl">
              Flip through the tour pages.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Drag a card away to send it behind the stack, or click a page to open the scanned journal in the viewer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                ["9", "Pages"],
                ["4", "Days"],
                ["5", "Visits"],
              ].map(([value, label]) => (
                <div key={label} className="min-w-24 rounded-full border border-border bg-background/80 px-5 py-3">
                  <p className="font-serif text-3xl leading-none">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {renderJournalModal()}
    </section>
  );
}
