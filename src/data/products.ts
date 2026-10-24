import { Product, Review } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mellow-strawberry-cake',
    name: '시그니처 설향 딸기 생크림 케이크',
    engName: 'Signature Strawberry Chantilly Cake',
    category: 'cake',
    price: 48000,
    image: '/public/assets/aistudio/image_234083b1.png',
    badge: 'Signature',
    shortDesc: '동물성 100% 서울우유 생크림과 논산 프리미엄 설향 딸기가 가득한 멜로우의 대표 케이크',
    description: '매일 아침 논산에서 당일 공수한 신선한 설향 딸기와 100% 순수 동물성 생크림만을 사용합니다. 촉촉하고 부드러운 제누와즈 시트 사이사이 신선한 생딸기와 마다가스카르 바닐라빈 샹티이 크림이 조화롭게 어우러져 한 입 가득 기분 좋은 부드러움을 선사합니다.',
    ingredients: ['논산 설향 생딸기', '100% 동물성 서울우유 생크림', '유기농 무항생제 유정란', '마다가스카르 버번 바닐라빈', '프랑스산 밀가루'],
    tasteNotes: ['신선한 딸기의 새콤달콤함', '가볍고 산뜻한 순수 우유 크림', '입안에서 녹아내리는 부드러운 시트'],
    allergens: '우유, 계란, 밀 함유',
    storage: '구입 후 반드시 냉장 보관(0~5℃) 해주시고, 2일 이내 드시기를 권장합니다.',
    isCustomizable: true,
    availableSizes: [
      { name: '미니 (Mini)', extraPrice: -12000, serves: '1~2인용 (지름 12cm)' },
      { name: '1호 (Standard)', extraPrice: 0, serves: '3~4인용 (지름 15cm)' },
      { name: '2호 (Party)', extraPrice: 16000, serves: '5~6인용 (지름 18cm)' },
    ]
  },
  {
    id: 'pistachio-raspberry-tart',
    name: '시칠리아 피스타치오 산딸기 타르트',
    engName: 'Pistachio Raspberry Tart',
    category: 'tart',
    price: 36000,
    image: '/src/assets/images/cake_pistachio_raspberry_1792831900434.jpg',
    badge: 'Best',
    shortDesc: '고소하고 진한 이탈리아 피스타치오 가나슈와 상큼한 수제 라즈베리 콩포트의 조화',
    description: '바삭하게 구워낸 파트 사브레 타르트지에 고소한 시칠리아산 피스타치오 아몬드 크림을 채우고, 직접 졸인 생 산딸기 콩포트와 몽타주 피스타치오 가나슈를 얹었습니다. 통 피스타치오 크런치가 씹히는 다채로운 식감을 느껴보세요.',
    ingredients: ['이탈리아 시칠리아산 피스타치오 페이스트', '국내산 생 라즈베리', '프랑스 엘르앤비르 고메 버터', '발로나 오팔리스 화이트 초콜릿'],
    tasteNotes: ['깊고 진한 너티한 풍미', '산뜻하고 과즙 넘치는 산딸기 산미', '바삭하고 고소한 사브레 도우'],
    allergens: '우유, 계란, 밀, 견과류(피스타치오, 아몬드) 함유',
    storage: '냉장 보관 필수(2일 이내 권장), 크림의 질감을 위해 차가운 상태로 드세요.',
    isCustomizable: true,
    availableSizes: [
      { name: '조각 타르트 (Single)', extraPrice: -27000, serves: '1인용' },
      { name: '홀 타르트 (Whole)', extraPrice: 0, serves: '4~5인용 (지름 16cm)' },
    ]
  },
  {
    id: 'earl-grey-peach-cake',
    name: '멜로우 얼그레이 복숭아 쉬폰 케이크',
    engName: 'Mellow Earl Grey Peach Chiffon',
    category: 'cake',
    price: 45000,
    image: '/src/assets/images/cake_earl_grey_peach_1792831902018.jpg',
    badge: 'Seasonal',
    shortDesc: '트와이닝 얼그레이를 진하게 우려낸 폭신한 쉬폰과 부드러운 백도 복숭아 슬라이스',
    description: '베르가못의 은은한 향이 감도는 얼그레이 찻잎을 정성스레 우려내어 구운 구름 같은 쉬폰 케이크입니다. 신선한 복숭아 콤포트와 찻잎을 콕콕 넣은 홍차 생크림이 달콤하고 향긋한 오후의 티타임을 완성합니다.',
    ingredients: ['영국 트와이닝 얼그레이 찻잎', '햇 백도 복숭아', '동물성 생크림 100%', '유기농 설탕', '무항생제 신선란'],
    tasteNotes: ['풍성한 베르가못 시트러스 홍차 향', '달콤하게 녹아내리는 부드러운 백도', '공기처럼 푹신한 쉬폰 텍스처'],
    allergens: '우유, 계란, 밀, 복숭아 함유',
    storage: '수령 즉시 냉장 보관, 2일 이내 섭취 권장.',
    isCustomizable: true,
    availableSizes: [
      { name: '미니 (Mini)', extraPrice: -10000, serves: '1~2인용' },
      { name: '1호 (Standard)', extraPrice: 0, serves: '3~4인용 (지름 15cm)' },
    ]
  },
  {
    id: 'pastry-financier-gift-box',
    name: '헤이즐넛 버터 피낭시에 & 마들렌 기프트 박스',
    engName: 'Artisanal Financier & Madeleine Gift Box',
    category: 'gift',
    price: 28000,
    image: '/src/assets/images/pastry_financier_set_1792831902148.jpg',
    badge: 'Limited',
    shortDesc: '프랑스 고메 버터를 갈색으로 태워 풍미를 극대화한 클래식 구움과자 8구 셀렉션',
    description: '고메 버터를 천천히 끓여 황금빛 헤이즐넛 풍미를 이끌어낸 뵈르 누아제트(Beurre Noisette)로 구워냈습니다. 겉은 쫀득하고 속은 촉촉한 피낭시에 4구와 레몬 글라세 마들렌 4구로 구성된 프리미엄 선물용 패키지입니다.',
    ingredients: ['프랑스 이즈니 AOP 고메 버터', '캘리포니아 엑스트라 굵은 아몬드 분말', '생 레몬 제스트', '마다가스카르 바닐라빈'],
    tasteNotes: ['헤이즐넛 버터의 깊은 넛티함', '쫀득바삭한 피낭시에 크러스트', '상큼한 레몬 제스트의 은은한 여운'],
    allergens: '우유, 계란, 밀, 견과류(아몬드) 함유',
    storage: '실온 4일(직사광선 피함) 보관 가능하며, 에어프라이어 170℃에 3분간 데우면 갓 구운 맛을 즐기실 수 있습니다.',
    isCustomizable: false,
    availableSizes: [
      { name: '8구 클래식 박스 (8 pcs)', extraPrice: 0, serves: '선물용' },
      { name: '16구 그란데 박스 (16 pcs)', extraPrice: 24000, serves: '대용량 선물용' },
    ]
  },
  {
    id: 'tahitian-vanilla-gateau',
    name: '타히티 바닐라빈 갸또 쇼콜라',
    engName: 'Tahitian Vanilla & Valrhona Gateau',
    category: 'cake',
    price: 42000,
    image: '/src/assets/images/cake_earl_grey_peach_1792831902018.jpg',
    badge: 'Best',
    shortDesc: '밀가루 함량을 최소화하여 구운 진한 발로나 초콜릿 갸또 위에 듬뿍 얹은 바닐라 가나슈',
    description: '프랑스 최고급 발로나 다크 초콜릿의 묵직한 바디감과 타히티산 바닐라빈의 우아한 꽃향기를 블렌딩한 프리미엄 가나슈 갸또입니다. 쌉싸름함과 부드러움의 완벽한 밸런스를 즐겨보세요.',
    ingredients: ['프랑스 발로나 과나하 70% 초콜릿', '타히티 바닐라빈', '엘르앤비르 크림', '프랑스 AOP 고메 버터'],
    tasteNotes: ['쌉쌀하면서 농후한 카카오', '스위트 바닐라 꽃향기', '치즈케이크처럼 묵직하고 밀도 높은 질감'],
    allergens: '우유, 계란, 대두 함유',
    storage: '냉장 보관 3일 가능, 드시기 10분 전 실온에 꺼내두시면 가나슈의 풍미가 더욱 살아납니다.',
    isCustomizable: true,
    availableSizes: [
      { name: '1호 (Standard)', extraPrice: 0, serves: '3~4인용' },
      { name: '2호 (Party)', extraPrice: 15000, serves: '5~6인용' },
    ]
  },
  {
    id: 'wild-berry-tartlet',
    name: '포레스트 와일드 베리 타르틀렛',
    engName: 'Forest Wild Berry Tartlet',
    category: 'tart',
    price: 34000,
    image: '/src/assets/images/cake_pistachio_raspberry_1792831900434.jpg',
    badge: 'Seasonal',
    shortDesc: '블루베리, 산딸기, 체리가 탐스럽게 올라간 바삭한 아몬드 프란지판 타르트',
    description: '매일 아침 깨끗이 세척한 신선한 생베리를 아낌없이 올린 제철 타르트입니다. 고소한 아몬드 크림과 달콤새콤한 베리의 마리아주가 입안 가득 청량함을 선사합니다.',
    ingredients: ['유기농 블루베리', '산딸기', '프랑스산 아몬드 파우더', '비정제 유기농 원당'],
    tasteNotes: ['톡 터지는 베리의 생생한 과즙', '버터 풍미 가득한 아몬드 크림', '고소하고 크리스피한 타르트 쉘'],
    allergens: '우유, 계란, 밀, 견과류(아몬드) 함유',
    storage: '냉장 보관 (구입 후 24시간 이내 섭취 권장)',
    isCustomizable: false,
    availableSizes: [
      { name: '4구 미니 세트', extraPrice: 0, serves: '2~3인용' },
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: '민지은 님',
    rating: 5,
    date: '2026.10.18',
    comment: '생일 파티 메인 케이크로 주문했는데, 친구들이 먹자마자 너무 부드럽고 딸기가 달다고 난리였어요! 동물성 생크림이라 느끼함이 전혀 없고 입에서 녹아내립니다. 리본 레터링도 너무 사랑스러워요 ♡',
    cakeName: '시그니처 설향 딸기 생크림 케이크',
    tag: '기념일 케이크'
  },
  {
    id: 'rev-2',
    author: '강하늘 님',
    rating: 5,
    date: '2026.10.12',
    comment: '피스타치오와 라즈베리 조합이 정말 환상적입니다. 성수동 매장도 따뜻한 유럽 아틀리에 같아서 방문하는 내내 힐링이었어요. 선물용 피낭시에 세트도 포장이 너무 고급스럽습니다.',
    cakeName: '시칠리아 피스타치오 산딸기 타르트',
    tag: '선물 추천'
  },
  {
    id: 'rev-3',
    author: '윤소영 님',
    rating: 5,
    date: '2026.10.05',
    comment: '부모님 결혼기념일 케이크로 얼그레이 복숭아 케이크를 맞췄는데, 달지 않고 은은한 홍차 향이 감돌아서 부모님께서 인생 케이크라고 극찬하셨어요. 픽업할 때도 직원분들이 너무 친절하셨어요.',
    cakeName: '멜로우 얼그레이 복숭아 쉬폰 케이크',
    tag: '부모님 선물'
  }
];
