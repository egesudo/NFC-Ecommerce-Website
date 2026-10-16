import React, { useState, useRef, useEffect } from 'react';
import { CardType, CardMaterial } from '../types';
import { GoogleReviewCardGraphic } from './GoogleReviewCardGraphic';
import { 
  Wifi, 
  RotateCw, 
  Play, 
  Pause, 
  RefreshCw, 
  QrCode, 
  Sparkles,
  Smartphone,
  Star,
  Check
} from 'lucide-react';

interface NfcCard360ViewerProps {
  cardType?: CardType;
  material?: CardMaterial;
  customName?: string;
  customHandle?: string;
  autoRotateInit?: boolean;
  className?: string;
  showControls?: boolean;
  overlayControls?: boolean;
}

export const NfcCard360Viewer: React.FC<NfcCard360ViewerProps> = ({
  cardType = 'whatsapp',
  material = 'pvc',
  customName = '',
  customHandle = '',
  autoRotateInit = false,
  className = '',
  showControls = true,
  overlayControls = false,
}) => {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotateInit);
  const startPos = useRef({ x: 0, y: 0 });
  const startRotation = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  // Auto-rotation loop
  useEffect(() => {
    if (isAutoRotating && !isDragging) {
      const step = () => {
        setRotationY((prev) => (prev + 0.8) % 360);
        animationFrameId.current = requestAnimationFrame(step);
      };
      animationFrameId.current = requestAnimationFrame(step);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isAutoRotating, isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    startPos.current = { x: e.clientX, y: e.clientY };
    startRotation.current = { x: rotationX, y: rotationY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;

    // Calculate new rotation
    const newY = (startRotation.current.y + deltaX * 0.8) % 360;
    const normalizedY = newY < 0 ? newY + 360 : newY;

    // Clamp vertical tilt between -25 and +25 deg
    const newX = Math.max(-25, Math.min(25, startRotation.current.x - deltaY * 0.4));

    setRotationY(normalizedY);
    setRotationX(newX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const normalizedAngle = ((rotationY % 360) + 360) % 360;
  const isBackFacing = normalizedAngle > 90 && normalizedAngle < 270;

  // Specular sheen calculation based on rotation
  const sheenOpacity = Math.max(0, Math.cos((normalizedAngle * Math.PI) / 180) * 0.25);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setIsAutoRotating(false);
      setRotationY((prev) => ((prev - 15) % 360 + 360) % 360);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setIsAutoRotating(false);
      setRotationY((prev) => (prev + 15) % 360);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setRotationX((prev) => Math.min(25, prev + 5));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setRotationX((prev) => Math.max(-25, prev - 5));
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setIsAutoRotating((prev) => !prev);
    }
  };

  return (
    <div className={`flex flex-col items-center select-none relative ${className}`}>
      {/* 3D Scene Viewport with keyboard navigation */}
      <div
        tabIndex={0}
        role="region"
        aria-label="360 derece döndürülebilir akıllı kart önizlemesi. Sol ve sağ ok tuşlarıyla kartı döndürebilir, boşluk tuşuyla otomatik dönüşü başlatıp durdurabilirsiniz."
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-[340px] aspect-[1/1] sm:aspect-[1.1/1] flex items-center justify-center cursor-grab active:cursor-grabbing perspective-[1400px] touch-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-3xl"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        title="360° döndürmek için tutup sürükleyin veya klavyedeki ok tuşlarını kullanın"
      >
        {/* Transparent Iconic Mini Controls Floating on the Card */}
        {overlayControls && (
          <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoRotating(false);
                setRotationY((prev) => (isBackFacing ? 0 : 180));
                setRotationX(0);
              }}
              aria-label={isBackFacing ? 'Kartın ön yüzünü göster' : 'Kartın arka yüzünü göster'}
              title={isBackFacing ? 'Ön Yüzü Göster' : 'Arka Yüzü Göster'}
              className="p-2 bg-slate-900/60 hover:bg-slate-900/85 backdrop-blur-md text-white rounded-xl shadow-xs transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-white"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoRotating((prev) => !prev);
              }}
              aria-label={isAutoRotating ? '360 derece otomatik döndürmeyi durdur' : '360 derece otomatik döndürmeyi başlat'}
              aria-pressed={isAutoRotating}
              title={isAutoRotating ? 'Döndürmeyi Durdur' : '360° Döndür'}
              className={`p-2 backdrop-blur-md rounded-xl shadow-xs transition-all cursor-pointer border hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-white ${
                isAutoRotating
                  ? 'bg-[#1D4ED8] text-white border-blue-400'
                  : 'bg-slate-900/60 hover:bg-slate-900/85 text-white border-white/20'
              }`}
            >
              {isAutoRotating ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5" aria-hidden="true" />}
            </button>
          </div>
        )}

        <div
          className="relative w-[280px] sm:w-[300px] aspect-[1/1] transition-transform duration-75 ease-out preserve-3d"
          style={{
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Card Physical Edge / Thickness Simulation (Subtle Layered Depth) */}
          <div
            className="absolute inset-0 rounded-3xl bg-slate-400/40 pointer-events-none"
            style={{ transform: 'translateZ(-1.5px)' }}
          />
          <div
            className="absolute inset-0 rounded-3xl bg-slate-600/30 pointer-events-none"
            style={{ transform: 'translateZ(-0.75px)' }}
          />

          {/* ================= FRONT SIDE (0 deg) ================= */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(1px)',
            }}
          >
            {/* Specular sheen reflection */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity"
              style={{ opacity: sheenOpacity }}
            />

            {/* --- CARD DESIGN 1: WHATSAPP NFC CARD --- */}
            {cardType === 'whatsapp' && (
              <div className="w-full h-full flex flex-col justify-between relative bg-white">
                {/* Black Glossy Top Section */}
                <div className="relative h-[48%] bg-[#121214] p-4 flex flex-col justify-between overflow-hidden">
                  {/* Subtle glossy gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* Top Bar on Black Section */}
                  <div className="flex items-center justify-between z-10">
                    {/* Pill: Mesaj At */}
                    <div className="bg-white px-2.5 py-0.8 rounded-full flex items-center gap-1.5 shadow-sm">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold text-slate-900 tracking-tight">
                        Mesaj At
                      </span>
                    </div>

                    {/* Contactless Wave Icon (CRITICAL: ZERO TAPIFY OR ANY BRAND NAME) */}
                    <div className="flex flex-col items-center opacity-90" title="Temassız NFC Bölgesi">
                      <Wifi className="w-4 h-4 text-white -rotate-90" />
                    </div>
                  </div>

                  {/* Headline */}
                  <div className="z-10 text-center my-auto px-2">
                    <h3 className="text-white text-xs sm:text-[13px] font-bold tracking-tight leading-snug">
                      Whatsapp Üzerinden İletişime Geçin
                    </h3>
                    {customName && (
                      <p className="text-[10px] text-emerald-400 font-medium truncate mt-0.5">
                        {customName}
                      </p>
                    )}
                  </div>

                  {/* Metallic Silver Wave Curve Divider */}
                  <div className="absolute -bottom-1 left-0 right-0 h-6 overflow-hidden pointer-events-none">
                    <svg viewBox="0 0 300 24" fill="none" className="w-full h-full preserve-3d">
                      <path
                        d="M0 12 C80 0, 180 26, 300 8 L300 24 L0 24 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M0 12 C80 0, 180 26, 300 8"
                        stroke="url(#silverGradient)"
                        strokeWidth="2.5"
                      />
                      <defs>
                        <linearGradient id="silverGradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#94A3B8" />
                          <stop offset="0.5" stopColor="#E2E8F0" />
                          <stop offset="1" stopColor="#64748B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Center Floating WhatsApp Icon Disc */}
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg border border-slate-100 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] flex items-center justify-center shadow-inner">
                      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* White Bottom Section */}
                <div className="h-[52%] pt-10 pb-4 px-4 flex flex-col items-center justify-between">
                  {/* Phone NFC Tap Icon */}
                  <div className="flex items-center justify-center gap-1.5 my-auto">
                    {/* Oval waves */}
                    <svg className="w-10 h-10 text-slate-900" viewBox="0 0 48 48" fill="none">
                      <ellipse cx="24" cy="24" rx="18" ry="14" stroke="#18181B" strokeWidth="2" strokeDasharray="3 3" />
                      <path d="M18 18C21 21 21 27 18 30" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M22 15C26 20 26 28 22 33" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M26 12C31 18 31 30 26 36" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    {/* Hand with phone silhouette */}
                    <div className="w-6 h-10 border-2 border-slate-900 rounded-md bg-white flex flex-col items-center justify-between p-0.5 shadow-xs">
                      <div className="w-2.5 h-0.5 bg-slate-900 rounded-full" />
                      <div className="w-1.5 h-1.5 rounded-full border border-slate-900" />
                    </div>
                  </div>

                  {/* Instruction text */}
                  <p className="text-[10px] font-semibold text-slate-700 text-center tracking-tight">
                    Bize ulaşmak için okutun veya taratın.
                  </p>
                </div>
              </div>
            )}

            {/* --- CARD DESIGN 2: INSTAGRAM NFC CARD --- */}
            {cardType === 'instagram' && (
              <div className="w-full h-full flex flex-col justify-between relative bg-white">
                {/* Black Glossy Top Section */}
                <div className="relative h-[48%] bg-[#121214] p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* Top Bar on Black Section */}
                  <div className="flex items-center justify-between z-10">
                    {/* Pill: Takip Et */}
                    <div className="bg-white px-2.5 py-0.8 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="text-[10px] font-extrabold text-slate-900">+</span>
                      <span className="text-[10px] font-bold text-slate-900 tracking-tight">
                        Takip Et
                      </span>
                    </div>

                    {/* Contactless Wave Icon (CRITICAL: ZERO TAPIFY TEXT) */}
                    <div className="flex flex-col items-center opacity-90" title="Temassız NFC Bölgesi">
                      <Wifi className="w-4 h-4 text-white -rotate-90" />
                    </div>
                  </div>

                  {/* Headline */}
                  <div className="z-10 text-center my-auto px-2">
                    <h3 className="text-white text-xs sm:text-[13px] font-bold tracking-tight leading-snug">
                      BİZİ INSTAGRAM'DA TAKİP EDİN
                    </h3>
                    {customHandle && (
                      <p className="text-[10px] text-pink-400 font-medium truncate mt-0.5">
                        @{customHandle.replace('@', '')}
                      </p>
                    )}
                  </div>

                  {/* Metallic Silver Wave Curve Divider */}
                  <div className="absolute -bottom-1 left-0 right-0 h-6 overflow-hidden pointer-events-none">
                    <svg viewBox="0 0 300 24" fill="none" className="w-full h-full">
                      <path
                        d="M0 12 C80 0, 180 26, 300 8 L300 24 L0 24 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M0 12 C80 0, 180 26, 300 8"
                        stroke="#94A3B8"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Center Floating Instagram Icon Disc */}
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg border border-slate-100 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center shadow-inner p-2.5">
                      <svg className="w-full h-full text-white fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* White Bottom Section */}
                <div className="h-[52%] pt-10 pb-4 px-4 flex flex-col items-center justify-between">
                  <div className="flex items-center justify-center gap-1.5 my-auto">
                    <svg className="w-10 h-10 text-slate-900" viewBox="0 0 48 48" fill="none">
                      <ellipse cx="24" cy="24" rx="18" ry="14" stroke="#18181B" strokeWidth="2" strokeDasharray="3 3" />
                      <path d="M18 18C21 21 21 27 18 30" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M22 15C26 20 26 28 22 33" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M26 12C31 18 31 30 26 36" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <div className="w-6 h-10 border-2 border-slate-900 rounded-md bg-white flex flex-col items-center justify-between p-0.5 shadow-xs">
                      <div className="w-2.5 h-0.5 bg-slate-900 rounded-full" />
                      <div className="w-1.5 h-1.5 rounded-full border border-slate-900" />
                    </div>
                  </div>

                  <p className="text-[10px] font-semibold text-slate-700 text-center tracking-tight">
                    Sayfamıza göz atmak için okutun veya taratın.
                  </p>
                </div>
              </div>
            )}

            {/* --- CARD DESIGN 3: GOOGLE REVIEW (PUANLAMA) NFC CARD (MATCHING USER PRODUCT PHOTO) --- */}
            {cardType === 'google-review' && (
              <div className="w-full h-full relative overflow-hidden bg-white">
                <GoogleReviewCardGraphic customName={customName} />
              </div>
            )}

            {/* --- CARD DESIGN 4: CUSTOM VIP HYBRID --- */}
            {cardType === 'custom' && (
              <div className="w-full h-full flex flex-col justify-between relative bg-slate-900 p-5 text-white overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-tight">ÖZEL TASARIM</span>
                  <Wifi className="w-4 h-4 text-blue-400 -rotate-90" />
                </div>
                <div className="my-auto text-center">
                  <h4 className="text-base font-bold text-white">
                    {customName || 'Şirketiniz / Markanız'}
                  </h4>
                  <p className="text-xs text-blue-400 mt-1">
                    WhatsApp · Instagram · Google Çoklu Bağlantı
                  </p>
                </div>
                <div className="text-center pt-2 border-t border-white/10 text-[10px] text-slate-400">
                  Tek Dokunuşla Tüm Sosyal Kanallarınız
                </div>
              </div>
            )}
          </div>

          {/* ================= BACK SIDE (180 deg) ================= */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-300 bg-white p-5 flex flex-col justify-between"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
            }}
          >
            {/* Specular sheen reflection on back */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-slate-100 to-transparent transition-opacity"
              style={{ opacity: sheenOpacity }}
            />

            {/* Back Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold font-mono tracking-wider text-slate-500">
                NTAG216 · AKILLI NFC ÇİP
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600">
                <Wifi className="w-3.5 h-3.5 -rotate-90" />
                <span>TEMASSIZ</span>
              </div>
            </div>

            {/* Center Back QR Code Fallback */}
            <div className="my-auto flex flex-col items-center text-center p-3">
              <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center mb-2">
                <QrCode className="w-full h-full text-slate-900" />
              </div>
              <p className="text-[11px] font-bold text-slate-900">
                Kamera ile Tara veya Yaklaştır
              </p>
              <p className="text-[10px] text-slate-500 max-w-[200px] mt-0.5">
                Eski ve NFC desteği olmayan telefonlar için optik lazer QR kod yedekleme
              </p>
            </div>

            {/* Back Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
              <span>Su Geçirmez · 10 Yıl Garanti</span>
              <span className="font-mono">SN: 600-GZB-{(cardType.length * 149 + 824).toString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 360 Controls */}
      {showControls && (
        <div className="w-full max-w-[340px] mt-3 space-y-2">
          {/* Clean Quick Flip & Auto-rotate buttons (without awkward angle badge) */}
          <div className="flex items-center justify-end gap-2 text-xs text-slate-600 px-1">
            <button
              type="button"
              onClick={() => {
                setIsAutoRotating(false);
                setRotationY((prev) => (isBackFacing ? 0 : 180));
                setRotationX(0);
              }}
              aria-label={isBackFacing ? 'Kartın ön yüzünü göster' : 'Kartın arka yüzünü göster'}
              className="px-3 py-1.5 text-[11px] font-semibold bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <RefreshCw className="w-3 h-3 text-slate-500" aria-hidden="true" />
              <span>{isBackFacing ? 'Ön Yüzü Göster' : 'Arka Yüzü Göster'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAutoRotating((prev) => !prev)}
              aria-label={isAutoRotating ? '360 derece otomatik döndürmeyi durdur' : '360 derece otomatik döndürmeyi başlat'}
              aria-pressed={isAutoRotating}
              className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg border shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8] ${
                isAutoRotating
                  ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isAutoRotating ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{isAutoRotating ? 'Durdur' : '360° Döndür'}</span>
            </button>
          </div>

          {/* Touch slider for rapid rotation */}
          <input
            type="range"
            min={0}
            max={360}
            value={Math.round(normalizedAngle)}
            aria-label="360 derece kart dönüş açısı"
            aria-valuemin={0}
            aria-valuemax={360}
            aria-valuenow={Math.round(normalizedAngle)}
            aria-valuetext={`${Math.round(normalizedAngle)} derece`}
            onChange={(e) => {
              setIsAutoRotating(false);
              setRotationY(parseInt(e.target.value));
            }}
            className="w-full accent-[#1D4ED8] cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
          />

          <p className="text-[11px] text-center text-slate-500">
            Kartı parmağınızla, farenizle veya klavye ok tuşlarıyla 360° serbestçe döndürebilirsiniz.
          </p>
        </div>
      )}
    </div>
  );
};
