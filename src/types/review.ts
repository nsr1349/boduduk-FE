import type { BaseEntity } from './common';

export interface Review extends BaseEntity {
  productId: string;
  userId: string;
  orderId: string;
  orderItemId: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  comment: string;
  reviewerName: string;
}

export interface CreateReviewRequest {
  productId: string;
  orderId: string;
  orderItemId: string;
  rating: Review['rating'];
  comment: string;
}
