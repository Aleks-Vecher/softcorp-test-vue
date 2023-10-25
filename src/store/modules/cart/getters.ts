import { priceCalculation } from './../../../utils/index';
import type { IGood } from '@/types';
import type { ICartItemsState } from './state';

export type INewCartItems = Map<string, IGood[]>;
type CartItemsGetters = {
  cartItems: (state: ICartItemsState, getters: any) => IGood[];
  summaryPrice: (state: ICartItemsState, getters: any) => number;
};

export const cartGetters: CartItemsGetters = {
  cartItems: (state: ICartItemsState, getters) =>
    state.cartItems.map((item) => ({ ...item, C: priceCalculation(item.C, getters.currency) })),
  summaryPrice: (state: ICartItemsState, getters) =>
    +state.cartItems.reduce((acc, item) => acc + priceCalculation(item.C, getters.currency) * (item.amount ?? 1), 0).toFixed(2),
};
