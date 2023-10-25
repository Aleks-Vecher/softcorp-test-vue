import type { IGood } from '@/types';
import type { MutationTree } from 'vuex';
import type { ICartItemsState } from './state';
import { CART_ACTION_TYPE } from './actions';

export type CartMutation = {
  [CART_ACTION_TYPE.ADD_CART_ITEM](state: ICartItemsState, payload: IGood): void;
  [CART_ACTION_TYPE.DELETE_CART_ITEM](state: ICartItemsState, payload: string): void;
};

export const cartMuttations: MutationTree<ICartItemsState> & CartMutation = {
  [CART_ACTION_TYPE.ADD_CART_ITEM](state, payload) {
    let newCartItemsArr: IGood[] = [];
    const index = state.cartItems.findIndex((item) => item.id === payload.id);
    if (index > -1) {
      newCartItemsArr = state.cartItems.map((item) => {
        if (item.id === payload.id && item.amount) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    } else {
      newCartItemsArr = [...state.cartItems, { ...payload, amount: 1 }];
    }
    state.cartItems = newCartItemsArr;
  },
  [CART_ACTION_TYPE.DELETE_CART_ITEM](state, id) {
    const index = state.cartItems.findIndex((item) => item.id == id);
    let item = state.cartItems[index];
    if (item.amount) {
      item.amount === 1
        ? (state.cartItems = state.cartItems.slice(0, index).concat(state.cartItems.slice(index + 1)))
        : (state.cartItems[index]['amount'] = item.amount - 1);
    }
  },
};
