export type CardMaterial = 'pvc' | 'acrylic' | 'wood' | 'metal';
export type CardType = 'whatsapp' | 'instagram' | 'google-review' | 'custom';

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  cardType: CardType;
  description: string;
  longDescription: string;
  price: number; // 600 TL retail
  originalPrice?: number;
  material: CardMaterial;
  materialLabel: string;
  finish: string;
  dimensions: string;
  chipType: string;
  memory: string;
  waterproof: boolean;
  colors: { id: string; name: string; hex: string; bgClass: string }[];
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  badge?: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface CartItem {
  id: string; // unique cart line id
  productId: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  customName?: string;
  customTitle?: string;
  customCompany?: string;
  customHandle?: string; // WhatsApp number, Instagram handle, or Google Review URL
  customMessage?: string;
  includeQr: boolean;
  unitPrice: number;
}

export interface DeliveryAddress {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  district: string;
  address: string;
  postalCode?: string;
  orderNotes?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  address: DeliveryAddress;
  paymentMethod: 'credit_card' | 'bank_transfer' | 'cod';
  paymentStatus: 'pending' | 'mock_completed';
  createdAt: string;
}

export interface CorporateInquiry {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  quantity: number;
  materialPreference: CardMaterial | 'mixed';
  message: string;
}
