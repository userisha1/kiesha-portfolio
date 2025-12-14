import { Building2 } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Tech Solutions Inc.",
    description: "IT Services & Software Development",
    role: "Web Development Intern",
  },
  {
    id: 2,
    name: "Digital Innovations",
    description: "Digital Marketing & Technology",
    role: "Technical Support Intern",
  },
  {
    id: 3,
    name: "CodeCraft Studios",
    description: "Mobile & Web Applications",
    role: "Junior Developer",
  },
];

export function CompaniesSection() {
  return (
    <section id="companies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Professional Exposure
          </p>
          <h2 className="section-heading mb-4">Companies</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Organizations where I gained valuable industry experience and 
            developed my professional skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-400 ease-out-expo hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <Building2 className="w-8 h-8 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl mb-2">{company.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{company.description}</p>
              <p className="text-primary font-medium text-sm">{company.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
