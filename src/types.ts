export type Language = 'ar' | 'en';

export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number; // in EGP
  category: 'smash' | 'flame' | 'chicken' | 'sides' | 'drinks';
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  calories?: number;
  ingredientsAr: string[];
  ingredientsEn: string[];
  options?: {
    sizes?: { nameAr: string; nameEn: string; priceDiff: number }[];
    extras?: { id: string; nameAr: string; nameEn: string; price: number }[];
  };
}

export interface CartItemOption {
  sizeNameAr?: string;
  sizeNameEn?: string;
  selectedExtras: { id: string; nameAr: string; nameEn: string; price: number }[];
  specialInstructions?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  options: CartItemOption;
  unitPrice: number;
  totalPrice: number;
}

export interface Branch {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  addressAr: string;
  addressEn: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  openingHoursAr: string;
  openingHoursEn: string;
  isPrimary?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  featuresAr: string[];
  featuresEn: string[];
}

export interface Review {
  id: string;
  authorAr: string;
  authorEn: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  textAr: string;
  textEn: string;
  branchAr: string;
  branchEn: string;
  favoriteItemAr: string;
  favoriteItemEn: string;
}
