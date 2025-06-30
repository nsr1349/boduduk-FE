import type { BaseEntity, PaginationParams } from './common';

export interface ProductListItem extends BaseEntity {
  title: string;
  price: number;
  image: string;
  manufacturer: string;
  genres: string[];
  averageRating?: number;
  totalReviews?: number;
}

export interface ProductDetail extends BaseEntity {
  title: string;
  price: number;
  stock: number;
  description: string;
  image: string;
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
}
