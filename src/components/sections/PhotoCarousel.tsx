import { useState } from "react";
import { DayGallery } from "@/components/DayGallery";

import galleryDay1 from "@/assets/gallery-day1.jpg";
import galleryDay2 from "@/assets/gallery-day2.jpg";
import galleryDay3 from "@/assets/gallery-day3.jpg";
import galleryDay4 from "@/assets/gallery-day4.jpg";

interface PhotoCarouselProps {
  locationId: string;
}

// Generate placeholder photos for each day (max 10)
const generateDayPhotos = (dayNumber: number, count: number) => {
  const baseImages = [galleryDay1, galleryDay2, galleryDay3, galleryDay4];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: baseImages[i % baseImages.length],
    alt: `Day ${dayNumber} - Photo ${i + 1}`,
  }));
};

const dayData = {
  cebu: [
    {
      id: 1,
      label: "Day 1",
      coverImage: galleryDay1,
      photos: generateDayPhotos(1, 10),
    },
    {
      id: 2,
      label: "Day 2",
      coverImage: galleryDay2,
      photos: generateDayPhotos(2, 10),
    },
    {
      id: 3,
      label: "Day 3",
      coverImage: galleryDay3,
      photos: generateDayPhotos(3, 10),
    },
  ],
  bohol: [
    {
      id: 4,
      label: "Day 4",
      coverImage: galleryDay4,
      photos: generateDayPhotos(4, 10),
    },
  ],
};

export function PhotoCarousel({ locationId }: PhotoCarouselProps) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PhotoCarousel.tsx:component',message:'PhotoCarousel mounted',data:{locationId,availableKeys:Object.keys(dayData)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const days = dayData[locationId as keyof typeof dayData] || [];
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d72131fa-a57c-4677-ad61-c191e6f6ace4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PhotoCarousel.tsx:component',message:'Days data lookup',data:{locationId,daysFound:days.length,dayKeys:Object.keys(dayData)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            Photo Gallery
          </p>
          <h2
            className="section-heading mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Tour Highlights
          </h2>
          <p
            className="section-subheading max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Click on a day to explore the gallery of photos.
          </p>
        </div>

        {/* Day Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          {days.map((day, index) => (
            <button
              key={day.id}
              onClick={() => setSelectedDayIndex(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
            >
              <img
                src={day.coverImage}
                alt={`${day.label} cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                  {day.label}
                </span>
                <p className="text-card text-sm font-light">
                  {day.photos.length} photos
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      <DayGallery
        isOpen={selectedDayIndex !== null}
        onClose={() => setSelectedDayIndex(null)}
        days={days}
        initialDayIndex={selectedDayIndex ?? 0}
      />
    </section>
  );
}
