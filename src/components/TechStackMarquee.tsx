import { TechIcons } from "./TechIcons";

interface TechStackMarqueeProps {
  onComplete?: () => void;
}

export function TechStackMarquee({ onComplete }: TechStackMarqueeProps) {
  const techStack = ["HTML", "CSS", "JavaScript", "React", "Django", "Python"] as const;
  
  // Duplicate for seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedStack.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="mx-8 inline-flex items-center justify-center flex-shrink-0"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-primary transition-transform duration-300 hover:scale-110">
              {TechIcons[tech]}
            </div>
            <span className="text-primary/40 text-xl md:text-2xl mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

