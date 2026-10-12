import React, { useState } from 'react';
import { Flame, ShoppingBag, Phone, MapPin, Globe, Menu as MenuIcon, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageToggle: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReserve: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageToggle,
  cartCount,
  onOpenCart,
  onOpenReserve,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0c0b]/90 backdrop-blur-md border-b border-[#25221e]">
      {/* Top micro bar for branch status & hotline */}
      <div className="bg-[#171513] border-b border-[#22201c] py-1.5 px-4 text-xs text-[#a39c93]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[#ded7cc]">
              {language === 'ar' ? 'فرع 6 أكتوبر (سيكس تن بارك) مفتوح الآن حتى 3:00 فجرًا' : '6th of October Branch (Six Ten Park) Open Now until 3:00 AM'}
            </span>
            <span className="hidden md:inline text-[#5c564f]">·</span>
            <span className="hidden md:inline text-[#a39c93]">
              {language === 'ar' ? 'توصيل سريع لكافة مناطق أكتوبر وزايد' : 'Fast delivery across October & Zayed'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:01037334747"
              className="flex items-center gap-1.5 font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">01037334747</span>
            </a>
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 text-[#d4ccc0] hover:text-white transition-colors cursor-pointer font-medium"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform duration-300">
            <Flame className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                BUNZO
              </span>
              <span className="text-xs font-bold text-amber-500 tracking-wider">
                بنزو
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-[#a89f91] uppercase font-semibold">
              SMASH & FLAME GRILL
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#ded7cc]">
          <a
            href="#menu"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-amber-400"
          >
            {t.navMenu}
          </a>
          <a
            href="#branches"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-amber-400 flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            {t.navBranches}
          </a>
          <a
            href="#craft"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-amber-400"
          >
            {t.navCraft}
          </a>
          <a
            href="#reviews"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-amber-400"
          >
            {t.navReviews}
          </a>
          <button
            onClick={onOpenReserve}
            className="text-[#baa485] hover:text-white transition-colors cursor-pointer"
          >
            {t.navReserve}
          </button>
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1d1b18] hover:bg-[#282522] border border-[#332f2a] hover:border-amber-500/50 text-[#ded7cc] hover:text-white transition-all cursor-pointer shadow-sm group"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
              {t.cart}
            </span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-[#0d0c0b] text-xs font-black flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick WhatsApp CTA */}
          <a
            href="https://wa.me/201037334747?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%86%D8%B2%D9%88%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%B7%D9%84%D8%A8%20%D8%A7%D9%88%D8%B1%D8%AF%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all cursor-pointer"
          >
            {t.orderWhatsApp}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#1d1b18] border border-[#332f2a] text-[#ded7cc] hover:text-white"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141210] border-b border-[#26231f] px-6 py-6 flex flex-col gap-4 text-base font-semibold text-[#e8e2d8]">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-amber-400 border-b border-[#24211d]"
          >
            {t.navMenu}
          </a>
          <a
            href="#branches"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-amber-400 border-b border-[#24211d] flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              {t.navBranches}
            </span>
            <span className="text-xs text-amber-400">6 أكتوبر & زايد</span>
          </a>
          <a
            href="#craft"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-amber-400 border-b border-[#24211d]"
          >
            {t.navCraft}
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-amber-400 border-b border-[#24211d]"
          >
            {t.navReviews}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReserve();
            }}
            className="py-2 text-right rtl:text-right ltr:text-left text-[#baa485] hover:text-white"
          >
            {t.navReserve}
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-[#26221d] border border-amber-500/40 text-amber-300 font-bold text-sm"
            >
              📍 {t.heroCtaMaps} (6 أكتوبر)
            </a>
            <a
              href="https://wa.me/201037334747?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%86%D8%B2%D9%88%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%B7%D9%84%D8%A8%20%D8%A7%D9%88%D8%B1%D8%AF%D8%B1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm"
            >
              {t.orderWhatsApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
