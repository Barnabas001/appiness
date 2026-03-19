export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "NEW" | "SALE" | "HOT";
  discount?: number;
  description?: string;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  itemCount: number;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
