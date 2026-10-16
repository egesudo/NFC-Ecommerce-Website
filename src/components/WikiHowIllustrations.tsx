import React from 'react';

/**
 * High-Fidelity wikiHow-Style Vector Illustrations for "3 Kolay Adımda Nasıl Çalışır?"
 * 
 * Signature wikiHow Aesthetic:
 * - Bold, expressive dark ink outlines (#1E293B, strokeWidth 1.8 - 2.5)
 * - Natural human hand anatomy with palm, knuckles, fingernails, and warm skin tones (#FAD2B4, #E8B896 shading)
 * - Clean flat colors with subtle dimension
 * - Clear visual action cues (NFC wave arcs, motion dashes, tap pulse ripples)
 * - Accurate Gen Z Bilişim branding on cards, notifications, and WhatsApp messaging interface
 */

// STEP 1: Two Hands - Left hand holds smartphone, right hand brings Gen Z Bilişim NFC Card close
export const WikiHowStep1: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`flex items-center justify-center bg-white rounded-2xl p-2 select-none ${className}`}>
      <svg
        viewBox="0 0 380 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle soft shadow filter */}
          <filter id="softInkShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#94A3B8" floodOpacity="0.25" />
          </filter>
          {/* Card gradient */}
          <linearGradient id="nfcCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          {/* Gold chip gradient */}
          <linearGradient id="goldChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Clean White Isolated Background */}
        <rect width="380" height="250" fill="#FFFFFF" />

        {/* Subtle ground baseline */}
        <line x1="20" y1="236" x2="360" y2="236" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />

        {/* ========================================================
            1. ACTION ARCS & NFC WIRELESS SIGNALS (Between card & phone)
            ======================================================== */}
        <g id="nfc-signal-waves" transform="translate(142, 38)">
          {/* NFC concentric reading wave arcs */}
          <path
            d="M-2 18 C-14 32, -14 54, -2 68"
            stroke="#2563EB"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M6 10 C-10 28, -10 60, 6 78"
            stroke="#3B82F6"
            strokeWidth="2.4"
            strokeDasharray="4 3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M14 2 C-6 24, -6 66, 14 88"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sparkles / NFC Energy points */}
          <path
            d="M-4 44 L-2 47 L1 49 L-2 51 L-4 54 L-6 51 L-9 49 L-6 47 Z"
            fill="#F59E0B"
            stroke="#1E293B"
            strokeWidth="1"
          />
          <circle cx="12" cy="30" r="2" fill="#3B82F6" />
          <circle cx="-16" cy="36" r="2.2" fill="#2563EB" />
          <circle cx="-12" cy="58" r="1.8" fill="#F59E0B" />
        </g>

        {/* Movement action dashes behind NFC card */}
        <g id="movement-lines" stroke="#94A3B8" strokeWidth="1.6" strokeDasharray="4 3" strokeLinecap="round">
          <path d="M255 35 C270 32, 290 35, 305 40" />
          <path d="M260 98 C280 102, 300 112, 315 120" />
        </g>

        {/* ========================================================
            2. SMARTPHONE HELD VERTICALLY (Slight comfortable tilt)
            ======================================================== */}
        <g id="smartphone" transform="translate(68, 28) rotate(-4)">
          {/* Drop shadow */}
          <rect x="5" y="6" width="94" height="168" rx="20" fill="#CBD5E1" opacity="0.4" />
          
          {/* Chassis Outer (Bold wikiHow outline) */}
          <rect
            x="0"
            y="0"
            width="94"
            height="168"
            rx="20"
            fill="#0F172A"
            stroke="#1E293B"
            strokeWidth="2.5"
          />
          {/* Screen Bezel */}
          <rect
            x="4"
            y="4"
            width="86"
            height="160"
            rx="16"
            fill="#F8FAFC"
            stroke="#1E293B"
            strokeWidth="1.8"
          />

          {/* Dynamic Island / Camera Notch */}
          <rect x="31" y="9" width="32" height="7.5" rx="3.75" fill="#1E293B" />
          <circle cx="56" cy="12.75" r="1.5" fill="#3B82F6" />

          {/* Screen Content: Minimalist UI with Top NFC Sensor Zone */}
          <g transform="translate(10, 24)">
            {/* Top NFC Target / Sensor Graphic on Phone */}
            <rect x="6" y="8" width="62" height="42" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.2" />
            <circle cx="37" cy="24" r="13" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.4" strokeDasharray="3 2" />
            
            {/* NFC Wave Symbol on Phone Screen */}
            <path d="M33 24 C33 21.8 34.8 20 37 20 C39.2 20 41 21.8 41 24" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M30 24 C30 19.5 33 16.5 37 16.5 C41 16.5 44 19.5 44 24" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <circle cx="37" cy="24" r="2.2" fill="#1D4ED8" />

            <text x="37" y="44" fill="#1D4ED8" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              NFC Algılayıcı Aktif
            </text>

            {/* Placeholder UI Cards on Phone */}
            <rect x="6" y="58" width="62" height="14" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="12" y="63" width="36" height="4" rx="2" fill="#94A3B8" />
            <rect x="6" y="76" width="62" height="24" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="12" y="82" width="48" height="4" rx="2" fill="#CBD5E1" />
            <rect x="12" y="90" width="30" height="3" rx="1.5" fill="#E2E8F0" />
          </g>

          {/* Bottom Home Indicator */}
          <rect x="29" y="156" width="36" height="3" rx="1.5" fill="#94A3B8" />
        </g>

        {/* ========================================================
            3. LEFT HAND (SOL EL) HOLDING THE SMARTPHONE
            Natural grip: thumb on left face, fingers wrapping around
            ======================================================== */}
        <g id="left-hand-holding-phone">
          {/* Forearm & Wrist entering from bottom left */}
          <path
            d="M0 248
               C30 240, 50 226, 62 208
               L70 194
               C76 182, 78 170, 78 156
               L76 142
               C74 130, 68 124, 60 128
               C52 132, 54 144, 58 156
               L62 174
               C64 186, 60 198, 48 214
               C34 232, 18 244, 0 250 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Palm Flesh / Heel of Hand */}
          <path
            d="M62 174
               C68 178, 80 182, 88 180
               C94 178, 98 170, 96 162
               C94 154, 86 148, 76 142"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Palm Crease & Shading */}
          <path
            d="M64 186 C60 176, 58 162, 60 148 C56 156, 56 168, 62 180 Z"
            fill="#E8B896"
          />
          <path
            d="M74 162 C70 156, 64 152, 58 150"
            stroke="#1E293B"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Hand Thumb resting securely on front bezel */}
          <g id="left-thumb">
            <path
              d="M76 142
                 C78 132, 80 122, 78 116
                 C76 110, 70 110, 66 116
                 C62 122, 64 134, 68 144"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Thumbnail */}
            <path
              d="M72 116 C71 113, 74 112, 76 114"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Knuckle line */}
            <path
              d="M72 128 C70 126, 68 126, 66 128"
              stroke="#1E293B"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Supporting Fingers on Right Side of Phone (wrapping from behind) */}
          <g id="supporting-fingers">
            {/* Index Finger Tip */}
            <path
              d="M158 92 C166 92, 170 98, 168 106 C166 112, 160 114, 154 112 L150 102"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M166 96 C168 98, 167 102, 164 102" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />

            {/* Middle Finger Tip */}
            <path
              d="M156 114 C164 114, 168 120, 166 128 C164 134, 158 136, 152 134 L148 124"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M164 118 C166 120, 165 124, 162 124" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />

            {/* Ring Finger Tip */}
            <path
              d="M154 136 C162 136, 166 142, 164 150 C162 156, 156 158, 150 156 L146 146"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* ========================================================
            4. GEN Z BİLİŞİM NFC CARD (Held approaching top-rear of phone)
            ======================================================== */}
        <g id="nfc-card" transform="translate(162, 38) rotate(10)" filter="url(#softInkShadow)">
          {/* Card Body */}
          <rect
            x="0"
            y="0"
            width="106"
            height="68"
            rx="8"
            fill="url(#nfcCardGrad)"
            stroke="#1E293B"
            strokeWidth="2"
          />

          {/* Top Decorative Blue Accent Stripe */}
          <path d="M0 6C0 2.68 2.68 0 6 0H100C103.32 0 106 2.68 106 6V12H0V6Z" fill="#1D4ED8" />

          {/* Golden Metallic Chip */}
          <rect x="12" y="18" width="18" height="14" rx="3" fill="url(#goldChipGrad)" stroke="#B45309" strokeWidth="1" />
          <line x1="12" y1="25" x2="30" y2="25" stroke="#92400E" strokeWidth="0.8" />
          <line x1="21" y1="18" x2="21" y2="32" stroke="#92400E" strokeWidth="0.8" />
          <rect x="16" y="22" width="10" height="6" rx="1.5" fill="#FEF3C7" opacity="0.6" />

          {/* Contactless Wave Symbol on Card */}
          <g transform="translate(36, 19)" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none">
            <path d="M0 2C2 4 2 8 0 10" />
            <path d="M4 0C7.5 3 7.5 9 4 12" />
            <path d="M8 -2C12.5 2 12.5 10 8 14" opacity="0.7" />
          </g>

          {/* Brand Typography: GEN Z BİLİŞİM */}
          <text
            x="12"
            y="46"
            fill="#FFFFFF"
            fontSize="7.5"
            fontWeight="900"
            letterSpacing="0.8"
            fontFamily="sans-serif"
          >
            GEN Z BİLİŞİM
          </text>
          <text
            x="12"
            y="56"
            fill="#94A3B8"
            fontSize="5"
            fontWeight="600"
            letterSpacing="0.6"
            fontFamily="sans-serif"
          >
            AKILLI NFC KART
          </text>

          {/* Micro Holographic Emblem at bottom-right */}
          <circle cx="94" cy="54" r="5" fill="#38BDF8" opacity="0.85" />
          <path d="M91 54L93 56L97 52" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* ========================================================
            5. RIGHT HAND (SAĞ EL) HOLDING THE NFC CARD
            Natural grip: thumb on card face, index along top edge
            ======================================================== */}
        <g id="right-hand-holding-card">
          {/* Forearm & Wrist entering naturally from right edge */}
          <path
            d="M380 95
               C350 92, 325 84, 305 76
               L285 68
               C275 62, 268 56, 258 52
               L244 50
               C236 48, 230 54, 234 62
               C238 68, 246 72, 254 78
               L270 88
               C278 94, 285 104, 288 116
               C292 130, 302 144, 320 156
               C340 170, 362 178, 380 182 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Palm Depth Shadow */}
          <path
            d="M295 86 C282 80, 272 74, 264 68 C260 76, 264 88, 274 96 L292 108"
            fill="#E8B896"
          />

          {/* Right Index Finger resting along top of NFC card */}
          <g id="right-index-finger">
            <path
              d="M258 52
                 C246 48, 232 46, 222 50
                 C214 54, 216 62, 224 64
                 L248 66"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Index Fingernail */}
            <path
              d="M222 52 C218 54, 219 58, 223 58"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Index Knuckle */}
            <path
              d="M236 50 C234 53, 235 56, 238 56"
              stroke="#1E293B"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Right Thumb gripping front face of card */}
          <g id="right-thumb">
            <path
              d="M270 88
                 C260 84, 248 80, 238 78
                 C228 76, 224 84, 230 90
                 C236 96, 246 98, 258 98
                 L272 96"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Thumbnail */}
            <path
              d="M230 80 C226 82, 228 86, 232 86"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Thumb crease */}
            <path
              d="M248 82 C246 85, 248 88, 252 88"
              stroke="#1E293B"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Supporting Middle & Ring Finger behind card */}
          <g id="right-supporting-fingers">
            <path
              d="M252 102 C244 100, 238 106, 240 114 C242 120, 250 122, 258 118 L266 112"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M242 105 C240 108, 242 111, 245 111" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          </g>

          {/* Wrist wrinkles */}
          <path d="M335 125 C325 120, 315 118, 305 122" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M350 135 C340 130, 330 128, 320 132" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};

// STEP 2: Phone with Pop-up NFC Notification & Index Finger Tapping "Bağlantıyı Aç"
export const WikiHowStep2: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`flex items-center justify-center bg-white rounded-2xl p-2 select-none ${className}`}>
      <svg
        viewBox="0 0 380 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        aria-hidden="true"
      >
        <defs>
          <filter id="bannerShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Clean White Isolated Background */}
        <rect width="380" height="250" fill="#FFFFFF" />

        {/* Subtle ground baseline */}
        <line x1="20" y1="236" x2="360" y2="236" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />

        {/* ========================================================
            1. SMARTPHONE IN CENTER-LEFT (UPRIGHT PORTRAIT)
            ======================================================== */}
        <g id="phone-portrait" transform="translate(62, 14)">
          {/* Phone Drop Shadow */}
          <rect x="5" y="8" width="168" height="216" rx="22" fill="#E2E8F0" />

          {/* Phone Outer Chassis */}
          <rect
            x="0"
            y="0"
            width="168"
            height="216"
            rx="22"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="2.8"
          />

          {/* Inner Screen */}
          <rect
            x="5"
            y="5"
            width="158"
            height="206"
            rx="18"
            fill="#F8FAFC"
            stroke="#1E293B"
            strokeWidth="1.8"
          />

          {/* Dynamic Island Notch */}
          <rect x="60" y="10" width="48" height="10" rx="5" fill="#1E293B" />
          <circle cx="98" cy="15" r="2.2" fill="#3B82F6" />

          {/* Top Status Bar: 14:30, 5G, Battery */}
          <text x="18" y="19" fill="#1E293B" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">
            14:30
          </text>
          <g transform="translate(132, 12)" stroke="#1E293B" strokeWidth="1.2" fill="none">
            <rect x="0" y="0" width="15" height="7.5" rx="2" />
            <rect x="2" y="2" width="9" height="3.5" rx="1" fill="#1E293B" />
            <line x1="16" y1="2.5" x2="16" y2="5" />
          </g>

          {/* Soft background aesthetic wallpapers */}
          <circle cx="45" cy="150" r="38" fill="#EFF6FF" opacity="0.6" />
          <circle cx="125" cy="165" r="42" fill="#F0FDF4" opacity="0.6" />

          {/* ========================================================
              POP-UP NOTIFICATION BANNER (Gen Z Bilişim NFC Kartı)
              ======================================================== */}
          <g id="notification-banner" transform="translate(10, 36)" filter="url(#bannerShadow)">
            {/* Banner Body */}
            <rect
              x="0"
              y="0"
              width="138"
              height="80"
              rx="12"
              fill="#FFFFFF"
              stroke="#1E293B"
              strokeWidth="2.2"
            />

            {/* Top row: WhatsApp Green Icon + Title + Time */}
            <g transform="translate(10, 10)">
              {/* WhatsApp Green Badge */}
              <circle cx="10" cy="10" r="10" fill="#25D366" stroke="#1E293B" strokeWidth="1.5" />
              {/* Phone speech bubble glyph */}
              <path
                d="M6 8.5C6 11.5 8.5 14 11.5 14C12.5 14 13.2 13.5 13.8 13L12.5 11.5L11.8 12.2C11 11.8 9.8 10.6 9.4 9.8L10.1 9.1L8.6 7.6C8 8.1 6 8.3 6 8.5Z"
                fill="#FFFFFF"
              />
            </g>

            {/* Header Text */}
            <text
              x="36"
              y="18"
              fill="#0F172A"
              fontSize="8"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              Gen Z Bilişim - NFC Kartı
            </text>
            <text
              x="36"
              y="27"
              fill="#2563EB"
              fontSize="6"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              ● Temassız Bağlantı Algılandı
            </text>
            <text
              x="128"
              y="18"
              fill="#94A3B8"
              fontSize="5.5"
              fontFamily="sans-serif"
              textAnchor="end"
            >
              Şimdi
            </text>

            {/* Notification Description */}
            <text
              x="12"
              y="42"
              fill="#475569"
              fontSize="6.5"
              fontWeight="500"
              fontFamily="sans-serif"
            >
              Sohbeti veya dijital kartı açmak için dokunun.
            </text>

            {/* Primary Action Button: 'Bağlantıyı Aç →' */}
            <g id="action-open-button" transform="translate(10, 48)">
              <rect
                x="0"
                y="0"
                width="118"
                height="22"
                rx="11"
                fill="#1D4ED8"
                stroke="#1E293B"
                strokeWidth="1.4"
              />
              <text
                x="50"
                y="14"
                fill="#FFFFFF"
                fontSize="8"
                fontWeight="800"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                Bağlantıyı Aç
              </text>
              {/* Arrow */}
              <g transform="translate(84, 7)" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 4H10M7 1L10 4L7 7" />
              </g>
            </g>
          </g>

          {/* Mock app icons on phone home screen beneath */}
          <g transform="translate(16, 134)" opacity="0.4">
            <rect x="0" y="0" width="24" height="24" rx="6" fill="#CBD5E1" />
            <rect x="36" y="0" width="24" height="24" rx="6" fill="#CBD5E1" />
            <rect x="72" y="0" width="24" height="24" rx="6" fill="#CBD5E1" />
            <rect x="108" y="0" width="24" height="24" rx="6" fill="#CBD5E1" />
          </g>

          {/* Smartphone Home Bar */}
          <rect x="54" y="196" width="60" height="3.5" rx="1.75" fill="#1E293B" />
        </g>

        {/* Hand holding the phone on left/bottom side */}
        <g id="hand-holding-phone-step2">
          {/* Thumb on left side of phone */}
          <path
            d="M62 135 C54 135, 52 145, 56 155 C60 162, 66 162, 70 156 L72 142 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M56 142 C54 145, 55 148, 58 148" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />

          {/* Forearm & palm under left corner */}
          <path
            d="M0 248 C25 242, 45 230, 56 215 L64 200 C68 190, 68 180, 66 170 L58 160 C52 165, 50 178, 44 190 C32 210, 16 230, 0 248 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>

        {/* ========================================================
            2. RIGHT HAND (POINTING INDEX FINGER TAPPING BUTTON)
            WikiHow style: natural hand entering from right, index finger
            tapping the 'Bağlantıyı Aç' button with interactive tap pulse
            ======================================================== */}
        <g id="tapping-hand" transform="translate(6, 4)">
          {/* Forearm & Wrist entering from right edge */}
          <path
            d="M374 218
               C335 210, 305 192, 280 174
               L254 154
               C244 144, 236 136, 220 128
               L190 108
               C182 102, 172 106, 170 114
               C168 122, 176 128, 186 134
               L216 152
               C224 158, 232 168, 238 180
               C252 204, 280 222, 315 234
               L374 240 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Palm Flesh Contour & Thumb Fold */}
          <path
            d="M254 154
               C262 162, 268 176, 266 190
               C264 200, 256 210, 244 212
               C234 214, 226 206, 224 196
               L228 174"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Shading shadow across palm */}
          <path
            d="M280 174 C265 166, 250 164, 238 178 C234 188, 242 200, 256 206 L275 190"
            fill="#E8B896"
          />

          {/* --- POINTING INDEX FINGER TAPPING "Bağlantıyı Aç" BUTTON --- */}
          <g id="index-finger-tap">
            {/* Tap Ripple Rings on Button */}
            <circle cx="176" cy="110" r="14" stroke="#3B82F6" strokeWidth="2.2" strokeDasharray="3 3" fill="none" opacity="0.85" />
            <circle cx="176" cy="110" r="7" stroke="#1D4ED8" strokeWidth="2" fill="none" />
            <circle cx="176" cy="110" r="2.5" fill="#1D4ED8" />

            {/* Little tap energy stars */}
            <path d="M168 98 L169 101 L172 102 L169 103 L168 106 L167 103 L164 102 L167 101 Z" fill="#F59E0B" />
            <circle cx="186" cy="98" r="1.5" fill="#3B82F6" />

            {/* Index Finger Tip & Nail */}
            <path
              d="M172 108
                 C169 111, 170 115, 174 115"
              stroke="#1E293B"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Index finger knuckle crease */}
            <path
              d="M202 118 C199 122, 201 126, 205 125"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Curled Middle, Ring & Pinky Fingers resting naturally under palm */}
          <g id="folded-fingers">
            {/* Middle Finger */}
            <path
              d="M226 148
                 C216 146, 208 152, 210 161
                 C212 168, 220 170, 228 167
                 L238 162"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M211 152 C209 155, 211 158, 214 158" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />

            {/* Ring Finger */}
            <path
              d="M234 166
                 C224 164, 218 170, 220 178
                 C222 184, 230 186, 238 182
                 L248 176"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M220 170 C218 173, 220 176, 223 176" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" fill="none" />

            {/* Pinky Finger */}
            <path
              d="M240 182
                 C232 181, 226 186, 228 193
                 C230 199, 238 201, 246 196
                 L256 190"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </g>

          {/* Natural wrist wrinkles */}
          <path d="M305 204 C295 198, 285 196, 275 201" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M325 214 C315 208, 305 206, 295 211" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};

// STEP 3: Phone with WhatsApp Chat Screen Open & Finger Tapping "Gönder" (Send)
export const WikiHowStep3: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`flex items-center justify-center bg-white rounded-2xl p-2 select-none ${className}`}>
      <svg
        viewBox="0 0 380 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        aria-hidden="true"
      >
        <defs>
          <filter id="chatShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Clean White Isolated Background */}
        <rect width="380" height="250" fill="#FFFFFF" />

        {/* Subtle ground baseline */}
        <line x1="20" y1="236" x2="360" y2="236" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />

        {/* ========================================================
            1. SMARTPHONE WITH OPEN WHATSAPP CHAT INTERFACE
            ======================================================== */}
        <g id="whatsapp-phone" transform="translate(62, 10)">
          {/* Phone Shadow */}
          <rect x="5" y="8" width="162" height="220" rx="22" fill="#E2E8F0" />

          {/* Phone Outer Chassis */}
          <rect
            x="0"
            y="0"
            width="162"
            height="220"
            rx="22"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="2.8"
          />

          {/* Inner Screen Area */}
          <rect
            x="5"
            y="5"
            width="152"
            height="210"
            rx="18"
            fill="#EFEAE2"
            stroke="#1E293B"
            strokeWidth="1.8"
          />

          {/* ========================================================
              WHATSAPP HEADER BAR (Signature Dark Teal #075E54)
              ======================================================== */}
          <rect x="5" y="5" width="152" height="38" rx="18" fill="#075E54" />
          <rect x="5" y="24" width="152" height="19" fill="#075E54" />

          {/* Back arrow */}
          <path d="M12 24L17 19M12 24L17 29M13 24H22" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Business Profile Avatar with "GZ" Monogram */}
          <circle cx="34" cy="24" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.2" />
          <circle cx="34" cy="24" r="8.5" fill="#128C7E" />
          <text x="34" y="27" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            GZ
          </text>

          {/* Business Name: Gen Z Bilişim */}
          <text
            x="48"
            y="21"
            fill="#FFFFFF"
            fontSize="9.5"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            Gen Z Bilişim
          </text>
          
          {/* Verified Green Badge */}
          <circle cx="118" cy="18" r="4.5" fill="#25D366" />
          <path d="M116 18L117.5 19.5L120 17" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Online Subtext */}
          <text
            x="48"
            y="32"
            fill="#A7F3D0"
            fontSize="6.5"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            ● çevrimiçi · resmi işletme
          </text>

          {/* Chat Date Divider Pill: 'Bugün' */}
          <g transform="translate(58, 48)">
            <rect x="0" y="0" width="46" height="12" rx="6" fill="#FFFFFF" opacity="0.85" stroke="#CBD5E1" strokeWidth="0.8" />
            <text x="23" y="9" fill="#64748B" fontSize="6" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
              Bugün
            </text>
          </g>

          {/* ========================================================
              CHAT BALLOON 1: Incoming Welcome Message (White Bubble)
              ======================================================== */}
          <g transform="translate(12, 65)">
            <path
              d="M0 4C0 1.79 1.79 0 4 0H106C108.2 0 110 1.79 110 4V28C110 30.2 108.2 32 106 32H6L0 37V4Z"
              fill="#FFFFFF"
              stroke="#1E293B"
              strokeWidth="1.4"
            />
            <text x="8" y="13" fill="#0F172A" fontSize="7" fontWeight="800" fontFamily="sans-serif">
              Merhaba! Gen Z Bilişim'e
            </text>
            <text x="8" y="24" fill="#334155" fontSize="6.5" fontWeight="500" fontFamily="sans-serif">
              hoş geldiniz. Nasıl yardımcı olabiliriz? 👋
            </text>
            <text x="90" y="28" fill="#94A3B8" fontSize="5.5" fontFamily="sans-serif">
              14:28
            </text>
          </g>

          {/* ========================================================
              CHAT BALLOON 2: Outgoing User Message (WhatsApp Green Bubble)
              "Merhaba, bilgi ve sipariş almak istiyorum!"
              ======================================================== */}
          <g transform="translate(26, 108)">
            <path
              d="M4 0H124C126.2 0 128 1.79 128 4V34C128 36.2 126.2 38 124 38H10L4 43V4C4 1.79 5.79 0 8 0Z"
              fill="#DCF8C6"
              stroke="#1E293B"
              strokeWidth="1.5"
            />
            <text x="8" y="13" fill="#0F172A" fontSize="7" fontWeight="900" fontFamily="sans-serif">
              Merhaba, bilgi ve sipariş
            </text>
            <text x="8" y="23" fill="#0F172A" fontSize="7" fontWeight="800" fontFamily="sans-serif">
              almak istiyorum!
            </text>
            <text x="8" y="32" fill="#475569" fontSize="6" fontWeight="600" fontFamily="sans-serif">
              (NFC Akıllı Kart üzerinden)
            </text>
            
            {/* Timestamp & Double check ticks */}
            <text x="100" y="34" fill="#64748B" fontSize="5.5" fontFamily="sans-serif">
              14:28
            </text>
            <path d="M116 32L118 34L122 30" stroke="#34B7F1" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M119 32L121 34L125 30" stroke="#34B7F1" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ========================================================
              BOTTOM CHAT INPUT BAR WITH SEND BUTTON
              ======================================================== */}
          <g transform="translate(8, 168)">
            {/* Input Pill */}
            <rect
              x="0"
              y="0"
              width="112"
              height="28"
              rx="14"
              fill="#FFFFFF"
              stroke="#1E293B"
              strokeWidth="1.6"
            />
            <text x="12" y="17" fill="#0F172A" fontSize="7" fontWeight="600" fontFamily="sans-serif">
              Mesajınız hazır, gönderin...
            </text>
            {/* Blinking cursor line */}
            <line x1="104" y1="8" x2="104" y2="20" stroke="#2563EB" strokeWidth="1.4" />

            {/* SEND BUTTON (WhatsApp Green Circle with Paper Airplane) */}
            <g id="send-button-circle" transform="translate(130, 14)">
              <circle cx="0" cy="0" r="14" fill="#25D366" stroke="#1E293B" strokeWidth="2" />
              {/* Paper airplane icon */}
              <path
                d="M-5 -4L7 0L-5 4L-2 0Z"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Smartphone Home Indicator Bar */}
          <rect x="54" y="206" width="54" height="3.2" rx="1.6" fill="#1E293B" />
        </g>

        {/* Hand holding the phone on left/bottom side */}
        <g id="hand-holding-phone-step3">
          <path
            d="M62 145 C54 145, 52 155, 56 165 C60 172, 66 172, 70 166 L72 152 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M0 248 C25 242, 45 230, 56 215 L64 200 C68 190, 68 180, 66 170 L58 160 C52 165, 50 178, 44 190 C32 210, 16 230, 0 248 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>

        {/* ========================================================
            2. RIGHT HAND / THUMB TAPPING "GÖNDER" (SEND) BUTTON
            Natural grip holding phone corner, thumb poised right on Send
            ======================================================== */}
        <g id="complete-hand-step3">
          {/* Forearm & Wrist entering from bottom right edge */}
          <path
            d="M380 232
               C340 224, 310 212, 282 198
               L254 184
               C242 178, 232 176, 220 178
               L198 182
               C188 185, 184 194, 190 201
               C196 207, 206 208, 220 204
               L238 198
               C248 206, 258 218, 266 231
               L274 244
               L380 244 Z"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Palm Flesh / Thenar region */}
          <path
            d="M254 184
               C260 194, 262 208, 258 222
               C254 232, 244 240, 232 240
               C222 240, 216 230, 218 218
               L226 202"
            fill="#FAD2B4"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Palm Depth Shadow */}
          <path
            d="M282 198 C268 194, 252 198, 242 212 C238 220, 246 231, 258 234 L276 214"
            fill="#E8B896"
          />

          {/* --- THUMB: TAPPING DIRECTLY ON THE SEND BUTTON --- */}
          <g id="thumb-sending">
            {/* Tap ripple ring on WhatsApp Send Button */}
            <circle cx="200" cy="192" r="14" stroke="#25D366" strokeWidth="2.2" strokeDasharray="3 3" fill="none" opacity="0.85" />
            <circle cx="200" cy="192" r="6" stroke="#128C7E" strokeWidth="1.8" fill="none" />
            <circle cx="200" cy="192" r="2" fill="#25D366" />

            {/* Thumb body poised right at the send button */}
            <path
              d="M220 178
                 C208 176, 196 180, 190 186
                 C184 192, 187 200, 198 200
                 C208 200, 218 194, 226 188 Z"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* Thumbnail */}
            <path
              d="M190 187 C188 191, 190 194, 194 194"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Thumb knuckle crease */}
            <path
              d="M210 181 C207 184, 208 187, 211 187"
              stroke="#1E293B"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Supporting lower chassis fingers */}
          <g id="supporting-fingers-step3">
            <path
              d="M226 190 C230 194, 236 196, 242 192 L250 186"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M220 208 C216 214, 220 222, 228 222 C234 222, 240 216, 244 210"
              fill="#FAD2B4"
              stroke="#1E293B"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </g>

          {/* Wrist wrinkles */}
          <path d="M320 224 C310 220, 300 218, 290 222" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M340 232 C330 228, 320 226, 310 230" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};
