import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, Wifi } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const { totalItemsCount, openCartDrawer } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'urunler', label: 'Ürünler' },
    { id: 'nasil-calisir', label: 'Nasıl Çalışır?' },
    { id: 'kurumsal', label: 'Kurumsal' },
    { id: 'sss', label: 'SSS' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={() => handleLinkClick('hero')}
          aria-label="Gen Z Bilişim Ana Sayfasına Git"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8] rounded-xl"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shadow-xs" aria-hidden="true">
            <Wifi className="w-4 h-4 -rotate-90 text-blue-400" />
          </div>
          <span className="font-heading">Gen Z Bilişim</span>
        </button>

        {/* Zone 2: 4-5 Concise Navigation Links */}
        <nav aria-label="Masaüstü Gezinme Menüsü" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#334155]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8] rounded-lg px-1.5 py-0.5 ${
                activeSection === link.id ? 'text-[#1D4ED8] font-bold' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Shopping Cart) + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openCartDrawer}
            aria-label={`Alışveriş sepetini aç, ${totalItemsCount} ürün`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
            title="Alışveriş Sepeti"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Sepetim</span>
            <span className="px-1.5 py-0.2 bg-[#1D4ED8] text-white rounded-full text-[10px] font-bold tabular-nums">
              {totalItemsCount}
            </span>
          </button>

          {/* Mobile hamburger button with aria-expanded, aria-controls, and aria-haspopup */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-haspopup="true"
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Gezinme menüsünü kapat' : 'Gezinme menüsünü aç'}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with role="navigation" */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-navigation-menu"
          aria-label="Mobil Gezinme Menüsü"
          className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
