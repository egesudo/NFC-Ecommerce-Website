import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { NfcCard360Viewer } from './NfcCard360Viewer';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Tag, 
  Check, 
  AlertCircle 
} from 'lucide-react';

interface CartDrawerProps {
  onStartCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onStartCheckout }) => {
  const {
    items,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shippingCost,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    total,
    appliedPromoCode,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Close drawer on Escape key press
  React.useEffect(() => {
    if (!isCartDrawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartDrawerOpen, closeCartDrawer]);

  if (!isCartDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const result = applyPromoCode(promoInput);
    if (result.success) {
      setPromoFeedback({ type: 'success', text: result.message });
      setPromoInput('');
    } else {
      setPromoFeedback({ type: 'error', text: result.message });
    }
  };

  const freeShippingProgressPercent = Math.min(
    100,
    Math.round(((subtotal - discount) / freeShippingThreshold) * 100)
  );

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xs transition-opacity"
        onClick={closeCartDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
              <h2 id="cart-drawer-title" className="text-base font-bold text-[#0F172A]">
                Alışveriş Sepeti ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCartDrawer}
              aria-label="Alışveriş sepetini kapat"
              className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-[#334155]">
                <Truck className="w-3.5 h-3.5 text-[#2563EB]" />
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-[#059669] font-bold">Harika! Ücretsiz Kargo Kazandınız</span>
                ) : (
                  <span>
                    Ücretsiz kargo için <strong className="text-[#0F172A]">₺{amountNeededForFreeShipping}</strong> daha ekleyin
                  </span>
                )}
              </span>
              <span className="text-[#64748B] font-mono text-[11px]">
                {freeShippingProgressPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2563EB] transition-all duration-300"
                style={{ width: `${freeShippingProgressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List or Empty State */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E2E8F0]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">Sepetiniz Boş</h3>
                  <p className="text-xs text-[#64748B] mt-1 max-w-[240px]">
                    Kartınızı seçip kişiselleştirerek hemen sipariş verebilirsiniz.
                  </p>
                </div>
                <button
                  onClick={closeCartDrawer}
                  className="px-4 py-2 bg-[#2563EB] text-white text-xs font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Ürünleri Keşfet
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  {/* Miniature Card Preview */}
                  <div className="w-18 shrink-0">
                    <NfcCard360Viewer
                      cardType={item.product.cardType}
                      material={item.product.material}
                      customName={item.customName}
                      showControls={false}
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-[#0F172A] leading-snug line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`${item.product.name} ürününü sepetten sil`}
                          className="text-[#94A3B8] hover:text-[#DC2626] transition-colors cursor-pointer p-1 rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
                          title="Ürünü sil"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Custom metadata labels */}
                      <div className="text-[11px] text-[#64748B] mt-0.5 space-y-0.5">
                        {item.customName && (
                          <p>
                            Baskı İsim: <strong className="text-[#334155]">{item.customName}</strong>
                          </p>
                        )}
                        {item.customTitle && (
                          <p className="truncate">
                            Ünvan: <span className="text-[#334155]">{item.customTitle}</span>
                          </p>
                        )}
                        <p>
                          Materyal: <span>{item.product.materialLabel}</span>
                        </p>
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between pt-2 mt-2">
                      <div className="flex items-center border border-[#E2E8F0] rounded-lg overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Adedi 1 azalt: ${item.product.name}`}
                          className="px-2 py-0.5 text-[#334155] hover:bg-[#F1F5F9] font-bold text-xs transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                        >
                          -
                        </button>
                        <span 
                          aria-label={`Mevcut adet ${item.quantity}`} 
                          className="px-2.5 py-0.5 text-xs font-bold text-[#0F172A] tabular-nums"
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Adedi 1 arttır: ${item.product.name}`}
                          className="px-2 py-0.5 text-[#334155] hover:bg-[#F1F5F9] font-bold text-xs transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#0F172A] tabular-nums">
                        ₺{(item.unitPrice * item.quantity).toLocaleString('tr-TR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary (only if items present) */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E2E8F0] bg-[#F8FAFC] space-y-4">
              {/* Promo Code Form */}
              <div>
                {appliedPromoCode ? (
                  <div className="flex items-center justify-between bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-2 rounded-xl text-xs text-[#059669]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Tag className="w-3.5 h-3.5 text-[#059669]" />
                      Kupon: <strong>{appliedPromoCode}</strong> (-₺{discount})
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-xs text-[#DC2626] hover:underline font-semibold cursor-pointer"
                    >
                      Kaldır
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      aria-label="İndirim kupon kodu girin"
                      placeholder="İndirim Kodu (örn: TAPTİK10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] focus-visible:outline-hidden focus-visible:border-[#2563EB] focus-visible:ring-1 focus-visible:ring-[#2563EB] uppercase"
                    />
                    <button
                      type="submit"
                      aria-label="Kupon kodunu uygula"
                      className="px-3.5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      Uygula
                    </button>
                  </form>
                )}

                {promoFeedback && (
                  <p
                    role="alert"
                    className={`text-[11px] mt-1.5 flex items-center gap-1 ${
                      promoFeedback.type === 'success' ? 'text-[#059669]' : 'text-[#DC2626]'
                    }`}
                  >
                    {promoFeedback.type === 'success' ? (
                      <Check className="w-3 h-3" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    )}
                    {promoFeedback.text}
                  </p>
                )}
              </div>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-[#64748B] border-t border-[#E2E8F0] pt-3">
                <div className="flex justify-between">
                  <span>Ara Toplam</span>
                  <span className="font-semibold text-[#0F172A] tabular-nums">
                    ₺{subtotal.toLocaleString('tr-TR')}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#059669] font-medium">
                    <span>Kupon İndirimi</span>
                    <span className="tabular-nums">-₺{discount.toLocaleString('tr-TR')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Kargo Ücreti</span>
                  <span className="font-semibold tabular-nums">
                    {shippingCost === 0 ? (
                      <span className="text-[#059669] font-bold">Ücretsiz</span>
                    ) : (
                      `₺${shippingCost}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#0F172A] pt-2 border-t border-[#E2E8F0]">
                  <span>Genel Toplam</span>
                  <span className="tabular-nums text-lg">₺{total.toLocaleString('tr-TR')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  closeCartDrawer();
                  onStartCheckout();
                }}
                aria-label={`Siparişi tamamla ve ödeme adımına geç, genel toplam ₺${total}`}
                className="w-full py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              >
                <span>Siparişi Tamamla</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <p className="text-[10px] text-center text-[#64748B]">
                256-Bit SSL Şifreli Güvenli Ödeme Altyapısı
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
