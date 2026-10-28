import React from 'react';
import { motion } from 'framer-motion';

interface GateAnimationProps {
  onComplete: () => void;
}

export const GateAnimation: React.FC<GateAnimationProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.1, delay: 2.2, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#01261e] select-none pointer-events-none"
    >
      {/* Brand Emerald Vignette with #03624c */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#03624c_0%,#01261e_100%)]" />

      {/* Central Logo & Intro Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1.03, filter: 'blur(0px)' }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 flex flex-col items-center justify-center p-8 space-y-6 text-center"
      >
        {/* Monogram / Logo Badge */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-[#03624c]/40 blur-2xl animate-pulse" />
          <img
            src="/images/logo-nav.png"
            alt="Il Giardino dei Ricordi"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain rounded-full shadow-[0_10px_45px_rgba(0,0,0,0.8)] border border-[#d8be96]/50 relative z-10 bg-white/95 p-1"
          />
        </div>

        {/* Elegant Golden Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
          className="h-[1.5px] w-48 sm:w-72 bg-gradient-to-r from-transparent via-[#d8be96] to-transparent origin-center"
        />

        {/* Subtitle location */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="font-sans text-xs sm:text-sm text-[#e8ded1] tracking-[0.45em] uppercase font-light"
        >
          Alberobello • Valle d’Itria
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
