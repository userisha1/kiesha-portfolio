import { useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { DayGallery } from "@/components/DayGallery";

import coverDay1 from "@/assets/covers/cover_day1.jpg";
import coverDay2 from "@/assets/covers/cover_day2.jpg";
import coverDay3 from "@/assets/covers/cover_day3.jpg";
import coverDay4 from "@/assets/covers/cover_day4.jpg";

// Day 1 images
import d1_1 from "@/assets/day1/d1_1.png";
import d1_2 from "@/assets/day1/d1_2.png";
import d1_3 from "@/assets/day1/d1_3.png";
import d1_4 from "@/assets/day1/d1_4.png";
import d1_5 from "@/assets/day1/d1_5.png";
import d1_6 from "@/assets/day1/d1_6.png";
import d1_7 from "@/assets/day1/d1_7.png";
import d1_8 from "@/assets/day1/d1_8.png";
import d1_9 from "@/assets/day1/d1_9.png";
import d1_10 from "@/assets/day1/d1_10.png";

// Day 2 images
import d2_1 from "@/assets/day2/d2_1.png";
import d2_2 from "@/assets/day2/d2_2.png";
import d2_3 from "@/assets/day2/d2_3.png";
import d2_4 from "@/assets/day2/d2_4.png";
import d2_5 from "@/assets/day2/d2_5.png";
import d2_6 from "@/assets/day2/d2_6.png";
import d2_7 from "@/assets/day2/d2_7.png";
import d2_8 from "@/assets/day2/d2_8.png";
import d2_9 from "@/assets/day2/d2_9.png";
import d2_10 from "@/assets/day2/d2_10.png";

// Day 3 images
import d3_1 from "@/assets/day3/d3_1.png";
import d3_2 from "@/assets/day3/d3_2.png";
import d3_3 from "@/assets/day3/d3_3.png";
import d3_4 from "@/assets/day3/d3_4.png";
import d3_5 from "@/assets/day3/d3_5.png";
import d3_6 from "@/assets/day3/d3_6.png";
import d3_7 from "@/assets/day3/d3_7.png";
import d3_8 from "@/assets/day3/d3_8.png";
import d3_9 from "@/assets/day3/d3_9.png";
import d3_10 from "@/assets/day3/d3_10.png";
import d3_11 from "@/assets/day3/d3_11.png";
import d3_12 from "@/assets/day3/d3_12.png";
import d3_13 from "@/assets/day3/d3_13.png";

// Day 4 images
import d4_1 from "@/assets/day4/d4_1.png";
import d4_2 from "@/assets/day4/d4_2.png";
import d4_3 from "@/assets/day4/d4_3.png";
import d4_4 from "@/assets/day4/d4_4.png";
import d4_5 from "@/assets/day4/d4_5.png";
import d4_6 from "@/assets/day4/d4_6.png";
import d4_7 from "@/assets/day4/d4_7.png";
import d4_8 from "@/assets/day4/d4_8.png";
import d4_9 from "@/assets/day4/d4_9.png";
import d4_10 from "@/assets/day4/d4_10.png";
import d4_11 from "@/assets/day4/d4_11.png";

interface PhotoCarouselProps {
  locationId: string;
}

const dayData = {
  cebu: [
    {
      id: 1,
      label: "Day 1",
      coverImage: coverDay1,
      photos: [
        { id: 1, src: d1_1, alt: "Day 1 - Photo 1" },
        { id: 2, src: d1_2, alt: "Day 1 - Photo 2" },
        { id: 3, src: d1_3, alt: "Day 1 - Photo 3" },
        { id: 4, src: d1_4, alt: "Day 1 - Photo 4" },
        { id: 5, src: d1_5, alt: "Day 1 - Photo 5" },
        { id: 6, src: d1_6, alt: "Day 1 - Photo 6" },
        { id: 7, src: d1_7, alt: "Day 1 - Photo 7" },
        { id: 8, src: d1_8, alt: "Day 1 - Photo 8" },
        { id: 9, src: d1_9, alt: "Day 1 - Photo 9" },
        { id: 10, src: d1_10, alt: "Day 1 - Photo 10" },
      ],
    },
    {
      id: 2,
      label: "Day 2",
      coverImage: coverDay2,
      photos: [
        { id: 1, src: d2_1, alt: "Day 2 - Photo 1" },
        { id: 2, src: d2_2, alt: "Day 2 - Photo 2" },
        { id: 3, src: d2_3, alt: "Day 2 - Photo 3" },
        { id: 4, src: d2_4, alt: "Day 2 - Photo 4" },
        { id: 5, src: d2_5, alt: "Day 2 - Photo 5" },
        { id: 6, src: d2_6, alt: "Day 2 - Photo 6" },
        { id: 7, src: d2_7, alt: "Day 2 - Photo 7" },
        { id: 8, src: d2_8, alt: "Day 2 - Photo 8" },
        { id: 9, src: d2_9, alt: "Day 2 - Photo 9" },
        { id: 10, src: d2_10, alt: "Day 2 - Photo 10" },
      ],
    },
    {
      id: 3,
      label: "Day 3",
      coverImage: coverDay3,
      photos: [
        { id: 1, src: d3_1, alt: "Day 3 - Photo 1" },
        { id: 2, src: d3_2, alt: "Day 3 - Photo 2" },
        { id: 3, src: d3_3, alt: "Day 3 - Photo 3" },
        { id: 4, src: d3_4, alt: "Day 3 - Photo 4" },
        { id: 5, src: d3_5, alt: "Day 3 - Photo 5" },
        { id: 6, src: d3_6, alt: "Day 3 - Photo 6" },
        { id: 7, src: d3_7, alt: "Day 3 - Photo 7" },
        { id: 8, src: d3_8, alt: "Day 3 - Photo 8" },
        { id: 9, src: d3_9, alt: "Day 3 - Photo 9" },
        { id: 10, src: d3_10, alt: "Day 3 - Photo 10" },
        { id: 11, src: d3_11, alt: "Day 3 - Photo 11" },
        { id: 12, src: d3_12, alt: "Day 3 - Photo 12" },
        { id: 13, src: d3_13, alt: "Day 3 - Photo 13" },
      ],
    },
  ],
  bohol: [
    {
      id: 4,
      label: "Day 4",
      coverImage: coverDay4,
      photos: [
        { id: 1, src: d4_1, alt: "Day 4 - Photo 1" },
        { id: 2, src: d4_2, alt: "Day 4 - Photo 2" },
        { id: 3, src: d4_3, alt: "Day 4 - Photo 3" },
        { id: 4, src: d4_4, alt: "Day 4 - Photo 4" },
        { id: 5, src: d4_5, alt: "Day 4 - Photo 5" },
        { id: 6, src: d4_6, alt: "Day 4 - Photo 6" },
        { id: 7, src: d4_7, alt: "Day 4 - Photo 7" },
        { id: 8, src: d4_8, alt: "Day 4 - Photo 8" },
        { id: 9, src: d4_9, alt: "Day 4 - Photo 9" },
        { id: 10, src: d4_10, alt: "Day 4 - Photo 10" },
        { id: 11, src: d4_11, alt: "Day 4 - Photo 11" },
      ],
    },
  ],
};

export function PhotoCarousel({ locationId }: PhotoCarouselProps) {
  const days = dayData[locationId as keyof typeof dayData] || [];
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-card/80 py-24">
      <div className="absolute left-0 top-24 h-72 w-1/3 rounded-r-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto min-w-0 px-6">
        {/* Header */}
        <div className="text-center mb-16 min-w-0">
          <p
            className="text-primary font-medium tracking-wide uppercase text-sm mb-4"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            Photo Gallery
          </p>
          <h2
            className="section-heading mb-4"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Tour Highlights
          </h2>
          <p
            className="section-subheading max-w-2xl mx-auto text-balance"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Click on a day to explore the gallery of photos.
          </p>
        </div>

        {/* Day Cards */}
        <div
          className="mx-auto flex max-w-6xl snap-x gap-5 overflow-x-auto pb-5 md:overflow-visible"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          {days.map((day, index) => (
            <button
              key={day.id}
              onClick={() => setSelectedDayIndex(index)}
              className={`group relative min-h-[360px] min-w-[82vw] snap-center overflow-hidden rounded-[2rem] bg-muted text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-w-0 md:flex-1 ${
                index % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <img
                src={day.coverImage}
                alt={`${day.label} cover`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                  {day.label}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-card">Tour Highlights</h3>
                    <p className="mt-1 flex items-center gap-2 text-card/85 text-sm font-light">
                      <Images className="h-4 w-4" />
                      {day.photos.length} photos
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/50" />
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
