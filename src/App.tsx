import { useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { FooterSection } from './sections/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal, ProjectData } from './components/ProjectModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (_serviceName: string) => {
    setIsContactOpen(true);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. Projects Section */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Footer */}
      <FooterSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Project Case Study Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
