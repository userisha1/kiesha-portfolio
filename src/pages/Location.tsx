import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LocationNavigation } from "@/components/LocationNavigation";
import { LocationHero } from "@/components/sections/LocationHero";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { LocationCompanies } from "@/components/sections/LocationCompanies";
import { Footer } from "@/components/Footer";

const locationData = {
  cebu: {
    name: "Cebu",
    tagline: "Queen City of the South",
    duration: "3 Days, 1 Night",
    description: "Exploring the vibrant culture, tech industry, and beautiful landscapes of Cebu City during our educational tour.",
    companies: [
      { name: "Tech Company A", description: "Software development firm" },
      { name: "BPO Center", description: "Business process outsourcing" },
      { name: "Startup Hub", description: "Innovation center" },
    ],
  },
  bohol: {
    name: "Bohol",
    tagline: "Island Paradise",
    duration: "1 Day",
    description: "Discovering the natural wonders and rich heritage of Bohol province.",
    companies: [
      { name: "Eco Tourism Center", description: "Sustainable tourism" },
      { name: "Local Enterprise", description: "Community business" },
    ],
  },
};

export default function Location() {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(true);

  const location = locationId && locationData[locationId as keyof typeof locationData];

  useEffect(() => {
    if (!location) {
      navigate("/");
      return;
    }
    
    // Scroll to top when location changes
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => setIsEntering(false), 100);
    return () => clearTimeout(timer);
  }, [location, navigate]);

  if (!location) return null;

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isEntering ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <LocationNavigation currentLocation={locationId!} />
      <main>
        <LocationHero
          name={location.name}
          tagline={location.tagline}
          duration={location.duration}
          description={location.description}
        />
        <PhotoCarousel locationId={locationId!} />
        <LocationCompanies companies={location.companies} locationName={location.name} />
      </main>
      <Footer />
    </div>
  );
}
