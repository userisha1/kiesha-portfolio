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
    description: "Discovering the natural wonders and rich heritage of Bohol province.",
    companies: [
      { name: "TAGBILARAN 911 (TARSIER)", description: "Day 4 - Emergency response and disaster management unit" },
    ],
  },
};

export default function Location() {
  const { locationId } = useParams<{ locationId: string }>();
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:component',message:'Component mounted',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  const navigate = useNavigate();

  const location = locationId && locationData[locationId as keyof typeof locationData];
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:component',message:'Location lookup result',data:{locationId,locationFound:!!location,locationKeys:Object.keys(locationData)},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:useEffect',message:'Effect running',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    if (!locationId) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:useEffect',message:'No locationId - redirecting',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      navigate("/");
      return;
    }
    
    const foundLocation = locationData[locationId as keyof typeof locationData];
    if (!foundLocation) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:useEffect',message:'Location not found - redirecting',data:{locationId,availableKeys:Object.keys(locationData)},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      navigate("/");
      return;
    }
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:useEffect',message:'Location valid - proceeding',data:{locationId,locationName:foundLocation.name},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [locationId, navigate]);

  if (!location) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:render',message:'No location - returning null',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    return null;
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:render',message:'Rendering Location component',data:{locationId,locationName:location.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion

  return (
    <div className="min-h-screen">
      <LocationNavigation currentLocation={locationId!} />
      <main>
        <LocationHero
          name={location.name}
          tagline={location.tagline}
          duration={location.duration}
          description={location.description}
          locationId={locationId}
        />
        {locationId && (
          <>
            {/* #region agent log */}
            {(() => {
              fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:render',message:'Before PhotoCarousel render',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              return null;
            })()}
            {/* #endregion */}
            <PhotoCarousel locationId={locationId} />
            {/* #region agent log */}
            {(() => {
              fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Location.tsx:render',message:'After PhotoCarousel render',data:{locationId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              return null;
            })()}
            {/* #endregion */}
          </>
        )}
        <LocationCompanies companies={location.companies} locationName={location.name} />
      </main>
      <Footer />
    </div>
  );
}
