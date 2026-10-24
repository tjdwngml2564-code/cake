import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Cake, Sparkles, Truck, Clock } from 'lucide-react';

interface ShopSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onCustomLettering: (product: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onCustomLettering,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const categories: { key: ProductCategory; label: string; eng: string }[] = [
    { key: 'all', label: '전체보기', eng: 'All' },
    { key: 'cake', label: '홀케이크 & 쉬폰', eng: 'Cakes' },
    { key: 'tart', label: '시즌 타르트', eng: 'Tarts' },
    { key: 'gift', label: '구움과자 & 선물', eng: 'Gifts' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop-section" className="py-16 md:py-24 bg-[#FAEADF] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-serif-sub tracking-[0.2em] text-xs font-semibold uppercase text-[#CD756B] block mb-2">
            DAILY FRESH COLLECTION
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#452311]">
            우리의 특별한 디저트
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#452311]/75 font-normal leading-relaxed">
            매일 아침 성수 아틀리에 파티시에의 손길로 정성껏 빚어내는 디저트입니다.<br className="hidden sm:inline" />
            소중한 기념일과 달콤한 티타임을 더욱 특별하게 채워보세요.
          </p>
        </div>

        {/* Category Tabs (Segmented Control - functional buttons) */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#ECD9CE]/70 border border-[#E0C7BA]/50">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#CD756B] text-white shadow-sm font-semibold'
                      : 'text-[#452311]/80 hover:text-[#452311] hover:bg-white/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1 text-[11px] opacity-80 hidden sm:inline">({cat.eng})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAdd}
              onCustomLettering={onCustomLettering}
            />
          ))}
        </div>

        {/* Order Info Strip */}
        <div className="mt-14 bg-[#FFF9F5] rounded-2xl p-6 sm:p-8 border border-[#ECD9CE] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAEADF] flex items-center justify-center shrink-0 text-[#CD756B]">
                <Cake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#452311]">주문 제작 리본 레터링</h4>
                <p className="text-xs text-[#452311]/70 mt-0.5">홀케이크 주문 시 무료 리본 메시지 각인 서비스</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAEADF] flex items-center justify-center shrink-0 text-[#CD756B]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#452311]">당일 픽업 & 예약 안내</h4>
                <p className="text-xs text-[#452311]/70 mt-0.5">성수 쇼룸 매장 픽업 희망 시간 지정 가능</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAEADF] flex items-center justify-center shrink-0 text-[#CD756B]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#452311]">서울/수도권 냉장 안심 퀵</h4>
                <p className="text-xs text-[#452311]/70 mt-0.5">케이크 전용 아이스 패키징으로 안전하게 배송</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
