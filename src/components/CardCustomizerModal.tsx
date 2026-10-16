import React, { useState } from 'react';
import { Product } from '../types';
import { NfcCard360Viewer } from './NfcCard360Viewer';
import { useCart } from '../context/CartContext';
import { X, Check, ShieldCheck, Sparkles, ShoppingBag, RotateCw } from 'lucide-react';

interface CardCustomizerModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const CardCustomizerModal: React.FC<CardCustomizerModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { addToCart } = useCart();
  const [name, setName] = useState(
    product.cardType === 'whatsapp'
      ? 'Kahve & Bistro İstanbul'
      : product.cardType === 'instagram'
      ? 'Moda Boutique'
      : 'Lezzet Dünyası Restoran'
  );
  const [handle, setHandle] = useState(
    product.cardType === 'whatsapp'
      ? '+90 532 555 0192'
      : product.cardType === 'instagram'
      ? 'genzbilisim.tr'
      : 'https://maps.google.com/...'
  );
  const [customMessage, setCustomMessage] = useState('Merhaba, menü ve rezervasyon hakkında bilgi almak istiyorum.');
  const [quantity, setQuantity] = useState(1);
  const [includeQr, setIncludeQr] = useState(true);

  // Close modal on Escape key press
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, quantity, {
      customName: name.trim() || undefined,
      customHandle: handle.trim() || undefined,
      customMessage: customMessage.trim() || undefined,
      includeQr,
    });
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-hover w-full max-w-4xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                360° Canlı Önizlemeli Kişiselleştirme
              </span>
              <span className="text-[10px] bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded-full font-semibold border border-blue-200">
                Perakende Fiyat: 600 TL
              </span>
            </div>
            <h3 id="customizer-modal-title" className="text-lg font-bold text-[#0F172A] leading-tight mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Kişiselleştirme penceresini kapat"
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left: 360-degree Interactive Card Live Preview */}
          <div className="lg:col-span-6 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs font-semibold text-[#334155] mb-2 flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-[#2563EB]" />
                360° Döndürmek İçin Kartı Çekin
              </span>

              <div className="w-full max-w-[300px]">
                <NfcCard360Viewer
                  cardType={product.cardType}
                  material={product.material}
                  customName={name}
                  customHandle={handle}
                  showControls={true}
                  autoRotateInit={false}
                />
              </div>
            </div>

            <p className="text-[11px] text-[#64748B] mt-4 text-center max-w-[280px]">
              Kart üzerindeki bilgiler üretim aşamasında kalıcı UV baskı ve lazer kazıma ile işlenir.
            </p>
          </div>

          {/* Right: Customization Form tailored to card type */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <form onSubmit={handleAddToCart} className="space-y-4">
              <div>
                <label htmlFor="customizer-name-input" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                  {product.cardType === 'whatsapp'
                    ? 'İşletme / Mağaza Adınız'
                    : product.cardType === 'instagram'
                    ? 'Sayfa / Marka Adınız'
                    : 'İşletme / Kurum Adı'} *
                </label>
                <input
                  id="customizer-name-input"
                  type="text"
                  required
                  aria-required="true"
                  maxLength={40}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Örn: Butik Kahve & Bakery"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]/20 focus-visible:border-[#2563EB] transition-all font-medium text-[#0F172A]"
                />
              </div>

              <div>
                <label htmlFor="customizer-handle-input" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                  {product.cardType === 'whatsapp'
                    ? 'Bağlanacak WhatsApp Telefon Numarası *'
                    : product.cardType === 'instagram'
                    ? 'Instagram Kullanıcı Adınız (@) *'
                    : 'Google Haritalar İşletme Linki *'}
                </label>
                <input
                  id="customizer-handle-input"
                  type="text"
                  required
                  aria-required="true"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder={
                    product.cardType === 'whatsapp'
                      ? '0532 XXX XX XX'
                      : product.cardType === 'instagram'
                      ? 'ornek.butik'
                      : 'Google Harita işletme paylaşım linkiniz'
                  }
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]/20 focus-visible:border-[#2563EB] transition-all font-medium text-[#0F172A]"
                />
              </div>

              {product.cardType === 'whatsapp' && (
                <div>
                  <label htmlFor="customizer-msg-input" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                    Önceden Yazılı Hazır Müşteri Mesajı
                  </label>
                  <textarea
                    id="customizer-msg-input"
                    rows={2}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Müşteri dokundurduğunda otomatik yazılan mesaj..."
                    className="w-full px-3.5 py-2 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]/20 focus-visible:border-[#2563EB] transition-all text-[#0F172A]"
                  />
                  <p className="text-[10px] text-[#64748B] mt-0.5">
                    Müşteri kartı okuttuğunda WhatsApp sohbetinde bu mesaj hazır olarak belirir.
                  </p>
                </div>
              )}

              {/* QR Code Option */}
              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <label htmlFor="customizer-qr-checkbox" className="text-xs font-bold text-[#0F172A] cursor-pointer block">
                    Arka Yüzde Yedekleme QR Kodu
                  </label>
                  <p className="text-[10px] text-[#64748B]">
                    Eski telefon modelleri için kamera ile taranabilen lazer kod.
                  </p>
                </div>
                <input
                  id="customizer-qr-checkbox"
                  type="checkbox"
                  checked={includeQr}
                  onChange={(e) => setIncludeQr(e.target.checked)}
                  className="w-4 h-4 text-[#2563EB] rounded-md focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
                />
              </div>

              {/* Quantity Stepper & Price (600 TL) */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#334155]">Adet:</span>
                  <div className="flex items-center border border-[#E2E8F0] rounded-lg overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Özelleştirilmiş kart adedini 1 azalt"
                      className="px-2.5 py-1 text-[#334155] hover:bg-[#F1F5F9] font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                    >
                      -
                    </button>
                    <span 
                      aria-label={`Mevcut adet: ${quantity}`}
                      className="px-3 py-1 text-xs font-bold text-[#0F172A] tabular-nums"
                    >
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                      aria-label="Özelleştirilmiş kart adedini 1 arttır"
                      className="px-2.5 py-1 text-[#334155] hover:bg-[#F1F5F9] font-bold transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#64748B]">Sabit Fiyat:</span>
                  <p className="text-2xl font-extrabold text-[#0F172A] tabular-nums leading-none">
                    ₺{(product.price * quantity).toLocaleString('tr-TR')}
                  </p>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                aria-label={`Kişiselleştirilmiş kartı sepete ekle, toplam ₺${product.price * quantity}`}
                className="w-full mt-4 py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              >
                <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                <span>Kişiselleştirilmiş Kartı Sepete Ekle</span>
              </button>
            </form>

            <div className="pt-3 mt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                Özel programlama & lazer dahil
              </span>
              <span className="text-[#059669] font-semibold">1-2 Günde Kargoda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
