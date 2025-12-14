import { useState } from "react";
import { Award } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import certificateImage from "@/assets/certificate.jpg";

export function CertificatesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certificates" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Achievements
          </p>
          <h2 className="section-heading mb-4">Certificates</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Professional certifications and learning achievements that demonstrate 
            my commitment to continuous growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="group w-full bg-background border border-border rounded-xl p-6 text-left hover:shadow-lg transition-all duration-400 ease-out-expo hover:-translate-y-1 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                  Certificate of Completion
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  World of Adventures Travel and Tours
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Educational Tour in Cebu and Bohol - November 19-22, 2025
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <Lightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={certificateImage}
        title="Certificate of Completion"
      />
    </section>
  );
}
