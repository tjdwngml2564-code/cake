import React from 'react';
import { MapPin, Clock, Phone, Car, Coffee, CalendarCheck } from 'lucide-react';

interface AtelierSectionProps {
  onOpenReservation: () => void;
}

export const AtelierSection: React.FC<AtelierSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="atelier-section" className="py-20 md:py-28 bg-[#FAEADF] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif-sub tracking-[0.25em] text-xs font-semibold uppercase text-[#CD756B] block mb-2">
                OFFLINE BOUTIQUE & SHOWROOM
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#452311] leading-tight">
                성수동 골목 속<br />
                따스한 <span className="text-[#CD756B] italic font-normal">멜로우 아틀리에</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#452311]/80 leading-relaxed font-sans">
              서울숲의 싱그러운 녹음과 부드러운 햇살이 비추는 멜로우 아틀리에입니다.<br />
              갓 구워낸 버터의 고소한 향기와 달콤한 생딸기 생크림 향이 머무는 공간에서
              차분한 티타임과 케이크 픽업을 경험해 보세요.
            </p>

            {/* Practical Boutique Details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#ECD9CE]/80 flex items-center justify-center shrink-0 text-[#CD756B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-[#452311]">서울시 성동구 서울숲길 42 (1-2층)</div>
                  <div className="text-[#452311]/70 mt-0.5">수인지하철 서울숲역 5번 출구 도보 4분 / 뚝섬역 8번 출구 도보 7분</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#ECD9CE]/80 flex items-center justify-center shrink-0 text-[#CD756B]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-[#452311]">화요일 - 일요일 11:30 ~ 20:30</div>
                  <div className="text-[#CD756B] font-medium mt-0.5">매주 월요일 정기 휴무 (홀케이크 사전예약 픽업 가능)</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#ECD9CE]/80 flex items-center justify-center shrink-0 text-[#CD756B]">
                  <Car className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-[#452311]">주차 및 편의 시설 안내</div>
                  <div className="text-[#452311]/70 mt-0.5">성동구민종합체육센터 공영주차장 이용 권장 (도보 2분) · 반려동물 동반 가능</div>
                </div>
              </div>
            </div>

            {/* Visit Reservation Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CD756B] text-white hover:bg-[#B95F56] transition-all text-xs sm:text-sm font-semibold shadow-md active:scale-95 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>오프라인 픽업 & 방문 예약하기</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#452311]/70">
                <Coffee className="w-4 h-4 text-[#CD756B]" />
                <span>카페 홀 18석 완비</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Atelier Photography */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/70 bg-[#FFF8F3] group">
              <img
                src="/src/assets/images/bakery_atelier_interior_1792831901884.jpg"
                alt="Mellow Bakery Seongsu Boutique Atelier Interior with wooden counter and floral touches"
                className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#452311]/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#F8E8E4] font-serif-sub">
                    Seongsu Flagship
                  </span>
                  <div className="text-lg sm:text-xl font-bold font-serif-title mt-0.5">
                    Mellow Bakery Atelier & Salon de Thé
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  매장 식음 가능
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
