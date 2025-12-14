import { useState } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface ProfileCardProps {
  photos: Photo[];
}

export function ProfileCard({ photos }: ProfileCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);

  const handleClick = () => {
    if (isSwapping) return;
    
    setIsSwapping(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      setIsSwapping(false);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={handleClick}
        className="relative w-full group cursor-pointer"
      >
        {/* Stacked card effect - showing 3 layers */}
        <div className="absolute -bottom-3 -right-3 w-full h-full bg-background/40 backdrop-blur-md rounded-2xl border border-border/50 transform rotate-3 z-0 transition-transform duration-300 group-hover:rotate-4 group-hover:scale-[1.02]" />
        <div className="absolute -bottom-2 -right-2 w-full h-full bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 transform rotate-2 z-10 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.01]" />
        
        {/* Main card with glassy effect */}
        <div className={`relative w-full overflow-hidden rounded-2xl aspect-[3/4] bg-background/60 backdrop-blur-xl border-2 border-primary/30 shadow-2xl z-20 transition-transform duration-300 group-hover:scale-[1.02] ${isSwapping ? 'animate-card-swap' : ''}`}>
          {/* Glass texture overlay */}
          <div 
            className="absolute inset-0 opacity-30 z-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative w-full h-full">
            <img
              key={currentPhotoIndex}
              src={photos[currentPhotoIndex].src}
              alt={photos[currentPhotoIndex].alt}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              style={{
                animation: isSwapping ? "fadeIn 0.5s ease-in-out" : "none",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Kiesha+Mae";
              }}
            />
          </div>
          
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-20" />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          
          {/* Click hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
            <div className="px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border/50">
              <p className="text-sm font-medium">Click to see next photo</p>
            </div>
          </div>
          
          {/* Photo indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-background/40"
                }`}
              />
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}

