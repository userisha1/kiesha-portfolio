import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <GallerySection />
        <CompaniesSection />
        <CertificatesSection />
        <JournalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
