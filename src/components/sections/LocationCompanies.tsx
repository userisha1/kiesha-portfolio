import { Building2 } from "lucide-react";

interface Company {
  name: string;
  description: string;
}

interface LocationCompaniesProps {
  companies: Company[];
  locationName: string;
}

export function LocationCompanies({ companies, locationName }: LocationCompaniesProps) {
  return (
    <section id="companies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            Industry Exposure
          </p>
          <h2
            className="section-heading mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Companies Visited
          </h2>
          <p
            className="section-subheading max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Professional exposure gained during our visit to {locationName}.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">{company.name}</h3>
              <p className="text-muted-foreground text-sm">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
