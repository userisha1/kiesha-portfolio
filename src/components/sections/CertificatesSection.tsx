import { useState } from "react";
import { Award, Maximize2 } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import certificateImage from "@/assets/certificate.jpg";

export function CertificatesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certificates" className="relative overflow-hidden bg-card/80 py-24">
      <div className="absolute right-0 top-20 h-72 w-1/3 rounded-l-full bg-primary/10 blur-3xl" />
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

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -left-5 -top-5 hidden h-full w-full -rotate-2 rounded-[2rem] border border-primary/20 bg-background/40 md:block" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative block w-full overflow-hidden rounded-[2rem] text-left opacity-0 shadow-xl transition-transform duration-300 animate-fade-in-up hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Border animation with running light */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem]">
              <div className="absolute inset-0 rounded-[2rem] animate-border-light" />
            </div>

            {/* Certificate image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background">
              <img
                src={certificateImage}
                alt="Certificate of Completion"
                className="w-full h-auto block transition-all duration-500"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                <Award className="h-4 w-4" />
                Certificate
              </div>
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur">
                View full size
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Hover overlay with details */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-2xl transition-all duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center text-white px-6">
                  <h3 className="font-serif text-3xl mb-4 font-semibold">
                    Certificate of Completion
                  </h3>
                  <p className="text-xl mb-3 text-gray-200">
                    World of Adventures Travel and Tours
                  </p>
                  <p className="text-lg text-gray-300">
                    Educational Tour in Cebu and Bohol
                  </p>
                  <p className="text-lg text-gray-300">
                    November 19-22, 2025
                  </p>
                </div>
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
