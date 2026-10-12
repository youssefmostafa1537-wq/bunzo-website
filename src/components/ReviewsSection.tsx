import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { Language } from '../types';
import { reviewsData } from '../data/reviewsData';
import { translations } from '../data/translations';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0f0e0d] border-t border-[#211e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>4.8 / 5.0 RATED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t.reviewsTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#a39c93]">
            {t.reviewsSubtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviewsData.map((rev) => {
            const author = language === 'ar' ? rev.authorAr : rev.authorEn;
            const branch = language === 'ar' ? rev.branchAr : rev.branchEn;
            const favorite = language === 'ar' ? rev.favoriteItemAr : rev.favoriteItemEn;
            const text = language === 'ar' ? rev.textAr : rev.textEn;
            const date = language === 'ar' ? rev.dateAr : rev.dateEn;

            return (
              <div
                key={rev.id}
                className="bg-[#141210] border border-[#26221c] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Rating stars & date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-[#736c61] font-mono">{date}</span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <MessageSquareQuote className="w-8 h-8 text-[#26221d] absolute -top-3 -right-2 rtl:-left-2 rtl:right-auto pointer-events-none" />
                    <p className="text-sm sm:text-base text-[#ded7cc] leading-relaxed relative z-10 italic">
                      "{text}"
                    </p>
                  </div>
                </div>

                {/* Author details & favorite order */}
                <div className="pt-4 border-t border-[#1f1c18] flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">{author}</h4>
                    <span className="text-xs text-[#8c8478] block">{branch}</span>
                  </div>

                  <div className="text-right rtl:text-left">
                    <span className="text-[10px] text-[#736c61] block uppercase tracking-wider">
                      {language === 'ar' ? 'الطلب المفضل' : 'Favorite Order'}
                    </span>
                    <span className="text-xs font-semibold text-amber-400">
                      {favorite}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
