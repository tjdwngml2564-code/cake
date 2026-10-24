import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, MapPin, Check } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmed: (resData: any) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onConfirmed,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState<'pickup' | 'dinein'>('pickup');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('14:00');
  const [guests, setGuests] = useState('2');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmed({
      name,
      phone,
      type,
      date,
      time,
      guests,
      note,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ECD9CE] text-[#452311]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAEADF] text-[#452311]/70 hover:text-[#452311] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-[#CD756B]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#CD756B] font-serif-sub">
            SEONGSU ATELIER
          </span>
        </div>
        <h3 className="text-2xl font-bold font-serif-title">성수 아틀리에 방문 & 픽업 예약</h3>
        <p className="text-xs sm:text-sm text-[#452311]/70 mt-1">
          기다림 없이 신선한 케이크 수령 및 티 살롱 좌석을 예약하세요.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Reservation Type */}
          <div>
            <label className="block text-xs font-semibold text-[#452311] mb-2">예약 목적</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setType('pickup')}
                className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  type === 'pickup'
                    ? 'border-[#CD756B] bg-[#CD756B] text-white'
                    : 'border-[#ECD9CE] bg-white text-[#452311]'
                }`}
              >
                케이크 픽업 수령
              </button>
              <button
                type="button"
                onClick={() => setType('dinein')}
                className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  type === 'dinein'
                    ? 'border-[#CD756B] bg-[#CD756B] text-white'
                    : 'border-[#ECD9CE] bg-white text-[#452311]'
                }`}
              >
                살롱 드 테 (카페 좌석 이용)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">예약자 성함</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">연락처</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">방문 날짜</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">방문 시간</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              >
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
              </select>
            </div>
          </div>

          {type === 'dinein' && (
            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">방문 인원</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              >
                <option value="1">1인</option>
                <option value="2">2인</option>
                <option value="3">3인</option>
                <option value="4">4인</option>
                <option value="5+">5인 이상 (사전 전화 문의)</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#452311] mb-1">요청 사항 (선택)</label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="예: 보냉백 추가 구매 희망, 창가 좌석 선호 등"
              className="w-full px-3.5 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#CD756B] text-white font-semibold text-sm hover:bg-[#B95F56] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              예약 접수하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
