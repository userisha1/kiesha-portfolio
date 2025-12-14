import { useEffect, useState, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Only show custom cursor on desktop devices
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add to trail
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
      };
      
      setTrail((prev) => {
        const updated = [...prev, newPoint].slice(-12); // Keep last 12 points
        return updated;
      });
    };

    const cleanupTrail = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      const animate = () => {
        setTrail((prev) => {
          if (prev.length === 0) return prev;
          // Remove oldest point gradually
          return prev.slice(1);
        });
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveEnter = () => setIsHovering(true);
    const handleInteractiveLeave = () => setIsHovering(false);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup trail periodically
    const trailInterval = setInterval(cleanupTrail, 50);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
      clearInterval(trailInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length * 0.6;
        const size = 6 + (index * 0.3);
        
        return (
          <div
            key={point.id}
            className="custom-cursor-trail"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              opacity,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
      
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}

