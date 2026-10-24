import React from 'react';
import { CartItem } from '../types';
import { CheckCircle2, Heart, Calendar, MapPin, Truck, Sparkles } from 'lucide-react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  orderNumber: string;
  items: CartItem[];
  totalPrice: number;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  orderNumber,
  items,
  totalPrice,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ECD9CE] text-[#452311] text-center">
        {/* Animated Check Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-[#F8E8E4] flex items-center justify-center text-[#CD756B] mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#CD756B] font-serif-sub">
          THANK YOU FOR YOUR ORDER
        </span>
        <h3 className="text-2xl font-bold font-serif-title mt-1">
          달콤한 주문이 접수되었습니다!
        </h3>
        <p className="text-xs sm:text-sm text-[#452311]/75 mt-1">
          주문번호: <span className="font-mono font-bold text-[#CD756B]">{orderNumber}</span>
        </p>

        {/* Order Items Receipt Summary */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-[#ECD9CE] text-left text-xs space-y-3">
          <div className="font-bold text-[#452311] pb-2 border-b border-[#ECD9CE] flex justify-between">
            <span>주문 내역</span>
            <span>총 {items.length}개 상품</span>
          </div>

          <div className="max-h-48 overflow-y-auto space-y-2.5 pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="font-medium text-[#452311] truncate">{item.name}</div>
                  <div className="text-[11px] text-[#452311]/60">
                    {item.selectedSize} · 수량: {item.quantity}개
                    {item.letteringText && ` · [리본: ${item.letteringText}]`}
                  </div>
                </div>
                <div className="font-mono font-bold text-[#CD756B] shrink-0">
                  ₩{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#ECD9CE] flex justify-between font-bold text-sm text-[#452311]">
            <span>최종 결제 금액</span>
            <span className="font-mono text-[#CD756B] text-base">₩{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Guide Box */}
        <div className="mt-4 p-4 rounded-xl bg-[#FAEADF] border border-[#ECD9CE] text-left text-xs space-y-1.5 text-[#452311]/80">
          <div className="flex items-center gap-2 font-semibold text-[#452311]">
            <Heart className="w-3.5 h-3.5 text-[#CD756B] fill-[#CD756B]" />
            <span>정성껏 갓 구워 준비해 드리겠습니다.</span>
          </div>
          <p>
            주문 확인 및 수령 관련 카카오 알림톡/SMS가 발송되었습니다. 매장 수령 시 주문번호를 제시해 주세요.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-full bg-[#CD756B] text-white font-semibold text-sm hover:bg-[#B95F56] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          확인 (홈으로 돌아가기)
        </button>
      </div>
    </div>
  );
};
