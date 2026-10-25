import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, Mail, Calendar, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('3D Modeling');
  const [budget, setBudget] = useState('$3k - $5k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{name}</span>. Jack has received your brief for <span className="text-white font-medium">{service}</span> and will review it and reply within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="rounded-full px-6 py-2.5 border border-[#D7E2EA]/40 text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Let&apos;s Create Something Striking</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    Start a Project with Jack
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 font-light">
                    Have a concept or 3D visual challenge? Fill out the brief below to get a custom quote and timeline.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Vance"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none focus:ring-1 focus:ring-[#B600A8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none focus:ring-1 focus:ring-[#B600A8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl bg-[#1a1a1a] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#B600A8] focus:outline-none focus:ring-1 focus:ring-[#B600A8]"
                      >
                        <option value="3D Modeling">3D Modeling & Characters</option>
                        <option value="Rendering">Photorealistic Rendering</option>
                        <option value="Motion Design">Motion Graphics & Animation</option>
                        <option value="Branding">3D Brand Identity</option>
                        <option value="Web Design">Interactive Web 3D</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-xl bg-[#1a1a1a] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#B600A8] focus:outline-none focus:ring-1 focus:ring-[#B600A8]"
                      >
                        <option value="Under $3k">&lt; $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1">
                      Project Details & Goals
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you're building, target deliverables, and desired completion date..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none focus:ring-1 focus:ring-[#B600A8] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <div className="text-[11px] text-[#D7E2EA]/60 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Direct: jack@creator3d.studio</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Brief</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
