import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Send, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { branchesData } from '../data/branchesData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = translations[language];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branchId, setBranchId] = useState('october');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('4');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const currentBranch = branchesData.find((b) => b.id === branchId) || branchesData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isAr = language === 'ar';

    const branchName = isAr ? currentBranch.nameAr : currentBranch.nameEn;
    let message = '';
    if (isAr) {
      message = `🎉 *طلب حجز طاولة / مناسبة في بنزو* 🎉\n\n` +
        `👤 *الاسم:* ${name.trim() || 'عميل'}\n` +
        `📞 *رقم الهاتف:* ${phone.trim() || 'لم يحدد'}\n` +
        `📍 *الفرع:* ${branchName}\n` +
        `📅 *التاريخ:* ${date || 'اليوم'}\n` +
        `⏰ *الوقت:* ${time}\n` +
        `👥 *عدد الأفراد:* ${guests} أفراد\n`;
      if (notes.trim()) {
        message += `📝 *ملاحظات خاصة:* ${notes.trim()}\n`;
      }
      message += `\nبرجاء تأكيد إمكانية الحجز. شكرًا!`;
    } else {
      message = `🎉 *Table Reservation Request at BUNZO* 🎉\n\n` +
        `👤 *Name:* ${name.trim() || 'Customer'}\n` +
        `📞 *Phone:* ${phone.trim() || 'N/A'}\n` +
        `📍 *Branch:* ${branchName}\n` +
        `📅 *Date:* ${date || 'Today'}\n` +
        `⏰ *Time:* ${time}\n` +
        `👥 *Guests:* ${guests} people\n`;
      if (notes.trim()) {
        message += `📝 *Notes:* ${notes.trim()}\n`;
      }
      message += `\nPlease confirm reservation availability. Thanks!`;
    }

    const whatsappUrl = `https://wa.me/${currentBranch.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#171513] border border-[#332f28] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 rtl:left-5 ltr:right-5 p-2 rounded-xl text-[#8c8478] hover:text-white hover:bg-[#24211c] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'جلسات عائلية ومناسبات' : 'Gatherings & Parties'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {t.reserveTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#a39c93] mt-1">
            {t.reserveSubtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-[#a39c93] block mb-1 font-semibold">{t.reserveName}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-[#a39c93] block mb-1 font-semibold">{t.reservePhone}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010XXXXXXXX"
                className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 font-mono"
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label className="text-[#a39c93] block mb-1 font-semibold">{t.reserveBranch}</label>
            <select
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
            >
              {branchesData.map((b) => (
                <option key={b.id} value={b.id}>
                  {language === 'ar' ? b.nameAr : b.nameEn}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="text-[#a39c93] block mb-1 font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.reserveDate}</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="text-[#a39c93] block mb-1 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.reserveTime}</span>
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="text-[#a39c93] block mb-1 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.reserveGuests}</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-amber-500 text-xs"
              >
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10+">10+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[#a39c93] block mb-1 font-semibold">{t.reserveNotes}</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={language === 'ar' ? 'مناسبة خاصة (عيد ميلاد، تجمع عائلي، احتفال...)' : 'Special occasion (birthday, family gathering...)'}
              className="w-full bg-[#1e1c19] border border-[#302c25] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.reserveSubmit}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
