import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DayPhoto {
  id: number;
  src: string;
  alt: string;
}

interface Day {
  id: number;
  label: string;
  coverImage: string;
  photos: DayPhoto[];
}

interface DayGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  days: Day[];
  initialDayIndex?: number;
}

export function DayGallery({ isOpen, onClose, days, initialDayIndex = 0 }: DayGalleryProps) {
  const [currentDayIndex, setCurrentDayIndex] = useState(initialDayIndex);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const currentDay = days[currentDayIndex];
  const currentPhoto = currentDay?.photos[currentPhotoIndex];

  const handlePreviousPhoto = useCallback(() => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    } else if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
      setCurrentPhotoIndex(days[currentDayIndex - 1].photos.length - 1);
    }
  }, [currentDayIndex, currentPhotoIndex, days]);

  const handleNextPhoto = useCallback(() => {
    if (currentDay && currentPhotoIndex < currentDay.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    } else if (currentDayIndex < days.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
      setCurrentPhotoIndex(0);
    }
  }, [currentDay, currentDayIndex, currentPhotoIndex, days]);

  useEffect(() => {
    if (isOpen) {
      setCurrentDayIndex(initialDayIndex);
      setCurrentPhotoIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialDayIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePreviousPhoto();
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, handlePreviousPhoto, handleNextPhoto]);

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
      setCurrentPhotoIndex(0);
    }
  };

  const handleNextDay = () => {
    if (currentDayIndex < days.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
      setCurrentPhotoIndex(0);
    }
  };

  if (!isOpen || !currentDay || !currentPhoto) return null;

  const canGoPrevious = currentDayIndex > 0 || currentPhotoIndex > 0;
  const canGoNext = currentDayIndex < days.length - 1 || currentPhotoIndex < currentDay.photos.length - 1;

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

      {/* Main Content */}
      <div
        className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden mb-4">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Day Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousDay}
            disabled={currentDayIndex === 0}
            className="bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {currentDayIndex > 0 ? days[currentDayIndex - 1].label : "Previous Day"}
          </Button>

          <div className="text-center">
            <h3 className="font-serif text-xl text-background mb-1">{currentDay.label}</h3>
            <p className="text-sm text-background/80">
              Photo {currentPhotoIndex + 1} of {currentDay.photos.length}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNextDay}
            disabled={currentDayIndex === days.length - 1}
            className="bg-background/80 backdrop-blur-sm"
          >
            {currentDayIndex < days.length - 1 ? days[currentDayIndex + 1].label : "Next Day"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Photo Navigation */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePreviousPhoto}
            disabled={!canGoPrevious}
            className="bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto max-w-md px-4">
            {currentDay.photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === currentPhotoIndex
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPhoto}
            disabled={!canGoNext}
            className="bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

