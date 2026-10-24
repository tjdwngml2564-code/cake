import React from 'react';
import { Heart, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#452311] text-[#FAEADF] pt-16 pb-12 border-t border-[#CD756B]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-title text-2xl font-bold tracking-tight text-white">
                Mellow<span className="font-serif-sub italic font-normal text-[#CD756B] ml-1">Bakery</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAEADF]/75 leading-relaxed max-w-md font-sans">
              좋은 재료로 만든 디저트가 오늘도 특별한 하루를 만들어 줍니다.<br />
              매일 아침 성수 아틀리에에서 갓 구워낸 프리미엄 수제 케이크와 구움과자를 선보입니다.
            </p>
            <div className="text-xs text-[#CD756B] font-serif-sub tracking-widest uppercase">
              SWEET MOMENTS, EVERYDAY
            </div>
          </div>

          {/* Boutique Visit Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif-sub">
              Boutique Atelier
            </h4>
            <div className="space-y-2 text-xs text-[#FAEADF]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#CD756B] shrink-0 mt-0.5" />
                <span>서울시 성동구 서울숲길 42 (1-2층)</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#CD756B] shrink-0 mt-0.5" />
                <span>02-468-1205</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#CD756B] shrink-0 mt-0.5" />
                <span>hello@mellowbakery.kr</span>
              </div>
            </div>
          </div>

          {/* Hours & Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif-sub">
              Opening Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#FAEADF]/80">
              <div>화요일 — 일요일: 11:30 - 20:30</div>
              <div className="text-[#CD756B]">매주 월요일 정기 휴무</div>
              <div className="pt-2 text-[11px] text-[#FAEADF]/60">
                홀케이크 예약 주문은 최소 2일 전 권장합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAEADF]/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Mellow Bakery. All rights reserved.</span>
            <span className="mx-1">·</span>
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#CD756B] fill-[#CD756B] inline" />
            <span>in Seongsu</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about-section" className="hover:text-white transition-colors">
              브랜드 소개
            </a>
            <a href="#shop-section" className="hover:text-white transition-colors">
              주문 안내
            </a>
            <a href="#atelier-section" className="hover:text-white transition-colors">
              매장 오시는 길
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
