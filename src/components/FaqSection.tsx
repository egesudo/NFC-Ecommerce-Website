import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'NFC akıllı kart ve stand nedir, nasıl çalışır?',
    answer: 'NFC (Yakın Alan İletişimi), iki elektronik cihazın birkaç santimetre mesafeden kablosuz olarak anında veri alışverişi yapmasını sağlayan güvenli bir teknolojidir. Gen Z Bilişim kart veya standınız, içinde barındırdığı NTAG216 çipi sayesinde herhangi bir NFC destekli akıllı telefona yaklaştırıldığında, müşterinizin ekranında saniyeler içinde WhatsApp sohbetini, Instagram profilinizi veya Google 5 yıldızlı yorum sayfanızı açar.',
  },
  {
    question: 'Müşterilerimin herhangi bir mobil uygulama indirmesi gerekir mi?',
    answer: 'Kesinlikle hayır! Gen Z Bilişim NFC kartlarının en büyük avantajı, iletişim kurduğunuz kişinin telefonuna hiçbir ek uygulama yüklemesine gerek olmamasıdır. Telefonun yerleşik NFC anteni kartı doğrudan algılar ve ilgili uygulamayı veya tarayıcıyı anında otomatik olarak açar.',
  },
  {
    question: 'Hangi telefon modelleri Gen Z Bilişim NFC kartlarını destekler?',
    answer: 'Apple tarafında iPhone XR, XS, 11, 12, 13, 14, 15 ve 16 serileri dahil tüm yeni nesil modeller doğrudan okur. Android tarafında Samsung, Xiaomi, Huawei, Google Pixel, OnePlus ve Oppo gibi markaların NFC donanımına sahip tüm modelleriyle %100 uyumludur. Eski telefonlar için kartın arkasındaki lazer QR kod kamera ile okutulabilir.',
  },
  {
    question: 'Telefon numaram, Instagram hesabım veya adresim değişirse ne olur?',
    answer: 'Yeni bir kart almanıza gerek kalmaz! Gen Z Bilişim bulut tabanlı altyapısı sayesinde bağlantı adreslerinizi, WhatsApp numaranızı veya Google Maps bağlantınızı dilediğiniz zaman güncelleyebilirsiniz. Kartınız anında yeni bağlantıya yönlendirmeye devam eder.',
  },
  {
    question: 'Kartın pili var mı, şarj edilmesi gerekir mi?',
    answer: 'Hayır. Gen Z Bilişim kartları pasif RFID/NFC mimarisiyle üretilir. İçerisinde pil veya şarj ünitesi bulunmaz; okuyucu telefonun temas anında yaydığı mikrodüzeydeki manyetik alandan güç alır. Bu sayede ömür boyu şarja ihtiyaç duymadan çalışır.',
  },
  {
    question: 'Siparişimin teslimat süresi ve kargo koşulları nelerdir?',
    answer: 'Tüm siparişler 1-2 iş günü içinde atölyemizde hazırlanıp kargoya teslim edilir. Türkiye genelinde kargo teslim süresi 1 ila 3 iş günüdür. 500 ₺ ve üzeri tüm siparişlerde kargo ücretsizdir (500 ₺ altı siparişlerde standart kargo ücreti 49 ₺\'dir).',
  },
  {
    question: 'İade ve garanti politikanız nedir?',
    answer: 'Tüm ürünlerimiz 2 yıl donanım ve çip garantilidir. Standart ürünlerimizde teslimat tarihinden itibaren 14 gün içinde koşulsuz iade ve değişim hakkınız bulunmaktadır.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="sss" className="py-20 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1D4ED8]">
            Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1.5 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] mt-2">
            Gen Z Bilişim akıllı temassız NFC teknolojisi ve sipariş süreçleri hakkında merak edilenler.
          </p>
        </div>

        {/* Accordion list with space-y-3 vertical rhythm */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-slate-200 border-l-3 border-l-[#1D4ED8] shadow-sm'
                    : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      const next = (idx + 1) % FAQ_ITEMS.length;
                      document.getElementById(`faq-btn-${next}`)?.focus();
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      const prev = (idx - 1 + FAQ_ITEMS.length) % FAQ_ITEMS.length;
                      document.getElementById(`faq-btn-${prev}`)?.focus();
                    } else if (e.key === 'Home') {
                      e.preventDefault();
                      document.getElementById('faq-btn-0')?.focus();
                    } else if (e.key === 'End') {
                      e.preventDefault();
                      document.getElementById(`faq-btn-${FAQ_ITEMS.length - 1}`)?.focus();
                    }
                  }}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-inset"
                >
                  <span className={`text-sm font-bold leading-snug transition-colors ${
                    isOpen ? 'text-[#1D4ED8]' : 'text-[#0F172A]'
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen 
                        ? 'rotate-180 bg-blue-100 text-[#1D4ED8]' 
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/80 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact note */}
        <div className="text-center mt-12 p-6 bg-white rounded-2xl border border-[#E2E8F0] text-xs text-[#334155]">
          <p className="font-semibold text-[#0F172A] mb-1">
            Farklı bir sorunuz veya kurumsal toplu talebiniz mi var?
          </p>
          <p>
            Gen Z Bilişim destek ekibimize <strong className="text-[#2563EB]">destek@genzbilisim.com</strong> üzerinden dilediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};
