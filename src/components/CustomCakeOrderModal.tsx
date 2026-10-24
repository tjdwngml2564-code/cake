import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { X, Sparkles, Calendar, Clock, Check, Heart } from 'lucide-react';

interface CustomCakeOrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const CustomCakeOrderModal: React.FC<CustomCakeOrderModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    product.availableSizes && product.availableSizes.length > 1 ? 1 : 0
  );
  const [letteringText, setLetteringText] = useState('Happy Birthday ♡');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [pickupDate, setPickupDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('14:00');
  const [selectedCandle, setSelectedCandle] = useState('기본 캔들 세트 (무료)');
  const [candlePrice, setCandlePrice] = useState(0);

  if (!isOpen) return null;

  const currentSize = product.availableSizes?.[selectedSizeIndex];
  const basePrice = product.price + (currentSize?.extraPrice || 0);
  const totalPrice = basePrice + candlePrice;

  const handleCandleChange = (name: string, price: number) => {
    setSelectedCandle(name);
    setCandlePrice(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cartItem: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      engName: product.engName,
      price: totalPrice,
      image: product.image,
      quantity: 1,
      selectedSize: currentSize?.name || '기본',
      letteringText: letteringText.trim(),
      candleOption: selectedCandle,
      pickupDate,
      pickupTime,
      orderType,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ECD9CE] text-[#452311]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAEADF] text-[#452311]/70 hover:text-[#452311] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#CD756B]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#CD756B] font-serif-sub">
            CUSTOM CAKE ORDER
          </span>
        </div>
        <h3 className="text-2xl font-bold font-serif-title">{product.name} 주문 제작</h3>
        <p className="text-xs sm:text-sm text-[#452311]/75 mt-1">
          특별한 날을 위해 레터링 리본과 옵션을 지정해 주세요.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* 1. Size Selection */}
          {product.availableSizes && product.availableSizes.length > 0 && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#452311]/80 mb-2">
                1. 케이크 사이즈 선택
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {product.availableSizes.map((size, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={size.name}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#CD756B] bg-[#F8E8E4] ring-1 ring-[#CD756B]'
                          : 'border-[#ECD9CE] hover:border-[#CD756B]/40 bg-white'
                      }`}
                    >
                      <div className="text-sm font-bold text-[#452311]">{size.name}</div>
                      <div className="text-xs text-[#452311]/70 mt-0.5">{size.serves}</div>
                      <div className="text-xs font-semibold text-[#CD756B] mt-1 font-mono">
                        {size.extraPrice === 0
                          ? '기본가'
                          : size.extraPrice > 0
                          ? `+₩${size.extraPrice.toLocaleString()}`
                          : `-₩${Math.abs(size.extraPrice).toLocaleString()}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Ribbon Custom Lettering Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#452311]/80">
                2. 리본 맞춤 레터링 (무료)
              </label>
              <span className="text-[11px] text-[#CD756B]">최대 25자</span>
            </div>

            <input
              type="text"
              maxLength={25}
              value={letteringText}
              onChange={(e) => setLetteringText(e.target.value)}
              placeholder="예: Happy Birthday Jiwoo ♡"
              className="w-full px-4 py-2.5 rounded-xl border border-[#ECD9CE] bg-white focus:outline-none focus:ring-2 focus:ring-[#CD756B] text-sm"
            />

            {/* Live Visual Ribbon Preview */}
            <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-[#F6DED8] via-[#FAEAE5] to-[#F6DED8] border border-[#ECD9CE] shadow-inner text-center">
              <div className="text-[11px] uppercase tracking-wider text-[#CD756B] font-semibold mb-1">
                실제 패키징 리본 미리보기
              </div>
              <div className="font-script text-xl sm:text-2xl text-[#452311] tracking-wide py-1 font-semibold flex items-center justify-center gap-2">
                <span>🎀</span>
                <span>{letteringText || '메시지를 입력해 주세요'}</span>
                <span>🎀</span>
              </div>
            </div>
          </div>

          {/* 3. Pickup Date & Time / Delivery */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#452311]/80 mb-2">
              3. 수령 방식 및 희망 일시
            </label>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  orderType === 'pickup'
                    ? 'border-[#CD756B] bg-[#CD756B] text-white'
                    : 'border-[#ECD9CE] bg-white text-[#452311]'
                }`}
              >
                성수 쇼룸 픽업
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'border-[#CD756B] bg-[#CD756B] text-white'
                    : 'border-[#ECD9CE] bg-white text-[#452311]'
                }`}
              >
                서울/경기 당일 퀵배송
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-[#452311]/70 mb-1">희망 날짜</label>
                <div className="relative">
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-[#452311]/70 mb-1">희망 시간</label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
                >
                  <option value="12:00">12:00 (오후 12시)</option>
                  <option value="13:00">13:00 (오후 1시)</option>
                  <option value="14:00">14:00 (오후 2시)</option>
                  <option value="15:00">15:00 (오후 3시)</option>
                  <option value="16:00">16:00 (오후 4시)</option>
                  <option value="17:00">17:00 (오후 5시)</option>
                  <option value="18:00">18:00 (오후 6시)</option>
                  <option value="19:00">19:00 (오후 7시)</option>
                  <option value="20:00">20:00 (오후 8시)</option>
                </select>
              </div>
            </div>
          </div>

          {/* 4. Candle Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#452311]/80 mb-2">
              4. 기념일 캔들 추가
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { name: '기본 캔들 세트 (무료)', price: 0 },
                { name: '스마일 데이지 캔들 (+2,000원)', price: 2000 },
                { name: '골드 하트 롱 캔들 (+2,000원)', price: 2000 },
                { name: '빈티지 멜로우 베어 캔들 (+3,000원)', price: 3000 },
              ].map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => handleCandleChange(c.name, c.price)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedCandle === c.name
                      ? 'border-[#CD756B] bg-[#F8E8E4] font-medium'
                      : 'border-[#ECD9CE] bg-white text-[#452311]/80'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Footer & Submit */}
          <div className="pt-4 border-t border-[#ECD9CE] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#452311]/60">총 결제 예정 금액</div>
              <div className="text-2xl font-bold font-mono text-[#CD756B] tabular-nums">
                ₩{totalPrice.toLocaleString()}
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#CD756B] text-white font-semibold text-sm hover:bg-[#B95F56] transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>장바구니에 담기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
