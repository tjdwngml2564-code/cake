import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { X, Sparkles, Check, Info, ShieldCheck, Heart } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCustomModal: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onOpenCustomModal,
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const currentSize = product.availableSizes?.[selectedSizeIndex];
  const unitPrice = product.price + (currentSize?.extraPrice || 0);
  const totalPrice = unitPrice * quantity;

  const handleSimpleAdd = () => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      engName: product.engName,
      price: unitPrice,
      image: product.image,
      quantity,
      selectedSize: currentSize?.name || '기본',
      orderType: 'pickup',
    };
    onAddToCart(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ECD9CE] text-[#452311]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAEADF] text-[#452311]/70 hover:text-[#452311] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Product Photography */}
          <div className="space-y-4">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAEADF] border border-[#ECD9CE]/80 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Badges */}
            <div className="p-4 rounded-xl bg-[#FAEADF]/60 border border-[#ECD9CE] space-y-2 text-xs">
              <div className="flex items-center gap-2 font-medium text-[#452311]">
                <ShieldCheck className="w-4 h-4 text-[#CD756B]" />
                <span>당일 생산 및 신선도 보증 (0℃~5℃ 냉장 유통)</span>
              </div>
              <div className="flex items-center gap-2 text-[#452311]/80">
                <Info className="w-4 h-4 text-[#CD756B]" />
                <span>{product.allergens}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Order Action */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#CD756B] font-serif-sub">
                {product.engName}
              </span>
              <h2 className="text-2xl font-bold font-serif-title mt-1 text-[#452311]">
                {product.name}
              </h2>
              <div className="text-2xl font-mono font-bold text-[#CD756B] mt-2 tabular-nums">
                ₩{unitPrice.toLocaleString()}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#452311]/80 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Taste Notes */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#452311]/70 mb-2">
                  테이스팅 노트
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.tasteNotes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 rounded-md bg-[#FAEADF] text-[#452311] text-xs font-medium border border-[#ECD9CE]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size options if available */}
              {product.availableSizes && product.availableSizes.length > 1 && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#452311]/70 mb-2">
                    사이즈 선택
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.availableSizes.map((size, idx) => (
                      <button
                        key={size.name}
                        type="button"
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                          selectedSizeIndex === idx
                            ? 'border-[#CD756B] bg-[#F8E8E4] font-semibold text-[#452311]'
                            : 'border-[#ECD9CE] bg-white text-[#452311]/75'
                        }`}
                      >
                        <div>{size.name}</div>
                        <div className="text-[11px] text-[#CD756B]">{size.serves}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity stepper */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#452311]/70">
                  수량
                </span>
                <div className="flex items-center border border-[#ECD9CE] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm hover:bg-[#FAEADF] text-[#452311] transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-mono font-bold text-[#452311] min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm hover:bg-[#FAEADF] text-[#452311] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions Bottom Bar */}
            <div className="pt-4 border-t border-[#ECD9CE] flex flex-col sm:flex-row items-center gap-3">
              {product.isCustomizable && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCustomModal(product);
                  }}
                  className="w-full sm:w-auto px-4 py-3 rounded-full border border-[#CD756B] text-[#CD756B] hover:bg-[#CD756B] hover:text-white transition-all text-xs font-semibold cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>맞춤 레터링 리본 옵션</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleSimpleAdd}
                className="w-full flex-1 px-5 py-3 rounded-full bg-[#CD756B] text-white hover:bg-[#B95F56] transition-all text-xs sm:text-sm font-semibold shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>장바구니 담기 (₩{totalPrice.toLocaleString()})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
