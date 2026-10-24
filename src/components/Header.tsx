import React, { useState } from 'react';
import { ShoppingBag, User, Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onOpenReservation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenLogin,
  onOpenReservation,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAEADF]/90 border-b border-[#E8D0C3]/60 transition-all">
      {/* Top Bar Container - 3 Zones */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Navigation Links (Left) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-wide">
          <button
            onClick={() => handleNavClick('shop-section')}
            className="text-[#452311]/85 hover:text-[#CD756B] transition-colors cursor-pointer whitespace-nowrap"
          >
            shop
          </button>
          <button
            onClick={() => handleNavClick('about-section')}
            className="text-[#452311]/85 hover:text-[#CD756B] transition-colors cursor-pointer whitespace-nowrap"
          >
            about
          </button>
          <button
            onClick={() => handleNavClick('archive-section')}
            className="text-[#452311]/85 hover:text-[#CD756B] transition-colors cursor-pointer whitespace-nowrap"
          >
            archive
          </button>
          <button
            onClick={() => handleNavClick('atelier-section')}
            className="text-[#452311]/85 hover:text-[#CD756B] transition-colors cursor-pointer whitespace-nowrap"
          >
            atelier
          </button>
        </nav>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#452311] hover:text-[#CD756B] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Zone 2: Brand Center Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Handcrafted Cute Strawberry Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_2px_4px_rgba(205,117,107,0.25)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Strawberry Body */}
              <path
                d="M50 92C68 92 82 72 82 50C82 28 65 24 50 24C35 24 18 28 18 50C18 72 32 92 50 92Z"
                fill="#E85D58"
              />
              {/* Strawberry Seeds */}
              <circle cx="38" cy="46" r="2.2" fill="#FFE5D9" />
              <circle cx="62" cy="46" r="2.2" fill="#FFE5D9" />
              <circle cx="44" cy="62" r="2.2" fill="#FFE5D9" />
              <circle cx="56" cy="62" r="2.2" fill="#FFE5D9" />
              <circle cx="50" cy="76" r="2" fill="#FFE5D9" />
              <circle cx="34" cy="64" r="2" fill="#FFE5D9" />
              <circle cx="66" cy="64" r="2" fill="#FFE5D9" />
              {/* Cute Eyes & Smile */}
              <circle cx="42" cy="48" r="2.5" fill="#452311" />
              <circle cx="58" cy="48" r="2.5" fill="#452311" />
              {/* Blush */}
              <ellipse cx="36" cy="54" rx="4" ry="2" fill="#FF8E8A" />
              <ellipse cx="64" cy="54" rx="4" ry="2" fill="#FF8E8A" />
              {/* Smile */}
              <path
                d="M47 54C48.5 56.5 51.5 56.5 53 54"
                stroke="#452311"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Green Leaves on Top */}
              <path
                d="M50 24C50 14 54 8 57 6"
                stroke="#5B8E55"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M50 25C40 22 30 18 26 23C22 28 34 30 42 27"
                fill="#72A86B"
              />
              <path
                d="M50 25C60 22 70 18 74 23C78 28 66 30 58 27"
                fill="#72A86B"
              />
              <path
                d="M50 25C48 16 52 16 50 25"
                fill="#5B8E55"
              />
            </svg>
          </div>
          <span className="font-serif-title text-2xl md:text-3xl font-bold tracking-tight text-[#452311] group-hover:text-[#CD756B] transition-colors">
            Mellow<span className="font-serif-sub italic font-normal text-[#CD756B] ml-1">Bakery</span>
          </span>
        </a>

        {/* Zone 3: Actions (Right) */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] text-[#452311]/80 hover:text-[#CD756B] transition-colors font-medium whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#CD756B]" />
            <span>매장 픽업예약</span>
          </button>

          <button
            onClick={onOpenLogin}
            className="inline-flex items-center gap-1.5 text-[14px] text-[#452311]/85 hover:text-[#CD756B] transition-colors font-medium whitespace-nowrap cursor-pointer"
          >
            <User className="w-4 h-4 text-[#452311]/70" />
            <span className="hidden sm:inline">login</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD756B] text-white hover:bg-[#B95F56] transition-all shadow-sm hover:shadow cursor-pointer active:scale-95"
            aria-label={`장바구니 ${cartCount}개 항목`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider">cart</span>
            {cartCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold bg-white text-[#CD756B] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8D0C3] bg-[#FAEADF] px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('shop-section')}
            className="block w-full text-left py-2 text-[#452311] font-medium hover:text-[#CD756B]"
          >
            우리의 디저트 (Shop)
          </button>
          <button
            onClick={() => handleNavClick('about-section')}
            className="block w-full text-left py-2 text-[#452311] font-medium hover:text-[#CD756B]"
          >
            브랜드 철학 (About)
          </button>
          <button
            onClick={() => handleNavClick('archive-section')}
            className="block w-full text-left py-2 text-[#452311] font-medium hover:text-[#CD756B]"
          >
            리뷰 아카이브 (Archive)
          </button>
          <button
            onClick={() => handleNavClick('atelier-section')}
            className="block w-full text-left py-2 text-[#452311] font-medium hover:text-[#CD756B]"
          >
            성수 아틀리에 (Atelier)
          </button>
          <div className="pt-2 border-t border-[#E8D0C3]/60 flex justify-between items-center text-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="text-[#CD756B] font-medium flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              오프라인 픽업예약
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="text-[#452311] font-medium flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              로그인 / 회원가입
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
