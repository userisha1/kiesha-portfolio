import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const currentDay = days[currentDayIndex];

  useEffect(() => {
    if (isOpen) {
      setCurrentDayIndex(initialDayIndex);
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
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handlePreviousDay = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const handleNextDay = () => {
    if (currentDayIndex < days.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  if (!isOpen || !currentDay) return null;

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
        className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Day Navigation Header */}
        <div className="flex items-center justify-between mb-6">
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
            <h3 className="font-serif text-2xl text-background mb-1">{currentDay.label}</h3>
            <p className="text-sm text-background/80">
              {currentDay.photos.length} photos
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

        {/* Vertical Carousel */}
        <Carousel
          key={currentDayIndex}
          opts={{
            align: "start",
            loop: false,
          }}
          orientation="vertical"
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent className="-mt-1 h-[600px] md:h-[700px]">
            {currentDay.photos.map((photo, index) => (
              <CarouselItem key={photo.id} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/80 backdrop-blur-sm border-background/20" />
          <CarouselNext className="bg-background/80 backdrop-blur-sm border-background/20" />
        </Carousel>
      </div>
    </div>
  );
}

