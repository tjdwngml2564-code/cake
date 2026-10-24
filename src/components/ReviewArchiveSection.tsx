import React, { useState } from 'react';
import { Review } from '../types';
import { Star, Heart, MessageSquarePlus, Check } from 'lucide-react';

interface ReviewArchiveSectionProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const ReviewArchiveSection: React.FC<ReviewArchiveSectionProps> = ({
  reviews,
  onAddReview,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [cakeName, setCakeName] = useState('시그니처 설향 딸기 생크림 케이크');
  const [tag, setTag] = useState('기념일 케이크');
  const [submittedToast, setSubmittedToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: `${name.trim()} 님`,
      rating: 5,
      date: '2026.10.24',
      comment: comment.trim(),
      cakeName,
      tag,
    };
    onAddReview(newRev);
    setShowAddModal(false);
    setName('');
    setComment('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
  };

  return (
    <section id="archive-section" className="py-20 md:py-28 bg-[#FFF8F3] relative border-t border-[#ECD9CE]/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 text-center md:text-left">
          <div>
            <span className="font-serif-sub tracking-[0.25em] text-xs font-semibold uppercase text-[#CD756B] block mb-2">
              SWEET MOMENTS ARCHIVE
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#452311]">
              멜로우와 함께한 달콤한 순간들
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#452311]/75 font-sans">
              소중한 날, 따뜻한 마음을 전한 고객분들의 진솔한 후기입니다.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CD756B] text-[#CD756B] hover:bg-[#CD756B] hover:text-white transition-all text-xs font-semibold shadow-sm cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>나의 멜로우 모먼트 남기기</span>
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAEADF]/60 rounded-2xl p-6 border border-[#ECD9CE] hover:border-[#CD756B]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#CD756B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CD756B]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#CD756B] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#ECD9CE]">
                    {rev.tag}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#452311]/90 leading-relaxed font-sans mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Cake Name */}
              <div className="pt-3 border-t border-[#ECD9CE]/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#452311]">{rev.author}</div>
                  <div className="text-[11px] text-[#452311]/60 font-serif-sub mt-0.5">
                    {rev.cakeName}
                  </div>
                </div>
                <span className="text-[11px] text-[#452311]/50 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Tag Strip */}
        <div className="mt-12 text-center text-xs text-[#452311]/70">
          <p>
            인스타그램에 <span className="font-semibold text-[#CD756B]">#MellowBakery</span> <span className="font-semibold text-[#CD756B]">#멜로우베이커리</span> 를 태그하여 소중한 추억을 함께 나누어 보세요.
          </p>
        </div>
      </div>

      {/* Review Write Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#452311]/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#FFF9F5] rounded-3xl p-6 shadow-2xl border border-[#ECD9CE]">
            <h3 className="text-xl font-bold font-serif-title text-[#452311]">달콤한 후기 남기기</h3>
            <p className="text-xs text-[#452311]/70 mt-1 mb-4">
              멜로우 베이커리 디저트와 함께한 이야기를 들려주세요.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#452311] mb-1">작성자 성함/닉네임</label>
                <input
                  type="text"
                  required
                  placeholder="예: 김민지"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#452311] mb-1">구매하신 디저트</label>
                <select
                  value={cakeName}
                  onChange={(e) => setCakeName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
                >
                  <option value="시그니처 설향 딸기 생크림 케이크">시그니처 설향 딸기 생크림 케이크</option>
                  <option value="시칠리아 피스타치오 산딸기 타르트">시칠리아 피스타치오 산딸기 타르트</option>
                  <option value="멜로우 얼그레이 복숭아 쉬폰 케이크">멜로우 얼그레이 복숭아 쉬폰 케이크</option>
                  <option value="헤이즐넛 버터 피낭시에 기프트 박스">헤이즐넛 버터 피낭시에 기프트 박스</option>
                  <option value="타히티 바닐라빈 갸또 쇼콜라">타히티 바닐라빈 갸또 쇼콜라</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#452311] mb-1">후기 내용</label>
                <textarea
                  rows={4}
                  required
                  placeholder="디저트의 맛과 특별했던 순간을 적어주세요."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#ECD9CE] bg-white text-xs text-[#452311] focus:outline-none focus:ring-1 focus:ring-[#CD756B]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-full text-xs text-[#452311]/70 hover:bg-[#FAEADF]"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#CD756B] text-white text-xs font-semibold hover:bg-[#B95F56] shadow-sm"
                >
                  후기 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {submittedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#452311] text-white text-xs shadow-xl animate-in slide-in-from-bottom duration-300">
          <Check className="w-4 h-4 text-[#72A86B]" />
          <span>소중한 후기가 등록되었습니다. 감사합니다!</span>
        </div>
      )}
    </section>
  );
};
