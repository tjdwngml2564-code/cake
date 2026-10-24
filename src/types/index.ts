export type ProductCategory = 'all' | 'cake' | 'tart' | 'pastry' | 'gift';

export interface Product {
  id: string;
  name: string;
  engName: string;
  category: ProductCategory;
  price: number;
  image: string;
  badge?: 'Signature' | 'Seasonal' | 'Best' | 'Limited';
  shortDesc: string;
  description: string;
  ingredients: string[];
  tasteNotes: string[];
  allergens: string;
  storage: string;
  availableSizes?: { name: string; extraPrice: number; serves: string }[];
  isCustomizable?: boolean;
}

export interface CartItem {
  id: string; // unique cart item id (productId + options)
  productId: string;
  name: string;
  engName: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize?: string;
  letteringText?: string;
  candleOption?: string;
  pickupDate?: string;
  pickupTime?: string;
  orderType: 'pickup' | 'delivery';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  cakeName: string;
  tag: string;
}
