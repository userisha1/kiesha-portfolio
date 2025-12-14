import { useEffect, useState, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const trailIdRef = useRef(0);
  const sparkleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const updateCursor = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      lastPosition.current = { x: newX, y: newY };
      targetPosition.current = { x: newX, y: newY };
      
      // Initialize cursor position immediately on first move
      if (!isInitialized.current) {
        setCursorPosition({ x: newX, y: newY });
        isInitialized.current = true;
      }
      
      setIsVisible(true);
      
      // Add to trail with delay
      const newPoint: TrailPoint = {
        x: newX,
        y: newY,
        id: trailIdRef.current++,
      };
      
      setTrail((prev) => {
        const updated = [...prev, newPoint].slice(-15); // Keep last 15 points
        return updated;
      });

      // Add sparkle randomly
      if (Math.random() > 0.7) {
        setSparkles((prev) => [
          ...prev,
          {
            id: sparkleIdRef.current++,
            x: newX + (Math.random() - 0.5) * 20,
            y: newY + (Math.random() - 0.5) * 20,
            size: Math.random() * 4 + 2,
            opacity: 1,
          },
        ]);
      }
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

    // Smooth cursor movement with gravity effect
    const animateCursor = () => {
      setCursorPosition((prev) => {
        const target = targetPosition.current;
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        
        // If cursor hasn't moved much, snap to position for better responsiveness
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 0.5) {
          return target;
        }
        
        // Apply gravity/damping with smooth interpolation
        const newX = prev.x + dx * 0.2; // Increased from 0.15 for better responsiveness
        const newY = prev.y + dy * 0.2;
        
        return { x: newX, y: newY };
      });
      
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };
    
    animateCursor();

    // Update sparkles
    const sparkleInterval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((sparkle) => ({
            ...sparkle,
            opacity: sparkle.opacity - 0.05,
          }))
          .filter((sparkle) => sparkle.opacity > 0)
      );
    }, 50);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
      setSparkles([]);
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
      clearInterval(sparkleInterval);
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
        const opacity = (index + 1) / trail.length * 0.5;
        const size = 4 + (index * 0.2);
        
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

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="custom-cursor-sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
          }}
        />
      ))}
      
      {/* Main cursor - visible ring with dot */}
      <div
        className={`custom-cursor-main ${isHovering ? "hover" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <div
        className="custom-cursor-center"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
}

