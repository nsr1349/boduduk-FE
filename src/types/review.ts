// review.ts
import type { BaseEntity, PaginationParams } from './common';

/**
 * @interface Review
 * @description 보드게임 상품에 대한 사용자 리뷰
 */
export interface Review extends BaseEntity {
  productId: string; // 리뷰 대상 보드게임 ID
  userId: string; // 리뷰 작성 사용자 ID
  orderId: string; // 리뷰와 연결된 주문 ID (주문한 사용자만 리뷰 가능)
  orderItemId: string; // 리뷰와 연결된 주문 내의 특정 아이템 ID
  rating: 0 | 1 | 2 | 3 | 4 | 5; // 별점 (0 ~ 5점)
  comment: string; // 리뷰 내용
  reviewerName: string; // 리뷰 작성자 이름 (User.username 또는 별도 필드)
  // 좋아요 수, 이미지 첨부 등 추가될 수 있음
  likes?: number;
  imageUrl?: string[];
}

/**
 * @interface CreateReviewRequest
 * @description 리뷰 생성 요청 시 사용될 타입
 */
export interface CreateReviewRequest {
  productId: string;
  orderId: string;
  orderItemId: string;
  rating: Review['rating'];
  comment: string;
  // 프론트엔드에서는 userId를 직접 보내지 않고, 백엔드에서 토큰으로 유저 정보를 추출할 수 있습니다.
  // 이미지 업로드 필드도 여기에 포함될 수 있습니다.
  imageFiles?: File[]; // 프론트엔드에서 파일 객체로, 백엔드에서 URL로 처리
}

/**
 * @interface ReviewSearchParams
 * @description 리뷰 목록 검색 및 필터링을 위한 파라미터
 */
export interface ReviewSearchParams extends PaginationParams {
  productId?: string; // 특정 상품의 리뷰 조회
  userId?: string; // 특정 사용자가 작성한 리뷰 조회
  minRating?: number; // 최소 별점 필터링
}
