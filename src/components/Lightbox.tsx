import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
}

export function Lightbox({ isOpen, onClose, imageSrc, title }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
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
      
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-background hover:text-primary transition-colors duration-300 z-10"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={title || "Lightbox image"}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-xl"
        />
        {title && (
          <p className="absolute bottom-4 left-4 right-4 text-center text-background font-serif text-xl">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
