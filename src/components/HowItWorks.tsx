import React, { useState, useEffect, useRef } from 'react';
import { 
  WikiHowStep1, 
  WikiHowStep2, 
  WikiHowStep3 
} from './WikiHowIllustrations';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * Modern, net hatlı (line art) vektörel SVG ikonlar:
 * Gen Z Bilişim marka renk paletine (koyu kurşun #1E293B, kobalt/indigo mavi #1D4ED8/#2563EB,
 * WhatsApp zümrüt yeşili #059669/#25D366 ve altın #D97706) uyumlu özel çizimler.
 */

// 1. NFC Kartının Yaklaştırılması - Line Art Vektörel İkon
export const NfcApproachLineArtIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    aria-hidden="true"
  >
    {/* Akıllı Telefon Çerçevesi */}
    <rect 
      x="7" 
      y="9" 
      width="20" 
      height="32" 
      rx="4" 
      stroke="#1E293B" 
      strokeWidth="2.2" 
      fill="#F8FAFC" 
    />
    <line x1="14" y1="13" x2="20" y2="13" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="36" r="1.5" fill="#94A3B8" />

    {/* Yaklaşan Gen Z Bilişim Akıllı NFC Kartı */}
    <g transform="translate(19, 5) rotate(14)">
      <rect 
        x="0" 
        y="0" 
        width="22" 
        height="15" 
        rx="2.5" 
        fill="#EFF6FF" 
        stroke="#1D4ED8" 
        strokeWidth="2.2" 
      />
      {/* Altın Çip Detayı */}
      <rect x="3" y="3.5" width="5" height="4" rx="1" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
      {/* Temassız Dalga */}
      <path d="M12 4C14 5.5 14 9.5 12 11" stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 2C18 4.5 18 10.5 15 13" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    </g>

    {/* Kart ve Telefon Arasındaki NFC Dalga Hatları */}
    <path d="M22 17 C25.5 20.5, 25.5 26.5, 22 30" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M26 14 C30.5 18.5, 30.5 28.5, 26 33" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2.5 2" />

    {/* Sinyal Noktaları */}
    <circle cx="28" cy="23.5" r="1.5" fill="#F59E0B" />
    <circle cx="21" cy="14" r="1.2" fill="#2563EB" />
  </svg>
);

// 2. Bildirim Onayı ve Tıklama - Line Art Vektörel İkon
export const NotificationTapLineArtIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    aria-hidden="true"
  >
    {/* Akıllı Telefon Ekran Çerçevesi */}
    <rect 
      x="9" 
      y="7" 
      width="26" 
      height="36" 
      rx="4.5" 
      stroke="#1E293B" 
      strokeWidth="2.2" 
      fill="#F8FAFC" 
    />
    <rect x="18" y="9.5" width="8" height="2" rx="1" fill="#1E293B" />

    {/* NFC Açılır Bildirim Penceresi (Notification Pill) */}
    <rect 
      x="13" 
      y="14" 
      width="20" 
      height="14" 
      rx="3.5" 
      fill="#EEF2FF" 
      stroke="#4338CA" 
      strokeWidth="2" 
    />
    {/* Yeşil WhatsApp/Onay İkonu */}
    <circle cx="17.5" cy="18.5" r="2.2" fill="#10B981" />
    <path d="M16.5 18.5L17.2 19.2L18.6 17.8" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Bildirim Başlık Çizgisi */}
    <line x1="21.5" y1="18.5" x2="30" y2="18.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />

    {/* 'Bağlantıyı Aç' Aksiyon Butonu */}
    <rect x="15" y="22.5" width="16" height="4" rx="2" fill="#4338CA" />
    <line x1="17.5" y1="24.5" x2="26" y2="24.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M27.5 23.5L29 24.5L27.5 25.5" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />

    {/* Tıklama / Dokunma Efekti (Tap Ripple) */}
    <circle cx="28" cy="24.5" r="6" stroke="#3B82F6" strokeWidth="1.6" strokeDasharray="2.5 2" />
    <circle cx="28" cy="24.5" r="2.2" fill="#2563EB" />

    {/* Dokunan İşaret Parmağı - Line Art */}
    <path
      d="M39 37 L33 29.5 C31.5 27.5 30 25.5 28 24.8 C26.8 24.2 26.2 25.2 27.2 26.6 L30.5 31.2 L33.5 40"
      stroke="#1E293B"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FAD2B4"
    />
  </svg>
);

// 3. Mesajlaşma Arayüzü ile Etkileşim - Line Art Vektörel İkon
export const MessagingChatLineArtIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    aria-hidden="true"
  >
    {/* Akıllı Telefon Ekranı */}
    <rect 
      x="9" 
      y="7" 
      width="26" 
      height="36" 
      rx="4.5" 
      stroke="#1E293B" 
      strokeWidth="2.2" 
      fill="#F8FAFC" 
    />
    
    {/* WhatsApp Üst Başlık Çubuğu */}
    <rect x="9" y="7" width="26" height="8" rx="4.5" fill="#075E54" />
    <circle cx="14" cy="11" r="1.8" fill="#25D366" />
    <line x1="18" y1="11" x2="27" y2="11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Karşı Taraf Karşılama Balonu (Gelen Mesaj) */}
    <path 
      d="M13 18 H24 C25 18 26 19 26 20 V23 C26 24 25 25 24 25 H15 L13 27 V18 Z" 
      fill="#FFFFFF" 
      stroke="#1E293B" 
      strokeWidth="1.6" 
    />
    <line x1="16" y1="21.5" x2="22" y2="21.5" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" />

    {/* Kullanıcı Hazır Sipariş Balonu (WhatsApp Açık Yeşili) */}
    <path 
      d="M20 27 H31 C32 27 33 28 33 29 V33 C33 34 32 35 31 35 H22 L20 37 V27 Z" 
      fill="#DCF8C6" 
      stroke="#059669" 
      strokeWidth="1.6" 
    />
    {/* Mavi Çift Tik */}
    <path d="M26.5 33L28.5 34.5L31.5 31.5" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Yeşil Gönder Butonu (Uçak İkonlu) */}
    <circle cx="28" cy="39.5" r="4.2" fill="#25D366" stroke="#075E54" strokeWidth="1.6" />
    <path d="M26.5 38.5L30 39.5L26.5 40.5L27.5 39.5Z" fill="#FFFFFF" />

    {/* Başparmak Dokunma Efekti (Send Action Ripple) */}
    <circle cx="28" cy="39.5" r="6.5" stroke="#10B981" strokeWidth="1.4" strokeDasharray="2 2" />
    <path 
      d="M34 42 C32.5 41 30.5 40 28.5 39.5 C27.5 39.2 27 40 28 40.8 L30.5 42.5 L34 43" 
      stroke="#1E293B" 
      strokeWidth="2" 
      strokeLinecap="round" 
      fill="#FAD2B4" 
    />
  </svg>
);

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  // Sayfayı kaydırdıkça tetiklenen IntersectionObserver:
  // Kartlar görünürlük alanına girince 'fade-in' ve 'scale' animasyonlarını tetikler
  useEffect(() => {
    // Tarayıcı IntersectionObserver desteği kontrolü
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasScrolledIntoView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasScrolledIntoView(true);
            // Bir kez tetiklendikten sonra performansı korumak için dinleyiciyi kapat
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      stepNumber: '01',
      actionLabel: 'NFC Yakınlaştırma',
      handHint: 'Sol el telefonu tutar · Sağ el kartı yaklaştırır',
      title: 'Kartı Telefona Yaklaştırın',
      description: 'Sol elinizle dikey tuttuğunuz akıllı telefonun üst-arka NFC sensörüne, sağ elinizdeki Gen Z Bilişim akıllı NFC kartını yaklaştırın. Mavi dalga sinyali anında algılanır.',
      illustration: <WikiHowStep1 className="w-full h-full" />,
      lineArtIcon: <NfcApproachLineArtIcon className="w-9 h-9" />,
      altText: 'Sol eldeki akıllı telefona sağ eldeki Gen Z Bilişim NFC kartını yaklaştırma anı illüstrasyonu',
      badgeBg: 'bg-blue-50 text-[#1D4ED8] border-blue-200',
      iconContainerBg: 'bg-blue-50/80 text-[#1D4ED8] border-blue-200/80 group-hover:bg-blue-100',
      footerText: 'Anında temassız sinyal iletimi',
      delayClass: 'delay-100',
    },
    {
      stepNumber: '02',
      actionLabel: 'Bildirime Dokunma',
      handHint: 'İşaret parmağı ile Bağlantıyı Aç butonuna tıklanır',
      title: 'Bildirime Dokunun',
      description: 'Telefon ekranının üstünde anında beliren "Gen Z Bilişim - NFC Kartı" bildirim kutusundaki yeşil logolu "Bağlantıyı Aç" butonuna işaret parmağınızla dokunun.',
      illustration: <WikiHowStep2 className="w-full h-full" />,
      lineArtIcon: <NotificationTapLineArtIcon className="w-9 h-9" />,
      altText: 'Telefon ekranında beliren bildirimdeki Bağlantıyı Aç butonuna işaret parmağıyla dokunma anı',
      badgeBg: 'bg-indigo-50 text-[#4338CA] border-indigo-200',
      iconContainerBg: 'bg-indigo-50/80 text-[#4338CA] border-indigo-200/80 group-hover:bg-indigo-100',
      footerText: 'Uygulama yüklemeden tek dokunuşla açılır',
      delayClass: 'delay-250',
    },
    {
      stepNumber: '03',
      actionLabel: 'WhatsApp İletişimi',
      handHint: 'Başparmak ile yeşil Gönder butonuna basılır',
      title: 'WhatsApp ile Sohbeti Başlatın',
      description: 'Doğrudan açılan WhatsApp ekranında "Gen Z Bilişim" profili ve hazır mesaj kutusu belirir; sağ alttaki yeşil Gönder butonuna dokunarak iletişime geçin.',
      illustration: <WikiHowStep3 className="w-full h-full" />,
      lineArtIcon: <MessagingChatLineArtIcon className="w-9 h-9" />,
      altText: 'WhatsApp sohbet ekranında Gen Z Bilişim hazır mesajını Gönder butonuna basarak iletme anı',
      badgeBg: 'bg-emerald-50 text-[#059669] border-emerald-200',
      iconContainerBg: 'bg-emerald-50/80 text-[#059669] border-emerald-200/80 group-hover:bg-emerald-100',
      footerText: 'Numara kaydetmeden doğrudan sohbet',
      delayClass: 'delay-400',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="nasil-calisir" 
      className="py-20 sm:py-28 bg-[#F1F5F9] border-t border-[#E2E8F0] relative overflow-hidden"
      aria-labelledby="nasil-calisir-baslik"
    >
      {/* Arka Plan Dekoratif Yumuşak Işık Dalgaları */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/30 via-indigo-100/20 to-emerald-100/30 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header: Kaydırma ile tetiklenen akıcı yumuşak giriş */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-18 transition-all duration-700 ease-out ${
            hasScrolledIntoView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#1D4ED8] text-xs uppercase font-extrabold tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8] animate-pulse" />
            <span>Görsel Rehber & Samimi Anlatım</span>
          </div>
          <h2 
            id="nasil-calisir-baslik"
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]"
          >
            3 Kolay Adımda Nasıl Çalışır?
          </h2>
          <p className="text-[15px] sm:text-base text-[#475467] mt-3 sm:mt-4 leading-relaxed font-normal">
            Herhangi bir mobil uygulama indirmeden veya rehbere numara kaydetmeden, sadece kartı yaklaştırıp dokunarak anında iletişime geçin.
          </p>
        </div>

        {/* 3 Adımlı Kart Izgarası: Scroll-triggered 'Fade-in' + 'Scale' Animasyonu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <article
              key={idx}
              className={`bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between shadow-soft-card relative group
                transform transition-all duration-700 ease-out ${step.delayClass}
                ${
                  hasScrolledIntoView 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-90'
                }
                hover:shadow-soft-hover hover:scale-[1.025] hover:-translate-y-1.5 hover:border-[#CBD5E1]
              `}
            >
              <div>
                {/* Visual Header with Step Badge, Line Art SVG Icon and Action Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-3">
                    {/* Modern Line Art Vektörel SVG İkon */}
                    <div 
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center p-1 shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${step.iconContainerBg}`}
                      title={step.actionLabel}
                      aria-label={step.actionLabel}
                    >
                      {step.lineArtIcon}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-5 h-5 rounded-full ${step.badgeBg} border font-extrabold text-[10px] flex items-center justify-center`}>
                          {step.stepNumber}
                        </span>
                        <span className="text-[12px] font-bold text-[#0F172A]">
                          Adım {step.stepNumber}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#64748B] block mt-0.5">
                        {step.actionLabel}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full ${step.badgeBg} border shadow-2xs flex items-center gap-1`}>
                    <span>Hazır</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Clean WikiHow Vector Illustration Area */}
                <div 
                  className="w-full aspect-[380/240] bg-white rounded-2xl border border-[#E2E8F0] p-1.5 flex items-center justify-center overflow-hidden mb-3.5 group-hover:border-[#94A3B8] shadow-2xs transition-all duration-300"
                  role="img"
                  aria-label={step.altText}
                >
                  {step.illustration}
                </div>

                {/* Visual Hand Action Hint */}
                <div className="mb-4 flex items-center gap-2 text-[11px] font-medium text-[#475569] bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-[#E2E8F0] group-hover:bg-[#F1F5F9] transition-colors">
                  <span className="text-amber-500 font-bold shrink-0 text-xs">👉</span>
                  <span className="truncate font-semibold">{step.handHint}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0F172A] tracking-tight leading-snug mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[14px] sm:text-[15px] text-[#475467] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Micro Trust Label with Line Art Icon Mini Accent */}
              <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#64748B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span>{step.footerText}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#94A3B8] group-hover:text-[#1D4ED8] transition-colors">
                  {step.stepNumber} / 03
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Feature Micro Bar with Soft Fade-in */}
        <div 
          className={`mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-[#475467] transition-all duration-700 delay-500 ease-out ${
            hasScrolledIntoView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-2xs"></span>
            <span>iOS (iPhone) ve Android Cihazlarla %100 Uyumlu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-2xs"></span>
            <span>Pil, Şarj veya Bakım Gerektirmez</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-2xs"></span>
            <span>Ömür Boyu Temassız ve Sınırsız Kullanım</span>
          </div>
        </div>
      </div>
    </section>
  );
};
