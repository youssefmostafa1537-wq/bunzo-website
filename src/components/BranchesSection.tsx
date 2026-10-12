import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Copy, Check, Navigation, Flame, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { branchesData } from '../data/branchesData';
import { translations } from '../data/translations';

interface BranchesSectionProps {
  language: Language;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ language }) => {
  const t = translations[language];
  const [selectedBranchId, setSelectedBranchId] = useState<string>('october');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentBranch = branchesData.find((b) => b.id === selectedBranchId) || branchesData[0];

  const handleCopyAddress = (branchId: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(branchId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="branches" className="py-16 sm:py-24 bg-[#0d0c0b] border-t border-[#211e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>{language === 'ar' ? 'مواقعنا في الجيزة والقاهرة' : 'Locations & Directions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t.branchesTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#a39c93]">
            {t.branchesSubtitle}
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 bg-[#171513] border border-[#2b2722] rounded-2xl inline-flex gap-2">
            {branchesData.map((branch) => {
              const isSelected = selectedBranchId === branch.id;
              const name = language === 'ar' ? branch.nameAr : branch.nameEn;

              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-500 text-[#0d0c0b] shadow-lg shadow-amber-950/40'
                      : 'text-[#baa485] hover:text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>{name}</span>
                  {branch.isPrimary && (
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-black/20">
                      ★ {language === 'ar' ? 'الفرع المطلوب' : 'Maps Link'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Branch Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Branch Details Card */}
          <div className="lg:col-span-5 bg-[#141210] border border-[#2a2620] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Highlight badge for October link */}
              {currentBranch.isPrimary && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.featuredBranchBadge}</span>
                </div>
              )}

              <h3 className="text-2xl font-black text-white mb-2">
                {language === 'ar' ? currentBranch.nameAr : currentBranch.nameEn}
              </h3>
              <p className="text-xs text-amber-400 font-semibold mb-6">
                {language === 'ar' ? currentBranch.cityAr : currentBranch.cityEn}
              </p>

              {/* Address details */}
              <div className="space-y-5 text-sm text-[#ded7cc]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1e1c19] border border-[#302c25] flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8c8478] block mb-1">
                      {language === 'ar' ? 'العنوان بالتفصيل' : 'Detailed Address'}
                    </span>
                    <p className="font-medium leading-relaxed">
                      {language === 'ar' ? currentBranch.addressAr : currentBranch.addressEn}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1e1c19] border border-[#302c25] flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8c8478] block mb-1">
                      {t.workingHours}
                    </span>
                    <p className="font-semibold text-emerald-400">
                      {language === 'ar' ? currentBranch.openingHoursAr : currentBranch.openingHoursEn}
                    </p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1e1c19] border border-[#302c25] flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8c8478] block mb-1">
                      {t.hotline}
                    </span>
                    <a
                      href={`tel:${currentBranch.phone}`}
                      className="font-bold text-lg text-white hover:text-amber-400 transition-colors font-mono"
                      dir="ltr"
                    >
                      {currentBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Features (clean quiet unboxed layout) */}
              <div className="mt-8 pt-6 border-t border-[#221f1a]">
                <span className="text-xs text-[#8c8478] block mb-3 font-semibold uppercase tracking-wider">
                  {language === 'ar' ? 'المميزات والخدمات المتوفرة' : 'Branch Services & Amenities'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#c4bbb0]">
                  {(language === 'ar' ? currentBranch.featuresAr : currentBranch.featuresEn).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="mt-8 pt-6 border-t border-[#221f1a] flex flex-col sm:flex-row gap-3">
              {/* Direct Maps Link Button - TARGETS USER'S LINK! */}
              <a
                href={currentBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Copy Address Button */}
              <button
                type="button"
                onClick={() =>
                  handleCopyAddress(
                    currentBranch.id,
                    language === 'ar' ? currentBranch.addressAr : currentBranch.addressEn
                  )
                }
                className="py-3 px-4 rounded-xl bg-[#1e1c19] hover:bg-[#282522] border border-[#332f27] text-[#ded7cc] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedId === currentBranch.id ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{t.addressCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8c8478]" />
                    <span>{t.copyAddress}</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Chat */}
              <a
                href={`https://wa.me/${currentBranch.whatsapp}?text=${encodeURIComponent(
                  language === 'ar'
                    ? `مرحبًا بنزو، أود الاستفسار بخصوص ${currentBranch.nameAr}`
                    : `Hello BUNZO, I would like to inquire about ${currentBranch.nameEn}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#1e1c19] hover:bg-emerald-600/20 border border-[#332f27] hover:border-emerald-500/50 text-emerald-400 flex items-center justify-center transition-colors"
                title={t.whatsappDirect}
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#141210] border border-[#2a2620] rounded-3xl overflow-hidden relative min-h-[380px] shadow-2xl flex flex-col">
            {/* Top Bar for Map */}
            <div className="bg-[#1a1714] px-5 py-3 border-b border-[#26221c] flex items-center justify-between text-xs text-[#a39c93]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-bold text-white">
                  {currentBranch.isPrimary ? 'BUNZO 6th of October (Six Ten Park)' : 'BUNZO Sheikh Zayed (City Walk)'}
                </span>
                <span className="text-[#696257]">· 29.9949° N, 30.9506° E</span>
              </div>
              <a
                href={currentBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                <span>{t.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="flex-1 w-full min-h-[350px] relative bg-[#1c1916]">
              <iframe
                title={`Map of ${currentBranch.nameEn}`}
                src={`https://www.google.com/maps?q=${currentBranch.coordinates.lat},${currentBranch.coordinates.lng}&hl=en&z=16&output=embed`}
                className="w-full h-full border-0 absolute inset-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
              />
            </div>
            
            {/* Overlay Notice */}
            <div className="bg-[#12100e] px-5 py-3 border-t border-[#26221c] flex items-center justify-between text-xs text-[#8c8478]">
              <span>
                {language === 'ar'
                  ? 'يقع المطعم داخل مجمع سيكس تن بارك مباشرة بعد توكيل مرسيدس وبجوار محطة سيركل كاي'
                  : 'Located inside Six Ten Park right after Mercedes-Benz and adjacent to Circle K'}
              </span>
              <a
                href="https://maps.app.goo.gl/imD8khkQ1RpgUThz6"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-amber-400 hover:text-white shrink-0 ml-4 rtl:mr-4 rtl:ml-0"
              >
                maps.app.goo.gl/imD8khkQ1RpgUThz6
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
