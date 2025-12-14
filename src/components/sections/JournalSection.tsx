import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

const journalEntries = [
  { id: 1, label: "Week 1", title: "Orientation & Onboarding", pages: "1-5" },
  { id: 2, label: "Week 2", title: "Learning the Systems", pages: "6-10" },
  { id: 3, label: "Week 3", title: "First Project Assignment", pages: "11-15" },
  { id: 4, label: "Week 4", title: "Team Collaboration", pages: "16-20" },
  { id: 5, label: "Week 5", title: "Independent Tasks", pages: "21-25" },
  { id: 6, label: "Week 6", title: "Final Presentation", pages: "26-30" },
];

export function JournalSection() {
  const [selectedEntry, setSelectedEntry] = useState<typeof journalEntries[0] | null>(null);

  return (
    <section id="journal" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Academic Documentation
          </p>
          <h2 className="section-heading mb-4">Internship Journal</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive record of daily activities, learnings, and reflections 
            throughout my internship experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {journalEntries.map((entry, index) => (
            <button
              key={entry.id}
              onClick={() => setSelectedEntry(entry)}
              className="group relative bg-card border border-border rounded-xl p-6 text-left hover:shadow-lg transition-all duration-400 ease-out-expo hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <BookOpen className="w-7 h-7 text-secondary-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                    {entry.label}
                  </span>
                  <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">Pages {entry.pages}</p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-border transform rotate-45 translate-x-6 -translate-y-6" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedEntry}
        onClose={() => setSelectedEntry(null)}
        imageSrc=""
        title={selectedEntry ? `${selectedEntry.label}: ${selectedEntry.title}` : undefined}
      />
    </section>
  );
}
