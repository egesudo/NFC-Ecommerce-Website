import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { NfcCard360Viewer } from './NfcCard360Viewer';
import { ProductDetailSkeleton } from './LoadingSkeletons';
import { 
  WikiHowWhatsAppLogo, 
  WikiHowInstagramLogo, 
  WikiHowGoogleLogo 
} from './WikiHowSocialLogos';
import { useCart } from '../context/CartContext';
import { 
  X, 
  Check, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Cpu, 
  RotateCw, 
  ShoppingBag,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomizer: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenCustomizer,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');
  const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen && product) {
      setIsLoadingDetail(true);
      const timer = setTimeout(() => {
        setIsLoadingDetail(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, product?.id]);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleDirectAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-hover w-full max-w-5xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
            <span>Ürünler</span>
            <span aria-hidden="true">/</span>
            <span>{product.materialLabel}</span>
            <span aria-hidden="true">/</span>
            <span id="product-detail-modal-title" className="text-[#0F172A] font-bold">{product.name}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Ürün detay penceresini kapat"
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content Body: PDP Layout or Skeleton */}
        {isLoadingDetail ? (
          <ProductDetailSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto animate-in fade-in duration-200">
            {/* Left Column: 360-Degree 3D Interactive Product Showcase */}
            <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <div className="my-auto flex flex-col items-center w-full">
              {/* Badge & 360 Callout */}
              <div className="flex items-center gap-2 mb-2">
                {product.badge && (
                  <span className="text-xs font-bold text-[#0F172A] bg-white px-3 py-1 rounded-full border border-[#E2E8F0] shadow-2xs">
                    {product.badge}
                  </span>
                )}
                <span className="text-xs font-bold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200 shadow-2xs flex items-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5 text-[#2563EB] animate-spin [animation-duration:10s]" />
                  <span>360° Etkileşimli 3D Görünüm</span>
                </span>
              </div>

              {/* 360 3D Viewer */}
              <div className="w-full max-w-[340px]">
                <NfcCard360Viewer
                  cardType={product.cardType}
                  material={product.material}
                  showControls={true}
                  autoRotateInit={false}
                />
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-[#E2E8F0] text-center">
              <div className="p-2.5 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs">
                <Cpu className="w-4 h-4 mx-auto text-[#2563EB] mb-1" />
                <p className="text-[10px] text-[#64748B]">Çip Mimarisi</p>
                <p className="text-xs font-bold text-[#0F172A] truncate">NTAG216</p>
              </div>
              <div className="p-2.5 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs">
                <Layers className="w-4 h-4 mx-auto text-[#2563EB] mb-1" />
                <p className="text-[10px] text-[#64748B]">Gövde Yapısı</p>
                <p className="text-xs font-bold text-[#0F172A] truncate">{product.materialLabel}</p>
              </div>
              <div className="p-2.5 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs">
                <ShieldCheck className="w-4 h-4 mx-auto text-[#059669] mb-1" />
                <p className="text-[10px] text-[#64748B]">Güvence</p>
                <p className="text-xs font-bold text-[#0F172A] truncate">Birebir Değişim</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Title & Fixed Retail Price (₺600) */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {product.cardType === 'whatsapp' && (
                    <WikiHowWhatsAppLogo className="w-10 h-10 border border-[#E2E8F0] shadow-2xs" />
                  )}
                  {product.cardType === 'instagram' && (
                    <WikiHowInstagramLogo className="w-10 h-10 border border-[#E2E8F0] shadow-2xs" />
                  )}
                  {product.cardType === 'google-review' && (
                    <WikiHowGoogleLogo className="w-10 h-10 border border-[#E2E8F0] shadow-2xs" />
                  )}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                      Doğrudan Yönlendirme
                    </span>
                    <p className="text-xs text-[#64748B]">NFC Çip & QR Kod Destekli</p>
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-[#64748B] mt-1 font-medium">
                  {product.subtitle}
                </p>

                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-3xl font-extrabold text-[#0F172A] tabular-nums">
                    ₺{product.price.toLocaleString('tr-TR')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#94A3B8] line-through tabular-nums">
                      ₺{product.originalPrice.toLocaleString('tr-TR')}
                    </span>
                  )}
                  <span className="text-xs text-[#059669] font-bold bg-[#ECFDF5] px-2.5 py-0.5 rounded-md border border-[#A7F3D0]">
                    KDV Dahil Perakende
                  </span>
                </div>
              </div>

              {/* Tabs: Overview & Specs */}
              <div className="border-b border-[#E2E8F0]">
                <div 
                  role="tablist"
                  aria-label="Ürün Bilgileri"
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                      e.preventDefault();
                      const nextTab = activeTab === 'overview' ? 'specs' : 'overview';
                      setActiveTab(nextTab);
                      document.getElementById(`pdp-tab-${nextTab}`)?.focus();
                    }
                  }}
                  className="flex gap-4"
                >
                  <button
                    type="button"
                    id="pdp-tab-overview"
                    role="tab"
                    tabIndex={activeTab === 'overview' ? 0 : -1}
                    aria-selected={activeTab === 'overview'}
                    aria-controls="pdp-panel-overview"
                    onClick={() => setActiveTab('overview')}
                    className={`pb-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      activeTab === 'overview'
                        ? 'border-[#2563EB] text-[#2563EB]'
                        : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Genel Bakış & Avantajlar
                  </button>
                  <button
                    type="button"
                    id="pdp-tab-specs"
                    role="tab"
                    tabIndex={activeTab === 'specs' ? 0 : -1}
                    aria-selected={activeTab === 'specs'}
                    aria-controls="pdp-panel-specs"
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      activeTab === 'specs'
                        ? 'border-[#2563EB] text-[#2563EB]'
                        : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Teknik Detaylar
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="text-xs text-[#334155] leading-relaxed min-h-[140px]">
                {activeTab === 'overview' && (
                  <div 
                    id="pdp-panel-overview"
                    role="tabpanel"
                    aria-labelledby="pdp-tab-overview"
                    className="space-y-3"
                  >
                    <p>{product.longDescription}</p>
                    <ul className="space-y-2 pt-1">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div 
                    id="pdp-panel-specs"
                    role="tabpanel"
                    aria-labelledby="pdp-tab-specs"
                    className="divide-y divide-[#E2E8F0]"
                  >
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between">
                        <span className="text-[#64748B]">{s.label}</span>
                        <span className="font-semibold text-[#0F172A] text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-bold text-[#334155]">Adet:</span>
                <div className="flex items-center border border-[#E2E8F0] rounded-xl overflow-hidden bg-white shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Sipariş adedini 1 azalt"
                    className="px-3 py-1 text-[#334155] hover:bg-[#F1F5F9] font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                  >
                    -
                  </button>
                  <span 
                    aria-label={`Mevcut adet: ${quantity}`}
                    className="px-3.5 py-1 text-xs font-bold text-[#0F172A] tabular-nums"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                    aria-label="Sipariş adedini 1 arttır"
                    className="px-3 py-1 text-[#334155] hover:bg-[#F1F5F9] font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#059669] font-medium">
                  Stokta: {product.stockCount} adet mevcut
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#E2E8F0] space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCustomizer(product);
                }}
                className="w-full py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Kart Bilgilerini Özelleştir & Sepete Ekle</span>
              </button>

              <button
                type="button"
                onClick={handleDirectAddToCart}
                className="w-full py-3 px-4 bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#2563EB]" />
                <span>Standart Olarak Sepete Ekle (₺{(product.price * quantity).toLocaleString('tr-TR')})</span>
              </button>

              {/* Free delivery & return notice */}
              <div className="pt-3 grid grid-cols-2 gap-2 text-[11px] text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>500 ₺ üzeri ücretsiz kargo</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>14 gün koşulsuz iade güvencesi</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
