import React from 'react';

/**
 * Minimalist Social Media Logo Icons in wikiHow Vector Line Art Style
 * 
 * Strict specifications from user prompt:
 * 1. WhatsApp:
 *    - Minimalist WhatsApp logo icon in wikiHow vector line art style
 *    - Clean black outlines, flat green and white colors, solid white background
 *    - Strictly no text, no letters, no words, no background objects
 *    - Just the clean phone symbol inside the speech bubble icon
 * 
 * 2. Instagram:
 *    - Minimalist Instagram camera logo icon in wikiHow vector line art style
 *    - Clean black outlines, smooth flat gradient shading, solid white background
 *    - Strictly no text, no letters, no typography, and no words
 *    - Just the clean camera symbol
 * 
 * 3. Google "G":
 *    - Minimalist Google "G" logo icon in wikiHow vector line art style
 *    - Clean black outlines with the standard four Google colors (red, yellow, green, blue) in flat style
 *    - Solid white background
 *    - Strictly no text, no extra letters, and no words. Just the single icon.
 */

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Minimalist WhatsApp Logo in wikiHow Vector Line Art Style
 */
export const WikiHowWhatsAppLogo: React.FC<IconProps> = ({ className = 'w-16 h-16', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div
      style={style}
      className={`inline-flex items-center justify-center bg-white rounded-2xl p-1 shadow-2xs select-none ${className}`}
      title="WhatsApp"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Solid Pure White Background */}
        <rect width="120" height="120" fill="#FFFFFF" rx="20" />

        {/* WhatsApp Speech Bubble Container */}
        {/* Flat green fill #25D366 with clean black outline */}
        <path
          d="M60 14
             C34.595 14 14 34.595 14 60
             C14 68.322 16.195 76.136 20.027 82.914
             L16 104
             L37.832 100.086
             C44.409 103.736 51.977 106 60 106
             C85.405 106 106 85.405 106 60
             C106 34.595 85.405 14 60 14 Z"
          fill="#25D366"
          stroke="#18181B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Phone Handset Symbol (Clean white with bold black line art) */}
        <path
          d="M44 38
             C42.5 38 40.5 39 39 41
             C36.5 44 33 50.5 33 58
             C33 65.5 37 75.5 44.5 83
             C52 90.5 62 94.5 69.5 94.5
             C77 94.5 83.5 91 86.5 88.5
             C88.5 87 89.5 85 89.5 83.5
             C89.5 82 85 75.5 81.5 74
             C78 72.5 76.5 73 74.5 75
             C72.5 77 71 78.5 69 77.5
             C65.5 75.5 59 70 56 64
             C54.5 61.5 56.5 60.5 58 58.5
             C59.5 56.5 60 55 58.5 51.5
             C57 48 51 43.5 49 39.5
             C47.5 38.5 45.5 38 44 38 Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Handset detail crease */}
        <path
          d="M48 44 C53 49 57 53 58 58"
          stroke="#18181B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M68 76 C72 75 76 77 79 79"
          stroke="#18181B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * 2. Minimalist Instagram Camera Logo in wikiHow Vector Line Art Style
 */
export const WikiHowInstagramLogo: React.FC<IconProps> = ({ className = 'w-16 h-16', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div
      style={style}
      className={`inline-flex items-center justify-center bg-white rounded-2xl p-1 shadow-2xs select-none ${className}`}
      title="Instagram"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Smooth Flat Gradient for Instagram */}
          <linearGradient id="wikihowIgGradient" x1="16" y1="104" x2="104" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#F77737" />
            <stop offset="50%" stopColor="#F56040" />
            <stop offset="75%" stopColor="#FD1D1D" />
            <stop offset="90%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>

        {/* Solid Pure White Background */}
        <rect width="120" height="120" fill="#FFFFFF" rx="20" />

        {/* Outer Rounded Camera Body with Bold Black Outline and Flat Gradient Shading */}
        <rect
          x="16"
          y="16"
          width="88"
          height="88"
          rx="24"
          fill="url(#wikihowIgGradient)"
          stroke="#18181B"
          strokeWidth="3.5"
        />

        {/* Inner Camera Frame (White line with black border style) */}
        <rect
          x="28"
          y="28"
          width="64"
          height="64"
          rx="18"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
        />
        <rect
          x="28"
          y="28"
          width="64"
          height="64"
          rx="18"
          fill="none"
          stroke="#18181B"
          strokeWidth="1.8"
        />

        {/* Center Large Lens Circle */}
        <circle
          cx="60"
          cy="60"
          r="16"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="5"
        />
        <circle
          cx="60"
          cy="60"
          r="16"
          fill="none"
          stroke="#18181B"
          strokeWidth="1.8"
        />

        {/* Top-Right Flash Dot */}
        <circle
          cx="79"
          cy="41"
          r="4.5"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
};

/**
 * 3. Minimalist Google "G" Logo in wikiHow Vector Line Art Style
 */
export const WikiHowGoogleLogo: React.FC<IconProps> = ({ className = 'w-16 h-16', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div
      style={style}
      className={`inline-flex items-center justify-center bg-white rounded-2xl p-1 shadow-2xs select-none ${className}`}
      title="Google"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Solid Pure White Background */}
        <rect width="120" height="120" fill="#FFFFFF" rx="20" />

        {/* Google "G" in wikiHow line art style:
            - Standard 4 Google flat colors (Blue #4285F4, Red #EA4335, Yellow #FBBC05, Green #34A853)
            - Clean bold black outlines separating the segments
            - Strictly no text, no extra letters, and no words */}
        <g id="google-g-group">
          {/* Blue Right Segment + Horizontal Center Crossbar */}
          <path
            d="M102 60 
               C102 56.6 101.6 52.8 100.8 49.5 
               H60 
               V70 
               H83.8 
               C82.7 75.8 79.4 81 74.4 84.4 
               L74.3 84.5 
               L87.5 94.7 
               L88.4 94.8 
               C96.7 87.1 102 74.6 102 60 Z"
            fill="#4285F4"
            stroke="#18181B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Red Top Segment */}
          <path
            d="M60 22 
               C70.8 22 80.5 25.7 88.1 32.9 
               L101 20 
               C91.5 11.2 77.2 6 60 6 
               C37.4 6 18 19 9.2 38 
               L24 49.5 
               C27.5 39.5 37 32 60 32 Z"
            fill="#EA4335"
            stroke="#18181B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Yellow Bottom-Left Segment */}
          <path
            d="M9.2 38 
               C7.2 44 6 51 6 60 
               C6 69 7.2 76 9.2 82 
               L24 70.5 
               C23.2 67.2 22.8 63.7 22.8 60 
               C22.8 56.3 23.2 52.8 24 49.5 
               L9.2 38 Z"
            fill="#FBBC05"
            stroke="#18181B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Green Bottom Segment */}
          <path
            d="M60 114 
               C76.8 114 90.8 108.5 101 98.8 
               L87.5 88.4 
               C83.8 91 78.5 93 72.5 93 
               C49.5 93 40 85.5 36.5 75.5 
               L21.7 87 
               C30.5 106 50 114 60 114 Z"
            fill="#34A853"
            stroke="#18181B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Clean Center Cutout Outline */}
          <path
            d="M60 32 
               C70.8 32 79.5 36 86 42 
               L100 28 
               C90 18.5 76 13 60 13 
               C39.5 13 22 25 14 43 
               L27.5 53.5 
               C30.5 41 44 32 60 32 Z"
            stroke="#18181B"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
