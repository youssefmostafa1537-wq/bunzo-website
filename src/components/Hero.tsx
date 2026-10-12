import React from 'react';
import { MapPin, ArrowRight, ArrowLeft, Star, Phone, UtensilsCrossed, ShieldCheck, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
  onOpenReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#0d0c0b]">
      {/* Background warm ember ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & CTAs Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Location announcement banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1916] border border-[#332f29] text-xs text-amber-300 mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="font-semibold">{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              <span>{t.heroTitle1}</span>{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>

            {/* Lead Description */}
            <p className="text-base sm:text-lg text-[#b8afa3] leading-relaxed max-w-2xl mb-8">
              {t.heroDesc}
            </p>

            {/* CTAs Group */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              
              {/* Order via WhatsApp */}
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-[#0d0c0b] font-extrabold text-sm tracking-wide shadow-xl shadow-amber-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{t.heroCtaMenu}</span>
                <Arrow className="w-4 h-4" />
              </a>

              {/* Exact Google Maps Link provided by user */}
              <a
                href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#1c1a17] hover:bg-[#25221d] border border-[#38332c] hover:border-amber-500/50 text-[#ded7cc] hover:text-white font-bold text-sm tracking-wide transition-all text-center group"
              >
                <MapPin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>{t.heroCtaMaps}</span>
              </a>

              {/* Hotline quick call */}
              <a
                href="tel:01037334747"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#141311] hover:bg-[#1f1d19] border border-[#2b2722] text-[#b0a79a] hover:text-white font-semibold text-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span dir="ltr">01037334747</span>
              </a>
            </div>

            {/* Quiet Quality Highlights (Clean unboxed typography) */}
            <div className="w-full pt-6 border-t border-[#211f1c] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#a69e92]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.featureBeef}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{t.featureSmash}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{t.featureBrioche}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>4.8 / 5.0 (6 أكتوبر)</span>
              </div>
            </div>

          </div>

          {/* Right Visual Burger Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#2e2a24] bg-[#141210] shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"
                  alt="BUNZO Double Smash Burger"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#110f0d] via-transparent to-black/30 pointer-events-none" />

                {/* Overlaid details at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0e0c0b] via-[#0e0c0b]/90 to-transparent">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5" />
                        <span>BUNZO BESTSELLER</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {language === 'ar' ? 'دبل سماش كلاسيك' : 'Double Smash Classic'}
                      </h3>
                      <p className="text-xs text-[#a39c93] mt-1 line-clamp-1">
                        {language === 'ar' ? 'أطراف مقرمشة مكرملة · شيدر أمريكي ذائب · صوص سري' : 'Caramelized smash crust · Melted cheddar · Secret sauce'}
                      </p>
                    </div>

                    <div className="text-right rtl:text-left shrink-0">
                      <span className="text-xs text-[#8c8478] block">{language === 'ar' ? 'السعر' : 'Price'}</span>
                      <span className="text-2xl font-black text-amber-400 font-mono">
                        185 <span className="text-xs font-sans">{t.currency}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#1a1815] border border-[#36312a] rounded-2xl p-4 shadow-xl shadow-black/60 max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4.9 / 5</span>
                </div>
                <p className="text-xs text-[#c4bbb0] leading-snug">
                  {language === 'ar'
                    ? '«أحلى ساندوتش برجر كلته في سيكس تن بارك 6 أكتوبر!»'
                    : '“The best smash burger spot at Six Ten Park, 6th of October!”'}
                </p>
              </div>

              {/* Floating branch location tag */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#1f1c18] border border-amber-500/40 rounded-2xl px-4 py-2.5 shadow-xl shadow-black/60 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 animate-bounce" />
                <div className="text-left rtl:text-right">
                  <div className="text-[11px] font-bold text-white">Six Ten Park (610)</div>
                  <div className="text-[10px] text-amber-300/90">محور جمال عبد الناصر</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
