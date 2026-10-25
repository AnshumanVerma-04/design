import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Award, Sparkles, ChevronRight, Eye } from 'lucide-react';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  description?: string;
  techStack?: string[];
  role?: string;
  year?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) return null;
  const activeImage = selectedImg || project.col2Img;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full p-2.5 text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold tracking-widest text-[#B600A8] uppercase">
                  {project.category}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs font-mono uppercase text-[#D7E2EA]/60">Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                {project.name}
              </h2>
            </div>
            <div className="text-5xl sm:text-6xl font-black text-white/20 select-none">
              {project.number}
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="space-y-4 mb-8">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group">
              <img
                src={activeImage}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-white flex items-center gap-1.5 border border-white/10">
                <Eye className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>3D Showcase Render</span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3">
              {[project.col1Img1, project.col1Img2, project.col2Img].map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImg(img)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img
                      ? 'border-[#B600A8] ring-2 ring-[#B600A8]/30 scale-[1.02]'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Angle ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white/80">
                    View 0{i + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/[0.03] border border-white/5 rounded-2xl p-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>Creative Direction</span>
              </div>
              <div className="text-sm font-medium text-white">Jack 3D Studio</div>
              <div className="text-xs text-[#D7E2EA]/70 mt-1">
                Procedural modeling, realistic sub-surface lighting, physical shaders.
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 mb-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>Deliverables</span>
              </div>
              <div className="text-sm font-medium text-white">Full Visual Suite</div>
              <div className="text-xs text-[#D7E2EA]/70 mt-1">
                8K key visuals, turntable animations, responsive interactive assets.
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>Tooling</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {['Blender', 'Cinema 4D', 'Octane', 'Redshift', 'Three.js'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70">
              Want a similar visual benchmark for your brand or product?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                <span>Commission Similar Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
