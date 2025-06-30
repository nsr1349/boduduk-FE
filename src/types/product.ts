// product.ts
import type { BaseEntity, PaginationParams } from './common';

export interface Product extends BaseEntity {
  title: string;
  price: number;
  stock: number;
  description: string;
  mainImageUrl: string;
  detailImageUrls: string[];
  manufacturer: string;
  genres: string[];
  recommendedAge: string;
  playTimeMinutes: string;
  minPlayers: number;
  maxPlayers: number;
  status: 'active' | 'inactive' | 'sold_out';
  averageRating?: number;
  totalReviews?: number;
}

export interface ProductSearchParams extends PaginationParams {
  query?: string;
  genres?: string[];
  manufacturer?: string;
  recommendedAge?: string;
  minPrice?: number;
  maxPrice?: number;
}
