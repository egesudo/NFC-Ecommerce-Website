import React, { useState } from 'react';
import { Wifi, ShieldCheck, Lock, CreditCard, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  // Close policy modal on Escape key press
  React.useEffect(() => {
    if (!activePolicyModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePolicyModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePolicyModal]);

  const policies: { [key: string]: { title: string; content: string } } = {
    mesafeli: {
      title: 'Mesafeli Satış Sözleşmesi',
      content: `1. TARAFLAR
İşbu sözleşme, Gen Z Bilişim Akıllı Kart ve Stand Sistemleri (Satıcı) ile web sitesi üzerinden sipariş veren müşteri (Alıcı) arasında 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri doğrultusunda düzenlenmiştir.

2. SÖZLEŞMENİN KONUSU
Alıcı'nın Satıcı'ya ait internet sitesinden elektronik ortamda siparişini yaptığı akıllı NFC kartvizit ve stand ürününün satışı ve teslimi ile ilgili tarafların hak ve yükümlülükleridir.

3. TESLİMAT VE İADE
Standart stoklu ürünlerde 14 gün cayma hakkı mevcuttur. Kişiselleştirilmiş (üzerine özel işletme adı, telefon veya logo lazerle kazınmış) kartlar Tüketici Kanunu Madde 15/b uyarınca cayma hakkı kapsamı dışındadır.`,
    },
    gizlilik: {
      title: 'Gizlilik ve Çerez Politikası',
      content: `Gen Z Bilişim olarak kişisel verilerinizin güvenliğine azami önem vermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, siparişiniz sırasında paylaştığınız ad, e-posta, telefon ve adres bilgileri yalnızca siparişin ifası, faturalandırma ve kargo teslimatı amacıyla işlenir.

Kart ödeme bilgileriniz sistemlerimizde kesinlikle saklanmaz; 256-Bit SSL şifreleme ile doğrudan lisanslı ödeme kuruluşuna iletilir.`,
    },
    iade: {
      title: 'İade ve Teslimat Koşulları',
      content: `1. TESLİMAT: Tüm siparişler anlaşmalı kargo firmaları (Yurtiçi Kargo) ile 1-3 iş günü içinde sigortalı olarak teslim edilir. 500 ₺ ve üzeri alışverişlerde kargo ücretsizdir.

2. İADE: Standart ürünlerin iadesi teslimat tarihinden itibaren 14 gün içerisinde orijinal kutusunda yapılabilir. İade talepleriniz için destek@genzbilisim.com adresine yazabilirsiniz.`,
    },
    onbilgi: {
      title: 'Ön Bilgilendirme Formu',
      content: `İşbu form ile sipariş konusu ürünün nitelikleri, tüm vergiler dahil satış fiyatı, ödeme ve teslimat koşulları hakkında Alıcı önceden bilgilendirilmiştir. Elektronik onay verilmesiyle sözleşme kurulmuş sayılır.`,
    },
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] text-white flex items-center justify-center shadow-xs">
                <Wifi className="w-4 h-4 -rotate-90 text-white" />
              </div>
              <span className="font-heading tracking-tight">Gen Z Bilişim</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              WhatsApp iletişimi, Instagram takipçisi ve Google 5 yıldızlı yorumları tek bir dokunuşla akıllı telefonlara aktaran yeni nesil akıllı NFC kartvizit ve stand platformu.
            </p>
            <div className="pt-2 text-slate-400 space-y-1.5">
              <p>Teknopark İstanbul / Levent Ofis, Beşiktaş / İstanbul</p>
              <p>E-posta: <a href="mailto:destek@genzbilisim.com" className="text-slate-200 hover:text-blue-400 hover:underline font-semibold">destek@genzbilisim.com</a></p>
              <p>Müşteri Desteği: <span className="text-slate-200 font-medium">Hafta içi 09:00 - 18:00</span></p>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Ürün Koleksiyonu
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('urunler')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  WhatsApp NFC Kartı (600 TL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('urunler')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Instagram NFC Kartı (600 TL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('urunler')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Google 5 Yıldız Kartı (600 TL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('urunler')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Kişiye Özel Hibrit Kart
                </button>
              </li>
            </ul>
          </div>

          {/* Quick info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('nasil-calisir')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  3 Adımda Nasıl Çalışır?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kurumsal')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Toplu Kurumsal Teklif
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sss')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Sıkça Sorulan Sorular
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Yasal & Güvenlik
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setActivePolicyModal('mesafeli')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-slate-400"
                >
                  Mesafeli Satış Sözleşmesi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('onbilgi')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-slate-400"
                >
                  Ön Bilgilendirme Formu
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('gizlilik')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-slate-400"
                >
                  Gizlilik ve Çerez Politikası
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('iade')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-slate-400"
                >
                  İade ve Teslimat Koşulları
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with trust badges and copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Gen Z Bilişim Teknolojileri A.Ş. Tüm hakları saklıdır.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit SSL Koruması
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              NXP NTAG216 Sertifikalı Çip
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
              3D Secure Uyumlu
            </span>
          </div>
        </div>
      </div>

      {/* Policy Modal Viewer */}
      {activePolicyModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E2E8F0] max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <h3 id="policy-modal-title" className="text-sm font-bold text-[#0F172A]">
                {policies[activePolicyModal]?.title}
              </h3>
              <button
                onClick={() => setActivePolicyModal(null)}
                aria-label="Sözleşme penceresini kapat"
                className="p-1 text-[#64748B] hover:text-[#0F172A] rounded-lg cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="py-4 overflow-y-auto text-xs text-[#334155] whitespace-pre-line leading-relaxed">
              {policies[activePolicyModal]?.content}
            </div>
            <div className="pt-3 border-t border-[#E2E8F0] text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                aria-label="Pencereyi kapat"
                className="px-4 py-2 bg-[#1D4ED8] text-white rounded-xl text-xs font-semibold hover:bg-[#1E40AF] transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
