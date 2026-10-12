import React from 'react';
import { Flame, MapPin, Phone, Instagram, Facebook, ExternalLink, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-[#0a0908] border-t border-[#1f1c18] text-[#8c8478] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1916]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  BUNZO
                </span>
                <span className="text-xs font-bold text-amber-500 mx-2">بنزو</span>
              </div>
            </div>

            <p className="text-xs text-[#a39c93] leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171513] border border-[#2b2721] flex items-center justify-center text-[#ded7cc] hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171513] border border-[#2b2721] flex items-center justify-center text-[#ded7cc] hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171513] border border-[#2b2721] text-amber-400 hover:text-amber-300 text-xs font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Branch 1: 6th of October (The User's Link) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{language === 'ar' ? 'فرع 6 أكتوبر (الرئيسي)' : '6th of October Branch'}</span>
            </h4>
            <p className="text-xs text-[#a39c93] leading-relaxed">
              {language === 'ar'
                ? 'مجمع 610 بارك (Six Ten Park) - محور جمال عبد الناصر، بجوار سيركل كاي وموزع مرسيدس، مدينة 6 أكتوبر'
                : 'Six Ten Park, Gamal Abdel Nasser Axis, Next to Circle K & Mercedes-Benz, 6th of October City'}
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:01037334747" className="font-mono hover:text-amber-400" dir="ltr">
                  01037334747
                </a>
              </div>
              <p className="text-[11px] text-[#787167]">
                {language === 'ar' ? 'مفتوح يومياً: 12:00 ظهراً - 3:00 فجراً' : 'Daily: 12:00 PM - 3:00 AM'}
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline pt-1"
            >
              <span>{t.openInMaps}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Branch 2: Sheikh Zayed */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{language === 'ar' ? 'فرع الشيخ زايد' : 'Sheikh Zayed Branch'}</span>
            </h4>
            <p className="text-xs text-[#a39c93] leading-relaxed">
              {language === 'ar'
                ? 'مجمع سيتي ووك (City Walk)، وصلة دهشور، بوابة زايد 5'
                : 'City Walk Mall, Waslet Dahshur, Zayed Entrance 5'}
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:01015556743" className="font-mono hover:text-amber-400" dir="ltr">
                  01015556743
                </a>
              </div>
              <p className="text-[11px] text-[#787167]">
                {language === 'ar' ? 'مفتوح يومياً: 12:00 ظهراً - 3:30 فجراً' : 'Daily: 12:00 PM - 3:30 AM'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e685f]">
          <p>{t.rights}</p>
          <div className="flex items-center gap-1 text-[#8c8478]">
            <span>{language === 'ar' ? 'صُنع بكل إتقان وشغف لعشاق البرجر في مصر' : 'Crafted with passion for burger lovers in Egypt'}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 ml-1 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
