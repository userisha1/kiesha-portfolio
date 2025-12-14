import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-serif text-2xl mb-2">Kiesha Mae Jimenez</h3>
          <p className="text-muted-foreground text-sm mb-6">
            BSIT — 3rd Year Student
          </p>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Cebu</span>
          </div>
          
          <p className="text-muted-foreground/60 text-xs mt-4">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
