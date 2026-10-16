import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { DeliveryAddress, Order } from '../types';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  Truck, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Copy, 
  Check,
  AlertCircle
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, discount, shippingCost, total, clearCart } = useCart();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'bank_transfer' | 'cod'>('credit_card');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Form State
  const [address, setAddress] = useState<DeliveryAddress>({
    fullName: '',
    email: '',
    phone: '',
    city: 'İstanbul',
    district: '',
    address: '',
    postalCode: '',
    orderNotes: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Close checkout modal on Escape key press
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

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!address.fullName.trim() || address.fullName.trim().length < 3) {
      errors.fullName = 'Lütfen geçerli bir ad ve soyad giriniz.';
    }
    if (!address.email.trim() || !address.email.includes('@')) {
      errors.email = 'Lütfen geçerli bir e-posta adresi giriniz.';
    }
    if (!address.phone.trim() || address.phone.trim().length < 10) {
      errors.phone = 'Lütfen en az 10 haneli telefon numarası giriniz.';
    }
    if (!address.district.trim()) {
      errors.district = 'İlçe zorunludur.';
    }
    if (!address.address.trim() || address.address.trim().length < 10) {
      errors.address = 'Lütfen mahalle, cadde, sokak ve kapı no içeren açık adres giriniz.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate unique order ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderId = `GZB-${randomSuffix}`;

    const newOrder: Order = {
      id: orderId,
      items: [...items],
      subtotal,
      shippingCost,
      discount,
      total,
      address,
      paymentMethod,
      paymentStatus: 'mock_completed',
      createdAt: new Date().toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setCompletedOrder(newOrder);
    setStep('success');
    clearCart();
  };

  const handleCopyOrderId = () => {
    if (!completedOrder) return;
    navigator.clipboard.writeText(completedOrder.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-4xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span id="checkout-modal-title" className="text-sm font-bold text-slate-900">
              {step === 'form' ? 'Güvenli Sipariş & Teslimat Bilgileri' : 'Siparişiniz Alındı!'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Ödeme penceresini kapat"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    1. İletişim & Alıcı Bilgileri
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-fullname" className="block text-xs font-semibold text-slate-700 mb-1">
                        Ad Soyad *
                      </label>
                      <input
                        id="chk-fullname"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors.fullName}
                        aria-describedby={formErrors.fullName ? 'chk-err-fullname' : undefined}
                        value={address.fullName}
                        onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                        placeholder="Örn: Mehmet Yılmaz"
                        className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 transition-all ${
                          formErrors.fullName ? 'border-rose-400 focus-visible:ring-rose-500' : 'border-slate-300 focus-visible:ring-blue-500'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p id="chk-err-fullname" role="alert" className="text-[11px] text-rose-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="chk-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        E-posta (Sipariş Takibi İçin) *
                      </label>
                      <input
                        id="chk-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'chk-err-email' : undefined}
                        value={address.email}
                        onChange={(e) => setAddress({ ...address, email: e.target.value })}
                        placeholder="adiniz@sirketiniz.com"
                        className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 transition-all ${
                          formErrors.email ? 'border-rose-400 focus-visible:ring-rose-500' : 'border-slate-300 focus-visible:ring-blue-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p id="chk-err-email" role="alert" className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="chk-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Cep Telefonu (Kargo Bildirimi) *
                      </label>
                      <input
                        id="chk-phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? 'chk-err-phone' : undefined}
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        placeholder="0532 XXX XX XX"
                        className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 transition-all ${
                          formErrors.phone ? 'border-rose-400 focus-visible:ring-rose-500' : 'border-slate-300 focus-visible:ring-blue-500'
                        }`}
                      />
                      {formErrors.phone && (
                        <p id="chk-err-phone" role="alert" className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    2. Teslimat Adresi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="chk-city" className="block text-xs font-semibold text-slate-700 mb-1">Şehir *</label>
                      <select
                        id="chk-city"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-blue-500"
                      >
                        <option value="İstanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="İzmir">İzmir</option>
                        <option value="Bursa">Bursa</option>
                        <option value="Antalya">Antalya</option>
                        <option value="Kocaeli">Kocaeli</option>
                        <option value="Eskişehir">Eskişehir</option>
                        <option value="Diğer">Diğer İller</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="chk-district" className="block text-xs font-semibold text-slate-700 mb-1">İlçe *</label>
                      <input
                        id="chk-district"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors.district}
                        aria-describedby={formErrors.district ? 'chk-err-district' : undefined}
                        value={address.district}
                        onChange={(e) => setAddress({ ...address, district: e.target.value })}
                        placeholder="Örn: Beşiktaş / Çankaya"
                        className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 transition-all ${
                          formErrors.district ? 'border-rose-400 focus-visible:ring-rose-500' : 'border-slate-300 focus-visible:ring-blue-500'
                        }`}
                      />
                      {formErrors.district && (
                        <p id="chk-err-district" role="alert" className="text-[11px] text-rose-600 mt-1">{formErrors.district}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="chk-address" className="block text-xs font-semibold text-slate-700 mb-1">
                        Açık Teslimat Adresi *
                      </label>
                      <textarea
                        id="chk-address"
                        rows={2}
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors.address}
                        aria-describedby={formErrors.address ? 'chk-err-address' : undefined}
                        value={address.address}
                        onChange={(e) => setAddress({ ...address, address: e.target.value })}
                        placeholder="Mahalle, cadde, sokak, bina ve daire no"
                        className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:bg-white focus-visible:outline-hidden focus-visible:ring-1 transition-all ${
                          formErrors.address ? 'border-rose-400 focus-visible:ring-rose-500' : 'border-slate-300 focus-visible:ring-blue-500'
                        }`}
                      />
                      {formErrors.address && (
                        <p id="chk-err-address" role="alert" className="text-[11px] text-rose-600 mt-1">{formErrors.address}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <fieldset>
                  <legend className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    3. Ödeme Tercihi
                  </legend>
                  <div className="space-y-2">
                    <label
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        paymentMethod === 'credit_card'
                          ? 'border-blue-600 bg-blue-50/40 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit_card"
                          checked={paymentMethod === 'credit_card'}
                          onChange={() => setPaymentMethod('credit_card')}
                          className="w-4 h-4 text-blue-600 cursor-pointer"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Kredi / Banka Kartı (Taksit & Tek Çekim)
                          </p>
                          <p className="text-[11px] text-slate-500">
                            3D Secure ile korumalı, anında onaylanan ödeme
                          </p>
                        </div>
                      </div>
                      <CreditCard className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        paymentMethod === 'bank_transfer'
                          ? 'border-blue-600 bg-blue-50/40 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank_transfer"
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={() => setPaymentMethod('bank_transfer')}
                          className="w-4 h-4 text-blue-600 cursor-pointer"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Havale / EFT ile Ödeme (%3 Ek İndirim)
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Garanti BBVA / İş Bankası / Yapı Kredi
                          </p>
                        </div>
                      </div>
                      <Building2 className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-blue-600 bg-blue-50/40 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="w-4 h-4 text-blue-600 cursor-pointer"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Kapıda Ödeme (Nakit veya Kredi Kartı)
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Teslimat anında kargo kuryesine ödeme imkanı
                          </p>
                        </div>
                      </div>
                      <Truck className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </label>
                  </div>
                </fieldset>

                {/* Integration boundary notice */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Ödeme Ağ Geçidi Entegrasyon Sınırı:</strong> Canlı sipariş işlemleri için Iyzico / PayTR API anahtarları tanımlandığında kart provizyonu doğrudan banka 3D ekranına yönlendirilir. Şu online demo sipariş akışı test edilmektedir.
                    </div>
                  </div>
                </div>

              {/* Right Column: Order Summary & Confirmation CTA */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Sipariş Özeti ({items.reduce((acc, i) => acc + i.quantity, 0)} Ürün)
                  </h3>

                  <div className="divide-y divide-slate-200/70 max-h-56 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="py-2.5 flex justify-between gap-3 text-xs">
                        <div className="min-w-0">
                          <p className="font-bold text-slate-900 truncate">{item.product.name}</p>
                          <p className="text-[11px] text-slate-500">
                            {item.quantity} adet · {item.customName ? `İsim: ${item.customName}` : 'Standart'}
                          </p>
                        </div>
                        <span className="font-semibold text-slate-900 tabular-nums shrink-0">
                          ₺{(item.unitPrice * item.quantity).toLocaleString('tr-TR')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Ara Toplam</span>
                      <span className="tabular-nums font-semibold text-slate-800">
                        ₺{subtotal.toLocaleString('tr-TR')}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>İndirim Tutarı</span>
                        <span className="tabular-nums">-₺{discount.toLocaleString('tr-TR')}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Kargo</span>
                      <span className="tabular-nums font-semibold">
                        {shippingCost === 0 ? <span className="text-emerald-600 font-bold">Ücretsiz</span> : `₺${shippingCost}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-200">
                      <span>Ödenecek Tutar</span>
                      <span className="tabular-nums text-lg">₺{total.toLocaleString('tr-TR')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    aria-label={`Siparişi onayla ve tamamla, ödenecek tutar ₺${total}`}
                    className="w-full py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
                  >
                    <span>Siparişi Onayla & Tamamla</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <p className="text-[10px] text-center text-[#64748B] mt-2">
                    "Siparişi Onayla" butonuna basarak Mesafeli Satış Sözleşmesi'ni kabul etmiş olursunuz.
                  </p>
                </div>
              </div>
            </form>
          ) : (
            /* Order Success State */
            <div className="py-8 max-w-lg mx-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#059669]">
                  Tebrikler, Siparişiniz Başarıyla Alındı!
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F172A] mt-1">
                  Kartınız Hazırlanmaya Başladı
                </h3>
                <p className="text-xs text-[#334155] mt-2 leading-relaxed">
                  Sipariş detaylarınız ve kargo takip bilgilendirmesi{' '}
                  <strong className="text-[#0F172A]">{completedOrder?.address.email}</strong> adresine gönderildi.
                </p>
              </div>

              {/* Order Tracking Code Box */}
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] flex items-center justify-between text-left">
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#64748B]">Sipariş Takip Kodu</p>
                  <p className="text-base font-mono font-bold text-[#0F172A]">
                    {completedOrder?.id}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyOrderId}
                  aria-label="Sipariş takip kodunu panoya kopyala"
                  className="px-3 py-1.5 bg-white hover:bg-[#F1F5F9] text-[#0F172A] text-xs font-semibold rounded-lg border border-[#E2E8F0] flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Kodu Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              {/* Screen reader live notification for copy confirmation */}
              <div role="status" aria-live="polite" className="sr-only">
                {copiedId ? 'Sipariş kodu panoya kopyalandı' : ''}
              </div>

              {/* Order details summary */}
              <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Alıcı:</span>
                  <span className="font-semibold text-[#0F172A]">{completedOrder?.address.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Teslimat İli:</span>
                  <span className="font-semibold text-[#0F172A]">{completedOrder?.address.city} / {completedOrder?.address.district}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Tahmini Teslimat:</span>
                  <span className="font-semibold text-[#059669]">1 - 3 İş Günü</span>
                </div>
                <div className="flex justify-between border-t border-[#E2E8F0] pt-2">
                  <span className="text-[#64748B]">Toplam Ödenen:</span>
                  <span className="font-bold text-[#0F172A] tabular-nums">₺{completedOrder?.total.toLocaleString('tr-TR')}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Pencereyi kapat ve alışverişe devam et"
                className="w-full py-3 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              >
                Alışverişe Devam Et
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
