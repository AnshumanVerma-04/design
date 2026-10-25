import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2
          className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* 5 Services List */}
      <div className="max-w-5xl mx-auto border-t border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <div
              onClick={() => onSelectService?.(service.name)}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] transition-colors duration-300 hover:bg-black/[0.02] cursor-pointer rounded-xl px-2 sm:px-4"
            >
              {/* Number on left */}
              <div
                className="font-black text-[#0C0C0C] leading-none tracking-tighter w-[100px] sm:w-[180px] md:w-[240px] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Name + description stacked vertically on right */}
              <div className="flex-1 mt-4 sm:mt-0 sm:pl-6 md:pl-10">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 sm:mb-3 transition-colors duration-200 group-hover:text-black"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
