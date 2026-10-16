import React, { useState } from 'react';
import { CorporateInquiry } from '../types';
import { 
  Building2, 
  Users, 
  Send, 
  CheckCircle2, 
  Palette, 
  ShieldCheck,
  Check
} from 'lucide-react';

export const CorporateSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<CorporateInquiry>({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    quantity: 20,
    materialPreference: 'pvc',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Ad Soyad gereklidir.';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errs.workEmail = 'Lütfen geçerli bir kurumsal e-posta giriniz.';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Şirket unvanı gereklidir.';
    if (!formData.phone.trim()) errs.phone = 'Telefon numarası gereklidir.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <section id="kurumsal" className="py-24 bg-white text-[#0F172A] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2563EB]">
            Kurumsal & Toplu Çözümler
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2 tracking-tight">
            Şirketiniz & Mağazalarınız İçin Toplu NFC Kartlar
          </h2>
          <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
            Kafe zincirleri, oteller, mağazalar, klinikler ve kurumsal firmalar için şirket logonuzla hazırlanmış toptan NFC kart ve masa standı çözümleri.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-card hover:shadow-soft-hover hover:border-[#CBD5E1] transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2">Özel Kurumsal Logo Baskısı</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Markanızın kurumsal renk kodlarında yüksek çözünürlüklü endüstriyel UV baskı ve çizilmez koruma laminasyonu.
            </p>
          </div>

          <div className="p-7 bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-card hover:shadow-soft-hover hover:border-[#CBD5E1] transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 border border-teal-100">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2">Çoklu Şube & Masa Yönetimi</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Tüm şubelerinizin masalarına veya personellerine özel numaralandırılmış, hazır kodlanmış NFC kartlar.
            </p>
          </div>

          <div className="p-7 bg-white rounded-3xl border border-[#E2E8F0] shadow-soft-card hover:shadow-soft-hover hover:border-[#CBD5E1] transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2">Toptan Fiyat Avantajı</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Toplu siparişlerde kurumsal faturalandırma, numune onayı ve %35'e varan toptan iskonto desteği.
            </p>
          </div>
        </div>

        {/* Streamlined Quotation / Request Form */}
        <div className="max-w-2xl mx-auto bg-white text-[#0F172A] p-8 sm:p-10 rounded-3xl shadow-soft-hover border border-[#E2E8F0]">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Talebiniz Başarıyla Alındı!
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] max-w-md mx-auto leading-relaxed">
                Kurumsal temsilcimiz en geç <strong>2 iş saati</strong> içinde{' '}
                <strong className="text-[#0F172A]">{formData.workEmail}</strong> adresinize toplu fiyat teklif tablosunu ve örnek şablonları iletecektir.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 bg-[#2563EB] text-white text-xs font-bold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                Yeni Teklif Talebi Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-2">
                <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                  Kurumsal Fiyat Teklifi ve Numune Talep Edin
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  İhtiyacınız olan adedi belirtin, markanıza özel teklifimizi hazırlayalım.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div>
                  <label htmlFor="corp-fullname" className="block text-xs font-bold text-[#334155] mb-1">
                    Adınız Soyadınız *
                  </label>
                  <input
                    id="corp-fullname"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'corp-err-fullname' : undefined}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Örn: Burak Özdemir"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border rounded-xl text-[#0F172A] focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 ${
                      errors.fullName ? 'border-[#DC2626] focus-visible:ring-[#DC2626]' : 'border-[#E2E8F0] focus-visible:border-[#2563EB] focus-visible:ring-[#2563EB]'
                    }`}
                  />
                  {errors.fullName && <p id="corp-err-fullname" role="alert" className="text-[11px] text-[#DC2626] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="corp-email" className="block text-xs font-bold text-[#334155] mb-1">
                    Kurumsal E-posta *
                  </label>
                  <input
                    id="corp-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.workEmail}
                    aria-describedby={errors.workEmail ? 'corp-err-email' : undefined}
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="sirketiniz@firma.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border rounded-xl text-[#0F172A] focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 ${
                      errors.workEmail ? 'border-[#DC2626] focus-visible:ring-[#DC2626]' : 'border-[#E2E8F0] focus-visible:border-[#2563EB] focus-visible:ring-[#2563EB]'
                    }`}
                  />
                  {errors.workEmail && <p id="corp-err-email" role="alert" className="text-[11px] text-[#DC2626] mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label htmlFor="corp-company" className="block text-xs font-bold text-[#334155] mb-1">
                    Şirket / Marka Adı *
                  </label>
                  <input
                    id="corp-company"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.companyName}
                    aria-describedby={errors.companyName ? 'corp-err-company' : undefined}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Örn: Espresso Bar A.Ş."
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border rounded-xl text-[#0F172A] focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 ${
                      errors.companyName ? 'border-[#DC2626] focus-visible:ring-[#DC2626]' : 'border-[#E2E8F0] focus-visible:border-[#2563EB] focus-visible:ring-[#2563EB]'
                    }`}
                  />
                  {errors.companyName && <p id="corp-err-company" role="alert" className="text-[11px] text-[#DC2626] mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label htmlFor="corp-phone" className="block text-xs font-bold text-[#334155] mb-1">
                    İrtibat Telefonu *
                  </label>
                  <input
                    id="corp-phone"
                    type="tel"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'corp-err-phone' : undefined}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0532 XXX XX XX"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border rounded-xl text-[#0F172A] focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 ${
                      errors.phone ? 'border-[#DC2626] focus-visible:ring-[#DC2626]' : 'border-[#E2E8F0] focus-visible:border-[#2563EB] focus-visible:ring-[#2563EB]'
                    }`}
                  />
                  {errors.phone && <p id="corp-err-phone" role="alert" className="text-[11px] text-[#DC2626] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="corp-message" className="block text-xs font-bold text-[#334155] mb-1">
                  Tahmini Kart Adedi & Tercih Ettiğiniz Modeller
                </label>
                <input
                  id="corp-message"
                  type="text"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Örn: 20 adet WhatsApp standı, 10 adet Instagram kartı"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#0F172A] focus:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                aria-label="Kurumsal teklif tablosunu ve detayları gönder"
                className="w-full py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#172554] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-soft-card cursor-pointer mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Teklif Tablosunu ve Detayları Gönder</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-[#64748B]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                  e-Arşiv & e-Fatura
                </span>
                <span>·</span>
                <span>Aynı Gün Teklif Dönüşü</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
