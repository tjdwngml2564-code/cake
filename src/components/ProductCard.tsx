import React from 'react';
import { Product } from '../types';
import { Plus, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onCustomLettering?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
  onCustomLettering,
}) => {
  return (
    <div className="group relative bg-[#FFF9F5] rounded-2xl p-4 border border-[#ECD9CE]/80 hover:border-[#CD756B]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
      {/* Product Image Frame */}
      <div 
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FAEADF] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Tag / Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase rounded-md bg-[#452311]/85 text-white backdrop-blur-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-[#452311]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="p-2.5 rounded-full bg-white/95 text-[#452311] hover:text-[#CD756B] shadow-md hover:scale-110 transition-all cursor-pointer"
            title="자세히 보기"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & English Name */}
          <div className="text-xs uppercase font-serif-sub tracking-wider text-[#CD756B] font-semibold mb-1">
            {product.engName}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onSelect(product)}
            className="text-base sm:text-lg font-bold text-[#452311] hover:text-[#CD756B] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="mt-1.5 text-xs sm:text-[13px] text-[#452311]/75 leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#ECD9CE]/60 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#452311]/60 mr-1">₩</span>
            <span className="text-lg font-bold text-[#452311] font-mono tabular-nums">
              {product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {product.isCustomizable && onCustomLettering && (
              <button
                type="button"
                onClick={() => onCustomLettering(product)}
                className="px-2.5 py-1.5 rounded-lg border border-[#CD756B]/60 text-[#CD756B] hover:bg-[#CD756B] hover:text-white text-xs font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
                title="레터링 & 옵션 설정"
              >
                <Sparkles className="w-3 h-3" />
                <span>주문옵션</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onQuickAdd(product)}
              className="px-3 py-1.5 rounded-lg bg-[#CD756B] hover:bg-[#B95F56] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer inline-flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>담기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
