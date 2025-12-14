import { useEffect, useState } from "react";

interface LoadingScreenProps {
  locationName: string;
  onComplete: () => void;
}

export function LoadingScreen({ locationName, onComplete }: LoadingScreenProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    // Simulate loading time
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl mb-8 text-primary animate-pulse">
          {locationName.toUpperCase()}
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          loading{dots}
        </p>
      </div>
    </div>
  );
}


