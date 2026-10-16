import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'whatsapp-nfc-card',
    slug: 'whatsapp-akilli-nfc-karti',
    name: 'WhatsApp Akıllı İletişim & Sipariş NFC Kartı',
    subtitle: 'Whatsapp Üzerinden İletişime Geçin',
    cardType: 'whatsapp',
    description: 'Telefonu yaklaştıran müşterinizi doğrudan WhatsApp sohbetine ve hazır sipariş mesajına bağlayan temassız akıllı NFC kartı / masa standı.',
    longDescription: 'Kafe, restoran, klinik, mağaza ve tüm işletmeler için tasarlanan WhatsApp NFC Kartı, müşterilerin telefon numarası kaydetme zahmetini tamamen ortadan kaldırır. Telefonunu karta dokunduran müşteri saniyeler içinde işletmenizin WhatsApp hattına bağlanır ve hazır selamlama mesajıyla sohbete başlar. Karşı tarafa herhangi bir uygulama yüklemesi gerekmez.',
    price: 600,
    originalPrice: 750,
    material: 'acrylic',
    materialLabel: 'Parlak Akrilik & Sert PVC',
    finish: 'Çizilmez Parlak Lamine & Gümüş Dalga Detayı',
    dimensions: '100 × 100 mm Masa Standı / Kart Formatı',
    chipType: 'NXP NTAG216 Yüksek Hassasiyet',
    memory: '888 Bayt (Sonsuz Yeniden Yazılabilir)',
    waterproof: true,
    colors: [
      { id: 'classic-black-white', name: 'Klasik Siyah & Beyaz Dalga', hex: '#18181b', bgClass: 'bg-matte-black' },
    ],
    inStock: true,
    stockCount: 85,
    isFeatured: true,
    badge: 'En Çok Satan',
    features: [
      'Telefon numarası kaydetmeye gerek kalmadan tek dokunuşla WhatsApp sohbeti açma',
      'Önceden belirlenebilen otomatik selamlama ve sipariş mesajı',
      'Orijinal NXP NTAG216 çip ile 0-4 cm anında temassız okuma',
      'Arka yüzde eski telefonlar için lazer kazıma yedek QR kod',
      'Suya, güneşe ve lekeye dayanıklı kalın akrilik gövde'
    ],
    specs: [
      { label: 'Boyut', value: '100 × 100 mm kare format' },
      { label: 'Kalınlık', value: '1.50 mm güçlendirilmiş solid gövde' },
      { label: 'Çip', value: 'NXP NTAG216 (100.000+ okuma ömrü)' },
      { label: 'Uyum', value: 'Tüm NFC destekli iPhone ve Android cihazlar' },
      { label: 'Kullanım', value: 'Masaüstü, kasa önü, resepsiyon veya cep boy' }
    ]
  },
  {
    id: 'instagram-nfc-card',
    slug: 'instagram-takipci-etkilesim-nfc-karti',
    name: 'Instagram Takipçi & Profil NFC Kartı',
    subtitle: 'Bizi Instagram\'da Takip Edin',
    cardType: 'instagram',
    description: 'Müşterilerinizin tek bir dokunuşla Instagram profilinizi açıp takip etmesini sağlayan akıllı etkileşim kartı.',
    longDescription: 'Sosyal medya takipçi sayınızı ve organik etkileşiminizi fiziksel mağazanızdan büyütün. Masada oturan veya kasanızda ödeme yapan müşteriler telefonlarını Instagram NFC kartına dokundurduklarında doğrudan Instagram profilinize yönlendirilir. Kullanıcı adı arama, yanlış hesabı bulma veya QR taramakla uğraşmadan 1 saniyede takipçi kazanın.',
    price: 600,
    originalPrice: 750,
    material: 'acrylic',
    materialLabel: 'Parlak Akrilik & Sert PVC',
    finish: 'Çizilmez Lamine & Orijinal Instagram Gradyanı',
    dimensions: '100 × 100 mm Masa Standı / Kart Formatı',
    chipType: 'NXP NTAG216 Yüksek Hassasiyet',
    memory: '888 Bayt',
    waterproof: true,
    colors: [
      { id: 'insta-black', name: 'Mat Siyah & Instagram Gradyan', hex: '#E1306C', bgClass: 'bg-matte-black' },
    ],
    inStock: true,
    stockCount: 62,
    isFeatured: true,
    badge: 'Sosyal Büyüme',
    features: [
      'Tek dokunuşta Instagram profilini uygulama içinde doğrudan açma',
      'Fiziksel mağazadan Instagram takipçisi ve story etkileşimi kazanma',
      'Orijinal Instagram kamera gradyanı ve minimalist estetik',
      'Uygulama veya şifre gerektirmeyen anında yönlendirme',
      'Lazer kazıma arka QR kod ile %100 telefon uyumluluğu'
    ],
    specs: [
      { label: 'Boyut', value: '100 × 100 mm kare format' },
      { label: 'Kalınlık', value: '1.50 mm solid gövde' },
      { label: 'Çip', value: 'NXP NTAG216' },
      { label: 'Su Geçirmezlik', value: 'IP68 tam korumalı yıkanabilir gövde' },
      { label: 'Aktivasyon', value: 'Kullanıma hazır olarak kodlanmış teslimat' }
    ]
  },
  {
    id: 'google-review-nfc-card',
    slug: 'google-yorum-puanlama-nfc-karti',
    name: 'Google Yorum & Değerlendirme (5 Yıldız) NFC Kartı',
    subtitle: "Google 'da Bizi Değerlendirin",
    cardType: 'google-review',
    description: 'Telefonu yaklaştıran müşterinizi doğrudan Google 5 yıldızlı değerlendirme ve yorum ekranına yönlendiren 9x9 cm UV baskılı akıllı NFC kartı / masa standı.',
    longDescription: "Google Haritalar'da üst sıralara çıkmanın ve yerel aramalarda rakiplerinizin önüne geçmenin en etkili yolu 5 yıldızlı müşteri değerlendirmeleri toplamaktır. 9x9 cm boyutundaki UV baskılı yapışkanlı Google NFC Kartı sayesinde masada veya kasada oturan müşteriniz telefonunu yaklaştırdığı an doğrudan Google değerlendirme sayfası açılır. Müşteri anında 5 yıldız verip yorumunu paylaşır.",
    price: 600,
    originalPrice: 750,
    material: 'acrylic',
    materialLabel: '9×9 cm UV Baskılı Akrilik & Yapışkanlı PVC',
    finish: 'Çizilmez UV Parlak Koruma & 5 Altın Yıldız Detayı',
    dimensions: '90 × 90 mm (9×9 cm) UV Yapışkanlı Masa Kartı',
    chipType: 'NXP NTAG216 UltraHızlı',
    memory: '888 Bayt',
    waterproof: true,
    colors: [
      { id: 'google-blue-white', name: 'Google Kobalt Mavi & Beyaz', hex: '#0B47A8', bgClass: 'bg-blue-600' },
    ],
    inStock: true,
    stockCount: 110,
    isFeatured: true,
    badge: '5 Yıldız & Yerel SEO',
    features: [
      'Müşteriyi doğrudan Google 5 yıldız yorum ve değerlendirme kutusuna yönlendirme',
      '9×9 cm masa, tezgah veya kapıya yapışkanlı UV korumalı sağlam gövde',
      '5 adet göz alıcı altın yıldız tasarımı ve orijinal Google "G" logosu',
      'Temassız NFC çip ile 0-4 cm anında algılama (uygulama gerektirmez)',
      'Arka yüzde eski telefonlar için yedek optik QR kod desteği'
    ],
    specs: [
      { label: 'Boyut', value: '90 × 90 mm (9×9 cm Kare Format)' },
      { label: 'Kalınlık & Yüzey', value: '1.50 mm UV yapışkanlı parlak gövde' },
      { label: 'Çip', value: 'NXP NTAG216 (100.000+ okuma ömrü)' },
      { label: 'Uyum', value: 'Tüm NFC destekli iPhone ve Android cihazlar' },
      { label: 'Kullanım', value: 'Masa, resepsiyon, kasa önü, vitrin veya kapı' }
    ]
  },
  {
    id: 'hybrid-custom-nfc-card',
    slug: 'ozel-tasarim-hibrit-nfc-karti',
    name: 'Kişiselleştirilmiş Özel Tasarım & Çoklu Bağlantı NFC Kartı',
    subtitle: 'WhatsApp + Instagram + Google Bir Arada',
    cardType: 'custom',
    description: 'Şirket logonuz, kurumsal renkleriniz ve tüm sosyal ağlarınızı tek kartta toplayan prestijli hibrit NFC kartvizit.',
    longDescription: 'Tek bir kanalla sınırlı kalmak istemeyen işletmeler ve yöneticiler için üretildi. Ön yüzünde firmanızın logosu, arka yüzünde ise WhatsApp, Instagram ve Google Haritalar yönlendirmelerini tek tıkla açan çoklu dijital bağlantı menüsü yer alır.',
    price: 600,
    originalPrice: 850,
    material: 'acrylic',
    materialLabel: 'Özel Akrilik / PVC Hibrit',
    finish: 'Kişiye Özel UV Baskı & Lazer Kazıma',
    dimensions: '85.60 × 53.98 mm / 100 × 100 mm',
    chipType: 'NXP NTAG216',
    memory: '888 Bayt',
    waterproof: true,
    colors: [
      { id: 'custom-black', name: 'VIP Mat Siyah & Kurumsal Altın', hex: '#18181b', bgClass: 'bg-matte-black' },
    ],
    inStock: true,
    stockCount: 40,
    isFeatured: false,
    badge: 'Çoklu Menü',
    features: [
      'Şirket logonuz ve unvanınızla kişiselleştirilmiş ön yüz',
      'WhatsApp, Instagram, Telefon ve Google Review tek dokunuşta',
      'Dilediğiniz zaman panelden değiştirilebilir bulut altyapısı',
      'Özel VIP hediye kutusu dahildir',
      'Tüm telefonlarla %100 temassız ve QR uyumluluğu'
    ],
    specs: [
      { label: 'Boyut', value: 'Standart veya Masa Boyu Seçeneği' },
      { label: 'Baskı', value: 'Endüstriyel HD UV Dijital Baskı' },
      { label: 'Birim Fiyat', value: '600 TL Perakende Sabit Fiyat' },
      { label: 'Kargo', value: '500 TL üzeri ücretsiz kargo' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Tüm Kartlar' },
  { id: 'whatsapp', name: 'WhatsApp NFC' },
  { id: 'instagram', name: 'Instagram NFC' },
  { id: 'google-review', name: 'Google Puanlama' },
  { id: 'custom', name: 'Özel Tasarım' },
];
