import { priceCalculation } from './../../../utils/index';
import type { IGood } from '@/types';
import type { ICartItemsState } from './state';

type INewCartItems = { [index: string]: IGood[] };
type CartItemsGetters = {
  cartItems: (state: ICartItemsState, getters: any) => INewCartItems;
  summaryPrice: (state: ICartItemsState, getters: any) => number;
};

export const cartGetters: CartItemsGetters = {
  cartItems: (state: ICartItemsState, getters) => {
    let newCartItems: INewCartItems = {};
    state.cartItems.forEach((item) => {
      if (newCartItems[item.id]) {
        newCartItems[item.id] = [...newCartItems[item.id], { ...item, C: priceCalculation(item.C, getters.currency) }];
      } else {
        newCartItems[item.id] = [{ ...item, C: priceCalculation(item.C, getters.currency) }];
      }
    });
    return newCartItems;
  },
  summaryPrice: (state: ICartItemsState, getters) =>
    +state.cartItems.reduce((acc, item) => acc + priceCalculation(item.C, getters.currency), 0).toFixed(2),
};
