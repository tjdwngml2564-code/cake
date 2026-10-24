import React, { useState } from 'react';
import { X, Heart, Sparkles, Check } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userName: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = isSignUp ? name.trim() || '멜로우 고객' : email.split('@')[0] || '멜로우 회원';
    onSuccess(displayName);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FFF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ECD9CE] text-[#452311]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAEADF] text-[#452311]/70 hover:text-[#452311] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#F8E8E4] flex items-center justify-center text-[#CD756B] mb-3">
            <Heart className="w-6 h-6 fill-[#CD756B]" />
          </div>
          <h3 className="text-2xl font-bold font-serif-title text-[#452311]">
            {isSignUp ? '멜로우 멤버십 가입' : '멜로우 베이커리 로그인'}
          </h3>
          <p className="text-xs sm:text-sm text-[#452311]/70 mt-1">
            {isSignUp
              ? '가입 즉시 10% 웰컴 쿠폰 & 생일 축하 바우처 증정'
              : '로그인하시고 적립 혜택과 간편 주문을 이용해 보세요.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-[#452311] mb-1">성함</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs sm:text-sm text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#452311] mb-1">이메일 주소</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mellow@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs sm:text-sm text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#452311] mb-1">비밀번호</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECD9CE] bg-white text-xs sm:text-sm text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#CD756B] text-white font-semibold text-sm hover:bg-[#B95F56] transition-all shadow-md active:scale-95 cursor-pointer mt-2"
          >
            {isSignUp ? '가입하고 10% 쿠폰 받기' : '로그인'}
          </button>
        </form>

        {/* Toggle between login / join */}
        <div className="mt-6 pt-4 border-t border-[#ECD9CE] text-center text-xs text-[#452311]/70">
          {isSignUp ? (
            <p>
              이미 계정이 있으신가요?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="font-bold text-[#CD756B] hover:underline ml-1 cursor-pointer"
              >
                로그인하기
              </button>
            </p>
          ) : (
            <p>
              처음 방문하셨나요?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="font-bold text-[#CD756B] hover:underline ml-1 cursor-pointer"
              >
                1분 회원가입
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
