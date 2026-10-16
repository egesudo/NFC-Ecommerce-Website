import React from 'react';
import { Product } from '../types';
import { NfcCard360Viewer } from './NfcCard360Viewer';
import { 
  WikiHowWhatsAppLogo, 
  WikiHowInstagramLogo, 
  WikiHowGoogleLogo 
} from './WikiHowSocialLogos';
import { ArrowRight, RotateCw, Sparkles, Check, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickCustomize: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickCustomize,
}) => {
  const getCategoryLabel = () => {
    switch (product.cardType) {
      case 'whatsapp': return 'WhatsApp NFC';
      case 'instagram': return 'Instagram NFC';
      case 'google-review': return 'Google Yorum';
      default: return 'Akıllı NFC';
    }
  };

  return (
    <article 
      role="article"
      aria-labelledby={`product-title-${product.id}`}
      className="group bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 shadow-soft-card hover:shadow-soft-hover hover:-translate-y-1"
    >
      {/* Visual Slot: High-fidelity card view with 360° badge */}
      <div 
        role="button"
        tabIndex={0}
        aria-label={`${product.name} modelini 360 derece incelemek için tıklayın`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(product);
          }
        }}
        className="relative bg-[#F8FAFC] p-5 sm:p-6 flex flex-col items-center justify-center cursor-pointer overflow-hidden border-b border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1D4ED8]"
        onClick={() => onSelect(product)}
      >
        {/* Subtle radial backdrop for depth */}
        <div className="absolute inset-0 bg-radial from-white via-slate-100/50 to-transparent pointer-events-none" aria-hidden="true" />

        {/* Top Badges: Category Tag + 3D View Tag */}
        <div className="w-full flex items-center justify-between z-10 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold tracking-tight text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {getCategoryLabel()}
            </span>
            {product.badge && (
              <span className="text-[11px] font-bold tracking-tight text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {product.badge}
              </span>
            )}
          </div>

          {/* 360 3D View Tag */}
          <span className="text-[10px] font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
            <RotateCw className="w-3 h-3 text-[#1D4ED8]" aria-hidden="true" />
            <span>3D İncele</span>
          </span>
        </div>

        {/* Realistic Card Graphic in 3D */}
        <div className="w-full max-w-[260px] py-2 transition-transform duration-300 group-hover:scale-[1.03]">
          <NfcCard360Viewer
            cardType={product.cardType}
            material={product.material}
            showControls={false}
            autoRotateInit={false}
          />
        </div>

        {/* Hover hint */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-[10px] font-semibold text-slate-700 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs flex items-center gap-1">
            <RotateCw className="w-3 h-3 text-[#1D4ED8]" aria-hidden="true" />
            360° İncelemek İçin Tıklayın
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
            <span>{product.materialLabel}</span>
            <span aria-hidden="true">·</span>
            <span>NTAG216</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-semibold">Uygulama Gerekmez</span>
          </div>

          {/* Product Title (font-semibold, text-slate-900) */}
          <h3 
            id={`product-title-${product.id}`}
            className="text-base sm:text-lg font-semibold text-slate-900 leading-snug"
          >
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="text-left font-semibold text-slate-900 hover:text-[#1D4ED8] transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-md"
            >
              {product.name}
            </button>
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Dimensions and Specs */}
          <div className="mt-3 text-[11px] text-slate-500 flex items-center gap-2">
            <span>{product.dimensions}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-medium">Hemen Teslimat</span>
          </div>
        </div>

        {/* Price & Full-Width Action Row (E-commerce Standard) */}
        <div className="pt-4 mt-5 border-t border-slate-200">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900 tabular-nums">
                  ₺{product.price.toLocaleString('tr-TR')}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through tabular-nums">
                    ₺{product.originalPrice.toLocaleString('tr-TR')}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium">
                KDV Dahil · Sabit Fiyat
              </span>
            </div>

            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
              500 ₺ Üzeri Ücretsiz Kargo
            </span>
          </div>

          {/* Full-width "İncele & Özelleştir" primary button */}
          <button
            onClick={() => onSelect(product)}
            aria-label={`${product.name} modelini incele ve siparişi özelleştir, fiyat ₺${product.price}`}
            className="w-full py-3 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4ED8]"
          >
            <span>İncele & Özelleştir</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
