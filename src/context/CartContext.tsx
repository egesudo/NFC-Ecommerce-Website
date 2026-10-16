import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, customization?: {
    customName?: string;
    customTitle?: string;
    customCompany?: string;
    customHandle?: string;
    customMessage?: string;
    selectedColor?: string;
    includeQr?: boolean;
  }) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  discount: number;
  shippingCost: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  total: number;
  appliedPromoCode: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  isCartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toastMessage: string | null;
  clearToast: () => void;
}

const FREE_SHIPPING_THRESHOLD = 500;
const STANDARD_SHIPPING_FEE = 49;
const CART_STORAGE_KEY = 'genz_cart_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage quota or error ignored
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (
    product: Product,
    quantity = 1,
    customization?: {
      customName?: string;
      customTitle?: string;
      customCompany?: string;
      customHandle?: string;
      customMessage?: string;
      selectedColor?: string;
      includeQr?: boolean;
    }
  ) => {
    const selectedColor = customization?.selectedColor || product.colors[0]?.id || 'default';
    const customName = customization?.customName?.trim() || '';
    const customTitle = customization?.customTitle?.trim() || '';
    const customCompany = customization?.customCompany?.trim() || '';
    const customHandle = customization?.customHandle?.trim() || '';
    const customMessage = customization?.customMessage?.trim() || '';
    const includeQr = customization?.includeQr ?? true;

    // Check if an identical custom item already exists
    const lineId = `${product.id}_${selectedColor}_${customName}_${customHandle}_${includeQr ? 'qr' : 'noqr'}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === lineId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      const newItem: CartItem = {
        id: lineId,
        productId: product.id,
        product,
        quantity,
        selectedColor,
        customName: customName || undefined,
        customTitle: customTitle || undefined,
        customCompany: customCompany || undefined,
        customHandle: customHandle || undefined,
        customMessage: customMessage || undefined,
        includeQr,
        unitPrice: product.price,
      };
      return [...prev, newItem];
    });

    showToast(`"${product.name}" sepete eklendi.`);
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Ürün sepetten kaldırıldı.');
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedPromoCode(null);
    setDiscountPercent(0);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GENZ10' || clean === 'GENZ' || clean === 'BİLİŞİM10' || clean === 'BILISIM10') {
      setAppliedPromoCode(clean);
      setDiscountPercent(10);
      showToast('%10 Gen Z Bilişim indirimi uygulandı!');
      return { success: true, message: '%10 indirim uygulandı!' };
    }
    if (clean === 'GENZ20' || clean === 'EKIP20') {
      setAppliedPromoCode(clean);
      setDiscountPercent(20);
      showToast('%20 kurumsal kupon uygulandı!');
      return { success: true, message: '%20 kurumsal kupon uygulandı!' };
    }
    return { success: false, message: 'Geçersiz veya süresi dolmuş kupon kodu.' };
  };

  const removePromoCode = () => {
    setAppliedPromoCode(null);
    setDiscountPercent(0);
    showToast('Kupon kodu kaldırıldı.');
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 100);
  const netSubtotal = Math.max(0, subtotal - discount);
  const shippingCost = netSubtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : STANDARD_SHIPPING_FEE;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - netSubtotal);
  const total = netSubtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        discount,
        shippingCost,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        total,
        appliedPromoCode,
        applyPromoCode,
        removePromoCode,
        isCartDrawerOpen,
        openCartDrawer: () => setIsCartDrawerOpen(true),
        closeCartDrawer: () => setIsCartDrawerOpen(false),
        toastMessage,
        clearToast: () => setToastMessage(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
