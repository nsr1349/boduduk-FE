import type { BaseEntity, PaginationParams } from './common';

export interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number;
  mainImageUrl: string;
}

export interface ShippingAddress {
  address: string;
}

export interface Order extends BaseEntity {
  userId: string;
  orderItems: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'; // 주문 상태
  shippingAddress: ShippingAddress;
  paymentMethod: 'credit_card' | 'bank_transfer' | 'kakao_pay' | 'naver_pay'; // 결제 수단
  paymentStatus: 'paid' | 'unpaid' | 'failed';
  orderedAt: string;
}

export interface OrderSearchParams extends PaginationParams {
  userId?: string;
  status?: Order['status'];
}
