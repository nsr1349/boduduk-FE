import type { BaseEntity } from './common';

export interface User extends BaseEntity {
  email: string;
  username: string;
  profileImage?: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  isActive: boolean;
  totalOrders: number;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
