import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Clock, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 70000;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.every(i => i.orderType === 'pickup');
  const deliveryFee = subtotal > 0 && !isFreeShipping ? 5000 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide Drawer */}
      <div className="relative w-full max-w-md bg-[#FFF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#ECD9CE] animate-in slide-in-from-right duration-300 text-[#452311]">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#ECD9CE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#CD756B]" />
            <h3 className="font-serif-title text-xl font-bold">장바구니</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAEADF] text-[#CD756B] font-bold">
              {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAEADF] text-[#452311]/70 hover:text-[#452311] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {subtotal > 0 && (
          <div className="px-6 py-3 bg-[#FAEADF]/60 border-b border-[#ECD9CE] text-xs">
            {subtotal >= freeShippingThreshold ? (
              <div className="text-[#5B8E55] font-semibold flex items-center gap-1.5">
                <span>✓ 무료 배송 혜택이 적용되었습니다!</span>
              </div>
            ) : (
              <div>
                <span className="text-[#452311]/80">
                  <span className="font-bold text-[#CD756B] font-mono">
                    ₩{(freeShippingThreshold - subtotal).toLocaleString()}
                  </span> 더 담으면 무료 배송!
                </span>
                <div className="w-full bg-[#ECD9CE] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#CD756B] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#452311]/60 py-12">
              <div className="w-16 h-16 rounded-full bg-[#FAEADF] flex items-center justify-center mb-3 text-[#CD756B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif-title text-lg text-[#452311] font-bold">장바구니가 비어 있습니다.</p>
              <p className="text-xs text-[#452311]/70 mt-1 max-w-[200px]">
                달콤한 멜로우 디저트를 장바구니에 담아보세요.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-[#ECD9CE] shadow-sm flex gap-4 items-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#FAEADF]"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#452311] truncate">{item.name}</h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#452311]/40 hover:text-[#CD756B] transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {item.selectedSize && (
                    <div className="text-[11px] text-[#452311]/70 mt-0.5">
                      사이즈: {item.selectedSize}
                    </div>
                  )}

                  {/* Lettering Ribbon Details if set */}
                  {item.letteringText && (
                    <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F8E8E4] text-[#CD756B] text-[11px] font-medium border border-[#ECD9CE]">
                      <Sparkles className="w-3 h-3" />
                      <span className="truncate max-w-[160px]">리본: &ldquo;{item.letteringText}&rdquo;</span>
                    </div>
                  )}

                  {/* Pickup / Delivery Time Info */}
                  {item.pickupDate && (
                    <div className="mt-1 text-[11px] text-[#452311]/70 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#CD756B]" />
                      <span>{item.orderType === 'pickup' ? '픽업' : '배송'}: {item.pickupDate} {item.pickupTime}</span>
                    </div>
                  )}

                  {/* Price and Quantity */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-[#CD756B] tabular-nums">
                      ₩{(item.price * item.quantity).toLocaleString()}
                    </span>

                    <div className="flex items-center border border-[#ECD9CE] rounded-lg overflow-hidden bg-[#FFF9F5]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-[#452311] hover:bg-[#ECD9CE] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-[#452311] min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-[#452311] hover:bg-[#ECD9CE] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#ECD9CE] bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-[#452311]/80">
              <div className="flex justify-between">
                <span>상품 금액</span>
                <span className="font-mono tabular-nums">₩{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>배송비</span>
                <span className="font-mono tabular-nums">
                  {deliveryFee === 0 ? '무료' : `+₩${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#ECD9CE] flex justify-between text-sm font-bold text-[#452311]">
                <span>총 결제 금액</span>
                <span className="text-lg font-mono font-bold text-[#CD756B] tabular-nums">
                  ₩{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 rounded-full bg-[#CD756B] text-white font-semibold text-sm hover:bg-[#B95F56] transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>주문하기 결제 진행</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
