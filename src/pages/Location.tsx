import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    description:
      "Exploring the vibrant culture, technology industry, and beautiful landscapes of Cebu City during our educational tour.",
    companies: [
      { name: "WORLDTECH INFORMATION SOLUTIONS", description: "Day 1 - IT consultancy and training company" },
      { name: "RIVAN IT", description: "Day 2 - IT and networking certification training center" },
      { name: "CIT-U", description: "Day 2 - CodeChum venue at Wildcat Innovation Labs" },
      { name: "MATA TECHNOLOGIES INC.", description: "Day 3 - Virtual tours and VR map provider" },
    ],
  },
  bohol: {
    name: "Bohol",
    tagline: "Island Paradise",
    duration: "1 Day",
    description: "Discovering the natural wonders, local systems, and rich heritage of Bohol province.",
    companies: [
      { name: "TAGBILARAN 911 (TARSIER)", description: "Day 4 - Emergency response and disaster management unit" },
    ],
  },
};

export default function Location() {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  const location = locationId && locationData[locationId as keyof typeof locationData];

  useEffect(() => {
    if (!locationId || !locationData[locationId as keyof typeof locationData]) {
      navigate("/");
      return;
    }

    window.scrollTo(0, 0);
  }, [locationId, navigate]);

  if (!location) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <LocationNavigation currentLocation={locationId!} />
      <main>
        <LocationHero
          name={location.name}
          tagline={location.tagline}
          duration={location.duration}
          description={location.description}
          locationId={locationId}
        />
        <PhotoCarousel locationId={locationId!} />
        <LocationCompanies companies={location.companies} locationName={location.name} />
      </main>
      <Footer />
    </div>
  );
}
