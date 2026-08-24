import React, { useState, useEffect } from "react";
import logo from "../assets/shital-logo.png";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.8;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1a12] via-[#143524] to-[#0a1a12]">

      {/* Simple Glow Background */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* Logo with Pulse Ring */}
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/20 animate-[ringPulse_2s_ease-out_infinite]"></div>
          <div className="absolute -inset-8 rounded-full border border-[#D4AF37]/10 animate-[ringPulse_2s_ease-out_infinite_500ms]"></div>
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="Shital Artist"
            className="w-24 h-24 object-contain rounded-full shadow-[0_0_60px_rgba(212,175,55,0.2)]"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-30">
          <div className="relative h-1 w-full rounded-full bg-[#D4AF37]/10 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#055b0f] to-[#D4AF37] transition-all duration-100 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-center text-xs text-[#D4AF37]/30 mt-3 tracking-[0.3em] font-mono">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-[bounce_1s_ease-in-out_infinite]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-[bounce_1s_ease-in-out_infinite_150ms]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-[bounce_1s_ease-in-out_infinite_300ms]"></span>
        </div>

      </div>

      <style jsx>{`
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>

    </div>
  );
};

export default Loader;