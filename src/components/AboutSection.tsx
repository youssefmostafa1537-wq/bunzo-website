import React from 'react';
import { Flame, Beef, Sparkles, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = translations[language];

  const pillars = [
    {
      icon: Beef,
      title: t.craftPillar1Title,
      desc: t.craftPillar1Desc,
      tag: language === 'ar' ? 'جودة فاخرة' : 'Premium Cut',
    },
    {
      icon: Flame,
      title: t.craftPillar2Title,
      desc: t.craftPillar2Desc,
      tag: language === 'ar' ? 'حرارة فائقة' : 'Searing Heat',
    },
    {
      icon: Sparkles,
      title: t.craftPillar3Title,
      desc: t.craftPillar3Desc,
      tag: language === 'ar' ? 'بريوش مخبوز يومياً' : 'Artisan Bakery',
    },
    {
      icon: HeartHandshake,
      title: t.craftPillar4Title,
      desc: t.craftPillar4Desc,
      tag: language === 'ar' ? 'وصفات خاصة' : 'Secret Recipes',
    },
  ];

  return (
    <section id="craft" className="py-16 sm:py-24 bg-[#0d0c0b] border-t border-[#211e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Flame className="w-4 h-4" />
            <span>THE BUNZO STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t.craftTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#a39c93]">
            {t.craftSubtitle}
          </p>
        </div>

        {/* 4 Pillars Grid (Following Frontend Design: no thick borders, clean quiet spacing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#141210] border border-[#26221c] hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1e1b17] border border-[#302b23] flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-amber-500/90 uppercase tracking-wider block mb-1">
                    {pillar.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a39c93] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1f1c18] text-xs font-mono text-[#5e584f]">
                  0{idx + 1} / 04
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#171411] via-[#1f1b16] to-[#171411] border border-[#2e2922] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                {language === 'ar' ? 'تجربة سيكس تن بارك الفريدة' : 'Six Ten Park Unique Experience'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {language === 'ar'
                  ? 'برجر بلدي مشوي طازة في كل طلب، بدون تنازلات'
                  : 'Smashed Fresh on Every Order, Zero Compromises'}
              </h3>
              <p className="text-xs sm:text-sm text-[#b8afa3] leading-relaxed max-w-2xl">
                {language === 'ar'
                  ? 'سواء كنت جاي تقعد في ساحة سيكس تن بارك الهادئة في 6 أكتوبر أو طالب ديليفري للبيت، بنضمن لك كل ساندوتش يخرج ساخن وطازج في دقائق.'
                  : 'Whether you are relaxing in the Six Ten Park promenade or ordering delivery straight to your living room, every order is crafted steaming hot.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3">
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm transition-all"
              >
                {t.heroCtaMenu}
              </a>
              <a
                href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#24201a] hover:bg-[#2e2922] border border-[#3d372c] text-white font-bold text-xs sm:text-sm transition-all"
              >
                {t.openInMaps}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
