import { useState } from "react";
import { ImageCard } from "@/components/ImageCard";
import { Lightbox } from "@/components/Lightbox";

import galleryDay1 from "@/assets/gallery-day1.jpg";
import galleryDay2 from "@/assets/gallery-day2.jpg";
import galleryDay3 from "@/assets/gallery-day3.jpg";
import galleryDay4 from "@/assets/gallery-day4.jpg";

const galleryItems = [
  { id: 1, image: galleryDay1, label: "Day 1", description: "First day at the office - orientation and setup" },
  { id: 2, image: galleryDay2, label: "Day 2", description: "Team meeting and project introduction" },
  { id: 3, image: galleryDay3, label: "Day 3", description: "Hands-on development work" },
  { id: 4, image: galleryDay4, label: "Day 4", description: "Team celebration and achievements" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Visual Documentation
          </p>
          <h2 className="section-heading mb-4">Internship Days</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A visual journey through my internship experience, capturing moments 
            of learning, collaboration, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <ImageCard
                imageSrc={item.image}
                label={item.label}
                onClick={() => setSelectedImage(item)}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.image || ""}
        title={selectedImage ? `${selectedImage.label} - ${selectedImage.description}` : undefined}
      />
    </section>
  );
}
