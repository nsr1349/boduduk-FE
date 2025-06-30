import type { BaseEntity } from './common';

export interface CartItem {
  productId: string;
  quantity: number;
  title: string;
  price: number;
  mainImageUrl: string;
}

export interface Cart extends BaseEntity {
  userId: string;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface AddToCartRequest {
  productId: string;
  quantity: number;
}
