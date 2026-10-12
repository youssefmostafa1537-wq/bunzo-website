import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send, Phone, MapPin, Store, ChevronRight, ChevronLeft } from 'lucide-react';
import { CartItem, Language } from '../types';
import { translations } from '../data/translations';
import { branchesData } from '../data/branchesData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  language,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const t = translations[language];
  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('6th of October');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState('october');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const total = subtotal;

  const currentBranch = branchesData.find((b) => b.id === selectedBranchId) || branchesData[0];

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    const isAr = language === 'ar';
    const fulfillmentText =
      fulfillmentType === 'delivery'
        ? (isAr ? `توصيل ديليفري 🛵 - منطقة: ${deliveryArea}` : `Home Delivery 🛵 - Area: ${deliveryArea}`)
        : (isAr ? `استلام من المطعم 🏃 - فرع: ${currentBranch.nameAr}` : `Store Pickup 🏃 - Branch: ${currentBranch.nameEn}`);

    let itemsList = '';
    cart.forEach((cItem, index) => {
      const name = isAr ? cItem.item.nameAr : cItem.item.nameEn;
      const size = cItem.options.sizeNameAr ? ` (${isAr ? cItem.options.sizeNameAr : cItem.options.sizeNameEn})` : '';
      const extras = cItem.options.selectedExtras.length > 0
        ? `\n   + ` + cItem.options.selectedExtras.map((e) => isAr ? e.nameAr : e.nameEn).join(', ')
        : '';
      const note = cItem.options.specialInstructions ? `\n   📝 ${cItem.options.specialInstructions}` : '';

      itemsList += `${index + 1}. *${name}*${size} x${cItem.quantity} - ${cItem.totalPrice} ${t.currency}${extras}${note}\n`;
    });

    let message = '';
    if (isAr) {
      message = `🍔 *طلب جديد من موقع بنزو (BUNZO)* 🍔\n\n` +
        `👤 *الاسم:* ${customerName.trim() || 'عميل بنزو'}\n` +
        `📞 *الهاتف:* ${customerPhone.trim() || 'لم يحدد'}\n` +
        `📍 *نوع الطلب:* ${fulfillmentText}\n`;

      if (fulfillmentType === 'delivery') {
        message += `🏠 *العنوان:* ${deliveryAddress.trim() || 'سيتم تأكيده في المحادثة'}\n`;
      }

      message += `\n📋 *تفاصيل الطلب:*\n${itemsList}\n` +
        `💰 *المجموع:* ${total} ${t.currency}\n` +
        `📍 *الفرع المختار:* ${currentBranch.nameAr} (${currentBranch.phone})\n\n` +
        `برجاء تأكيد الطلب ووقت التوصيل. شكرًا!`;
    } else {
      message = `🍔 *New Order from BUNZO Website* 🍔\n\n` +
        `👤 *Name:* ${customerName.trim() || 'BUNZO Customer'}\n` +
        `📞 *Phone:* ${customerPhone.trim() || 'Not specified'}\n` +
        `📍 *Type:* ${fulfillmentText}\n`;

      if (fulfillmentType === 'delivery') {
        message += `🏠 *Address:* ${deliveryAddress.trim() || 'To be confirmed in chat'}\n`;
      }

      message += `\n📋 *Order Items:*\n${itemsList}\n` +
        `💰 *Total:* ${total} ${t.currency}\n` +
        `📍 *Selected Branch:* ${currentBranch.nameEn}\n\n` +
        `Please confirm order and delivery time. Thank you!`;
    }

    const whatsappUrl = `https://wa.me/${currentBranch.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const Arrow = language === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#12100e] border-l rtl:border-l-0 rtl:border-r border-[#26221c] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-[#24201a] flex items-center justify-between bg-[#171513]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-black text-white">{t.cart}</h2>
              {cart.length > 0 && (
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                  {cart.length} {t.itemsCount}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8c8478] hover:text-white hover:bg-[#24211c] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1c1916] border border-[#2b2721] flex items-center justify-center text-[#736c61] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{t.emptyCart}</h3>
                <p className="text-xs text-[#8c8478] max-w-xs mb-6">
                  {t.startAdding}
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-colors"
                >
                  {language === 'ar' ? 'تصفح قائمة الطعام' : 'Explore Menu'}
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3.5">
                  {cart.map((cartItem) => {
                    const name = language === 'ar' ? cartItem.item.nameAr : cartItem.item.nameEn;
                    return (
                      <div
                        key={cartItem.cartItemId}
                        className="bg-[#181614] border border-[#292520] rounded-2xl p-3.5 flex gap-3 items-center justify-between"
                      >
                        <img
                          src={cartItem.item.image}
                          alt={name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80';
                          }}
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">{name}</h4>
                          
                          {cartItem.options.sizeNameAr && (
                            <span className="text-[11px] text-amber-400 block font-medium">
                              {language === 'ar' ? cartItem.options.sizeNameAr : cartItem.options.sizeNameEn}
                            </span>
                          )}

                          {cartItem.options.selectedExtras.length > 0 && (
                            <p className="text-[10px] text-[#8c8478] truncate">
                              +{cartItem.options.selectedExtras.map((e) => language === 'ar' ? e.nameAr : e.nameEn).join(', ')}
                            </p>
                          )}

                          <div className="text-xs font-mono font-bold text-amber-400 mt-1">
                            {cartItem.totalPrice} {t.currency}
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <button
                            onClick={() => onRemoveItem(cartItem.cartItemId)}
                            className="text-[#6b645b] hover:text-red-400 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1.5 bg-[#211e1a] border border-[#302c25] rounded-lg p-0.5">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                              className="w-5 h-5 rounded text-white hover:bg-[#332f27] text-xs flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="w-4 text-center text-xs font-mono font-bold text-white">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                              className="w-5 h-5 rounded text-white hover:bg-[#332f27] text-xs flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Fulfillment selector */}
                <div className="bg-[#171513] border border-[#2b2721] rounded-2xl p-4 space-y-3">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {t.fulfillmentType}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFulfillmentType('delivery')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        fulfillmentType === 'delivery'
                          ? 'bg-amber-500 text-black'
                          : 'bg-[#1f1d19] text-[#a39c93] hover:text-white'
                      }`}
                    >
                      {t.fulfillmentDelivery}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFulfillmentType('pickup')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        fulfillmentType === 'pickup'
                          ? 'bg-amber-500 text-black'
                          : 'bg-[#1f1d19] text-[#a39c93] hover:text-white'
                      }`}
                    >
                      {t.fulfillmentPickup}
                    </button>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="bg-[#171513] border border-[#2b2721] rounded-2xl p-4 space-y-3 text-xs">
                  <div>
                    <label className="text-[#a39c93] block mb-1 font-semibold">{t.customerName}</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={language === 'ar' ? 'اكتب اسمك هنا' : 'Your Name'}
                      className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[#a39c93] block mb-1 font-semibold">{t.customerPhone}</label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="010XXXXXXXX"
                      className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500 font-mono"
                      dir="ltr"
                    />
                  </div>

                  {fulfillmentType === 'delivery' ? (
                    <>
                      <div>
                        <label className="text-[#a39c93] block mb-1 font-semibold">{t.deliveryArea}</label>
                        <select
                          value={deliveryArea}
                          onChange={(e) => setDeliveryArea(e.target.value)}
                          className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="6th of October">6 أكتوبر (المتميز، الأحياء، الحصري، مول مصر، دريم)</option>
                          <option value="Sheikh Zayed">الشيخ زايد (سيتي ووك، بيفرلي هيلز، وصلة دهشور)</option>
                          <option value="Hadayek Al-Ahram">حدائق الأهرام / الرماية</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[#a39c93] block mb-1 font-semibold">{t.deliveryAddress}</label>
                        <textarea
                          rows={2}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder={language === 'ar' ? 'الشارع، رقم العمارة، الشقة، علامة مميزة...' : 'Street name, building no., floor/apartment...'}
                          className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="text-[#a39c93] block mb-1 font-semibold">{t.selectBranch}</label>
                      <select
                        value={selectedBranchId}
                        onChange={(e) => setSelectedBranchId(e.target.value)}
                        className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                      >
                        {branchesData.map((b) => (
                          <option key={b.id} value={b.id}>
                            {language === 'ar' ? b.nameAr : b.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Subtotal Calculation */}
                <div className="bg-[#171513] border border-[#2b2721] rounded-2xl p-4 space-y-2 text-xs text-[#a39c93]">
                  <div className="flex justify-between">
                    <span>{t.subtotal}</span>
                    <span className="font-mono text-white font-bold">{subtotal} {t.currency}</span>
                  </div>
                  {fulfillmentType === 'delivery' && (
                    <div className="flex justify-between text-[11px] text-[#8c8478]">
                      <span>{t.deliveryFee}</span>
                      <span>{t.deliveryFeeCalculated}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#26221c] flex justify-between text-sm font-bold text-white">
                    <span>{t.total}</span>
                    <span className="font-mono text-amber-400 text-lg">{total} {t.currency}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Buttons */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#24201a] bg-[#171513] space-y-2.5">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendOrderWhatsApp}</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#8c8478] px-1">
                <a
                  href={`tel:${currentBranch.phone}`}
                  className="hover:text-amber-400 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.directCallOrder}: {currentBranch.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="hover:text-red-400 text-[11px]"
                >
                  {language === 'ar' ? 'تفريغ السلة' : 'Clear Cart'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
