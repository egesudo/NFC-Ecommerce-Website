import React, { useState } from 'react';
import { CardMaterial } from '../types';
import { Wifi, QrCode, Sparkles } from 'lucide-react';

interface NfcCardGraphicProps {
  material?: CardMaterial;
  colorId?: string;
  name?: string;
  title?: string;
  company?: string;
  includeQr?: boolean;
  interactive?: boolean;
  showBack?: boolean;
  onFlip?: () => void;
  className?: string;
}

export const NfcCardGraphic: React.FC<NfcCardGraphicProps> = ({
  material = 'pvc',
  colorId = 'matte-black',
  name = 'Adınız Soyadınız',
  title = 'Kurucu & Ürün Yöneticisi',
  company = 'Gen Z Bilişim',
  includeQr = true,
  interactive = true,
  showBack = false,
  onFlip,
  className = '',
}) => {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const isFlipped = onFlip !== undefined ? showBack : internalFlipped;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate tilt angles (-10 to 10 deg)
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const toggleFlip = () => {
    if (onFlip) {
      onFlip();
    } else {
      setInternalFlipped((prev) => !prev);
    }
  };

  // Material-specific card background and text colors
  const getCardTheme = () => {
    if (material === 'wood' || colorId === 'bamboo-natural') {
      return {
        bg: 'bg-gradient-to-br from-[#d4a373] via-[#c29b62] to-[#a9845b]',
        border: 'border-[#8c6d46]/40',
        textColor: 'text-[#3e2713]',
        mutedText: 'text-[#5c3a21]/80',
        accentColor: 'text-[#2b1810]',
        iconColor: '#3e2713',
        pattern: 'opacity-15 mix-blend-multiply',
        texture: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 80%)',
        sheen: 'bg-gradient-to-tr from-amber-100/10 via-amber-100/20 to-transparent',
      };
    }
    if (material === 'metal' || colorId === 'metal-stealth') {
      return {
        bg: 'bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617]',
        border: 'border-slate-500/40 shadow-2xl',
        textColor: 'text-slate-100',
        mutedText: 'text-slate-400',
        accentColor: 'text-slate-200',
        iconColor: '#e2e8f0',
        pattern: 'opacity-10',
        texture: 'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        sheen: 'bg-gradient-to-tr from-transparent via-white/10 to-transparent',
      };
    }
    if (colorId === 'metal-silver') {
      return {
        bg: 'bg-gradient-to-br from-[#cbd5e1] via-[#94a3b8] to-[#64748b]',
        border: 'border-slate-300 shadow-2xl',
        textColor: 'text-slate-900',
        mutedText: 'text-slate-700',
        accentColor: 'text-slate-950',
        iconColor: '#0f172a',
        pattern: 'opacity-10',
        texture: 'linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        sheen: 'bg-gradient-to-tr from-transparent via-white/25 to-transparent',
      };
    }
    if (colorId === 'pure-white') {
      return {
        bg: 'bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9]',
        border: 'border-slate-200/80 shadow-xl',
        textColor: 'text-slate-900',
        mutedText: 'text-slate-500',
        accentColor: 'text-blue-600',
        iconColor: '#0f172a',
        pattern: 'opacity-5',
        texture: 'none',
        sheen: 'bg-gradient-to-tr from-transparent via-blue-50/40 to-transparent',
      };
    }
    // Default: Matte Black PVC
    return {
      bg: 'bg-gradient-to-br from-[#27272a] via-[#18181b] to-[#09090b]',
      border: 'border-white/10 shadow-2xl',
      textColor: 'text-white',
      mutedText: 'text-zinc-400',
      accentColor: 'text-zinc-200',
      iconColor: '#f4f4f5',
      pattern: 'opacity-10',
      texture: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)',
      sheen: 'bg-gradient-to-tr from-transparent via-white/8 to-transparent',
    };
  };

  const theme = getCardTheme();

  return (
    <div
      className={`relative select-none perspective-[1200px] cursor-pointer group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={toggleFlip}
      title="Kartı çevirmek için tıklayın"
    >
      <div
        className="w-full aspect-[1.586/1] rounded-2xl relative transition-transform duration-500 ease-out preserve-3d"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ================= FRONT SIDE ================= */}
        <div
          className={`absolute inset-0 rounded-2xl border p-6 flex flex-col justify-between overflow-hidden backface-hidden ${theme.bg} ${theme.border}`}
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: theme.texture,
          }}
        >
          {/* Subtle sheen highlight */}
          <div className={`absolute inset-0 pointer-events-none ${theme.sheen}`} />

          {/* Top Bar on Card: Brand & NFC Wave */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className={`text-base font-extrabold tracking-tight ${theme.textColor}`}>
                Gen Z Bilişim
              </span>
              <span className={`text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded ${theme.mutedText} border border-current/20`}>
                nfc
              </span>
            </div>

            {/* NFC Contactless Symbol */}
            <div className="flex items-center gap-1.5 opacity-80" title="Temassız NFC Bölgesi">
              <Wifi className="w-5 h-5 -rotate-90" style={{ color: theme.iconColor }} />
            </div>
          </div>

          {/* Subtle NFC Antenna Loop Wire Representation */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-dashed border-current/10 pointer-events-none" />

          {/* Bottom Info: Custom Name, Title, and Company */}
          <div className="z-10 mt-auto">
            <p className={`text-xs uppercase font-medium tracking-wider mb-1 ${theme.mutedText}`}>
              {company || 'Şirket Adı'}
            </p>
            <h4 className={`text-lg sm:text-xl font-bold tracking-tight leading-tight truncate ${theme.textColor}`}>
              {name || 'Adınız Soyadınız'}
            </h4>
            <p className={`text-xs sm:text-sm font-medium mt-0.5 truncate ${theme.mutedText}`}>
              {title || 'Ünvanınız / Uzmanlığınız'}
            </p>
          </div>

          {/* Click to flip badge */}
          <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[10px] opacity-40 group-hover:opacity-80 transition-opacity">
            <span className={theme.mutedText}>Çevir</span>
            <span className={theme.mutedText}>↻</span>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div
          className={`absolute inset-0 rounded-2xl border p-6 flex flex-col justify-between overflow-hidden ${theme.bg} ${theme.border}`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundImage: theme.texture,
          }}
        >
          <div className={`absolute inset-0 pointer-events-none ${theme.sheen}`} />

          {/* Back Top: Magnetic stripe simulation or minimalist serial */}
          <div className="flex items-center justify-between z-10">
            <span className={`text-[11px] font-mono tracking-wider opacity-60 ${theme.mutedText}`}>
              NTAG216 · SECURE NFC
            </span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 opacity-60" style={{ color: theme.iconColor }} />
              <span className={`text-[10px] font-semibold uppercase tracking-widest ${theme.mutedText}`}>
                genzbilisim.com
              </span>
            </div>
          </div>

          {/* Center QR Code Mockup for compatibility fallback */}
          <div className="flex items-center justify-center my-auto z-10 gap-4">
            {includeQr ? (
              <div className="bg-white p-2 rounded-xl shadow-md border border-black/10 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-lg p-1.5 flex items-center justify-center">
                  <QrCode className="w-full h-full text-white" />
                </div>
                <span className="text-[9px] font-mono text-slate-700 mt-1 font-semibold">
                  TARA & BAĞLAN
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4">
                <Wifi className="w-8 h-8 -rotate-90 mb-2 opacity-70" style={{ color: theme.iconColor }} />
                <p className={`text-xs font-medium max-w-[180px] ${theme.mutedText}`}>
                  Temassız NFC okuyucuya doğrudan yaklaştırınız
                </p>
              </div>
            )}

            <div className="text-left max-w-[140px] hidden sm:block">
              <p className={`text-[11px] font-medium leading-snug ${theme.textColor}`}>
                Kamera veya NFC ile dokundurun
              </p>
              <p className={`text-[10px] leading-tight mt-1 opacity-70 ${theme.mutedText}`}>
                Uygulama gerektirmeden dijital kartvizit profilinize yönlendirir.
              </p>
            </div>
          </div>

          {/* Back Bottom */}
          <div className="flex items-center justify-between z-10 text-[10px] pt-2 border-t border-current/10">
            <span className={theme.mutedText}>Made with Precision</span>
            <span className={`font-mono ${theme.mutedText}`}>ID: GZB-{(name.length * 379 + 4201).toString().slice(0, 6)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
