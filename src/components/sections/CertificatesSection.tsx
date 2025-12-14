import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import certificateImage from "@/assets/certificate.jpg";

export function CertificatesSection() {
  const [isHovered, setIsHovered] = useState(false);

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

        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-xl overflow-hidden animate-fade-in-up opacity-0 group"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Border animation with running light */}
            <div className="absolute inset-0 rounded-xl pointer-events-none">
              <div className="absolute inset-0 animate-border-light rounded-xl" />
            </div>

            {/* Certificate image container */}
            <div className="relative bg-background border border-border rounded-xl overflow-hidden">
              <img
                src={certificateImage}
                alt="Certificate of Completion"
                className="w-full h-auto block transition-all duration-500"
              />

              {/* Hover overlay with details */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-500 ${
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
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={false}
        onClose={() => {}}
        imageSrc={certificateImage}
        title="Certificate of Completion"
      />
    </section>
  );
}
