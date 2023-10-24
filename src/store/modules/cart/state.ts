import type { IGood } from '@/types';

export interface ICartItemsState {
  cartItems: IGood[];
}

export function generateInitialCartState(): ICartItemsState {
  return {
    cartItems: [],
  };
}
