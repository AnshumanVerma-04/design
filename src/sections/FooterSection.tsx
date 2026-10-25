import React, { useState } from 'react';
import { ArrowUp, Copy, Check, Sparkles } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';

interface FooterSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const email = 'jack@creator3d.studio';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#080808] border-t border-white/10 px-6 md:px-12 py-16 sm:py-20 text-[#D7E2EA] z-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top Banner / Call to Action */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Available for Select Commissions</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Ready to elevate your visual world?
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-2 max-w-lg font-light">
              From high-end 3D visual identities to surreal motion animations, let&apos;s build an unforgettable presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <ContactButton onClick={onOpenContact} label="Get In Touch" />
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/60" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Links & Brand Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-[#D7E2EA]/70">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white uppercase tracking-wider">JACK</span>
            <span className="text-white/30">•</span>
            <span className="font-light text-xs uppercase tracking-widest">3D Creator & Motion Artist</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA] hover:text-white group cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 pt-4 border-t border-white/5">
          <p>© {new Date().getFullYear()} Jack. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px]">Crafted with React, Framer Motion & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
