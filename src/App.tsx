import React, { useState } from 'react';
import { PRODUCTS, REVIEWS } from './data/products';
import { Product, CartItem, Review } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShopSection } from './components/ShopSection';
import { PhilosophySection } from './components/PhilosophySection';
import { AtelierSection } from './components/AtelierSection';
import { ReviewArchiveSection } from './components/ReviewArchiveSection';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomCakeOrderModal } from './components/CustomCakeOrderModal';
import { ReservationModal } from './components/ReservationModal';
import { LoginModal } from './components/LoginModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { Footer } from './components/Footer';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);

  // Cart state - 1 preloaded signature cake for delightful immediate testing
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-cake-1',
      productId: 'mellow-strawberry-cake',
      name: '시그니처 설향 딸기 생크림 케이크',
      engName: 'Signature Strawberry Chantilly Cake',
      price: 48000,
      image: '/public/assets/aistudio/image_234083b1.png',
      quantity: 1,
      selectedSize: '1호 (Standard)',
      letteringText: 'Sweet Moments Everyday ♡',
      candleOption: '스마일 데이지 캔들 (+2,000원)',
      pickupDate: '2026-10-25',
      pickupTime: '15:00',
      orderType: 'pickup',
    },
  ]);

  // Modals & UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [customProduct, setCustomProduct] = useState<Product | null>(null);
  const [orderSuccessData, setOrderSuccessData] = useState<{
    orderNumber: string;
    items: CartItem[];
    totalPrice: number;
  } | null>(null);

  // User state
  const [userName, setUserName] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      // If exact same item ID or signature configuration, increment quantity
      const existingIdx = prev.findIndex(
        (i) => i.productId === item.productId && i.selectedSize === item.selectedSize && i.letteringText === item.letteringText
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += item.quantity;
        return next;
      }
      return [item, ...prev];
    });
    showToast(`"${item.name}" 장바구니에 담겼습니다.`);
  };

  const handleQuickAdd = (product: Product) => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      engName: product.engName,
      price: product.price,
      image: product.image,
      quantity: 1,
      selectedSize: product.availableSizes?.[0]?.name || '기본',
      orderType: 'pickup',
    };
    handleAddToCart(item);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const orderNum = `MEL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSuccessData({
      orderNumber: orderNum,
      items: [...cartItems],
      totalPrice: total,
    });
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const signatureCake = products.find((p) => p.id === 'mellow-strawberry-cake') || products[0];

  return (
    <div className="min-h-screen bg-[#FAEADF] text-[#452311] flex flex-col font-sans selection:bg-[#CD756B] selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-[#452311] text-[#FAEADF] py-1.5 px-4 text-center text-xs tracking-wide">
        <span className="font-semibold text-[#F8E8E4]">Mellow Bakery 온라인 부티크 OPEN</span>
        <span className="mx-2 opacity-60">·</span>
        <span>첫 회원가입 시 10% 웰컴 쿠폰 증정 & 당일 성수 매장 픽업 가능</span>
      </div>

      {/* Header */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* SECTION 01: 비주얼 섹션 (Hero Section) */}
        <HeroSection
          onExploreCakes={() => handleNavigate('shop-section')}
          onOpenSignatureModal={() => setDetailProduct(signatureCake)}
        />

        {/* SECTION 02: 디저트 쇼핑 컬렉션 (Shop Section) */}
        <ShopSection
          products={products}
          onSelectProduct={(product) => setDetailProduct(product)}
          onQuickAdd={handleQuickAdd}
          onCustomLettering={(product) => setCustomProduct(product)}
        />

        {/* SECTION 03: 멜로우의 철학과 재료 이야기 (Philosophy Section) */}
        <PhilosophySection />

        {/* SECTION 04: 오프라인 매장 & 아틀리에 (Atelier Section) */}
        <AtelierSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* SECTION 05: 고객 후기 & 아카이브 (Review Archive Section) */}
        <ReviewArchiveSection
          reviews={reviews}
          onAddReview={(newRev) => setReviews((prev) => [newRev, ...prev])}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          isOpen={!!detailProduct}
          onClose={() => setDetailProduct(null)}
          onAddToCart={handleAddToCart}
          onOpenCustomModal={(prod) => {
            setDetailProduct(null);
            setCustomProduct(prod);
          }}
        />
      )}

      {customProduct && (
        <CustomCakeOrderModal
          product={customProduct}
          isOpen={!!customProduct}
          onClose={() => setCustomProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirmed={(data) => {
          showToast(`${data.name} 님의 성수 아틀리에 예약이 접수되었습니다!`);
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={(name) => {
          setUserName(name);
          showToast(`${name} 님, 환영합니다! (10% 쿠폰이 발급되었습니다)`);
        }}
      />

      {orderSuccessData && (
        <OrderSuccessModal
          isOpen={!!orderSuccessData}
          orderNumber={orderSuccessData.orderNumber}
          items={orderSuccessData.items}
          totalPrice={orderSuccessData.totalPrice}
          onClose={() => setOrderSuccessData(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#452311] text-white text-xs sm:text-sm font-medium shadow-2xl border border-white/10 animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-4 h-4 text-[#CD756B]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
