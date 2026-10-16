import React from 'react';

/**
 * Modern, crisp vector smartphone mockups for "3 Kolay Adımda Nasıl Çalışır?"
 * Clean lines, high-tech aesthetic, no cartoon/hand-drawn elements.
 */

// Step 1: Phone meets NFC Card with wireless pulse
export const ModernStep1Illustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-3 select-none ${className}`}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px]"
      >
        <defs>
          <linearGradient id="phoneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient subtle glow */}
        <circle cx="160" cy="100" r="70" fill="#EFF6FF" />

        {/* Modern Smartphone Mockup */}
        <g transform="translate(60, 20)">
          {/* Phone Shadow */}
          <rect x="4" y="6" width="104" height="164" rx="20" fill="#CBD5E1" opacity="0.4" />
          {/* Phone Outer Chassis */}
          <rect x="0" y="0" width="104" height="164" rx="20" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          {/* Phone Screen Bezel */}
          <rect x="3" y="3" width="98" height="158" rx="17" fill="url(#phoneGrad1)" />
          {/* Dynamic Island */}
          <rect x="36" y="8" width="32" height="7" rx="3.5" fill="#0F172A" />
          {/* Speaker / Camera dot */}
          <circle cx="62" cy="11.5" r="1.5" fill="#1E293B" />

          {/* Screen Content: Minimalist UI */}
          <rect x="14" y="24" width="76" height="12" rx="4" fill="#F1F5F9" />
          <rect x="14" y="42" width="76" height="42" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* NFC Radar Ring on Phone */}
          <circle cx="52" cy="63" r="14" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M47 63C47 60.2 49.2 58 52 58C54.8 58 57 60.2 57 63" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
          <path d="M44 63C44 57 47.6 54 52 54C56.4 54 60 57 60 63" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <circle cx="52" cy="63" r="2.5" fill="#1D4ED8" />

          <rect x="22" y="92" width="60" height="6" rx="3" fill="#E2E8F0" />
          <rect x="28" y="103" width="48" height="5" rx="2.5" fill="#F1F5F9" />

          {/* Home indicator bar */}
          <rect x="34" y="152" width="36" height="3" rx="1.5" fill="#94A3B8" />
        </g>

        {/* Wireless Pulse Wave Arcs */}
        <g transform="translate(160, 55)">
          <path d="M0 10C8 18 8 36 0 44" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <path d="M7 3C18 15 18 41 7 51" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M14 -4C28 12 28 48 14 58" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* Hovering Gen Z Bilişim NFC Card */}
        <g transform="translate(185, 38) rotate(8)">
          {/* Card Shadow */}
          <rect x="4" y="6" width="96" height="64" rx="8" fill="#64748B" opacity="0.25" />
          {/* Card Body */}
          <rect x="0" y="0" width="96" height="64" rx="8" fill="url(#cardGrad1)" stroke="#334155" strokeWidth="1.5" />
          {/* Card Chip Symbol */}
          <rect x="12" y="14" width="14" height="11" rx="2.5" fill="#F59E0B" opacity="0.9" />
          <line x1="12" y1="19.5" x2="26" y2="19.5" stroke="#B45309" strokeWidth="0.8" />
          <line x1="19" y1="14" x2="19" y2="25" stroke="#B45309" strokeWidth="0.8" />
          
          {/* NFC Contactless Wave on Card */}
          <path d="M34 16C36 17.5 36 21.5 34 23" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          <path d="M38 13C41 16 41 24 38 27" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

          {/* Card Branding Text */}
          <text x="12" y="44" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">GEN Z BİLİŞİM</text>
          <text x="12" y="52" fill="#94A3B8" fontSize="4.5" fontFamily="sans-serif">Akıllı Temassız Kart</text>

          {/* Accent Line */}
          <rect x="0" y="60" width="96" height="4" rx="2" fill="#1D4ED8" />
        </g>
      </svg>
    </div>
  );
};

// Step 2: Push Notification Dialog with Tap Indicator
export const ModernStep2Illustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-3 select-none ${className}`}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px]"
      >
        <defs>
          <linearGradient id="phoneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="notifGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
        </defs>

        {/* Ambient subtle glow */}
        <circle cx="160" cy="100" r="70" fill="#F0FDF4" />

        {/* Modern Smartphone Mockup */}
        <g transform="translate(108, 16)">
          {/* Phone Shadow */}
          <rect x="4" y="6" width="104" height="168" rx="20" fill="#CBD5E1" opacity="0.4" />
          {/* Phone Chassis */}
          <rect x="0" y="0" width="104" height="168" rx="20" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          {/* Phone Screen */}
          <rect x="3" y="3" width="98" height="162" rx="17" fill="url(#phoneGrad2)" />
          {/* Dynamic Island */}
          <rect x="36" y="8" width="32" height="7" rx="3.5" fill="#0F172A" />

          {/* Lockscreen clock */}
          <text x="52" y="34" fill="#0F172A" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">14:28</text>
          <text x="52" y="44" fill="#64748B" fontSize="6" fontFamily="sans-serif" textAnchor="middle">Cuma, 16 Ekim</text>

          {/* Frosted iOS / Android Style Notification Banner */}
          <g transform="translate(6, 52)">
            {/* Banner Drop Shadow */}
            <rect x="0" y="2" width="86" height="52" rx="10" fill="#64748B" opacity="0.12" />
            {/* Banner Surface */}
            <rect x="0" y="0" width="86" height="52" rx="10" fill="url(#notifGrad)" stroke="#1D4ED8" strokeWidth="1.5" />
            
            {/* Top row: NFC Icon + App Title + Time */}
            <rect x="8" y="7" width="14" height="14" rx="4" fill="#1D4ED8" />
            <path d="M12 14C12 12 14 11 16 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M11 15C11 10.5 14.5 9 17 9" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            <circle cx="17" cy="15" r="1.2" fill="#FFFFFF" />

            <text x="26" y="14" fill="#0F172A" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">NFC Algılandı</text>
            <text x="26" y="20" fill="#1D4ED8" fontSize="5" fontWeight="bold" fontFamily="sans-serif">genzbilisim.com</text>
            <text x="74" y="13" fill="#94A3B8" fontSize="4.5" fontFamily="sans-serif" textAnchor="end">Şimdi</text>

            {/* Notification message */}
            <text x="8" y="31" fill="#334155" fontSize="5" fontFamily="sans-serif">Bağlantıyı açmak için dokunun</text>

            {/* Tap Action Pill */}
            <rect x="8" y="36" width="70" height="10" rx="3" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="0.8" />
            <text x="43" y="43" fill="#1D4ED8" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Tarayıcıda Doğrudan Aç →</text>
          </g>

          {/* Interactive Tap Indicator / Finger Ripple */}
          <g transform="translate(62, 94)">
            <circle cx="0" cy="0" r="14" fill="#3B82F6" opacity="0.15" />
            <circle cx="0" cy="0" r="8" fill="#1D4ED8" opacity="0.25" />
            <circle cx="0" cy="0" r="3.5" fill="#1D4ED8" />
          </g>

          {/* Home indicator bar */}
          <rect x="34" y="156" width="36" height="3" rx="1.5" fill="#94A3B8" />
        </g>
      </svg>
    </div>
  );
};

// Step 3: Instant Connection Established (WhatsApp / Social direct launch)
export const ModernStep3Illustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-3 select-none ${className}`}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px]"
      >
        <defs>
          <linearGradient id="phoneGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="chatHeaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#075E54" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
        </defs>

        {/* Ambient subtle glow */}
        <circle cx="160" cy="100" r="70" fill="#ECFDF5" />

        {/* Modern Smartphone Mockup */}
        <g transform="translate(108, 16)">
          {/* Phone Shadow */}
          <rect x="4" y="6" width="104" height="168" rx="20" fill="#CBD5E1" opacity="0.4" />
          {/* Phone Chassis */}
          <rect x="0" y="0" width="104" height="168" rx="20" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          {/* Phone Screen */}
          <rect x="3" y="3" width="98" height="162" rx="17" fill="url(#phoneGrad3)" />
          {/* Dynamic Island */}
          <rect x="36" y="8" width="32" height="7" rx="3.5" fill="#0F172A" />

          {/* WhatsApp / Direct App Header */}
          <rect x="3" y="19" width="98" height="28" fill="url(#chatHeaderGrad)" />
          {/* Business Profile Avatar */}
          <circle cx="18" cy="33" r="8" fill="#FFFFFF" />
          <text x="18" y="36" fill="#075E54" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">GZ</text>
          
          {/* Verified Check Badge */}
          <circle cx="24" cy="38" r="3" fill="#25D366" />
          <path d="M22.5 38L23.5 39L25.5 37" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Business Name and Online Indicator */}
          <text x="30" y="31" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">Gen Z Bilişim</text>
          <text x="30" y="38" fill="#A7F3D0" fontSize="5" fontFamily="sans-serif">● Çevrimiçi · Doğrulanmış</text>

          {/* Chat Background Texture & Date Capsule */}
          <rect x="3" y="47" width="98" height="106" fill="#ECE5DD" opacity="0.3" />
          <rect x="32" y="52" width="40" height="9" rx="4.5" fill="#E2E8F0" />
          <text x="52" y="58.5" fill="#64748B" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Bugün</text>

          {/* Automated Preset Message Bubble */}
          <g transform="translate(10, 66)">
            {/* Outgoing Message Bubble (Light Green) */}
            <path d="M0 6C0 2.7 2.7 0 6 0H78C81.3 0 84 2.7 84 6V44C84 47.3 81.3 50 78 50H6C2.7 50 0 47.3 0 44V6Z" fill="#DCF8C6" stroke="#C4E7AB" strokeWidth="0.8" />
            
            <text x="8" y="12" fill="#0F172A" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">Merhaba!</text>
            <text x="8" y="21" fill="#334155" fontSize="4.8" fontFamily="sans-serif">NFC akıllı kartınızı okuttum.</text>
            <text x="8" y="29" fill="#334155" fontSize="4.8" fontFamily="sans-serif">Katalog ve toplu sipariş</text>
            <text x="8" y="37" fill="#334155" fontSize="4.8" fontFamily="sans-serif">hakkında bilgi alabilir miyim?</text>

            {/* Message Time + Double Blue Ticks */}
            <text x="64" y="46" fill="#64748B" fontSize="4.5" fontFamily="sans-serif">14:28</text>
            <path d="M72 45L74 47L78 43" stroke="#34B7F1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M75 45L77 47L81 43" stroke="#34B7F1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Bottom Chat Input Bar */}
          <rect x="3" y="132" width="98" height="21" fill="#F0F2F5" />
          <rect x="10" y="136" width="70" height="13" rx="6.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          <text x="18" y="144.5" fill="#94A3B8" fontSize="5" fontFamily="sans-serif">Mesaj yazın...</text>
          
          {/* Send Micro Button */}
          <circle cx="89" cy="142.5" r="6.5" fill="#128C7E" />
          <path d="M87 140.5L91.5 142.5L87 144.5V140.5Z" fill="#FFFFFF" />

          {/* Home indicator bar */}
          <rect x="34" y="156" width="36" height="3" rx="1.5" fill="#94A3B8" />
        </g>
      </svg>
    </div>
  );
};
