import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { ProjectData } from '../components/ProjectModal';

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Next-generation 3D spatial branding and immersive interactive product assets for an architectural and digital product agency.',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'Exploration of luminescence, refractive glass materials, and tactile form factors expressing ambient energy and futuristic elegance.',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Full 3D cinematic campaign visual suite and motion design system engineered for an international clean-energy frontier firm.',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  targetScale,
  progress,
  range,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-top transition-shadow will-change-transform"
      >
        {/* Top Row: Number, Category label, Project Name, Live Project Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#B600A8] uppercase">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
            <LiveProjectButton onClick={() => onSelectProject(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-column image grid */}
        {/* Left column (40% width) has 2 stacked images, right column (60%) has 1 tall image */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Left Top Image */}
            <div
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-white/10 group cursor-pointer relative bg-[#141414]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-widest text-white border border-white/20">
                  Inspect Angle
                </span>
              </div>
            </div>

            {/* Left Bottom Image */}
            <div
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-white/10 group cursor-pointer relative bg-[#141414]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-widest text-white border border-white/20">
                  Inspect Angle
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div
            onClick={() => onSelectProject(project)}
            className="w-full md:w-[60%] min-h-[280px] md:min-h-0 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-white/10 group cursor-pointer relative bg-[#141414]"
          >
            <img
              src={project.col2Img}
              alt={`${project.name} main showcase`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest text-white border border-white/20">
                View Project Details
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-32 select-none"
    >
      {/* Heading: "Project" (singular) using .hero-heading gradient */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* 3 Sticky Stacking Cards */}
      <div className="relative w-full flex flex-col items-center">
        {PROJECTS.map((project, index) => {
          // targetScale = 1 - (totalCards - 1 - index) * 0.03
          const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.03;
          const start = index / PROJECTS.length;
          const end = (index + 1) / PROJECTS.length;

          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>
    </section>
  );
};
