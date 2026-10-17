import React, { useState } from 'react';

export interface WhatsAppButtonProps {
  /**
   * Telefon numarası (Ülke kodu ile birlikte, boşluksuz veya başında + olmadan)
   * Örnek: "905XXXXXXXXXX"
   */
  phoneNumber?: string;
  /**
   * WhatsApp açıldığında mesaj giriş alanına otomatik doldurulacak metin
   */
  message?: string;
  /**
   * Konuşma baloncuğu üzerinde yer alacak samimi karşılama metni
   */
  bubbleText?: string;
  /**
   * Ekran üzerindeki yatay konum ('right' | 'left')
   * Kolay sınıf ve pozisyon değişimi için ayarlanabilir.
   */
  position?: 'right' | 'left';
  /**
   * Ekstra CSS sınıfları eklemek için
   */
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '905XXXXXXXXXX',
  message = 'NFC kart ücretleriniz nedir , öğrenebilir miyim ?',
  bubbleText = 'NFC Kartlar hakkında bilgi al! 😊',
  position = 'right',
  className = '',
}) => {
  const [isBubbleDismissed, setIsBubbleDismissed] = useState(false);

  // URL Encode işlemine tabi tutulmuş WhatsApp bağlantısı
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  const isRight = position === 'right';

  return (
    <aside
      aria-label="WhatsApp Canlı Destek ve İletişim Butonu"
      className={`fixed z-40 flex items-center gap-3 select-none transition-all duration-300 pointer-events-none ${
        isRight
          ? 'right-4 sm:right-6 bottom-24 sm:bottom-8 flex-row'
          : 'left-4 sm:left-6 bottom-24 sm:bottom-8 flex-row-reverse'
      } ${className}`}
    >
      {/* Samimi Konuşma Baloncuğu (Floating Speech Bubble) */}
      {!isBubbleDismissed && (
        <div
          className={`pointer-events-auto relative group flex items-center bg-white text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-3.5 sm:px-4 rounded-2xl shadow-xl border border-slate-100 cursor-pointer animate-whatsapp-bob transition-transform hover:scale-102 hover:shadow-2xl active:scale-98`}
          onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }
          }}
          aria-label={`${bubbleText} - WhatsApp'ta sohbet başlat`}
        >
          {/* Konuşma Baloncuğu Oku (Speech Pointer Arrow) */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-slate-100 rotate-45 ${
              isRight
                ? '-right-1.25 border-t border-r'
                : '-left-1.25 border-b border-l'
            }`}
            aria-hidden="true"
          />

          <span className="leading-snug tracking-tight text-slate-800 pr-1">
            {bubbleText}
          </span>

          {/* Baloncuğu Kapatma Butonu (Opsiyonel kullanıcı rahatlığı) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsBubbleDismissed(true);
            }}
            aria-label="Konuşma balonunu kapat"
            className="ml-1.5 -mr-1 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-slate-400"
            title="Kapat"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* WhatsApp Butonu (Orijinal Yeşil #25D366 & Nabız Animasyonu) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden NFC Kartlar hakkında soru sorun"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-108 active:scale-95 focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40 animate-whatsapp-pulse cursor-pointer shrink-0"
      >
        {/* Dalgalanma Efekti Arka Plan Halka (Ripple Ping) */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Orijinal WhatsApp Beyaz Vektörel SVG Logosu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 sm:w-8.5 sm:h-8.5 text-white drop-shadow-xs"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.24 15.09 13.64 14.86 13.56C14.63 13.47 14.47 13.43 14.3 13.68C14.14 13.93 13.66 14.49 13.52 14.66C13.37 14.82 13.23 14.84 12.98 14.72C12.74 14.59 11.94 14.33 11 13.49C10.26 12.83 9.76 12.02 9.61 11.77C9.47 11.53 9.6 11.39 9.72 11.27C9.83 11.16 9.97 10.98 10.09 10.84C10.22 10.7 10.26 10.6 10.34 10.43C10.42 10.27 10.38 10.12 10.32 10C10.26 9.88 9.77 8.68 9.57 8.18C9.37 7.7 9.17 7.76 9.02 7.75C8.88 7.75 8.71 7.75 8.55 7.75C8.38 7.75 8.12 7.81 7.89 8.06C7.67 8.3 7.03 8.9 7.03 10.12C7.03 11.34 7.92 12.52 8.04 12.68C8.17 12.85 9.79 15.34 12.27 16.41C12.86 16.67 13.32 16.82 13.68 16.94C14.27 17.13 14.81 17.1 15.24 17.04C15.71 16.97 16.69 16.45 16.89 15.87C17.1 15.3 17.1 14.81 17.04 14.71C16.97 14.6 16.81 14.5 16.56 14.37Z"
          />
        </svg>
      </a>
    </aside>
  );
};
