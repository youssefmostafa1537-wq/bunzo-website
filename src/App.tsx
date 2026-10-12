import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem, Language, CartItemOption } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { BranchesSection } from './components/BranchesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ShoppingBag, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bunzo_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bunzo_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  // Sync document language & direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('bunzo_lang', language);
  }, [language]);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('bunzo_cart', JSON.stringify(cart));
  }, [cart]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleAddToCart = (item: MenuItem, quantity: number, options: CartItemOption) => {
    let unitPrice = item.price;
    if (options.sizeNameAr && item.options?.sizes) {
      const sizeObj = item.options.sizes.find((s) => s.nameAr === options.sizeNameAr);
      if (sizeObj) unitPrice += sizeObj.priceDiff;
    }
    const extrasTotal = options.selectedExtras.reduce((sum, e) => sum + e.price, 0);
    unitPrice += extrasTotal;

    const extrasKey = options.selectedExtras.map((e) => e.id).sort().join('-');
    const cartItemId = `${item.id}-${options.sizeNameAr || 'default'}-${extrasKey}-${options.specialInstructions || ''}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * unitPrice,
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            item,
            quantity,
            options,
            unitPrice,
            totalPrice: quantity * unitPrice,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((ci) =>
        ci.cartItemId === cartItemId
          ? { ...ci, quantity: newQty, totalPrice: newQty * ci.unitPrice }
          : ci
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalCartPrice = cart.reduce((sum, i) => sum + i.totalPrice, 0);

  return (
    <div className="min-h-screen bg-[#0d0c0b] text-[#f4efe6] flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Sticky Navigation */}
      <Navbar
        language={language}
        onLanguageToggle={toggleLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReserve={() => setIsReserveOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          language={language}
          onOpenReserve={() => setIsReserveOpen(true)}
        />
        <MenuSection
          language={language}
          onAddToCart={handleAddToCart}
        />
        <BranchesSection
          language={language}
        />
        <AboutSection
          language={language}
        />
        <ReviewsSection
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        language={language}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table / Event Inquiry Modal */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        language={language}
      />

      {/* Mobile Floating Quick Actions Bottom Bar */}
      <div className="lg:hidden fixed bottom-4 inset-x-4 z-30 flex items-center justify-between gap-2.5 p-2 bg-[#171513]/95 backdrop-blur-md border border-[#332f28] rounded-2xl shadow-2xl shadow-black">
        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>
            {language === 'ar' ? 'السلة' : 'Cart'}
            {totalCartCount > 0 && ` (${totalCartCount})`}
          </span>
          {totalCartPrice > 0 && (
            <span className="font-mono text-[11px] bg-black/20 px-1.5 py-0.5 rounded">
              {totalCartPrice} {language === 'ar' ? 'ج.م' : 'EGP'}
            </span>
          )}
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201037334747?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%86%D8%B2%D9%88%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%B7%D9%84%D8%A8%20%D8%A7%D9%88%D8%B1%D8%AF%D8%B1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center"
          title="WhatsApp Order"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Hotline Call */}
        <a
          href="tel:01037334747"
          className="p-3 rounded-xl bg-[#24211d] hover:bg-[#302c26] text-amber-400 border border-[#3d372c] flex items-center justify-center"
          title="Call Hotline"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Google Maps Link */}
        <a
          href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-[#24211d] hover:bg-[#302c26] text-white border border-[#3d372c] flex items-center justify-center"
          title="Google Maps Location"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </div>
  );
}
