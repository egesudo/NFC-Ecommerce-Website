import React, { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductCatalogSkeleton } from './LoadingSkeletons';
import { Search, ArrowUpDown, RotateCw, RefreshCw } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onQuickCustomize: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onQuickCustomize,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  
  // Perceived performance loading states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Initial simulated load for perceived performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Handle category switch with responsive micro-skeleton state
  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === selectedCategory) return;
    setIsTransitioning(true);
    setSelectedCategory(categoryId);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
  };

  // Handle sorting switch with responsive transition
  const handleSortChange = (newSort: 'featured' | 'price-asc' | 'price-desc') => {
    setIsTransitioning(true);
    setSortBy(newSort);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 220);
  };

  // Manual refresh trigger to demonstrate skeleton loading anytime
  const handleManualRefresh = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.cardType === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.materialLabel.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="urunler" className="py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#1D4ED8]">
                Resmi Ürün Kataloğu
              </span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Sabit Fiyat: 600 TL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 tracking-tight">
              Gen Z Bilişim Akıllı NFC Kart & Stand Modelleri
            </h2>
            <p className="text-xs sm:text-sm text-[#334155] mt-2 max-w-xl leading-relaxed">
              İşletmeniz için orijinal WhatsApp, Instagram ve Google 5 Yıldız temassız NFC modellerini inceleyin. Her bir kart 360° 3D olarak incelenebilir.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72" role="search">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              role="searchbox"
              aria-label="Model ara"
              placeholder="Model ara (örn: WhatsApp, Google)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-[#0F172A] placeholder:text-[#64748B] focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] focus:bg-white shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
          {/* Functional Category Segmented Tabs with full WCAG keyboard navigation */}
          <div 
            role="tablist"
            aria-label="Kategori Filtreleri"
            onKeyDown={(e) => {
              const currentIndex = CATEGORIES.findIndex((c) => c.id === selectedCategory);
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % CATEGORIES.length;
                handleCategorySelect(CATEGORIES[nextIndex].id);
                document.getElementById(`cat-tab-${CATEGORIES[nextIndex].id}`)?.focus();
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
                handleCategorySelect(CATEGORIES[prevIndex].id);
                document.getElementById(`cat-tab-${CATEGORIES[prevIndex].id}`)?.focus();
              } else if (e.key === 'Home') {
                e.preventDefault();
                handleCategorySelect(CATEGORIES[0].id);
                document.getElementById(`cat-tab-${CATEGORIES[0].id}`)?.focus();
              } else if (e.key === 'End') {
                e.preventDefault();
                handleCategorySelect(CATEGORIES[CATEGORIES.length - 1].id);
                document.getElementById(`cat-tab-${CATEGORIES[CATEGORIES.length - 1].id}`)?.focus();
              }
            }}
            className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`cat-tab-${cat.id}`}
                role="tab"
                tabIndex={selectedCategory === cat.id ? 0 : -1}
                aria-selected={selectedCategory === cat.id}
                aria-label={`${cat.name} kategorisi`}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F172A] text-white shadow-sm border border-[#0F172A]'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Screen reader live announcer for filtering */}
          <div role="status" aria-live="polite" className="sr-only">
            {filteredProducts.length} adet NFC kart ürünü listeleniyor.
          </div>

          {/* Sort & Refresh Selector */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            {/* Quick Refresh Demo Trigger */}
            <button
              onClick={handleManualRefresh}
              aria-label="Kataloğu yenile"
              title="Kataloğu Yenile (Yükleme İskeletini Gör)"
              className="p-1.5 bg-white border border-[#E2E8F0] rounded-lg text-[#64748B] hover:text-[#1D4ED8] hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-2xs flex items-center justify-center focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isTransitioning ? 'animate-spin text-[#1D4ED8]' : ''}`} aria-hidden="true" />
            </button>

            <ArrowUpDown className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
            <label htmlFor="product-sort-select" className="text-xs text-[#64748B] font-medium cursor-pointer">
              Sırala:
            </label>
            <select
              id="product-sort-select"
              aria-label="Ürün sıralama ölçütü"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as any)}
              className="px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#0F172A] focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8] cursor-pointer shadow-2xs"
            >
              <option value="featured">Öne Çıkanlar</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </div>

        {/* Product Grid or Skeleton Loading State */}
        {isLoading || isTransitioning ? (
          <ProductCatalogSkeleton count={filteredProducts.length > 0 ? Math.min(6, Math.max(3, filteredProducts.length)) : 6} />
        ) : filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-xs">
            <p className="text-base font-bold text-[#0F172A]">Aramanıza uygun ürün bulunamadı</p>
            <p className="text-xs text-[#64748B] mt-1">
              Farklı bir arama terimi deneyebilir veya filtreyi temizleyebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2563EB] text-white text-xs font-bold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Tüm Ürünleri Göster
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-200">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickCustomize={onQuickCustomize}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
