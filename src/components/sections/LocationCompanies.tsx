import { ArrowUpRight, Building2, MapPinned } from "lucide-react";

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
    <section id="companies" className="relative overflow-hidden py-24 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-16 flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Industry Exposure
            </p>
            <h2 className="section-heading mb-4">Companies Visited</h2>
          </div>
          <div className="max-w-xl rounded-[1.75rem] border border-border bg-card/70 p-5 shadow-sm backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <MapPinned className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">{locationName} Route</span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Professional exposure gained through guided visits, technical discussions, and workplace observation.
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-5">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl md:p-8 ${
                index % 2 === 1 ? "md:ml-16" : "md:mr-16"
              }`}
            >
              <div className="absolute right-6 top-3 font-serif text-8xl text-primary/10 md:text-9xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-3 font-serif text-3xl leading-tight md:text-4xl">{company.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{company.description}</p>
                </div>
                <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Visit note
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
