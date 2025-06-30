import type { BaseEntity } from './common';
// Product 타입의 일부 정보만 필요한 경우 Pick 등을 사용할 수도 있지만,
// 편의상 Product 전체를 가져오도록 했습니다.

/**
 * @interface CartItem
 * @description 장바구니에 담긴 개별 상품 정보
 */
export interface CartItem {
  productId: string;
  quantity: number;
  // 장바구니 목록에 보여줄 상품 정보 (상품명, 가격, 이미지 등)
  // 백엔드에서 Join하여 보내주거나, 프론트엔드에서 별도 요청으로 정보를 가져올 수 있습니다.
  title: string;
  price: number;
  mainImageUrl: string;
}

/**
 * @interface Cart
 * @description 사용자 한 명의 장바구니 정보
 */
export interface Cart extends BaseEntity {
  userId: string;
  items: CartItem[];
  totalQuantity: number; // 장바구니에 담긴 총 상품 개수 (각 상품의 수량 합계)
  totalPrice: number; // 장바구니 전체 가격
}

/**
 * @interface AddToCartRequest
 * @description 장바구니에 상품을 추가/수정하는 요청 본문
 */
export interface AddToCartRequest {
  productId: string;
  quantity: number;
}
