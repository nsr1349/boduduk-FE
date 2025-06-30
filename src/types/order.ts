// order.ts
import type { BaseEntity, PaginationParams } from './common';

/**
 * @interface OrderItem
 * @description 주문 내역의 개별 상품 정보 (주문 당시의 스냅샷)
 */
export interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number; // 주문 당시의 상품 가격 (가격 변동에 영향받지 않도록)
  mainImageUrl: string; // 주문 당시 상품 이미지
}

/**
 * @interface ShippingAddress
 * @description 배송지 정보
 */
export interface ShippingAddress {
  recipientName: string;
  phoneNumber: string;
  address1: string;
  address2?: string; // 상세 주소
  city: string;
  state: string; // 시/도
  zipCode: string;
  country: string;
}

/**
 * @interface Order
 * @description 단일 주문에 대한 상세 정보
 */
export interface Order extends BaseEntity {
  userId: string;
  orderItems: OrderItem[];
  totalAmount: number; // 총 결제 금액
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'; // 주문 상태
  shippingAddress: ShippingAddress;
  paymentMethod: 'credit_card' | 'bank_transfer' | 'kakao_pay' | 'naver_pay'; // 결제 수단
  paymentStatus: 'paid' | 'unpaid' | 'failed'; // 결제 상태
  orderedAt: string; // 주문 시각
  // 배송 관련 정보 (추가될 수 있음)
  trackingNumber?: string;
  shippedAt?: string;
  deliveredAt?: string;
}

/**
 * @interface CreateOrderRequest
 * @description 주문 생성 요청 시 사용될 타입
 */
export interface CreateOrderRequest {
  userId: string;
  items: Array<{ productId: string; quantity: number }>; // 주문할 상품 목록
  shippingAddress: ShippingAddress;
  paymentMethod: Order['paymentMethod'];
  // 결제 정보 (카드 번호 등)는 백엔드에서 직접 처리하거나 PG사에 전달하므로 여기에 포함되지 않을 수 있습니다.
}

/**
 * @interface OrderSearchParams
 * @description 주문 목록 검색을 위한 파라미터
 */
export interface OrderSearchParams extends PaginationParams {
  userId?: string; // 특정 사용자의 주문 조회
  status?: Order['status']; // 주문 상태 필터링
  // 기간별 검색 등 추가될 수 있음
  startDate?: string;
  endDate?: string;
}
