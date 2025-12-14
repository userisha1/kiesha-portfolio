import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const journalPages = [
  { id: 1, label: "Page 1", title: "LEARNING JOURNAL", image: "/journal/j_1.JPG" },
  { id: 2, label: "Page 2", title: "ITINERARY", image: "/journal/j_2.JPG" },
  { id: 3, label: "Page 3", title: "GENERAL HOUSE RULES", image: "/journal/j_3.JPG" },
  { id: 4, label: "Page 4", title: "WORLDTECH INFORMATION SOLUTIONS", image: "/journal/j_4.JPG" },
  { id: 5, label: "Page 5", title: "RIVAN IT CEBU", image: "/journal/j_5.JPG" },
  { id: 6, label: "Page 6", title: "CODECHUM", image: "/journal/j_6.JPG" },
  { id: 7, label: "Page 7", title: "MATA TECHNOLOGIES INC.", image: "/journal/j_7.JPG" },
  { id: 8, label: "Page 8", title: "T.A.R.S.I.E.R. 117", image: "/journal/j_8.JPG" },
  { id: 9, label: "Page 9", title: "IMPRESSION SHEET", image: "/journal/j_9.JPG" },
];

export function JournalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalPages.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => { setCurrentIndex(idx); setIsOpen(true); }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-400 ease-out-expo hover:-translate-y-1 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${idx * 80}ms`, animationFillMode: "forwards" }}
                aria-label={`${page.label}: ${page.title}`}
              >
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                    {page.label}
                  </span>
                  <h3 className="mt-2 font-serif text-white text-base">
                    {page.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Journal Carousel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-serif text-2xl mb-1">{journalPages[currentIndex].title}</h2>
                <p className="text-sm text-muted-foreground">{journalPages[currentIndex].label}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Content */}
            <div className="flex-1 flex items-center justify-center bg-muted overflow-auto">
              <img 
                src={journalPages[currentIndex].image} 
                alt={journalPages[currentIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 border-t border-border bg-background">
              <button
                onClick={() => setCurrentIndex(prev => prev === 0 ? journalPages.length - 1 : prev - 1)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="text-sm text-muted-foreground">
                {currentIndex + 1} / {journalPages.length}
              </div>

              <button
                onClick={() => setCurrentIndex(prev => prev === journalPages.length - 1 ? 0 : prev + 1)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Page Indicators */}
            <div className="px-6 pb-6 flex flex-wrap gap-2 justify-center">
              {journalPages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    idx === currentIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
