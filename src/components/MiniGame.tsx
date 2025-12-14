import { useState, useEffect, useRef } from "react";
import { Trophy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MiniGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targets, setTargets] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const targetIdRef = useRef(0);

  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (!isPlaying) return;

    const spawnTarget = () => {
      if (!gameAreaRef.current) return;
      
      const area = gameAreaRef.current.getBoundingClientRect();
      const x = Math.random() * (area.width - 60);
      const y = Math.random() * (area.height - 60);

      setTargets((prev) => [
        ...prev,
        {
          id: targetIdRef.current++,
          x,
          y,
        },
      ]);

      // Remove target after 2 seconds
      setTimeout(() => {
        setTargets((prev) => prev.filter((t) => t.id !== targetIdRef.current - 1));
      }, 2000);
    };

    const interval = setInterval(spawnTarget, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTargetClick = (id: number) => {
    setTargets((prev) => prev.filter((t) => t.id !== id));
    setScore((prev) => prev + 10);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setTargets([]);
    targetIdRef.current = 0;
  };

  return (
    <section id="minigame" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="section-heading mb-4">Mini Game</h2>
            <p className="section-subheading max-w-2xl mx-auto mb-6">
              Click on the targets as fast as you can! Score points before time runs out.
            </p>
          </div>

          <div className="bg-background rounded-xl border border-border p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Score</p>
                <p className="text-3xl font-bold text-primary">{score}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className={`text-3xl font-bold ${timeLeft <= 10 ? "text-destructive" : "text-foreground"}`}>
                  {timeLeft}s
                </p>
              </div>
            </div>

            <div
              ref={gameAreaRef}
              className="relative w-full h-96 bg-muted/30 rounded-lg overflow-hidden border border-border"
            >
              {!isPlaying && timeLeft === 30 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button onClick={startGame} size="lg">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Start Game
                  </Button>
                </div>
              )}

              {!isPlaying && timeLeft === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
                  <Trophy className="w-16 h-16 mb-4 text-primary" />
                  <h3 className="text-2xl font-serif mb-2">Game Over!</h3>
                  <p className="text-xl mb-4">Final Score: <span className="text-primary font-bold">{score}</span></p>
                  <Button onClick={startGame}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Play Again
                  </Button>
                </div>
              )}

              {targets.map((target) => (
                <button
                  key={target.id}
                  onClick={() => handleTargetClick(target.id)}
                  className="absolute w-12 h-12 bg-primary rounded-full hover:scale-110 transition-transform duration-200 shadow-lg animate-pulse"
                  style={{
                    left: `${target.x}px`,
                    top: `${target.y}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

