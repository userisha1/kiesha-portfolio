import heroCebu from "@/assets/hero-cebu.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3" />
              <img
                src={heroCebu}
                alt="Welcome to Cebu - Beautiful panoramic view of Cebu City at golden hour"
                className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-lg shadow-md border border-border">
                <span className="font-serif text-lg text-primary italic">Welcome to Cebu</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Portfolio & Internship Journal
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                Kiesha Mae
                <br />
                <span className="text-primary italic">Jimenez</span>
              </h1>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="font-medium text-foreground">
                  BSIT — 3rd Year Student
                </p>
                <p className="max-w-md mx-auto lg:mx-0">
                  Documenting my journey through internship experiences, 
                  professional growth, and academic achievements.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#gallery"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-md"
                >
                  View Gallery
                </a>
                <a
                  href="#journal"
                  className="inline-flex items-center px-6 py-3 bg-card text-foreground font-medium rounded-lg border border-border hover:bg-muted transition-colors duration-300"
                >
                  Read Journal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
