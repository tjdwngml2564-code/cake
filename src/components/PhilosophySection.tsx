import React from 'react';
import { Sparkles, Heart, Sun, Award } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: '100% 동물성 생크림',
      subtitle: 'Pure Animal Cream',
      desc: '가공유지나 식물성 팜유 크림을 일체 섞지 않습니다. 신선한 우유의 풍미가 입안에 은은하게 남는 순수 동물성 생크림만을 고집합니다.',
      icon: Heart,
    },
    {
      number: '02',
      title: '논산 산지 직송 설향 딸기',
      subtitle: 'Farm-Fresh Strawberries',
      desc: '매일 새벽 충남 논산 농가에서 수확한 고당도 설향 딸기를 당일 공급받아, 가장 신선하고 탄력 있는 과육만을 엄선해 케이크에 담습니다.',
      icon: Sun,
    },
    {
      number: '03',
      title: '프랑스 AOP 고메 버터',
      subtitle: 'French Gourmet Butter',
      desc: '프랑스 노르망디 청정 지역에서 생산된 엘르앤비르 및 이즈니 AOP 고메 버터만을 사용하여, 굽는 순간부터 깊고 고소한 너티함을 냅니다.',
      icon: Award,
    },
    {
      number: '04',
      title: '마다가스카르 버번 바닐라',
      subtitle: 'Bourbon Vanilla Bean',
      desc: '인공 바닐라 향료 대신, 자연 태양빛에 오랜 시간 건조한 마다가스카르산 최상급 버번 통 바닐라빈을 직접 긁어내어 크림에 풍미를 채웁니다.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about-section" className="py-20 md:py-28 bg-[#FFF8F3] relative border-y border-[#ECD9CE]/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-sub tracking-[0.25em] text-xs font-semibold uppercase text-[#CD756B] block mb-2">
            OUR PHILOSOPHY & INGREDIENTS
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#452311] leading-tight">
            매일 아침 정직하게 빚어내는<br />
            <span className="text-[#CD756B] italic font-semibold">순수한 달콤함</span>의 비밀
          </h2>
          <div className="my-4 flex items-center justify-center text-[#CD756B]" aria-hidden="true">
            <svg width="180" height="18" viewBox="0 0 180 18" fill="none" className="opacity-80">
              <path d="M10 9C30 9 45 15 65 15C85 15 90 9 100 9" stroke="#CD756B" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="108" cy="9" r="2.5" fill="#CD756B" />
              <path d="M116 9C126 9 135 15 150 15C165 15 170 9 180 9" stroke="#CD756B" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-sm sm:text-base text-[#452311]/80 leading-relaxed font-sans">
            멜로우 베이커리는 기교보다 좋은 재료가 전하는 본연의 감동을 믿습니다.<br className="hidden sm:inline" />
            내 가족과 가장 소중한 사람에게 건네고 싶은 한 조각의 행복을 굽습니다.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#FAEADF]/60 rounded-2xl p-6 border border-[#ECD9CE] hover:border-[#CD756B]/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-sub text-lg font-bold text-[#CD756B]">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#CD756B]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#452311]">{item.title}</h3>
                  <div className="text-[11px] uppercase tracking-wider font-serif-sub text-[#CD756B] font-semibold mt-0.5 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#452311]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Box */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F6E5DA] via-[#FAEADF] to-[#F6E5DA] border border-[#ECD9CE] text-center max-w-3xl mx-auto shadow-sm">
          <p className="font-serif-title italic text-lg sm:text-xl text-[#452311] leading-relaxed">
            &ldquo;디저트는 하루를 위로하는 가장 부드러운 다정함입니다.&rdquo;
          </p>
          <div className="mt-3 text-xs text-[#CD756B] font-medium tracking-widest uppercase font-serif-sub">
            — Head Pastry Chef & Founder, Mellow Bakery
          </div>
        </div>
      </div>
    </section>
  );
};
