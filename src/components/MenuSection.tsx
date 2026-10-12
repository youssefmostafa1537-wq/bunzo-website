import React, { useState, useMemo } from 'react';
import { Search, Plus, Flame, Check, X, Sparkles } from 'lucide-react';
import { MenuItem, Language, CartItemOption } from '../types';
import { menuData } from '../data/menuData';
import { translations } from '../data/translations';

interface MenuSectionProps {
  language: Language;
  onAddToCart: (item: MenuItem, quantity: number, options: CartItemOption) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ language, onAddToCart }) => {
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Modal customization states
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [selectedExtras, setSelectedExtras] = useState<{ id: string; nameAr: string; nameEn: string; price: number }[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [modalQuantity, setModalQuantity] = useState(1);
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: t.categoryAll },
    { id: 'smash', label: t.categorySmash },
    { id: 'flame', label: t.categoryFlame },
    { id: 'chicken', label: t.categoryChicken },
    { id: 'sides', label: t.categorySides },
    { id: 'drinks', label: t.categoryDrinks },
  ];

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        item.nameAr.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionAr.toLowerCase().includes(q) ||
        item.descriptionEn.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const openCustomizeModal = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setSelectedSizeIndex(0);
    setSelectedExtras([]);
    setSpecialInstructions('');
    setModalQuantity(1);
  };

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.options?.sizes || item.options?.extras) {
      openCustomizeModal(item);
    } else {
      onAddToCart(item, 1, {
        selectedExtras: [],
        specialInstructions: ''
      });
      triggerAddedFeedback(item.id);
    }
  };

  const handleModalAdd = () => {
    if (!selectedItemForModal) return;

    const sizeOption = selectedItemForModal.options?.sizes?.[selectedSizeIndex];
    const options: CartItemOption = {
      sizeNameAr: sizeOption?.nameAr,
      sizeNameEn: sizeOption?.nameEn,
      selectedExtras,
      specialInstructions: specialInstructions.trim() || undefined,
    };

    onAddToCart(selectedItemForModal, modalQuantity, options);
    triggerAddedFeedback(selectedItemForModal.id);
    setSelectedItemForModal(null);
  };

  const triggerAddedFeedback = (id: string) => {
    setAddedSuccessId(id);
    setTimeout(() => {
      setAddedSuccessId(null);
    }, 1800);
  };

  const toggleExtra = (extra: { id: string; nameAr: string; nameEn: string; price: number }) => {
    if (selectedExtras.some((e) => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  // Calculate modal dynamic unit price
  const modalUnitPrice = useMemo(() => {
    if (!selectedItemForModal) return 0;
    let base = selectedItemForModal.price;
    if (selectedItemForModal.options?.sizes?.[selectedSizeIndex]) {
      base += selectedItemForModal.options.sizes[selectedSizeIndex].priceDiff;
    }
    const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    return base + extrasTotal;
  }, [selectedItemForModal, selectedSizeIndex, selectedExtras]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#0f0e0d] border-t border-[#211e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Flame className="w-4 h-4" />
            <span>{language === 'ar' ? 'منيو طازج ولذيذ' : 'Handcrafted & Smashed Daily'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t.menuTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#a39c93]">
            {t.menuSubtitle}
          </p>
        </div>

        {/* Search bar & Category filters */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#736c62] absolute top-1/2 -translate-y-1/2 rtl:right-4 ltr:left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#181614] border border-[#2b2722] focus:border-amber-500/80 rounded-2xl py-3.5 rtl:pr-12 rtl:pl-10 ltr:pl-12 ltr:pr-10 text-sm text-[#f5f0e6] placeholder-[#6e685f] focus:outline-none transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 rtl:left-4 ltr:right-4 text-[#8a8276] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-[#0d0c0b] shadow-lg shadow-amber-950/40'
                      : 'bg-[#181614] hover:bg-[#221f1c] text-[#b8afa3] hover:text-white border border-[#26231f]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#141210] rounded-3xl border border-[#221f1b] max-w-lg mx-auto">
            <p className="text-base font-semibold text-[#ded7cc] mb-2">
              {language === 'ar' ? 'لا توجد أصناف مطابقة للبحث' : 'No menu items match your search'}
            </p>
            <p className="text-xs text-[#8c8478] mb-4">
              {language === 'ar' ? 'جرب البحث بكلمة أخرى مثل «سماش» أو «فايرو»' : 'Try searching for something else like "Smash" or "Fayro"'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold"
            >
              {language === 'ar' ? 'عرض كل الأصناف' : 'Show All Items'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const name = language === 'ar' ? item.nameAr : item.nameEn;
              const desc = language === 'ar' ? item.descriptionAr : item.descriptionEn;
              const ingredients = language === 'ar' ? item.ingredientsAr : item.ingredientsEn;
              const hasCustomization = Boolean(item.options?.sizes || item.options?.extras);

              return (
                <div
                  key={item.id}
                  onClick={() => openCustomizeModal(item)}
                  className="group rounded-3xl overflow-hidden bg-[#141210] hover:bg-[#1a1714] border border-[#26221d] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/60"
                >
                  {/* Item Image with subtle gradient */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#1c1916]">
                    <img
                      src={item.image}
                      alt={name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/20" />

                    {/* Quiet badges */}
                    <div className="absolute top-3 rtl:right-3 ltr:left-3 flex flex-col gap-1.5 items-start">
                      {item.isPopular && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-500 text-black shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {t.popularBadge}
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-red-600 text-white shadow-md">
                          {t.spicyBadge}
                        </span>
                      )}
                      {item.isNew && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-md">
                          {t.newBadge}
                        </span>
                      )}
                    </div>

                    {/* Calories metadata */}
                    {item.calories && (
                      <span className="absolute bottom-3 rtl:left-3 ltr:right-3 text-[11px] text-[#ded7cc] bg-[#0d0c0b]/80 backdrop-blur-sm px-2 py-0.5 rounded font-mono">
                        {item.calories} cal
                      </span>
                    )}
                  </div>

                  {/* Item Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Price */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {name}
                        </h3>
                        <div className="text-right rtl:text-left shrink-0">
                          <span className="text-lg font-black text-amber-400 font-mono">
                            {item.price}{' '}
                            <span className="text-xs font-sans font-medium text-[#baa485]">
                              {t.currency}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#a39c93] leading-relaxed mb-4 line-clamp-2">
                        {desc}
                      </p>

                      {/* Clean Unboxed Metadata: Ingredients */}
                      <div className="text-[11px] text-[#787167] flex flex-wrap items-center gap-1.5 mb-6">
                        {ingredients.slice(0, 3).map((ing, idx) => (
                          <React.Fragment key={idx}>
                            <span>{ing}</span>
                            {idx < 2 && <span aria-hidden="true">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-[#24201b] flex items-center justify-between gap-3">
                      <span className="text-xs text-[#8c8478]">
                        {hasCustomization
                          ? (language === 'ar' ? 'أحجام وإضافات متاحة' : 'Options & Add-ons available')
                          : (language === 'ar' ? 'طلب مباشر' : 'Standard preparation')}
                      </span>

                      <button
                        onClick={(e) => handleQuickAdd(item, e)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          addedSuccessId === item.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#221f1b] hover:bg-amber-500 hover:text-black text-[#f5f0e6] border border-[#38332b]'
                        }`}
                      >
                        {addedSuccessId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{language === 'ar' ? 'تمت الإضافة' : 'Added'}</span>
                          </>
                        ) : hasCustomization ? (
                          <>
                            <Plus className="w-3.5 h-3.5 text-amber-400" />
                            <span>{t.customize}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{t.addToCart}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Item Customization Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171513] border border-[#332f28] rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl">
            
            {/* Modal Header Image */}
            <div className="relative h-48 bg-[#1f1c18] shrink-0">
              <img
                src={selectedItemForModal.image}
                alt={language === 'ar' ? selectedItemForModal.nameAr : selectedItemForModal.nameEn}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80';
                }}
              />
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-4 rtl:left-4 ltr:right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-black text-white mb-1.5">
                  {language === 'ar' ? selectedItemForModal.nameAr : selectedItemForModal.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a094]">
                  {language === 'ar' ? selectedItemForModal.descriptionAr : selectedItemForModal.descriptionEn}
                </p>
              </div>

              {/* Size options if available */}
              {selectedItemForModal.options?.sizes && (
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {t.selectSize}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedItemForModal.options.sizes.map((size, idx) => {
                      const isSelected = selectedSizeIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedSizeIndex(idx)}
                          className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                              : 'bg-[#1e1c19] border-[#2c2822] text-[#baa485] hover:text-white'
                          }`}
                        >
                          <span>{language === 'ar' ? size.nameAr : size.nameEn}</span>
                          {size.priceDiff > 0 && (
                            <span className="font-mono">+{size.priceDiff} {t.currency}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Extras list if available */}
              {selectedItemForModal.options?.extras && (
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {t.selectExtras}
                  </label>
                  <div className="space-y-2">
                    {selectedItemForModal.options.extras.map((extra) => {
                      const isChecked = selectedExtras.some((e) => e.id === extra.id);
                      return (
                        <div
                          key={extra.id}
                          onClick={() => toggleExtra(extra)}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-amber-500/10 border-amber-500/60 text-white'
                              : 'bg-[#1e1c19] border-[#2b2722] text-[#b3aaa0] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? 'bg-amber-500 border-amber-500 text-black' : 'border-[#4a443b]'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="font-medium">
                              {language === 'ar' ? extra.nameAr : extra.nameEn}
                            </span>
                          </div>
                          <span className="font-mono font-bold text-amber-400">
                            +{extra.price} {t.currency}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Kitchen notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#a8a094] block">
                  {t.specialNotes}
                </label>
                <input
                  type="text"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder={t.specialNotesPlaceholder}
                  className="w-full bg-[#1b1916] border border-[#2e2a24] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6b645b] focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Quantity and Final Add Button */}
              <div className="pt-4 border-t border-[#26221d] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 bg-[#1e1c19] border border-[#302c25] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#26221d] text-white hover:bg-[#332f27] flex items-center justify-center font-bold text-base cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-bold font-mono text-white text-sm">
                    {modalQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalQuantity(modalQuantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#26221d] text-white hover:bg-[#332f27] flex items-center justify-center font-bold text-base cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleModalAdd}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-[#0d0c0b] font-black text-sm flex items-center justify-between cursor-pointer shadow-lg shadow-amber-950/40"
                >
                  <span>{t.addToCart}</span>
                  <span className="font-mono">
                    {modalUnitPrice * modalQuantity} {t.currency}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
