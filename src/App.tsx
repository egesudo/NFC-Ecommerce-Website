import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Product, CardType } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ProductCatalog } from './components/ProductCatalog';
import { CorporateSection } from './components/CorporateSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CardCustomizerModal } from './components/CardCustomizerModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { 
  CheckCircle2, 
  ShoppingBag, 
  ArrowUp, 
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

const MainContent: React.FC = () => {
  const { totalItemsCount, openCartDrawer, toastMessage, clearToast } = useCart();

  // Navigation & Scroll State
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Simple spy
      const sections = ['hero', 'urunler', 'nasil-calisir', 'kurumsal', 'sss'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleOpenCustomizer = (product: Product) => {
    setCustomizingProduct(product);
    setIsCustomizerOpen(true);
  };

  const handleOpenCustomizerByType = (cardType: CardType) => {
    const matched = PRODUCTS.find((p) => p.cardType === cardType) || PRODUCTS[0];
    setCustomizingProduct(matched);
    setIsCustomizerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* WCAG Skip to Main Content Link for screen reader and keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1D4ED8] focus:text-white focus:rounded-xl focus:shadow-xl focus:font-bold focus:text-xs focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        Ana İçeriğe Atla
      </a>

      {/* Top Banner (Single slim promo line <= 40px) with Açık Yeşil / Soft Mint Verified Palette */}
      <aside 
        aria-label="Kampanya Duyurusu" 
        className="bg-[#F0FDF4] border-b border-[#BBF7D0]/80 text-[#14532D] text-[11px] sm:text-xs py-2 px-4 text-center font-medium transition-colors"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold text-[10px] tracking-wide border border-[#86EFAC]/60">
            <Sparkles className="w-3 h-3 text-[#16A34A]" />
            Lansmana Özel
          </span>
          <span className="text-[#14532D]">
            Tüm NFC modelleri <strong className="text-[#166534] font-extrabold underline decoration-[#86EFAC] decoration-2 underline-offset-2">Sabit 600 TL</strong>
          </span>
          <span className="text-[#86EFAC] font-bold hidden sm:inline">•</span>
          <span className="text-[#14532D]">
            500 TL üzeri <strong className="text-[#15803D] font-bold">Ücretsiz Kargo</strong>
          </span>
          <span className="text-[#86EFAC] font-bold hidden md:inline">•</span>
          <span className="hidden md:inline text-[#15803D]/90 font-medium">
            360° 3D İnteraktif İnceleme
          </span>
        </div>
      </aside>

      {/* Top Bar Navigation (Zone 1: Wordmark, Zone 2: 4-5 links, Zone 3: Cart) */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Page Flow with generous pb-24 on mobile/tablet to prevent dock overlap, clean pb-0 on desktop */}
      <main id="main-content" tabIndex={-1} className="flex-1 pb-24 lg:pb-0 focus:outline-hidden">
        {/* 1. Hero Section with 360 interactive viewer */}
        <Hero
          onExploreProducts={() => handleNavigate('urunler')}
          onHowItWorks={() => handleNavigate('nasil-calisir')}
          onStartCustomizer={handleOpenCustomizerByType}
        />

        {/* 2. Product Catalog with 360 3D Viewers & 600 TL Retail */}
        <ProductCatalog
          onSelectProduct={handleOpenProductDetail}
          onQuickCustomize={handleOpenCustomizer}
        />

        {/* 4. How It Works with Clean Vector Smartphone Mockups */}
        <HowItWorks />

        {/* 5. Corporate B2B & Wholesale Orders */}
        <CorporateSection />

        {/* 6. Real FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer & Compliance */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer onStartCheckout={() => setIsCheckoutOpen(true)} />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onOpenCustomizer={handleOpenCustomizer}
      />

      {/* Card Customizer Modal */}
      {customizingProduct && (
        <CardCustomizerModal
          product={customizingProduct}
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
        />
      )}

      {/* UX Comfort: Responsive Floating Navigation Dock (Hidden on desktop >1024px, Active on Mobile/Tablet) */}
      <nav 
        aria-label="Hızlı Gezinme Çubuğu"
        className="lg:hidden fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white/95 backdrop-blur-md text-[#0F172A] rounded-full shadow-soft-hover border border-[#E2E8F0] text-xs max-w-[calc(100vw-1.5rem)] pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))]"
      >
        <button
          onClick={() => handleNavigate('urunler')}
          aria-current={activeSection === 'urunler' ? 'page' : undefined}
          className={`px-2.5 sm:px-3.5 py-1.5 rounded-full transition-colors font-semibold cursor-pointer whitespace-nowrap text-[11px] sm:text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
            activeSection === 'urunler'
              ? 'bg-[#EFF6FF] text-[#1D4ED8]'
              : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
          }`}
        >
          <span className="sm:hidden">Katalog</span>
          <span className="hidden sm:inline">Katalog (600 TL)</span>
        </button>
        <button
          onClick={() => handleNavigate('nasil-calisir')}
          aria-current={activeSection === 'nasil-calisir' ? 'page' : undefined}
          className={`px-2.5 sm:px-3.5 py-1.5 rounded-full transition-colors font-semibold cursor-pointer whitespace-nowrap text-[11px] sm:text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
            activeSection === 'nasil-calisir'
              ? 'bg-[#EFF6FF] text-[#1D4ED8]'
              : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
          }`}
        >
          Nasıl Çalışır?
        </button>
        <button
          onClick={() => handleNavigate('kurumsal')}
          aria-current={activeSection === 'kurumsal' ? 'page' : undefined}
          className={`px-2.5 sm:px-3.5 py-1.5 rounded-full transition-colors font-semibold cursor-pointer whitespace-nowrap text-[11px] sm:text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
            activeSection === 'kurumsal'
              ? 'bg-[#EFF6FF] text-[#1D4ED8]'
              : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
          }`}
        >
          <span className="sm:hidden">Kurumsal</span>
          <span className="hidden sm:inline">Toplu Teklif</span>
        </button>
        <div className="w-px h-4 bg-[#E2E8F0] mx-0.5 sm:mx-1" aria-hidden="true" />
        <button
          onClick={openCartDrawer}
          aria-label={`Alışveriş sepeti, ${totalItemsCount} ürün`}
          className="px-2.5 sm:px-3.5 py-1.5 bg-[#1D4ED8] hover:bg-[#1E40AF] active:scale-95 text-white rounded-full font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap text-[11px] sm:text-xs shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
        >
          <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Sepet ({totalItemsCount})</span>
        </button>
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Sayfanın en üstüne çık"
            className="p-1.5 hover:bg-[#F1F5F9] rounded-full text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          </button>
        )}
      </nav>

      {/* Floating Bottom WhatsApp Communication Button */}
      <WhatsAppButton
        phoneNumber="905XXXXXXXXXX"
        message="NFC kart ücretleriniz nedir , öğrenebilir miyim ?"
        bubbleText="NFC Kartlar hakkında bilgi al! 😊"
        position="right"
      />

      {/* Floating Toast Notification with WCAG aria-live region */}
      {toastMessage && (
        <div 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
          className="fixed bottom-28 sm:bottom-28 right-6 z-50 bg-slate-900 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-2xl border border-white/10 flex items-center gap-2.5 animate-in slide-in-from-bottom-4 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
          <span>{toastMessage}</span>
          <button
            onClick={clearToast}
            aria-label="Bildirimi kapat"
            className="ml-2 text-slate-400 hover:text-white text-xs cursor-pointer p-0.5 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
