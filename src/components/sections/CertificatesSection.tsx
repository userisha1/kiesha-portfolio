import { useState } from "react";
import { Award } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issuer: "Coursera",
    date: "2024",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    issuer: "LinkedIn Learning",
    date: "2024",
  },
  {
    id: 3,
    title: "Database Management",
    issuer: "Oracle Academy",
    date: "2023",
  },
  {
    id: 4,
    title: "IT Security Basics",
    issuer: "Cisco Networking Academy",
    date: "2023",
  },
];

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-background border border-border rounded-xl p-6 text-left hover:shadow-lg transition-all duration-400 ease-out-expo hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground/70">{cert.date}</p>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageSrc=""
        title={selectedCert?.title}
      />
    </section>
  );
}
