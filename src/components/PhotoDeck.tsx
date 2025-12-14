import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface PhotoDeckProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoDeck({ photos, isOpen, onClose }: PhotoDeckProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-background hover:text-primary transition-colors duration-300 z-10"
        aria-label="Close gallery"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Deck of Cards */}
      <div
        className="relative max-w-4xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
          {photos.map((photo, index) => {
            const offset = index * 8; // Stack offset
            const rotation = (index - (photos.length - 1) / 2) * 2; // Rotation for fan effect
            const zIndex = photos.length - index;
            
            return (
              <div
                key={photo.id}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${offset}px, ${offset}px) rotate(${rotation}deg)`,
                  zIndex,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Kiesha+Mae";
                    }}
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

