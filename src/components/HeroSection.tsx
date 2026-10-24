import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreCakes: () => void;
  onOpenSignatureModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCakes,
  onOpenSignatureModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAEADF] pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative watercolor brush top edge */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-10 pointer-events-none opacity-40 bg-gradient-to-b from-[#E8BDB4]/40 to-transparent" 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Centered Typography & Copy Area */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow / English Subcopy */}
          <span className="font-serif-sub tracking-[0.22em] text-xs sm:text-sm font-semibold uppercase text-[#CD756B] mb-2 sm:mb-3">
            SWEET MOMENTS, EVERYDAY
          </span>

          {/* Main Title */}
          <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#452311] leading-tight">
            A SWEETER <span className="text-[#CD756B] italic font-medium">TOMORROW.</span>
          </h1>

          {/* Hand-drawn delicate ribbon swirl with heart */}
          <div className="my-3 sm:my-4 flex items-center justify-center text-[#CD756B]" aria-hidden="true">
            <svg
              width="260"
              height="28"
              viewBox="0 0 260 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 sm:w-64 max-w-full opacity-90"
            >
              <path
                d="M10 14C35 14 55 22 75 22C95 22 105 14 118 14"
                stroke="#CD756B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Hand-drawn heart */}
              <path
                d="M130 20C128 17 121 10 125 6C128.5 2.5 133 6.5 130 11C127 6.5 131.5 2.5 135 6C139 10 132 17 130 20Z"
                fill="#CD756B"
              />
              <path
                d="M142 14C155 14 165 22 185 22C205 22 225 14 250 14"
                stroke="#CD756B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Korean Description */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#452311]/85 font-normal leading-relaxed mb-6 sm:mb-8 font-sans">
            좋은 재료로 만든 디저트가<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            오늘도 특별한 하루를 만들어 줍니다.
          </p>

          {/* Action CTA Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onExploreCakes}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#CD756B] text-white font-medium text-sm sm:text-base hover:bg-[#B95F56] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>우리의 케이크 만나기</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Centerpiece Strawberry Cake Photograph Frame */}
        <div className="mt-8 sm:mt-12 relative max-w-4xl mx-auto">
          {/* Subtle warm glow background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8DCD4]/50 via-transparent to-transparent rounded-3xl -z-10 blur-xl" />

          {/* Image Container with organic soft border and watercolor touch */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-[#FAEADF] group">
            <img
              src="/public/assets/aistudio/image_234083b1.png"
              alt="Mellow Bakery Signature Strawberry Shortcake with fresh cream and daisies in morning light"
              className="w-full h-auto max-h-[540px] object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Quick interactive peek on cake */}
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">
              <button
                onClick={onOpenSignatureModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#452311] text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#CD756B] transition-all shadow-lg border border-[#E8D0C3] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CD756B]" />
                <span>시그니처 설향 딸기 케이크 상세보기</span>
              </button>
            </div>

            {/* Subtle corner badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#452311]/80 backdrop-blur-sm text-white text-xs tracking-wider uppercase font-serif-sub">
                Handcrafted Daily in Seongsu
              </span>
            </div>
          </div>

          {/* Subtle natural sunlight and floral accents */}
          <div className="mt-4 flex flex-wrap justify-between items-center text-xs text-[#452311]/70 px-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CD756B]" />
              <span>논산 설향 생딸기 당일 입고</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CD756B]" />
              <span>100% 서울우유 순수 동물성 생크림</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CD756B]" />
              <span>프랑스 AOP 고메 버터 & 마다가스카르 바닐라빈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative watercolor brush bottom edge */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none opacity-40 bg-gradient-to-t from-[#E8BDB4]/40 to-transparent" 
      />
    </section>
  );
};
