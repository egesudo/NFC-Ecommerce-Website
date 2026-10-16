import React from 'react';

/**
 * Exact replica of the physical "Google Yorum Kartı 9x9 UV Yapışkanlı"
 * Based on the uploaded photo: google-yorum-karti-9x9-uv-yapiskanli.png
 * 
 * Features:
 * - Square 9x9 cm format with rounded corners
 * - Top section: Royal blue (#0B47A8) with 5 warm golden stars
 * - Bold white uppercase text: "GOOGLE 'DA BİZİ DEĞERLENDİRİN"
 * - Dual-layer smooth curved wave divider with vivid cyan accent line (#0084FF)
 * - Centered circular white disc badge with official 4-color Google "G" logo
 * - Bottom white section with clean black line-art contactless phone tap symbol
 * - Bottom instruction text: "Yorum yapmak için telefonunuzu yaklaştırın."
 */

interface GoogleReviewCardGraphicProps {
  className?: string;
  customName?: string;
}

export const GoogleReviewCardGraphic: React.FC<GoogleReviewCardGraphicProps> = ({
  className = 'w-full h-full',
  customName,
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-3xl bg-white select-none ${className}`}>
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Subtle glossy gradient for royal blue top section */}
          <linearGradient id="googleCardBlueGrad" x1="160" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B42A0" />
            <stop offset="100%" stopColor="#0E52C2" />
          </linearGradient>

          {/* Cyan accent wave stroke gradient */}
          <linearGradient id="cyanWaveGrad" x1="0" y1="140" x2="320" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0072E3" />
            <stop offset="50%" stopColor="#0099FF" />
            <stop offset="100%" stopColor="#0072E3" />
          </linearGradient>

          {/* Drop shadow for center Google "G" disc */}
          <filter id="discShadow" x="110" y="105" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#092B6B" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Base White Background */}
        <rect width="320" height="320" rx="26" fill="#FFFFFF" />

        {/* 2. Top Royal Blue Section with Smooth Wave Curve */}
        <path
          d="M0 26
             C0 11.64 11.64 0 26 0
             H294
             C308.36 0 320 11.64 320 26
             V152
             C240 155, 185 140, 0 132
             Z"
          fill="url(#googleCardBlueGrad)"
        />

        {/* Light Cyan Curve Accent Band */}
        <path
          d="M0 132
             C185 140, 240 155, 320 152
             L320 158
             C240 161, 185 146, 0 138
             Z"
          fill="url(#cyanWaveGrad)"
          opacity="0.9"
        />

        {/* 3. Five Warm Golden Stars (★ ★ ★ ★ ★) */}
        <g id="golden-stars" transform="translate(160, 28)">
          {/* Star Helper function rendered at offsets -44, -22, 0, 22, 44 */}
          {[-46, -23, 0, 23, 46].map((xOffset, idx) => (
            <path
              key={idx}
              transform={`translate(${xOffset}, 0)`}
              d="M0 -7.5 
                 L2.3 -2.2 
                 L8 -1.4 
                 L3.8 2.6 
                 L4.8 8.2 
                 L0 5.5 
                 L-4.8 8.2 
                 L-3.8 2.6 
                 L-8 -1.4 
                 L-2.3 -2.2 Z"
              fill="#FFC107"
              stroke="#F59E0B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* 4. White Bold Typography: "GOOGLE 'DA BİZİ DEĞERLENDİRİN" */}
        <text
          x="160"
          y="62"
          fill="#FFFFFF"
          fontSize="17"
          fontWeight="900"
          letterSpacing="0.8"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        >
          GOOGLE 'DA BİZİ
        </text>
        <text
          x="160"
          y="84"
          fill="#FFFFFF"
          fontSize="17"
          fontWeight="900"
          letterSpacing="0.8"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        >
          DEĞERLENDİRİN
        </text>

        {customName && (
          <text
            x="160"
            y="100"
            fill="#BAE6FD"
            fontSize="10"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {customName}
          </text>
        )}

        {/* 5. Center Floating White Circle Disc with Google "G" */}
        <g id="center-google-disc">
          {/* Circular Disc with Shadow */}
          <circle
            cx="160"
            cy="142"
            r="32"
            fill="#FFFFFF"
            filter="url(#discShadow)"
          />
          <circle
            cx="160"
            cy="142"
            r="32"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Official 4-Color Google "G" Logo inside Disc */}
          <g transform="translate(160, 142) scale(0.48)">
            {/* Blue Crossbar & Right Arc */}
            <path
              d="M44 0
                 C44 -3.1 43.6 -6.1 43 -9
                 H0
                 V10
                 H25
                 C23.9 15.5 20.6 20.2 15.8 23.4
                 L28.6 33.3
                 C36.1 26.4 44 15.2 44 0 Z"
              fill="#4285F4"
            />
            {/* Red Top Arc */}
            <path
              d="M0 -42
                 C12.4 -42 23.6 -37.7 32.4 -29.3
                 L43.8 -40.7
                 C36.9 -47.2 27.8 -51.2 15.8 -51.2
                 C-9.8 -51.2 -31.6 -36.5 -41.4 -15
                 L-29.2 -5.5
                 C-24.5 -19.4 -11.5 -42 0 -42 Z"
              fill="#EA4335"
            />
            {/* Yellow Bottom-Left Arc */}
            <path
              d="M-41.4 -15
                 C-43.8 -7.9 -45.2 -0.2 -45.2 7.7
                 C-45.2 15.6 -43.8 23.3 -41.4 30.4
                 L-29.2 20.9
                 C-30.2 16.8 -30.8 12.4 -30.8 7.7
                 C-30.8 3 -30.2 -1.4 -29.2 -5.5
                 L-41.4 -15 Z"
              fill="#FBBC05"
            />
            {/* Green Bottom Arc */}
            <path
              d="M0 57.2
                 C17.6 57.2 32.4 51.4 43.2 41.5
                 L30.4 31.6
                 C25.4 35 18.8 37.2 12.3 37.2
                 C-11.5 37.2 -24.5 24.6 -29.2 10.7
                 L-41.4 20.2
                 C-31.6 41.7 -9.8 57.2 0 57.2 Z"
              fill="#34A853"
            />
          </g>
        </g>

        {/* 6. Clean Black Line-Art Contactless Tap Symbol (from photo) */}
        {/* Shows the oval contactless waves + smartphone held in hand */}
        <g id="nfc-tap-symbol" transform="translate(160, 218)">
          {/* Contactless Oval Radio Waves on the Left */}
          <ellipse
            cx="-24"
            cy="0"
            rx="28"
            ry="20"
            stroke="#18181B"
            strokeWidth="2.8"
            fill="none"
          />
          {/* Inner radiating wave lines */}
          <path
            d="M-28 -9 C-24 -4, -24 4, -28 9"
            stroke="#18181B"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-22 -13 C-16 -5, -16 5, -22 13"
            stroke="#18181B"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Smartphone held by human hand touching the oval */}
          <g transform="translate(6, -20)">
            {/* Phone Body */}
            <rect
              x="0"
              y="0"
              width="24"
              height="42"
              rx="5"
              fill="#FFFFFF"
              stroke="#18181B"
              strokeWidth="2.8"
            />
            {/* Top Speaker notch */}
            <line x1="8" y1="4" x2="16" y2="4" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />

            {/* Hand grasping the phone: Forearm entering from bottom right, fingers curled on left */}
            {/* Thumb on right edge */}
            <path
              d="M24 16
                 C27 16, 29 19, 29 24
                 C29 28, 27 34, 25 38
                 L29 48"
              stroke="#18181B"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Curled fingers wrapping the left edge of phone */}
            <path
              d="M-1 10 C-4 10, -5 13, -5 15 C-5 17, -3 18, 0 18"
              stroke="#18181B"
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="#FFFFFF"
            />
            <path
              d="M-1 18 C-4 18, -5 21, -5 23 C-5 25, -3 26, 0 26"
              stroke="#18181B"
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="#FFFFFF"
            />
            <path
              d="M-1 26 C-4 26, -5 29, -5 31 C-5 33, -3 34, 0 34"
              stroke="#18181B"
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="#FFFFFF"
            />
            <path
              d="M-1 34 C-4 34, -5 37, -5 39 C-5 41, -3 42, 0 42"
              stroke="#18181B"
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="#FFFFFF"
            />
            {/* Wrist / Forearm base */}
            <path
              d="M12 42 L16 52 M24 40 L28 50"
              stroke="#18181B"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* 7. Bottom Instructional Text (Exact text from photo) */}
        <text
          x="160"
          y="282"
          fill="#18181B"
          fontSize="12.5"
          fontWeight="800"
          letterSpacing="0.2"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        >
          Yorum yapmak için telefonunuzu yaklaştırın.
        </text>

        {/* Subtle border outline for the physical card */}
        <rect
          x="1"
          y="1"
          width="318"
          height="318"
          rx="25"
          stroke="#000000"
          strokeWidth="1.2"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
};
