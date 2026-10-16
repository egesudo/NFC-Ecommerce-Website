import React, { useState } from 'react';
import { CardType } from '../types';
import { NfcCard360Viewer } from './NfcCard360Viewer';
import { HeroCardSkeleton } from './LoadingSkeletons';
import { 
  WikiHowWhatsAppLogo, 
  WikiHowInstagramLogo, 
  WikiHowGoogleLogo 
} from './WikiHowSocialLogos';
import { ArrowRight, RotateCw, Smartphone, Star, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onHowItWorks: () => void;
  onStartCustomizer: (cardType: CardType) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onHowItWorks,
  onStartCustomizer,
}) => {
  const [selectedHeroCard, setSelectedHeroCard] = useState<CardType>('whatsapp');
  const [isHeroCardLoading, setIsHeroCardLoading] = useState<boolean>(false);

  const handleHeroCardChange = (type: CardType) => {
    if (type === selectedHeroCard) return;
    setIsHeroCardLoading(true);
    setSelectedHeroCard(type);
    setTimeout(() => {
      setIsHeroCardLoading(false);
    }, 220);
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[#F8FAFC] overflow-hidden">
      {/* Subtle atmospheric gradient */}
      <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-blue-50/60 via-[#F8FAFC]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
              <span className="text-[#1D4ED8]">Yeni Nesil Temassız İletişim</span>
              <span aria-hidden="true">·</span>
              <span>Uygulama İndirmek Yok</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0D9488]">Sabit 600 TL Perakende</span>
            </div>

            {/* Headline optimized to balanced 2 lines with tight tracking and leading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Tek Dokunuşla WhatsApp, Instagram
              <span className="text-[#1D4ED8] block">ve Google 5 Yıldız Yorumları Toplayın.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed">
              Müşterilerinize telefon numaranızı kaydettirmekle veya hesap aratmakla uğraşmayın. Masanıza veya kasanıza koyacağınız akıllı NFC kart ile telefonunu yaklaştıran herkes anında işletmenize bağlansın.
            </p>

            {/* Pricing badge & CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={onExploreProducts}
                  className="px-6 py-3.5 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] active:scale-[0.98] text-white rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-soft-card cursor-pointer whitespace-nowrap"
                >
                  <span>Kartları İncele & Sipariş Ver</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onHowItWorks}
                  className="px-5 py-3.5 bg-white hover:bg-[#F1F5F9] active:scale-[0.98] text-[#0F172A] rounded-2xl font-bold text-sm border border-[#E2E8F0] transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                >
                  Nasıl Çalışır?
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-[#64748B] pl-2">
                <span className="font-extrabold text-[#0F172A] text-lg tabular-nums">₺600</span>
                <span>/ Kart (KDV Dahil)</span>
              </div>
            </div>

            {/* Proof Points Strip with 3 Official wikiHow Integration Badges */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <WikiHowWhatsAppLogo className="w-10 h-10 border border-[#E2E8F0]" />
                <WikiHowInstagramLogo className="w-10 h-10 border border-[#E2E8F0]" />
                <WikiHowGoogleLogo className="w-10 h-10 border border-[#E2E8F0]" />
              </div>
              <div className="text-xs text-[#64748B] font-medium leading-tight">
                <p className="font-bold text-[#0F172A]">Doğrudan Platform Entegrasyonu</p>
                <p>Ekstra uygulama gerektirmez, doğrudan açılır.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 360-Degree 3D Interactive Card Showcase with Glow Ring in Hero */}
          <div className="lg:col-span-5 flex flex-col items-center relative z-10 w-full">
            {/* Subtle Gradient Glow Ring behind Showcase */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-blue-500/20 via-teal-400/15 to-indigo-500/20 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Card Model Selector Tabs with authentic vector icons & full WCAG keyboard navigation */}
            <div 
              role="tablist"
              aria-label="3D Kart Modeli Seçimi"
              onKeyDown={(e) => {
                const tabs: CardType[] = ['whatsapp', 'instagram', 'google-review'];
                const currentIndex = tabs.indexOf(selectedHeroCard);
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  const nextIndex = (currentIndex + 1) % tabs.length;
                  handleHeroCardChange(tabs[nextIndex]);
                  document.getElementById(`tab-${tabs[nextIndex]}`)?.focus();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                  handleHeroCardChange(tabs[prevIndex]);
                  document.getElementById(`tab-${tabs[prevIndex]}`)?.focus();
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  handleHeroCardChange(tabs[0]);
                  document.getElementById(`tab-${tabs[0]}`)?.focus();
                } else if (e.key === 'End') {
                  e.preventDefault();
                  handleHeroCardChange(tabs[tabs.length - 1]);
                  document.getElementById(`tab-${tabs[tabs.length - 1]}`)?.focus();
                }
              }}
              className="relative z-10 flex items-center gap-1.5 p-1.5 bg-[#F1F5F9] rounded-2xl mb-4 border border-[#E2E8F0] shadow-2xs"
            >
              <button
                type="button"
                id="tab-whatsapp"
                role="tab"
                tabIndex={selectedHeroCard === 'whatsapp' ? 0 : -1}
                aria-selected={selectedHeroCard === 'whatsapp'}
                aria-controls="hero-3d-card-panel"
                onClick={() => handleHeroCardChange('whatsapp')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  selectedHeroCard === 'whatsapp'
                    ? 'bg-white text-[#0F172A] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <WikiHowWhatsAppLogo className="w-4 h-4 p-0 shadow-none rounded-none bg-transparent" />
                <span>WhatsApp</span>
              </button>
              <button
                type="button"
                id="tab-instagram"
                role="tab"
                tabIndex={selectedHeroCard === 'instagram' ? 0 : -1}
                aria-selected={selectedHeroCard === 'instagram'}
                aria-controls="hero-3d-card-panel"
                onClick={() => handleHeroCardChange('instagram')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  selectedHeroCard === 'instagram'
                    ? 'bg-white text-[#0F172A] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <WikiHowInstagramLogo className="w-4 h-4 p-0 shadow-none rounded-none bg-transparent" />
                <span>Instagram</span>
              </button>
              <button
                type="button"
                id="tab-google-review"
                role="tab"
                tabIndex={selectedHeroCard === 'google-review' ? 0 : -1}
                aria-selected={selectedHeroCard === 'google-review'}
                aria-controls="hero-3d-card-panel"
                onClick={() => handleHeroCardChange('google-review')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  selectedHeroCard === 'google-review'
                    ? 'bg-white text-[#0F172A] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <WikiHowGoogleLogo className="w-4 h-4 p-0 shadow-none rounded-none bg-transparent" />
                <span>Google</span>
              </button>
            </div>

            {/* 360 Interactive Box or Skeleton */}
            {isHeroCardLoading ? (
              <HeroCardSkeleton />
            ) : (
              <div 
                id="hero-3d-card-panel"
                role="tabpanel"
                aria-labelledby={`tab-${selectedHeroCard}`}
                className="relative z-10 w-full max-w-[360px] p-6 bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-card backdrop-blur-xs flex flex-col items-center animate-in fade-in duration-200"
              >
                <div className="w-full flex items-center justify-between mb-2 text-xs">
                  <span className="font-bold text-[#0F172A]">
                    {selectedHeroCard === 'whatsapp'
                      ? 'WhatsApp Akıllı Kart'
                      : selectedHeroCard === 'instagram'
                      ? 'Instagram Takipçi Kartı'
                      : "Google 'Bizi Değerlendirin' Kartı"}
                  </span>
                  <span className="font-extrabold text-[#1D4ED8] tabular-nums text-sm">
                    ₺600
                  </span>
                </div>

                {/* 360 Viewer with transparent overlay controls */}
                <div className="w-full">
                  <NfcCard360Viewer
                    cardType={selectedHeroCard}
                    material="acrylic"
                    showControls={false}
                    overlayControls={true}
                    autoRotateInit={true}
                  />
                </div>

                {/* Single Dominant Primary CTA */}
                <button
                  onClick={() => onStartCustomizer(selectedHeroCard)}
                  aria-label={`${selectedHeroCard} akıllı NFC modelini kendi işletme bilgilerinizle kişiselleştirin`}
                  className="w-full mt-4 py-3 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4ED8]"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" aria-hidden="true" />
                  <span>Kendi Bilgilerinizle Kişiselleştirin</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
