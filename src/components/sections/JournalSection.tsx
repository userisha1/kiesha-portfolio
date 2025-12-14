import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

import j_1 from "@/assets/journal/j_1.JPG";
import j_2 from "@/assets/journal/j_2.JPG";
import j_3 from "@/assets/journal/j_3.JPG";
import j_4 from "@/assets/journal/j_4.JPG";
import j_5 from "@/assets/journal/j_5.JPG";
import j_6 from "@/assets/journal/j_6.JPG";
import j_7 from "@/assets/journal/j_7.JPG";
import j_8 from "@/assets/journal/j_8.JPG";
import j_9 from "@/assets/journal/j_9.JPG";

const journalEntries = [
  { id: 1, label: "Page 1", title: "WORLDTECH INFORMATION SOLUTIONS", image: j_1 },
  { id: 2, label: "Page 2", title: "RIVAN IT CEBU", image: j_2 },
  { id: 3, label: "Page 3", title: "CODECHUM", image: j_3 },
  { id: 4, label: "Page 4", title: "MATA TECHNOLOGIES INC.", image: j_4 },
  { id: 5, label: "Page 5", title: "T.A.R.S.I.E.R. 117", image: j_5 },
  { id: 6, label: "Page 6", title: "Journal Entry", image: j_6 },
  { id: 7, label: "Page 7", title: "Journal Entry", image: j_7 },
  { id: 8, label: "Page 8", title: "Journal Entry", image: j_8 },
  { id: 9, label: "Page 9", title: "Journal Entry", image: j_9 },
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
          <h2 className="section-heading mb-4">Tour Journal</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive record of daily activities, learnings, and reflections 
            throughout the educational tour experience.
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
        imageSrc={selectedEntry?.image || ""}
        title={selectedEntry ? `${selectedEntry.label}: ${selectedEntry.title}` : undefined}
      />
    </section>
  );
}
